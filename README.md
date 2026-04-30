# ACML - ACML Integrated Information Solutions & Systems

Modern, professional corporate website for ACML - Your gateway to the information age.

## Overview

This is a fully responsive, production-ready static website built with React, TypeScript, and Tailwind CSS. The website showcases ACML's comprehensive library and information technology solutions.

## Features

- **6 Main Pages**: Home, About Us, Services, Partners, Standards & Regulations, Contact
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Design**: Clean, professional B2B corporate aesthetic
- **Smooth Animations**: Lightweight CSS animations for enhanced UX
- **SEO Optimized**: Semantic HTML with proper meta tags
- **Fast Loading**: Optimized images and code splitting
- **Production Ready**: Clean, commented code ready for deployment

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite (Build Tool)
- Lucide React (Icons)

## Pages

### 1. Home
- Hero section with compelling messaging
- Statistics showcase
- Core services overview
- Image gallery
- Call-to-action sections

### 2. About Us
- Company history and mission
- Core values
- Timeline of milestones
- Team expertise highlights

### 3. Services
- Comprehensive service descriptions
- Books & Periodicals
- Databases & Full-Text Access
- Electronic Journals
- Library Automation Systems (LIBRARIAN software)
- Library Furniture
- Restoration Materials
- CD-ROMs & Digital Media
- ICT Consultancy Services

### 4. Partners & Publishers
- International academic publishers
- Professional societies (IEEE, ACM, ASTM, etc.)
- Database providers (ProQuest, EBSCO, etc.)
- Standards organizations (ISO, IEC, ANSI, etc.)
- Technology solution providers

### 5. Industry Standards & Regulations
- International standards (ISO, IEC)
- National standards (ANSI, BSI, DIN)
- Industry & professional societies
- Government & military standards
- Trade associations
- Coverage across 18+ industry sectors

### 6. Contact
- Contact form with validation
- Location information
- Business hours
- Multiple contact methods
- Showroom information

## Development

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with all static files ready for deployment.

## Deployment to Shared Hosting (InterServer)

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Upload Files
1. Connect to your InterServer hosting via FTP (FileZilla, Cyberduck, or cPanel File Manager)
2. Navigate to your public_html directory (or your domain's root directory)
3. Upload ALL contents from the `dist` folder to your hosting
   - Upload: `index.html`
   - Upload: `assets` folder (contains CSS and JS files)
   - Upload: All image files (001.jpg, 002.jpg, etc.)

### Step 3: Configure (if needed)
- Ensure `.htaccess` file exists for proper routing (see below)
- Make sure file permissions are set correctly (644 for files, 755 for folders)

### .htaccess Configuration
Create a `.htaccess` file in your public_html directory with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: Verify
Visit your domain and test all pages and functionality.

## File Structure

```
project/
├── public/              # Static assets (images)
│   ├── 001.jpg         # Store front image
│   ├── 002.jpg         # E-Books banner
│   ├── 003.jpg         # Library books
│   ├── 004.jpg         # Restoration labs
│   └── 005.jpg         # Mission statement
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.tsx  # Navigation header
│   │   └── Footer.tsx  # Site footer
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Partners.tsx
│   │   ├── Standards.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── dist/               # Production build (created by npm run build)
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.ts      # Build configuration
```

## Customization

### Colors
The website uses an emerald green color scheme suitable for professional B2B companies. To change colors, update the Tailwind classes:
- Primary: `emerald-600`, `emerald-700`
- Accents: `teal-700`, `blue-50`

### Content
Edit the page components in `src/pages/` to update content, services, or partner information.

### Images
Replace images in the `public/` folder with your own. Make sure to use the same filenames or update the image paths in the components.

### Contact Information
Update contact details in `src/components/Footer.tsx` and `src/pages/Contact.tsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images
- Code splitting
- Lazy loading
- Minified CSS and JavaScript
- Gzip compression ready

## SEO

- Semantic HTML5
- Meta tags for search engines
- Open Graph tags for social media
- Structured content hierarchy
- Fast loading times

## Support

For questions or issues:
- Email: info@acml-egypt.com
- Visit: Alexandria, Egypt

## License

© 2024 ACML - Alex Centre for Multimedia & Libraries. All rights reserved.

---

**Built with modern web technologies for optimal performance and user experience.**
