import { ExternalLink, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import heroVideo from "../../../assets/Videos/Publishers/ChemWatch/ChemWatch.mp4";
import chemLogo from "../../../assets/Photos/Publishers/ChemWatch/logo.webp";

export default function ChemWatchMaster() {
  useEffect(() => {
    document.title = "ChemWatch";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section — Video Background Only */}
      <div className="relative py-32 mb-12 overflow-hidden shadow-xl">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Yellow Overlay */}
          <div className="absolute inset-0 bg-[#FFDD57]/80 mix-blend-multiply"></div>
        </div>

        <div className="lg:mx-20 md:mx-10 mx-0">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="flex justify-center mb-8">
              <img loading="lazy" decoding="async" src={chemLogo}
                alt="ChemWatch Logo"
                className="h-20 md:h-28 object-contain drop-shadow-2xl rounded-2xl bg-white p-3"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Chemwatch
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              The world's largest database of chemicals — 3,215,992+ substances,
              140M+ SDS, global regulatory solutions in 90+ countries.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.chemwatch.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Language Selection Section */}
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Select Language Version
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/publishers/chemwatch/en"
                  className="group p-8 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 flex flex-col items-center hover:shadow-lg bg-gray-50 dark:bg-gray-700/30"
                >
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-300 text-yellow-600 dark:text-yellow-400">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    English Version
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access ChemWatch products and services in English
                  </p>
                </Link>

                <Link
                  to="/publishers/chemwatch/ar"
                  className="group p-8 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 flex flex-col items-center hover:shadow-lg bg-gray-50 dark:bg-gray-700/30"
                >
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-300 text-yellow-600 dark:text-yellow-400">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                    الإصدار باللغة العربية
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access ChemWatch products and services in Arabic
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
            <p>
              For more information, contact{" "}
              <a
                href="mailto:info@ACML-egypt.com"
                className="text-yellow-600 hover:underline"
              >
                info@ACML-egypt.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
