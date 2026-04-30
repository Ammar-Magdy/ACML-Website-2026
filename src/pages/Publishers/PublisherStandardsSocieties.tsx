import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Globe } from "lucide-react";
import { standardsSocieties } from "../../data/standardsSocieties";

import accurisLogo from "../../assets/Photos/Publishers/Accuris/Logo.webp";
import accurisVideo from "../../assets/Videos/Publishers/Accuris/Accuris.mp4";

const VIDEO_OVERLAY = "#0F172A";

const PublisherStandardsSocieties = () => {
  useEffect(() => {
    document.title = "Standards & Societies";
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSocieties = standardsSocieties.filter((soc) =>
    soc.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Video BG */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl">
        <video preload="metadata" autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover">
          <source src={accurisVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${VIDEO_OVERLAY}cc` }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={accurisLogo}
                alt="Accuris Logo"
                className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-2xl bg-white"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Standards and International Societies
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Access to global standards developing organizations and industry
              specifications.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.ihs.com/products/industry-standards/organizations/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: VIDEO_OVERLAY }}
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Standards Developing Organizations
          </h1>

          {/* Intro Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-8 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
            <p className="leading-relaxed mb-4 text-center max-w-4xl mx-auto">
              Accuris is a leading provider of technical standards, codes,
              specifications and related documents from hundreds of Standards
              Developing Organizations including professional societies, trade
              associations, corporations, military and government agencies, and
              national and international standards bodies.
            </p>
            <p className="text-center">
              <a
                href="http://www.ihs.com/products/industry-standards/organizations/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: VIDEO_OVERLAY }}
              >
                Standards Developing Organizations website
              </a>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Standards Developing Organizations
          </h2>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search societies..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
              style={
                { "--tw-ring-color": VIDEO_OVERLAY } as React.CSSProperties
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Societies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSocieties.map((soc, index) => (
              <motion.a
                key={index}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{
                      backgroundColor: `${VIDEO_OVERLAY}15`,
                      color: VIDEO_OVERLAY,
                    }}
                  >
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {soc.name}
                  </h3>
                </div>
                <div
                  className="flex items-center text-sm font-medium mt-auto ml-11"
                  style={{ color: VIDEO_OVERLAY }}
                >
                  <span className="mr-2">Visit Website</span>
                  <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          {filteredSocieties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No societies found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublisherStandardsSocieties;
