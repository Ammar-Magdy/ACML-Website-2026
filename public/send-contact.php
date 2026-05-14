<?php
header('Content-Type: application/json; charset=utf-8');

// PHPMailer must be placed on the server as:
// public_html/
// ├── index.html
// ├── assets/
// ├── send-contact.php
// └── phpmailer/
//     └── src/
//         ├── Exception.php
//         ├── PHPMailer.php
//         └── SMTP.php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'POST required.']);
    exit;
}

require_once __DIR__ . '/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$fullName = trim($_POST['fullName'] ?? '');
$jobTitle = trim($_POST['jobTitle'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$organization = trim($_POST['organization'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');


function cleanText($value) {
    return trim(strip_tags($value));
}

function cleanHeader($value) {
    return str_replace(["\r", "\n"], '', $value);
}

$fullName = cleanText($fullName);
$jobTitle = cleanText($jobTitle);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$phone = cleanText($phone);
$organization = cleanText($organization);
$subject = cleanHeader($subject);
$message = cleanText($message);


if (
    $fullName === '' ||
    $jobTitle === '' ||
    $email === '' ||
    $phone === '' ||
    $organization === '' ||
    $subject === '' ||
    $message === ''
) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = 'mail.acml-egypt.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'website@acml-egypt.com';
    // Change this password on the server if it was shared anywhere.
    $mail->Password = 'Acml@2023';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // If port 587 TLS fails, try:
    // $mail->Port = 465;
    // $mail->SMTPSecure = 'ssl';

    $mail->setFrom('website@acml-egypt.com', 'ACML Website');
    $mail->addAddress('info@acml-egypt.com');
    $mail->addReplyTo($email, $fullName);

    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body =
        "Full Name: {$fullName}\n" .
        "Job Title: {$jobTitle}\n" .
        "Email: {$email}\n" .
        "Phone: {$phone}\n" .
        "Organization: {$organization}\n" .
        "Subject: {$subject}\n" .
        "Message:\n{$message}\n";

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} catch (Exception $e) {
    error_log('Contact form error: ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}

exit;
