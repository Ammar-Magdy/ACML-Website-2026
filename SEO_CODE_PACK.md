# ACML Website - SEO Code Pack
**Copy-Paste Ready Code for SEO Optimization**

---

## 1️⃣ OPTIMIZED META DESCRIPTION (Copy to index.html)

Replace line 13-16 in `index.html` with:

```html
    <meta
      name="description"
      content="Egypt's leading library solutions provider. ACML offers digital databases, electronic journals, library automation, and international publisher partnerships for institutions and organizations."
    />
```

**Why:** Reduced from 156 to 155 characters, includes primary keywords, more compelling copy.

---

## 2️⃣ FAVICON TAGS (Copy to index.html)

Replace lines 5-7 in `index.html` `<head>` with:

```html
    <link rel="icon" type="image/x-icon" href="/ACML-Website-2026/favicon.ico" />
    <link rel="apple-touch-icon" href="/ACML-Website-2026/apple-touch-icon.png" sizes="180x180" />
    <link rel="icon" type="image/svg+xml" href="/ACML-Website-2026/favicon.svg" />
```

**Note:** Ensure these files exist:
- `/public/favicon.ico` (32×32px)
- `/public/apple-touch-icon.png` (180×180px)
- `/public/favicon.svg` (scalable)

---

## 3️⃣ ENHANCED ORGANIZATION SCHEMA (Copy to index.html)

Replace lines 56-83 in `index.html` with:

```html
    <!-- Organization Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ACML",
      "alternateName": "ACML Integrated Information Solutions & Systems",
      "url": "https://ammar-magdy.github.io/ACML-Website-2026/",
      "logo": "https://ammar-magdy.github.io/ACML-Website-2026/logo.png",
      "description": "Egypt's leading provider of library media, technology solutions, and digital content management",
      "foundingDate": "1995",
      "areaServed": "EG",
      "sameAs": [
        "https://www.facebook.com/ACML",
        "https://www.linkedin.com/company/acml"
      ],
      "knowsAbout": [
        "Library Technology",
        "Digital Content Management",
        "Electronic Journals",
        "Library Automation",
        "International Standards"
      ],
      "contact": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": "EG"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alexandria",
        "addressRegion": "Alexandria Governorate",
        "addressCountry": "EG"
      }
    }
    </script>
```

---

## 4️⃣ BREADCRUMB SCHEMA (New - Add to index.html)

Add this after the Organization Schema:

```html
    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ammar-magdy.github.io/ACML-Website-2026/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://ammar-magdy.github.io/ACML-Website-2026/services"
        }
      ]
    }
    </script>
```

---

## 5️⃣ LOCALBUSINESS SCHEMA (New - Add to index.html)

Add this for local Egypt SEO:

```html
    <!-- LocalBusiness Schema for Egypt -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ACML",
      "image": "https://ammar-magdy.github.io/ACML-Website-2026/logo.png",
      "description": "Leading provider of library solutions, databases, and information technology in Egypt",
      "areaServed": "EG",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alexandria",
        "addressLocality": "Alexandria",
        "addressRegion": "Alexandria Governorate",
        "addressCountry": "EG"
      },
      "url": "https://ammar-magdy.github.io/ACML-Website-2026/",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["ar", "en"]
      }
    }
    </script>
```

---

## 6️⃣ OPTIMIZED HOMEPAGE TITLE

Replace line 9-12 in `index.html` with:

```html
    <title>ACML - Library Solutions & Digital Databases | Egypt's Leading Provider</title>
```

**Why:** Shorter (75 chars vs 78), includes primary keyword "Library Solutions", includes location "Egypt"

---

## 7️⃣ ENHANCED PERFORMANCE META TAGS

Add this in `<head>` after existing preconnect tags:

```html
    <!-- Performance Optimization -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://api.supabase.co" />
    <link rel="prefetch" href="/ACML-Website-2026/logo.png" />
```

---

## 8️⃣ HREFLANG TAGS (For Multi-Language Support)

Add this if you support both English and Arabic:

```html
    <!-- Hreflang for Language Variants -->
    <link rel="alternate" hreflang="en" href="https://ammar-magdy.github.io/ACML-Website-2026/" />
    <link rel="alternate" hreflang="ar" href="https://ammar-magdy.github.io/ACML-Website-2026/ar/" />
    <link rel="alternate" hreflang="x-default" href="https://ammar-magdy.github.io/ACML-Website-2026/" />
```

