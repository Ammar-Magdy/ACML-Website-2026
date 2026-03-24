# Deployment Guide for InterServer Shared Hosting

This guide will walk you through deploying your ACML website to InterServer shared hosting.

## Prerequisites

- InterServer hosting account with cPanel access
- FTP credentials (or use cPanel File Manager)
- Your domain configured to point to InterServer

## Method 1: Using cPanel File Manager (Recommended for Beginners)

### Step 1: Build Your Website

On your local computer, open a terminal in the project directory and run:

```bash
npm run build
```

This creates a `dist` folder with all your website files.

### Step 2: Prepare Files for Upload

1. Open the `dist` folder on your computer
2. You should see:
   - `index.html`
   - `assets` folder (contains CSS and JS)
   - Image files (001.jpg, 002.jpg, etc.)

### Step 3: Access cPanel

1. Log into your InterServer account
2. Access cPanel
3. Find and click "File Manager"

### Step 4: Navigate to Your Website Directory

1. In File Manager, go to `public_html` (or your specific domain folder)
2. If there are old files, you may want to:
   - Create a backup folder and move old files there
   - Or delete old files (be careful!)

### Step 5: Upload Files

1. Click the "Upload" button in File Manager
2. Upload ALL files from your `dist` folder:
   - Upload `index.html`
   - Upload the entire `assets` folder
   - Upload all image files (001.jpg through 005.jpg)

### Step 6: Create .htaccess File

1. In File Manager, click "+ File" to create a new file
2. Name it `.htaccess` (including the dot at the beginning)
3. Right-click the file and choose "Edit"
4. Paste this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

5. Save the file

### Step 7: Set Permissions

1. Select all uploaded files and folders
2. Right-click and choose "Permissions"
3. Set folders to: 755
4. Set files to: 644

### Step 8: Test Your Website

1. Open your domain in a web browser
2. Test all pages:
   - Home
   - About Us
   - Services
   - Partners
   - Standards & Regulations
   - Contact
3. Test on mobile devices
4. Test the contact form

## Method 2: Using FTP (FileZilla)

### Step 1: Build Your Website

```bash
npm run build
```

### Step 2: Install FileZilla

Download and install FileZilla from: https://filezilla-project.org/

### Step 3: Connect to Your Server

1. Open FileZilla
2. Enter your FTP credentials:
   - Host: ftp.yourdomain.com (or IP address from InterServer)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
3. Click "Quickconnect"

### Step 4: Navigate and Upload

1. Local site (left panel): Navigate to your `dist` folder
2. Remote site (right panel): Navigate to `public_html`
3. Select all files in the dist folder
4. Drag and drop to the right panel to upload

### Step 5: Create .htaccess

1. Right-click in the remote site panel
2. Create new file: `.htaccess`
3. Right-click the file and choose "View/Edit"
4. Paste the .htaccess content from Method 1, Step 6
5. Save and close

### Step 6: Test

Visit your website and test all functionality.

## Method 3: Using Command Line (Advanced)

### Step 1: Build

```bash
npm run build
```

### Step 2: Upload via SCP/SFTP

```bash
scp -r dist/* username@yourserver.com:public_html/
```

Or using rsync:

```bash
rsync -avz dist/ username@yourserver.com:public_html/
```

## Troubleshooting

### Problem: Page shows "404 Not Found" when clicking links

**Solution**: Make sure the `.htaccess` file is created and has the correct rewrite rules.

### Problem: Images don't load

**Solution**:
1. Verify all image files are uploaded
2. Check file names match exactly (case-sensitive)
3. Verify file permissions (should be 644)

### Problem: Website shows blank page

**Solution**:
1. Check browser console for errors (F12)
2. Verify all files in the `assets` folder are uploaded
3. Clear browser cache
4. Check file permissions

### Problem: Styles are not applied

**Solution**:
1. Make sure the `assets` folder is uploaded completely
2. Check that CSS files have the correct permissions (644)
3. Clear browser cache

### Problem: "Internal Server Error"

**Solution**:
1. Check `.htaccess` syntax
2. Contact InterServer support to verify mod_rewrite is enabled
3. Check server error logs in cPanel

## Updating Your Website

When you make changes:

1. Make changes to your code locally
2. Run `npm run build`
3. Upload only the changed files from the `dist` folder
4. Or upload everything to overwrite old files

## Performance Tips

1. **Enable Gzip Compression**: The .htaccess file includes this
2. **Browser Caching**: The .htaccess file includes this
3. **CDN**: Consider using Cloudflare (free) for additional speed
4. **Image Optimization**: Images are already optimized, but you can compress further if needed

## Security

1. Keep the `.htaccess` file to prevent directory listing
2. Regularly update your cPanel password
3. Use strong FTP passwords
4. Enable SSL/HTTPS (free with Let's Encrypt through cPanel)

## SSL/HTTPS Setup

1. In cPanel, find "SSL/TLS Status"
2. Select your domain
3. Click "Run AutoSSL"
4. Wait for certificate to install
5. Update .htaccess to force HTTPS:

Add this at the top of .htaccess:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Support

If you encounter issues:

1. Check InterServer's knowledge base
2. Contact InterServer support (they're very helpful!)
3. Check browser console for specific error messages
4. Verify all files are uploaded correctly

## Checklist

Before going live, verify:

- [ ] All files uploaded from `dist` folder
- [ ] `.htaccess` file created with correct content
- [ ] File permissions set (755 for folders, 644 for files)
- [ ] All images display correctly
- [ ] All pages load and navigate properly
- [ ] Contact form works
- [ ] Mobile responsive design works
- [ ] SSL certificate installed and HTTPS working
- [ ] Website loads fast
- [ ] No console errors in browser

---

**Congratulations! Your ACML website is now live!**
