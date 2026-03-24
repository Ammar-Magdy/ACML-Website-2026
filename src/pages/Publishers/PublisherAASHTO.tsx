import React, { useEffect } from "react";
import { ExternalLink, Activity } from "lucide-react";
import { Link } from "react-router-dom";

import aashtoLogo from "../../assets/Photos/Publishers/AASHTO/logo.svg";
import aashtoBg from "../../assets/Photos/Publishers/AASHTO/Background.webp";
import aashtoImg from "../../assets/Photos/Publishers/AASHTO/AASHTO2.webp";

const BRAND = "#284466";

const PublisherAASHTO: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AASHTO";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={aashtoBg}
            alt="AASHTO background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={aashtoLogo}
                alt="AASHTO Logo"
                className="h-12 md:h-16 object-contain drop-shadow-2xl rounded-3xl bg-[#284466]"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Association of State Highway and Transportation Officials
              (AASHTO)
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Standard specifications, test methods, and guidelines used in
              highway design and construction throughout the United States.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="https://transportation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
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
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Activity size={20} />
                  </div>
                  About AASHTO
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      AASHTO standards and specifications include provisional
                      standards, standard test methods, recommended practices,
                      guide specifications, and manuals.
                    </p>
                    <p>
                      General subject categories covered by AASHTO standards
                      include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      {[
                        "Administration and economics",
                        "Bridges and structures",
                        "Construction and right-of-way",
                        "Design and traffic",
                        "Maintenance",
                        "Materials",
                        "Planning and environment",
                        "Rail and highway transport",
                      ].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p>
                      The AASHTO Standards Collection contains more than +1,500
                      documents.
                    </p>
                    <p>
                      Designers, engineers, researchers, construction managers,
                      and inspectors use standards and documents from AASHTO to
                      support quality and safe design and execution of road
                      construction and transportation projects.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={aashtoImg}
                      alt="AASHTO"
                      className="w-72 h-auto rounded-xl shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access AASHTO Standards
                </h3>
                <p className="text-white/80 mb-6">
                  1,500+ standards used by highway designers, engineers, and
                  construction professionals nationwide.
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

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Standards Coverage
                </h3>
                <ul className="space-y-4">
                  {[
                    "1,500+ Documents",
                    "Provisional Standards",
                    "Standard Test Methods",
                    "Recommended Practices",
                    "Guide Specifications",
                    "Bridges & Structures",
                    "Highway Design",
                    "Transportation Planning",
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherAASHTO;
