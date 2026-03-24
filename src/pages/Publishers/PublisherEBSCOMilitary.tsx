import React, { useEffect } from "react";
import { ExternalLink, Shield, FileText, Database, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import ebscoLogo from "../../assets/Photos/Publishers/EBSCO/Logo.webp";
import ebscoBg from "../../assets/Photos/Publishers/EBSCO/Background.webp";

const BRAND = "#0082CA";

const titles = [
  "Air Force Comptroller",
  "Defence Studies",
  "Combat Edge",
  "FBI Law Enforcement Bulletin",
  "Foreign Affairs",
  "JFQ: Joint Force Quarterly",
  "Military Technology",
  "Naval Forces",
];

const contentIncludes = [
  "Full text for nearly 300 journals and periodicals",
  "Indexing and abstracts for more than 400 journals and periodicals",
];

const PublisherEBSCOMilitary: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EBSCO Military";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section — Photo Background */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={ebscoBg}
            alt="EBSCO Military background"
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
              <img loading="lazy" decoding="async" src={ebscoLogo}
                alt="EBSCO Logo"
                className="h-28 md:h-40 object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              EBSCO (Military &amp; Government Collections)
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Current news pertaining to all branches of the military and
              government, offering a thorough collection of periodicals,
              academic journals, and other pertinent content.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="https://about.ebsco.com/products/research-databases/military-government-collection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
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
            <div className="md:col-span-2 space-y-8">
              {/* About the Collection */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Shield size={20} />
                  </div>
                  About the Collection
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Designed to offer current news pertaining to all branches of
                    the military and government, this database offers a thorough
                    collection of periodicals, academic journals and other
                    content pertinent to the increasing needs of these sites.
                  </p>
                  <div
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: `${BRAND}0d` }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      <em>Military &amp; Government Collection™</em> provides
                      full text for nearly 300 journals and periodicals. The
                      database also offers indexing and abstracts for more than
                      400 journals.
                    </p>
                  </div>
                  <p>
                    Publications covered in this database include{" "}
                    <em>
                      Air Force Comptroller, Defence Studies, JFQ: Joint Force
                      Quarterly, Military Technology, Combat Edge, FBI Law
                      Enforcement Bulletin, Foreign Affairs, Naval Forces
                    </em>
                    , and many more. Additionally, many full-text titles are
                    available in native (searchable) PDF, or scanned-in-color.
                  </p>
                </div>
              </div>

              {/* Content Includes */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Database size={20} />
                  </div>
                  Content Includes
                </h2>
                <ul className="space-y-3">
                  {contentIncludes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Titles Include */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <FileText size={20} />
                  </div>
                  Titles Include
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {titles.map((title, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <span
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 italic">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access EBSCO Military &amp; Government Collection
                </h3>
                <p className="text-white/80 mb-6">
                  300+ full-text journals. 400+ indexed periodicals.
                  Comprehensive military and government intelligence.
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
                  Quick Stats
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <FileText
                      size={20}
                      className="mr-3 flex-shrink-0"
                      style={{ color: BRAND }}
                    />
                    <span>300+ Full Text Journals</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Database
                      size={20}
                      className="mr-3 flex-shrink-0"
                      style={{ color: BRAND }}
                    />
                    <span>400+ Indexed Journals</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe
                      size={20}
                      className="mr-3 flex-shrink-0"
                      style={{ color: BRAND }}
                    />
                    <span>International Coverage</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Shield
                      size={20}
                      className="mr-3 flex-shrink-0"
                      style={{ color: BRAND }}
                    />
                    <span>All Military Branches</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherEBSCOMilitary;
