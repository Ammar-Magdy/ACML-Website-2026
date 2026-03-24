# Deployment Checklist for ACML Website

Use this checklist to ensure a smooth deployment to your InterServer hosting.

## Pre-Deployment

- [ ] Project has been built successfully (`npm run build` completed)
- [ ] Reviewed the `dist` folder contents
- [ ] Have InterServer cPanel login credentials
- [ ] Domain is pointing to InterServer nameservers
- [ ] Backed up any existing website files

## File Preparation

- [ ] Confirmed `dist` folder contains:
  - [ ] index.html
  - [ ] assets folder (CSS and JS files)
  - [ ] 001.jpg through 005.jpg
- [ ] `.htaccess` file is ready to upload
- [ ] All files are unzipped and ready

## Hosting Setup

- [ ] Logged into InterServer cPanel
- [ ] Located File Manager
- [ ] Navigated to `public_html` (or domain-specific folder)
- [ ] Created backup of old files (if any)
- [ ] Cleared out old website files (if replacing existing site)

## File Upload

- [ ] Uploaded `index.html` from `dist` folder
- [ ] Uploaded entire `assets` folder from `dist` folder
- [ ] Uploaded all image files (001.jpg - 005.jpg) from `dist` folder
- [ ] Uploaded `.htaccess` file to `public_html`
- [ ] Verified all files uploaded successfully
- [ ] Checked file sizes match local files

## Permissions

- [ ] Set folder permissions to 755
  - [ ] public_html
  - [ ] assets folder
- [ ] Set file permissions to 644
  - [ ] index.html
  - [ ] .htaccess
  - [ ] All CSS/JS files in assets
  - [ ] All image files

## Testing - Desktop

- [ ] Website loads on your domain
- [ ] Home page displays correctly
- [ ] Navigation menu works
- [ ] Clicked through all pages:
  - [ ] Home
  - [ ] About Us
  - [ ] Services
  - [ ] Partners
  - [ ] Standards & Regulations
  - [ ] Contact
- [ ] All images display correctly
- [ ] No broken links
- [ ] Contact form displays properly
- [ ] Footer displays correctly
- [ ] Smooth scrolling works

## Testing - Mobile

- [ ] Opened website on mobile device
- [ ] Mobile menu (hamburger) works
- [ ] All pages are responsive
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Forms work on mobile

## Browser Testing

- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari (if available)
- [ ] Tested in Edge
- [ ] No console errors (F12 to check)

## Performance Check

- [ ] Website loads quickly (under 3 seconds)
- [ ] Images load properly
- [ ] No 404 errors in browser console
- [ ] Animations are smooth
- [ ] No layout shifts on page load

## SEO Setup

- [ ] Page title appears correctly in browser tab
- [ ] Meta description is present (view page source)
- [ ] Open Graph tags are present (for social sharing)
- [ ] No "index of" directory listing visible

## SSL/HTTPS (Recommended)

- [ ] Accessed cPanel SSL/TLS section
- [ ] Ran AutoSSL or installed Let's Encrypt certificate
- [ ] Website loads with https://
- [ ] HTTP redirects to HTTPS
- [ ] No mixed content warnings
- [ ] Updated .htaccess for HTTPS redirect (if needed)

## Final Verification

- [ ] Cleared browser cache and tested again
- [ ] Tested from different locations/networks
- [ ] Tested on different devices
- [ ] All contact information is correct
- [ ] All images are professional and appropriate
- [ ] No placeholder text remains
- [ ] Company name and branding is correct

## Post-Deployment

- [ ] Bookmarked cPanel login for future updates
- [ ] Saved FTP credentials securely
- [ ] Documented any custom settings
- [ ] Notified team/stakeholders that site is live
- [ ] Set up website monitoring (optional)
- [ ] Submitted sitemap to Google Search Console (optional)

## Common Issues & Solutions

### Issue: 404 Error on page navigation
- [ ] Verified .htaccess file is uploaded
- [ ] Checked .htaccess syntax
- [ ] Contacted host to enable mod_rewrite

### Issue: Images not showing
- [ ] Verified all image files uploaded
- [ ] Checked file names match (case-sensitive)
- [ ] Verified file permissions (644)

### Issue: Blank page
- [ ] Checked browser console for errors
- [ ] Verified assets folder uploaded completely
- [ ] Cleared browser cache

### Issue: Styles not applied
- [ ] Verified assets/CSS files uploaded
- [ ] Checked file permissions
- [ ] Cleared browser cache
- [ ] Hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Optimization (Optional)

- [ ] Enabled Cloudflare (free CDN)
- [ ] Compressed images further if needed
- [ ] Tested website speed (GTmetrix, PageSpeed Insights)
- [ ] Set up website backups
- [ ] Configured email addresses (info@acml-egypt.com)

## Documentation

- [ ] Kept copy of all source files
- [ ] Saved deployment credentials securely
- [ ] Documented any custom configurations
- [ ] Noted InterServer support contact info

## Maintenance Schedule

- [ ] Planned first content update
- [ ] Set reminder for SSL renewal check (90 days)
- [ ] Scheduled regular backups
- [ ] Set up monitoring for uptime

---

## Emergency Contacts

**InterServer Support**: Available 24/7 via:
- Live Chat in cPanel
- Support tickets
- Phone support

**Website Files Location**:
- Source: Your computer's project folder
- Live: public_html on InterServer
- Backup: [Document your backup location]

---

## Congratulations!

Once all items are checked, your ACML website is successfully deployed and live!

**Live URL**: ________________________

**Deployment Date**: ________________________

**Deployed By**: ________________________

---

Keep this checklist for future reference and for deploying updates.
