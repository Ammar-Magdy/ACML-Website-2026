import { useEffect } from "react";
import {
  Ship,
  Satellite,
  Globe,
  Shield,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import suezLogo from "../../assets/Photos/About/Projects/SUEZ/SUEZ_Logo.webp";
import suezVideo from "../../assets/Videos/Projects/SUEZ/Moving-Ships.mp4";
import suezBg from "../../assets/Photos/About/Projects/SUEZ/Background.webp";
import suezPhotoA from "../../assets/Photos/About/Projects/SUEZ/a.webp";
import suezPhotoB from "../../assets/Photos/About/Projects/SUEZ/b.webp";
import suezPhotoC from "../../assets/Photos/About/Projects/SUEZ/c.webp";

export default function ProjectSUEZ() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SUEZ Canal Authority";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" 
            src={suezBg}
            alt="Elsewedy Background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Video Overlay */}
          

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={suezLogo}
                  alt="SUEZ Logo"
                  className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Suez Canal Authority – A Pioneer Project GOLD VERSION: MARITIME INTELLIGENCE
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.suezcanal.gov.eg/english/pages/default.aspx"
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
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  International Surveillance of ships movement over seas & oceans
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    GOLD VERSION: MARITIME INTELLIGENCE
                  </p>
                  <p>
                    ACML INTEGRATED INFORMAION SOLUTIONS & SYSTEMS (a future company) represents S&P Global (Formerly I H S) from 2000 in Egypt, succeeds & proud to apply this sophisticated project for Suez Canal Authority (SCA).
                  </p>
                  <p>
                    Standard & Poor Global (S&P) - Maritime Intelligence has an international sophisticated project to monitoring all ships movements over seas & oceans with using more than 500 satellites and 1500 Antenna stations spread worldwide on different locations. The surveillance data combined, review, analyse, and dissemination through an international portal under the name "Maritime Intelligence".
                  </p>
                  <p>
                    The data has full details of ships: name - flag- carrier- trend- speed …etc, which give a through data of the ship & its history) in the canal and two entries (Suez & Port said)
                  </p>
                  <p>
                    The Suez Canal Authority manages to subscribe in this international portal under: GOLD VERSION" which means covering the following:
                  </p>
                </div>
              </div>

              {/* Key Features Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                  <Satellite className="mr-3" />
                  KEY FEATURES OF MARITIME INTELLIGENCE GOLD VERSION
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Ship className="mr-2 text-emerald-500 w-5 h-5" />
                      Comprehensive Vessel Tracking:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Providing the most accurate and comprehensive vessel tracking data using advanced technology, including ship & owner history for several years.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Satellite className="mr-2 text-emerald-500 w-5 h-5" />
                      Real-Time AIS System:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Providing a real time vessel identification and tracking system (AIS) to the latest time(Update within one minute) Update every minute -maximum- via satellite.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Shield className="mr-2 text-emerald-500 w-5 h-5" />
                      Risk Assessment:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Rapid identification high-risk vessels or vessels exhibiting suspicious behavior, such as falsified automatic identification system (AIS) data, mysterious shipping, and access to the dark fleet list.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Globe className="mr-2 text-emerald-500 w-5 h-5" />
                      Vessel Evaluation:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Evaluating vessels and their owners more accurately, quickly, and effectively, with access to ownership, including actual owners.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Shield className="mr-2 text-emerald-500 w-5 h-5" />
                      Sanctions & Seizures:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Reviewing the latest data on sanctions and vessels seizures and their reason
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Pioneer in Maritime Intelligence
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Partner with us to access advanced maritime surveillance and vessel tracking technology.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Ship className="mr-2 text-emerald-500" />
                  Key Capabilities
                </h3>
                <ul className="space-y-4">
                  {[
                    "500+ Satellites",
                    "1500 Antenna Stations",
                    "Real-Time Tracking",
                    "Vessel History Access",
                    "Owner Information",
                    "Risk Assessment",
                    "Sanctions Monitoring",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-3">
                  At S&P Global Maritime Intelligence
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 italic">
                  We provide the most sophisticated maritime surveillance system worldwide, helping authorities monitor and secure maritime routes.
                </p>
              </div>
            </div>
          </div>

          {/* Project Media Gallery */}
          <div className="container mx-auto px-4 pb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Project Gallery
            </h2>
            
            {/* Video Section */}
            <div className="mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 border border-gray-100 dark:border-gray-700">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  
                  preload="metadata"
                  className="w-full rounded-lg"
                  poster={suezBg}
                >
                  <source src={suezVideo} type="video/mp4" />
                  <source src="/ACML-Website-2026/src/assets/Videos/Projects/SUEZ/Moving-Ships.mp4" type="video/mp4" />
                  
                </video>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4 font-medium">
                  Maritime Intelligence - Ships Movement Surveillance
                </p>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={suezPhotoA} 
                  alt="SUEZ Project - Image 1" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={suezPhotoB} 
                  alt="SUEZ Project - Image 2" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={suezPhotoC} 
                  alt="SUEZ Project - Image 3" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
