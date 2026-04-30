import React, { useEffect } from "react";
import { ExternalLink, Grid, Monitor, Eye } from "lucide-react";
import { Link } from "react-router-dom";

import hanneekeBg from "../../assets/Photos/Publishers/Hannecke/Background.webp";
import hanneckeImg from "../../assets/Photos/Publishers/Hannecke/Hannecke.webp";

const BRAND = "#D42127";

const PublisherHannecke: React.FC = () => {
  useEffect(() => {
    document.title = "Hannecke";
  }, []);

  const products = [
    {
      title: "Display Spinner for Pocket Books",
      specs: [
        "Use: Pocket books (Wooden Base)",
        "Shelf Plate: G1",
        "Pockets per tier: 8",
        "Number of tiers: 7",
        "Capacity: 560",
        "Dimensions: 530 x 530 x 1960mm",
        "Order No: FSH17WG1NTR17",
      ],
    },
    {
      title: "Display Spinner for Non-Fiction",
      specs: [
        "Use: Non-fiction books (Wooden Base)",
        "Shelf Plate: A4",
        "Pockets per tier: 5",
        "Number of tiers: 6",
        "Capacity: 90",
        "Dimensions: 500 x 500 x 2000mm",
        "Order No: FSH08WA4NTR",
      ],
    },
    {
      title: "Display Spinner for Arabic Editions",
      specs: [
        "Use: Arabic editions (Round Base)",
        "Shelf Plate: F5A",
        "Pockets per tier: 5",
        "Number of tiers: 5",
        "Capacity: 75",
        "Dimensions: 535 x 535 x 1845mm",
        "Order No: FSR09WF5ANTR",
      ],
    },
    {
      title: "Lighthouse Display",
      specs: [
        "Shelf Plate: F55 / F44",
        "Pockets per tier: 5 / 4",
        "Number of tiers: 5",
        "Capacity: 100",
        "Dimensions: 680 x 680 x 2330mm",
        "Order No: On Request",
      ],
    },
    {
      title: "Floor Display 'SC8/1'",
      specs: [
        "Use: Universal book pockets (stepped)",
        "Number of tiers: 8",
        "Pocket depth: 50mm",
        "Dimensions: 715 x 690 x 1550mm",
        "Order No: FPA58NTRGU",
      ],
    },
    {
      title: "Display Spinner for Pocket Books (Metal)",
      specs: [
        "Use: Pocket books (Metal Base)",
        "Shelf Plate: U",
        "Pockets per tier: 8",
        "Number of tiers: 7",
        "Capacity: 336",
        "Dimensions: 570 x 460 x 1880mm",
        "Order No: FSM48-UNTR",
      ],
    },
    {
      title: "Display Spinner for Magazines",
      specs: [
        "Use: Magazines (Metal Base)",
        "Shelf Plate: RCR",
        "Pockets per tier: 8",
        "Number of tiers: 5",
        "Capacity: 320",
        "Dimensions: 630 x 485 x 1950mm",
        "Order No: FSM53-RCRNTR",
      ],
    },
    {
      title: "Lighthouse Display (Arabic)",
      specs: [
        "Use: Arabic editions",
        "Shelf Plate: F5A",
        "Pockets per tier: 5",
        "Number of tiers: 5",
        "Capacity: 75",
        "Dimensions: 680 x 680 x 2330mm",
        "Order No: On Request",
      ],
    },
    {
      title: "Comic Display Rocket",
      specs: [
        "Use: Comics",
        "Header: Rocket ship shaped",
        "Pockets per tier: 8",
        "Number of tiers: 4",
        "Capacity: 256",
        "Dimensions: 600 x 600 x 2325mm",
        "Order No: On Request",
      ],
    },
    {
      title: "Bestseller Table",
      specs: [
        "Use: New titles, bestsellers",
        "Material: Wooden laminated / Metal",
        "Dimensions: 780 x 780 x 820mm",
        "Order No: FMT819BUNTR",
      ],
    },
  ];

  const childrenItems = [
    "Counter Spinner 8DK for children books",
    "Counter Spinner 12DK for children books",
    "Spinner 24A4 for children books",
    "Spinner 28F for children books",
    "Spinner 35A4 for children books",
    "Spinner 24DK-XL for children books",
    "Spinner 36A5 for teenage books",
    "Spinner 40CH8 for teenage books",
    "Spinner 56U for teenage books",
    "Spinner 80H16M for painting books",
  ];

  const presentationItems = [
    "Wall display PA4 4/1 for brochures",
    "Floor display PA4 4/1",
    "Floor display Vista PA4-6",
    "Floor display Vista-8",
    "Floor display Vista-12",
    "Wall display PA4 Swing for brochures",
    "Floor display SW5/2 for brochures/leaflets",
  ];

  const vernissageItems = [
    "Acrylic floor display",
    "Wall divider",
    "Wall divider extension",
  ];

  const inlineItems = [
    "Zig zag shelving, width 3'",
    "Zig zag shelving, width 4'",
    "Shelf and stair combination, width 3'",
    "Shelf and stair combination, width 4'",
    "Combination for magazines / pocket book comics, width 3'",
    "Combination for magazines / pocket book comics, width 4'",
    '"P11" book/DVD shelving, width 3\'',
    '"P11" book/DVD shelving, width 4\'',
    '"PA4" magazine shelving, width 3\'',
    '"PA4" magazine shelving, width 4\'',
    'Built-in Spinners Sample: "RCR" for magazines',
    "Newspaper shelf, width 3'",
    "Newspaper shelf, width 4'",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={hanneekeBg}
            alt="Hannecke background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={hanneckeImg}
                alt="Hannecke Logo"
                className="h-28 md:h-32 object-contain drop-shadow-2xl rounded-3xl bg-white p-2"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Hannecke
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              High-quality display systems for books, magazines, and media.
              Versatile solutions for retail and library environments.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.hannecke.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                <ExternalLink size={20} className="mr-2" /> Visit Website
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Grid size={20} />
                  </div>
                  Display Systems Excellence
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hannecke is a leading provider of display systems specialized
                  for the presentation of books, magazines, brochures, cards,
                  and multimedia products. Their "Systems" range offers
                  versatile solutions for retail and library environments.
                </p>
              </div>

              {/* Product Specifications */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Grid className="mr-3" style={{ color: BRAND }} />
                  Product Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 text-center border-b border-gray-100 dark:border-gray-600 pb-2">
                        {product.title}
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="flex items-start">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0"
                              style={{ backgroundColor: BRAND }}
                            ></span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Lines */}
              <div className="space-y-8">
                {/* 1. Children & Teenage Books */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div
                      className="p-3 rounded-xl mr-4"
                      style={{ backgroundColor: `${BRAND}1a` }}
                    >
                      <Eye style={{ color: BRAND }} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      1. Children &amp; Teenage Books
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {childrenItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Presentation & Information */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div
                      className="p-3 rounded-xl mr-4"
                      style={{ backgroundColor: `${BRAND}1a` }}
                    >
                      <Monitor style={{ color: BRAND }} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      2. Presentation &amp; Information
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {presentationItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Vernissage */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div
                      className="p-3 rounded-xl mr-4"
                      style={{ backgroundColor: `${BRAND}1a` }}
                    >
                      <Grid style={{ color: BRAND }} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      3. Vernissage
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vernissageItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. In.Line Systems */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div
                      className="p-3 rounded-xl mr-4"
                      style={{ backgroundColor: `${BRAND}1a` }}
                    >
                      <Grid style={{ color: BRAND }} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      4. In.Line Systems
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {inlineItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Order Hannecke Display Systems
                </h3>
                <p className="text-white/80 mb-6">
                  Premium display solutions for books, magazines, and media in
                  retail and library environments.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: BRAND }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Product Lines
                </h3>
                <ul className="space-y-4">
                  {[
                    "Pocket Book Spinners",
                    "Non-Fiction Spinners",
                    "Arabic Edition Displays",
                    "Lighthouse Displays",
                    "Floor Displays",
                    "Magazine Spinners",
                    "Comic Displays",
                    "Bestseller Tables",
                    "Children Book Spinners",
                    "In.Line Shelving",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm"
                        style={{ backgroundColor: BRAND }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-6 text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-lg font-bold mb-3">At Hannecke</h3>
                <p className="text-sm text-white/80 italic">
                  German engineering excellence for library and retail display
                  systems worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherHannecke;
