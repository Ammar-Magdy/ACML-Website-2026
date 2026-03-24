import { useEffect } from "react";
import { ExternalLink, Newspaper, Globe2, Layers, Printer } from "lucide-react";
import { Link } from "react-router-dom";

import pressreaderLogo from "../../assets/Photos/Publishers/PressReader/logo.svg";
import pressreaderBg from "../../assets/Photos/Publishers/PressReader/Background.webp";

const BRAND = "#486058ff";

export default function PublisherPressReader() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "PressReader";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={pressreaderBg}
            alt="PressReader background"
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
              <img loading="lazy" decoding="async" src={pressreaderLogo}
                alt="PressReader Logo"
                className="h-20 md:h-28 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              PressReader
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              The world leader in digital newspaper distribution. Delivering
              thousands of newspapers and magazines from around the world.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.pressreader.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Newspaper size={20} />
                  </div>
                  Connecting People Through News
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Founded in 1999, PressReader has become a centralized global
                    repository for content of daily newspapers. It offers the
                    largest and most comprehensive selection of newspaper titles
                    from around the world, displayed in their original design
                    and page layout.
                  </p>
                  <p className="font-semibold" style={{ color: BRAND }}>
                    You can find 225 newspapers from 55 countries
                  </p>
                </div>
              </div>

              {/* PressDisplay & Technology */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  PressDisplay.com &amp; Technology
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    In December of 2003, the company launched{" "}
                    <a
                      href="http://www.pressdisplay.com/"
                      className="hover:underline font-medium"
                      style={{ color: BRAND }}
                    >
                      PressDisplay.com
                    </a>
                    , its market-leading internet service which provides users
                    with the largest choice in online digital newspapers.
                  </p>
                  <p>
                    The service, which is powered with the company's proprietary{" "}
                    <strong>PrintToScreen™</strong> technology, leverages the
                    company's content base and market presence. In addition to
                    the consumer site PressDisplay.com, the company has launched
                    applications of PressDisplay technology for the library,
                    corporate, airline, hotel and OEM market segments.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: <Globe2 size={28} />,
                    title: "Global Reach",
                    desc: "Access content from over 100 countries including Argentina, Australia, Canada, China, UK, USA, and many more.",
                  },
                  {
                    icon: <Layers size={28} />,
                    title: "PrintToScreen™",
                    desc: "Proprietary technology that presents digital content in a familiar, easy-to-read newspaper format.",
                  },
                  {
                    icon: <Printer size={28} />,
                    title: "On-Demand Printing",
                    desc: "Global print network allowing for digitally imaged, full-format newspapers printed at hotels, libraries, and airlines.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                      style={{ backgroundColor: BRAND }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div
                className="rounded-2xl p-8 text-white text-center mb-8"
                style={{ backgroundColor: BRAND }}
              >
                <h2 className="text-3xl font-bold mb-8">Global Coverage</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-5xl font-bold mb-2">7,000+</p>
                    <p className="opacity-90">Publications</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold mb-2">120+</p>
                    <p className="opacity-90">Countries</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold mb-2">60+</p>
                    <p className="opacity-90">Languages</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access Global News Content
                </h3>
                <p className="text-white/80 mb-6">
                  The world leader in digital newspaper distribution with 7,000+
                  publications from 120+ countries.
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
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {[
                    "7,000+ Publications",
                    "120+ Countries",
                    "60+ Languages",
                    "Original Page Layout",
                    "PrintToScreen™ Tech",
                    "On-Demand Printing",
                    "Library Market Ready",
                    "Daily Updates",
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
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: BRAND, borderColor: BRAND }}
              >
                <h3 className="text-lg font-bold mb-3">At PressReader</h3>
                <p className="text-sm text-white/80 italic">
                  Founded in 1999, delivering the world's largest selection of
                  newspapers and magazines in original layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
