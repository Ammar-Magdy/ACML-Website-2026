import { useEffect } from "react";
import { Globe, Book, Zap, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import icaoLogo from "../../assets/Photos/Publishers/ICAO/logo.svg";
import icaoVideo from "../../assets/Videos/Publishers/ICAO/ICAO.mp4";
import icaoImg1 from "../../assets/Photos/Publishers/ICAO/icao-1.webp";
import icaoImg2 from "../../assets/Photos/Publishers/ICAO/icao-2webp.webp";

export default function PublisherICAO() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ICAO";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={icaoVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay */}
          <div className="absolute inset-0 bg-[#3C3D37]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block bg-[#FFFFFF] p-6 rounded-3xl drop-shadow-2xl">
                <img loading="lazy" decoding="async" src={icaoLogo}
                  alt="ICAO Logo"
                  className="h-24 md:h-32 object-contain"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              International Civil Aviation Organization
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.icao.int/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
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
              {/* About ICAO Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About ICAO
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/3">
                    <img loading="lazy" decoding="async" src={icaoImg1}
                      alt="ICAO Headquarters"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    The International Civil Aviation Organization (ICAO)
                    publishes regulations for aviation safety, security,
                    efficiency and regularity, as well as for aviation
                    environmental protection. The organization also regulates
                    operating practices and procedures covering the technical
                    field of aviation, leveraging its unifying influence in
                    developing a code of international air law for over 180
                    countries.
                  </p>
                  <p>
                    ICAO adopts international regulations and recommended
                    practices (SARPs), and incorporates these into the annexes
                    to the Convention on International Civil Aviation. The SARPs
                    cover air navigation, prevention of unlawful interference
                    and facilitation of border crossing procedures for
                    international civil aviation.
                  </p>
                </div>
              </div>

              {/* Codes Collection Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                  <Book className="mr-3" />
                  ICAO Codes Collection
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                  Includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Standards and recommended practices (SARPs)",
                    "Procedures for air navigation services (PANS)",
                    "Regional supplementary procedures (SUPPs)",
                    "Guidance material/guidelines",
                    "Manuals",
                    "Circulars",
                    "Technical publications",
                    "Legal agreements/arrangements/reports",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors shadow-sm"
                    >
                      <Zap
                        className="mr-3 text-emerald-500 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <img loading="lazy" decoding="async" src={icaoImg2}
                    alt="ICAO Documents"
                    className="max-h-48 object-contain rounded-xl "
                  />
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Access ICAO Standards
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Contact us to learn more about accessing global aviation
                  regulations and standards.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <ExternalLink className="mr-2 text-emerald-500" />
                  Quick Actions
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <a
                      href="https://www.icao.int/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <span className="mt-1">ICAO Website</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