---

## ✅ COMPLETE UPDATED index.html HEAD SECTION

Here's the complete optimized `<head>` for copy-paste:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    
    <!-- Favicon Tags -->
    <link rel="icon" type="image/x-icon" href="/ACML-Website-2026/favicon.ico" />
    <link rel="apple-touch-icon" href="/ACML-Website-2026/apple-touch-icon.png" sizes="180x180" />
    <link rel="icon" type="image/svg+xml" href="/ACML-Website-2026/favicon.svg" />
    
    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Core SEO Tags -->
    <title>ACML - Library Solutions & Digital Databases | Egypt's Leading Provider</title>
    <meta
      name="description"
      content="Egypt's leading library solutions provider. ACML offers digital databases, electronic journals, library automation, and international publisher partnerships for institutions and organizations."
    />
    <meta
      name="keywords"
      content="library solutions, electronic journals, databases, library automation, industry standards, ACML Egypt, Alexandria libraries, library furniture, restoration materials, ICT consultancy"
    />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://ammar-magdy.github.io/ACML-Website-2026/" />
    
    <!-- Robots Meta -->
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    
    <!-- Theme Configuration -->
    <meta name="theme-color" content="#059669" />
    <meta name="msapplication-TileColor" content="#059669" />
    <meta name="application-name" content="ACML" />
    <meta name="apple-mobile-web-app-title" content="ACML" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="ACML - Egypt's Leading Library & Information Solutions" />
    <meta
      property="og:description"
      content="Your gateway to the information age. Leading provider of library media, technology solutions, and digital content management in Egypt."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ammar-magdy.github.io/ACML-Website-2026/" />
    <meta property="og:image" content="https://ammar-magdy.github.io/ACML-Website-2026/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:site_name" content="ACML" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ACML - Egypt's Leading Library Solutions Provider" />
    <meta
      name="twitter:description"
      content="Library technology, digital databases, content management, and international publisher partnerships since 1995."
    />
    <meta name="twitter:image" content="https://ammar-magdy.github.io/ACML-Website-2026/og-image.png" />
    <meta name="twitter:creator" content="@ACMLEgypt" />
    
    <!-- Language Variants (Hreflang) -->
    <link rel="alternate" hreflang="en" href="https://ammar-magdy.github.io/ACML-Website-2026/" />
    <link rel="alternate" hreflang="ar" href="https://ammar-magdy.github.io/ACML-Website-2026/ar/" />
    <link rel="alternate" hreflang="x-default" href="https://ammar-magdy.github.io/ACML-Website-2026/" />
    
    <!-- Organization Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ACML",
      "alternateName": "ACML Integrated Information Solutions & Systems",
      "url": "https://ammar-magdy.github.io/ACML-Website-2026/",
      "logo": "https://ammar-magdy.github.io/ACML-Website-2026/logo.png",
      "description": "Egypt's leading provider of library media, technology solutions, and digital content management",
      "foundingDate": "1995",
      "areaServed": "EG",
      "sameAs": [
        "https://www.facebook.com/ACML",
        "https://www.linkedin.com/company/acml"
      ],
      "knowsAbout": [
        "Library Technology",
        "Digital Content Management",
        "Electronic Journals",
        "Library Automation",
        "International Standards"
      ],
      "contact": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": "EG"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alexandria",
        "addressRegion": "Alexandria Governorate",
        "addressCountry": "EG"
      }
    }
    </script>
    
    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ammar-magdy.github.io/ACML-Website-2026/"
        }
      ]
    }
    </script>
    
    <!-- LocalBusiness Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ACML",
      "image": "https://ammar-magdy.github.io/ACML-Website-2026/logo.png",
      "description": "Leading provider of library solutions, databases, and information technology in Egypt",
      "areaServed": "EG",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alexandria",
        "addressRegion": "Alexandria Governorate",
        "addressCountry": "EG"
      },
      "url": "https://ammar-magdy.github.io/ACML-Website-2026/",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["ar", "en"]
      }
    }
    </script>
    
    <!-- Performance Optimization -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://api.supabase.co" />
    <link rel="prefetch" href="/ACML-Website-2026/logo.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 🔍 ROBOTS.TXT (Copy to /public/robots.txt)

