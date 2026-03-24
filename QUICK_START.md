# Quick Start Guide

## For Developers

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Build for Production
```bash
npm run build
```

Files will be in the `dist` folder.

## For Deployment to InterServer

### Simple 3-Step Process:

**Step 1: Build**
```bash
npm run build
```

**Step 2: Upload**
- Log into cPanel
- Open File Manager
- Go to `public_html`
- Upload ALL files from the `dist` folder

**Step 3: Add .htaccess**
- Copy the `.htaccess` file to your `public_html` directory
- Or create a new file named `.htaccess` and paste the content from the `.htaccess` file in this project

Done! Visit your domain.

## Project Structure

```
├── dist/                    # Production build (upload this to hosting)
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx     # Navigation
│   │   └── Footer.tsx     # Footer
│   ├── pages/             # All page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Partners.tsx
│   │   ├── Standards.tsx
│   │   └── Contact.tsx
│   └── App.tsx            # Main app
├── public/                # Images (automatically copied to dist)
└── index.html             # HTML template

```

## Key Features

- **6 Pages**: Home, About, Services, Partners, Standards, Contact
- **Fully Responsive**: Works on all devices
- **Modern Design**: Clean, professional corporate style
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized assets and code splitting

## Making Changes

1. Edit files in `src/` folder
2. Save changes (dev server auto-reloads)
3. When ready, run `npm run build`
4. Upload new `dist` files to hosting

## Common Tasks

### Update Content
Edit the respective page file in `src/pages/`

### Change Colors
Find and replace Tailwind color classes:
- `emerald-600` → your color
- `emerald-700` → your darker shade

### Add/Remove Pages
1. Create/delete file in `src/pages/`
2. Update `src/App.tsx` to include the new route
3. Update `src/components/Header.tsx` navigation
4. Update `src/components/Footer.tsx` if needed

### Update Contact Info
Edit:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

### Replace Images
Put new images in `public/` folder and update the image paths in the page components.

## Need Help?

See full documentation:
- `README.md` - Complete project documentation
- `DEPLOYMENT.md` - Detailed deployment guide

## Support

Contact: info@acml-egypt.com
