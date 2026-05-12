# JSON-LD Schema Templates for ACML Pages

Copy these schemas to relevant pages using the React useEffect hook pattern shown below.

---

## How to Add Schemas to React Pages

Each schema should be added to the top of your page component file:

```jsx
import { useEffect } from 'react';

export default function YourPage() {
  useEffect(() => {
    // Create the schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "PageType",
      // ... schema properties
    };

    // Add to page head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => document.head.removeChild(script);
  }, []);

  return (
    // Your page JSX here
  );
}
```

---

## 1. SERVICE PAGE SCHEMA
**Use for:** `/services`, `/services/librarian`, `/services/mac`, `/services/bookshop`

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Library & Information Solutions Services",
  "description": "Comprehensive library technology solutions, digital databases, and content management systems.",
  "url": "https://ammar-magdy.github.io/ACML-Website-2026/services",
  "publisher": {
    "@type": "Organization",
    "name": "ACML",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ammar-magdy.github.io/ACML-Website-2026/logo.png"
    }
  },
  "mainEntity": [
    {
      "@type": "Product",
      "name": "Digital Databases",
      "description": "Full-text databases and electronic journals for academic and research institutions",
      "brand": {
        "@type": "Brand",
        "name": "ACML"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EGP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "name": "Librarian Software",
      "description": "Complete library management and automation system",
      "brand": {
        "@type": "Brand",
        "name": "ACML"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EGP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "name": "Library Solutions",
      "description": "Furniture, restoration materials, and complete library solutions",
      "brand": {
        "@type": "Brand",
        "name": "ACML"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EGP",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
}
```

---

## 2. PUBLISHER PAGE SCHEMA
**Use for:** All `/publishers/*` pages

### Example: EBSCO Publisher Page

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EBSCO Database Solutions",
  "description": "Comprehensive access to EBSCO's research databases, academic journals, and educational content through ACML.",
  "url": "https://ammar-magdy.github.io/ACML-Website-2026/publishers/ebsco",
  "brand": {
    "@type": "Brand",
    "name": "EBSCO"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "ACML",
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock",
    "offerCount": "100+"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Academic Institution"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excellent database coverage and support from ACML"
    }
  ]
}
```

### Example: ASTM Standards Publisher

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ASTM International Standards",
  "description": "Complete collection of ASTM standards for engineering, materials, and industrial applications through ACML.",
  "url": "https://ammar-magdy.github.io/ACML-Website-2026/publishers/astm",
  "brand": {
    "@type": "Brand",
    "name": "ASTM International"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "ACML",
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/"
  },
  "category": "Standards & Specifications",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock",
    "offerCount": "20000+"
  }
}
```

---

## 3. ABOUT PAGE SCHEMA
**Use for:** `/about`

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About ACML",
  "description": "ACML - Integrated Information Solutions & Systems. Egypt's leading provider of library media, technology solutions, and digital content management since 1995.",
  "url": "https://ammar-magdy.github.io/ACML-Website-2026/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "ACML",
    "alternateName": "ACML Integrated Information Solutions & Systems",
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/",
    "logo": "https://ammar-magdy.github.io/ACML-Website-2026/logo.png",
    "foundingDate": "1995",
    "areaServed": "EG",
    "description": "Leading provider of library media, technology solutions, and digital content management",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alexandria",
      "addressRegion": "Alexandria Governorate",
      "addressCountry": "EG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "EG"
    },
    "sameAs": [
      "https://www.facebook.com/ACML",
      "https://www.linkedin.com/company/acml"
    ]
  }
}
```

---

## 4. CONTACT PAGE SCHEMA
**Use for:** `/contact`

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact ACML",
  "description": "Get in touch with ACML for library solutions, database access, and information services.",
  "url": "https://ammar-magdy.github.io/ACML-Website-2026/contact",
  "mainEntity": {
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
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@acml.eg",
      "telephone": "+20-3-XXXXXXX",
      "areaServed": "EG"
    },
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/"
  }
}
```

---

## 5. BREADCRUMB SCHEMA (for nested pages)
**Use for:** Any nested page like `/about/mission`, `/services/librarian`

```json
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
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Librarian Software",
      "item": "https://ammar-magdy.github.io/ACML-Website-2026/services/librarian"
    }
  ]
}
```

---

## 6. ARTICLE/PROJECT PAGE SCHEMA
**Use for:** Project pages like `/about/projects/suez`, `/about/projects/colas-rail`

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Suez Canal Authority Library Project",
  "description": "ACML's comprehensive library solution implementation for Suez Canal Authority.",
  "image": "https://ammar-magdy.github.io/ACML-Website-2026/project-image.png",
  "datePublished": "2023-01-15",
  "dateModified": "2026-05-12",
  "author": {
    "@type": "Organization",
    "name": "ACML",
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ACML",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ammar-magdy.github.io/ACML-Website-2026/logo.png"
    }
  },
  "url": "https://ammar-magdy.github.io/ACML-Website-2026/about/projects/suez"
}
```

---

## 7. FAQ PAGE SCHEMA (Optional)
**Use for:** If you create an FAQ section

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What databases does ACML provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ACML provides access to 100+ international databases including EBSCO, ProQuest, Taylor & Francis, and many others through exclusive partnerships."
      }
    },
    {
      "@type": "Question",
      "name": "Can ACML help with library automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ACML offers complete library management solutions including the Librarian software, library furniture, and professional consultation services."
      }
    },
    {
      "@type": "Question",
      "name": "Does ACML support Egyptian institutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ACML has been serving Egyptian institutions since 1995 with local expertise and 24/7 support in both Arabic and English."
      }
    }
  ]
}
```

---

## 8. HOW-TO SCHEMA (Optional)
**Use for:** Service descriptions like `/services/librarian`

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Implement Library Management with Librarian Software",
  "description": "Step-by-step guide to implementing ACML's Librarian software in your library.",
  "image": {
    "@type": "ImageObject",
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/librarian-screenshot.png",
    "height": 600,
    "width": 800
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Assessment",
      "text": "ACML team assesses your library's current system and requirements.",
      "image": "https://ammar-magdy.github.io/ACML-Website-2026/step1.png"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Customization",
      "text": "The Librarian software is customized to match your library's workflow.",
      "image": "https://ammar-magdy.github.io/ACML-Website-2026/step2.png"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Implementation",
      "text": "Professional installation and staff training at your location.",
      "image": "https://ammar-magdy.github.io/ACML-Website-2026/step3.png"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Support",
      "text": "Ongoing 24/7 technical support and maintenance.",
      "image": "https://ammar-magdy.github.io/ACML-Website-2026/step4.png"
    }
  ]
}
```

---

## 9. EVENT SCHEMA (If hosting webinars)
**Use for:** Training or webinar pages

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Library Management Software Training",
  "description": "Learn how to implement and use ACML's Librarian software",
  "image": "https://ammar-magdy.github.io/ACML-Website-2026/event-image.png",
  "startDate": "2026-06-15T10:00:00",
  "endDate": "2026-06-15T12:00:00",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://event.zoom.us/webinar/12345"
  },
  "organizer": {
    "@type": "Organization",
    "name": "ACML",
    "url": "https://ammar-magdy.github.io/ACML-Website-2026/"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-05-12"
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode"
}
```

---

## Implementation Priority

1. **Add these FIRST (Critical):**
   - ✅ Organization Schema (already in index.html)
   - ✅ LocalBusiness Schema (already in index.html)
   - 📌 Breadcrumb Schema (already in index.html)

2. **Add these SECOND (High Priority):**
   - 📌 Services Page Schema
   - 📌 Breadcrumb on Service Pages
   - 📌 Publisher Page Schema (for top 5 publishers)

3. **Add these THIRD (Medium Priority):**
   - 📌 About Page Schema
   - 📌 Contact Page Schema
   - 📌 Project Page Schema

4. **Add these LATER (Nice to Have):**
   - 📌 FAQ Schema
   - 📌 How-To Schema
   - 📌 Event Schema

---

## Testing Your Schemas

After adding each schema:

1. **Test with Google's Rich Results Test**
   - https://search.google.com/test/rich-results
   - Paste your page URL
   - Should show "Valid" status

2. **Test with Structured Data Testing Tool**
   - https://schema.org/
   - Shows all detected structured data
   - Reports any errors or warnings

3. **Monitor in Google Search Console**
   - Enhancements section shows rich result status
   - Reports any validation errors

---

## Common Issues & Fixes

### Issue: Schema not appearing in GSC
**Fix:** Ensure script is valid JSON, not undefined properties

### Issue: "Invalid property" error
**Fix:** Remove properties not defined in schema.org specification

### Issue: Image URLs showing 404
**Fix:** Ensure image paths are correct and absolute URLs (not relative)

### Issue: Rating validation errors
**Fix:** Ensure ratingValue is between bestRating and worstRating

---

## SEO Benefits of Adding These Schemas

- ✅ Rich snippets in search results
- ✅ Better SERP click-through rates
- ✅ Improved crawlability
- ✅ Better voice search support
- ✅ Potential for featured snippets
- ✅ Enhanced local SEO
- ✅ Better structured data signals to Google

---

## Next Steps

1. Copy the schemas that apply to your pages
2. Add them to the relevant page components using the React hook pattern
3. Test each one with Google's Rich Results Test
4. Monitor in Google Search Console for rich result status
5. Deploy and track improvements in CTR and impressions

Good luck! 🚀
