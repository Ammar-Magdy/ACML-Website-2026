import React, { useEffect } from "react";
import { ExternalLink, Droplets, History, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

import apiLogo from "../../assets/Photos/Publishers/API/Logo.svg";
import apiBg from "../../assets/Photos/Publishers/API/Background.webp";

const BRAND = "#17457A";

const PublisherAPI: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "API";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={apiBg}
            alt="API background"
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
              <img loading="lazy" decoding="async" src={apiLogo}
                alt="API Logo"
                className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-2xl bg-white"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Petroleum Institute
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              The only national trade association that represents all aspects of
              America's oil and natural gas industry.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.api.org"
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
                    <Droplets size={20} />
                  </div>
                  Overview and Mission
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The American Petroleum Institute (API) is the only national
                  trade association that represents all aspects of America's oil
                  and natural gas industry.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <History className="mr-3" style={{ color: BRAND }} />
                  API History
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Our Origins:</strong> The American Petroleum Institute
                  traces its beginning to World War I, when Congress and the
                  domestic oil and natural gas industry worked together to help
                  the war effort.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Briefcase className="mr-3" style={{ color: BRAND }} />
                  Service and Supply Companies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Service and supply companies are an integral part of the oil
                  and natural gas industry. In the United States, there are more
                  than 10,000 companies identified as providing oil and natural
                  gas services and supplies to the industry.
                </p>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">Access API Standards</h3>
                <p className="text-white/80 mb-6">
                  The only national trade association representing all aspects
                  of America's oil and natural gas industry.
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
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <a
                    href="http://www.api.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:underline"
                    style={{ color: BRAND }}
                  >
                    <ExternalLink size={20} className="mr-3" />
                    <span>API Website</span>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                    <Droplets
                      size={20}
                      className="mr-3"
                      style={{ color: BRAND }}
                    />
                    <span>Oil &amp; Gas Industry</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <History
                      size={20}
                      className="mr-3"
                      style={{ color: BRAND }}
                    />
                    <span>Founded WWI Era</span>
                  </div>
                </div>
              </div>
              <div
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-lg font-bold mb-3">At API</h3>
                <p className="text-sm text-white/80 italic">
                  Representing all aspects of America's oil and natural gas
                  industry with 10,000+ service and supply companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherAPI;