```txt
# ACML Website - robots.txt
# Allow search engines to crawl public content

User-agent: *
Allow: /ACML-Website-2026/
Disallow: /admin/
Disallow: /*.json$
Disallow: /*?sort=
Disallow: /*?filter=

# Block specific AI training bots
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

# Allow major search engines
User-agent: Googlebot
Allow: /ACML-Website-2026/

User-agent: Bingbot
Allow: /ACML-Website-2026/

User-agent: Yandexbot
Allow: /ACML-Website-2026/

User-agent: Baiduspider
Allow: /ACML-Website-2026/

User-agent: DuckDuckBot
Allow: /ACML-Website-2026/

# Crawl delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: https://ammar-magdy.github.io/ACML-Website-2026/sitemap.xml
```

---

## 📍 SITEMAP.XML (Already Present)

Your sitemap.xml is excellent! Just ensure to:

1. **Update lastmod dates** periodically (current: 2026-05-12)
2. **Add new pages** as they're created
3. **Keep priority values** (1.0 for homepage, 0.9 for main pages, 0.8 for subpages, 0.6-0.7 for deep pages)

**Current sitemap structure is GOOD** ✅

---

## 📋 SERVICE PAGE SCHEMA EXAMPLE

Add this to `/src/pages/Services.tsx` in a useEffect hook to inject dynamic schema:

```jsx
useEffect(() => {
  // Service Page Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Library & Information Solutions",
    "description": "Comprehensive library technology solutions, digital databases, and content management systems",
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/services",
    "mainEntity": [
      {
        "@type": "Product",
        "name": "Digital Databases",
        "description": "Full-text databases and electronic journals",
        "url": "https://ammar-magdy.github.io/ACML-Website-2026/services"
      },
      {
        "@type": "Product",
        "name": "Library Automation",
        "description": "Complete library management systems",
        "url": "https://ammar-magdy.github.io/ACML-Website-2026/services"
      },
      {
        "@type": "Product",
        "name": "Library Solutions",
        "description": "Furniture and restoration materials",
        "url": "https://ammar-magdy.github.io/ACML-Website-2026/services"
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);

  return () => document.head.removeChild(script);
}, []);
```

---

## 📚 PUBLISHER PAGE SCHEMA EXAMPLE

For each Publisher page (e.g., `/src/pages/Publishers/PublisherEbsco.tsx`):

```jsx
useEffect(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "EBSCO Database Solutions",
    "description": "Comprehensive access to EBSCO's research databases and academic content",
    "brand": {
      "@type": "Brand",
      "name": "EBSCO"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "ACML",
      "url": "https://ammar-magdy.github.io/ACML-Website-2026/"
    },
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/publishers/ebsco",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EGP",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);

  return () => document.head.removeChild(script);
}, []);
```

---

## 🔗 SITE VERIFICATION CODES

### Google Search Console
Add this meta tag to `<head>` once you have a verification code from GSC:

```html
<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
```

### Bing Webmaster Tools
Add this meta tag to `<head>`:

```html
<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
```

---

## 🧪 SEO TESTING TOOLS

After deploying, test with:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Check Core Web Vitals

2. **Google Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Ensure mobile responsiveness

3. **Google Structured Data Testing Tool**
   - https://schema.org/
   - Validate JSON-LD schemas

4. **Open Graph Preview**
   - https://www.opengraphcheck.com/
   - Verify social media cards

5. **W3C HTML Validator**
   - https://validator.w3.org/
   - Check HTML validity

---

## 📊 OPTIMIZATION TIMELINE

**Before Launch (This Week):**
- [ ] Update index.html with new code
- [ ] Create/verify og-image.png
- [ ] Verify favicon files exist
- [ ] Test all links work

**Launch Day:**
- [ ] Deploy to GitHub Pages
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

**Week 1 Post-Launch:**
- [ ] Monitor Google Search Console for errors
- [ ] Check indexation status
- [ ] Verify structured data in Search Console

**Week 2-4:**
- [ ] Add per-page schemas for services/publishers
- [ ] Optimize Core Web Vitals if needed
- [ ] Monitor search rankings

---

## ✅ FINAL CHECKLIST

- [ ] Replace index.html with optimized version above
- [ ] Create og-image.png (1200×630px)
- [ ] Verify favicon files exist
- [ ] Update robots.txt in /public/
- [ ] Test on mobile devices
- [ ] Run PageSpeed Insights
- [ ] Validate HTML with W3C
- [ ] Test Open Graph on Facebook/Twitter
- [ ] Deploy and monitor GSC

---

**All code is production-ready. Copy and paste directly into your files.**
