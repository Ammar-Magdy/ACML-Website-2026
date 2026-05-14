<?php
/**
 * ACML Contact Form Handler
 * 
 * This script handles contact form submissions from the React frontend.
 * It validates input, sanitizes data, and sends emails via PHPMailer.
 * 
 * Make sure to:
 * 1. Upload this file to public_html/ on your cPanel server
 * 2. Create a phpmailer/ folder in public_html/ and upload PHPMailer source files
 * 3. Set the SMTP_PASSWORD constant below with your email password
 */

header('Content-Type: application/json; charset=utf-8');

// Set UTF-8
ini_set('default_charset', 'UTF-8');

// SMTP Configuration
define('SMTP_HOST', 'mail.acml-egypt.com');
define('SMTP_PORT', 587);  // TLS port
define('SMTP_USER', 'website@acml-egypt.com');
define('SMTP_PASSWORD', 'Acml@2023'); // <- SET YOUR SMTP PASSWORD HERE
define('SMTP_SECURE', 'tls'); // Use 'tls' for port 587 or 'ssl' for port 465

// Alternative configuration for port 465 with SSL (uncomment if port 587 fails):
// define('SMTP_PORT', 465);
// define('SMTP_SECURE', 'ssl');

// Email configuration
define('FROM_EMAIL', 'website@acml-egypt.com');
define('TO_EMAIL', 'info@acml-egypt.com');
define('REPLY_TO_FIELD', 'email'); // Field name that contains the reply-to email

// Require PHPMailer classes
require_once __DIR__ . '/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/**
 * Send JSON response
 */
function sendResponse($success, $message = '') {
    echo json_encode([
        'success' => $success,
        'message' => $message
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

/**
 * Validate email address
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Validate phone number (10-15 digits)
 */
function isValidPhone($phone) {
    return preg_match('/^\d{10,15}$/', $phone) === 1;
}

/**
 * Sanitize input string
 */
function sanitizeInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

/**
 * Validate required fields
 */
function validateRequired($data, $fields) {
    foreach ($fields as $field) {
        if (!isset($data[$field]) || empty(trim($data[$field]))) {
            return false;
        }
    }
    return true;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Invalid request method. POST required.');
}

// Get POST data
$fullName = isset($_POST['fullName']) ? sanitizeInput($_POST['fullName']) : '';
$jobTitle = isset($_POST['jobTitle']) ? sanitizeInput($_POST['jobTitle']) : '';
$email = isset($_POST['email']) ? sanitizeInput($_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitizeInput($_POST['phone']) : '';
$phone = preg_replace('/\D/', '', $phone);
$organization = isset($_POST['organization']) ? sanitizeInput($_POST['organization']) : '';
$subject = isset($_POST['subject']) ? sanitizeInput($_POST['subject']) : '';
$message = isset($_POST['message']) ? sanitizeInput($_POST['message']) : '';

// Validate required fields
$requiredFields = ['fullName', 'jobTitle', 'email', 'phone', 'organization', 'subject', 'message'];
if (!validateRequired(
    [
        'fullName' => $fullName,
        'jobTitle' => $jobTitle,
        'email' => $email,
        'phone' => $phone,
        'organization' => $organization,
        'subject' => $subject,
        'message' => $message
    ],
    $requiredFields
)) {
    sendResponse(false, 'All fields are required.');
}

// Validate email address
if (!isValidEmail($email)) {
    sendResponse(false, 'Invalid email address.');
}

// Validate phone number
if (!isValidPhone($phone)) {
    sendResponse(false, 'Invalid phone number. Please enter 10-15 digits.');
}

// Check SMTP password is set
if (empty(SMTP_PASSWORD)) {
    sendResponse(false, 'Server configuration error. Please contact the administrator.');
}

// Create PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port = SMTP_PORT;
    $mail->CharSet = 'UTF-8';

    // Set timeout for SMTP connection
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Recipients
    $mail->setFrom(FROM_EMAIL, 'ACML Website');
    $mail->addAddress(TO_EMAIL, 'ACML Info');
    $mail->addReplyTo($email, $fullName);

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'Contact Form Submission: ' . $subject;

    // Build HTML email body
    $emailBody = <<<HTML
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .header { background-color: #059669; color: white; padding: 15px; border-radius: 5px 5px 0 0; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #059669; margin-bottom: 5px; }
            .field-value { padding: 10px; background-color: #f5f5f5; border-left: 3px solid #059669; }
            .message { margin-top: 20px; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #059669; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">Full Name:</div>
                    <div class="field-value">{$fullName}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Job Title:</div>
                    <div class="field-value">{$jobTitle}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Email:</div>
                    <div class="field-value"><a href="mailto:{$email}">{$email}</a></div>
                </div>
                
                <div class="field">
                    <div class="field-label">Phone:</div>
                    <div class="field-value">{$phone}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Organization:</div>
                    <div class="field-value">{$organization}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Subject:</div>
                    <div class="field-value">{$subject}</div>
                </div>
                
                <div class="message">
                    <div class="field-label">Message:</div>
                    <div style="white-space: pre-wrap;">{$message}</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    HTML;

    $mail->Body = $emailBody;
    $mail->AltBody = strip_tags($message);

    // Send email
    $mail->send();
    sendResponse(true, 'Message sent successfully. Thank you for contacting us!');

} catch (Exception $e) {
    // Log the error (optional - for debugging)
    // error_log('PHPMailer Error: ' . $mail->ErrorInfo);
    
    sendResponse(false, 'Failed to send message. Please try again later or contact us via phone.');
}
?>
