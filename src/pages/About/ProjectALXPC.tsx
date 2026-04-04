import { useEffect } from "react";
import {
  Fuel,
  BookOpen,
  Globe,
  Building2,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import alxpcLogo from "../../assets/Photos/About/Projects/ALX-PC/ALX-PC_logo.webp";
import alxpcBg from "../../assets/Photos/About/Projects/ALX-PC/background.webp";
import alxpcPhotoA from "../../assets/Photos/About/Projects/ALX-PC/a.webp";
import alxpcPhotoB from "../../assets/Photos/About/Projects/ALX-PC/b.webp";
import alxpcPhotoC from "../../assets/Photos/About/Projects/ALX-PC/c.webp";
import alxpcPhotoD from "../../assets/Photos/About/Projects/ALX-PC/d.webp";

export default function ProjectALXPC() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ALX-PC (APC)";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" 
            src={alxpcBg}
            alt="APC Background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Image Overlay */}
          

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block bg-white rounded-3xl p-4">
                <img loading="lazy" decoding="async" src={alxpcLogo}
                  alt="ALX-PC Logo"
                  className="h-22 md:h-24 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              A PIONEER PROJECT

ALEXANDRIA PETROLEUM COMPANY (APC)
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.alx-pc.com/"
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  ALEXANDRIA PETROLEUM COMPANY (APC)
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    A PIONEER PROJECT
                  </p>
                  <p>
                    ACML INTEGRATED INFORMAION SOLUTIONS & SYSTEMS (a future company) represents ACCURIS (Formerly I H S) from 2000 in Egypt, succeed & proud to apply this sophisticated project for APC Egypt. APC (Alexandria Petroleum Company) is one of the leading petroleum companies in the oil, gas, and energy sectors in the Middle East and Africa
                  </p>
                  <p>
                    APC needs to build a "Sophisticated Digital Library of International Codes & Standards" for its projects in Egypt. This happen over the last 10 years and they renewing their subscription continuously and considered leading in applying codes & standards in Egypt.
                  </p>
                  <p>
                    The Digital library has "one Site" (serving more than 100 engineers working in APC projects, with almost more than 1000 international codes from the following SDO,s (Standard Development Organization):
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    API- ASTM - ASME - ASCE - IEEE - NFPA - UL - IEC - ISO - BSI -ADA - ITU - - ASHRAE - AWWA - ACE - TEMA - NACE - CMAA - MSS - PIP
                  </p>
                  <p>
                    "ACML 2I2s" succeeded to be part of many projects by building a digital library of international codes & standards through the famous platform of ACCURIS EWB, which is Engineering Workbench "EWB".
                  </p>
                  <p>
                    ACML 2I2S is proud to serve most of the oil & gas companies in Egypt, approximately about 400 clients spread over Egypt.
                  </p>
                </div>
              </div>

              {/* Key Features Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                  <BookOpen className="mr-3" />
                  Digital Library Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "100+ Engineers Served",
                    "1000+ International Codes",
                    "10+ Years Partnership",
                    "Continuous Renewal",
                    "API Standards",
                    "ASTM Standards",
                    "ASME Standards",
                    "IEEE Standards",
                    "NFPA Standards",
                    "ISO Standards",
                    "ASHRAE Standards",
                    "AWWA Standards",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors shadow-sm"
                    >
                      <Fuel
                        className="mr-3 text-emerald-500 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Leading Petroleum Company
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Partner with us to access comprehensive international codes & standards for petroleum projects.
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
                  <Building2 className="mr-2 text-emerald-500" />
                  Industry Focus
                </h3>
                <ul className="space-y-4">
                  {[
                    "Petroleum Industry",
                    "Oil Sector",
                    "Gas Sector",
                    "Energy Projects",
                    "Middle East Leader",
                    "African Markets",
                    "Standards Pioneer",
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
                  At APC
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 italic">
                  Leading petroleum company in Egypt, continuously applying international codes & standards for 10+ years.
                </p>
              </div>
            </div>
          </div>

          {/* Project Media Gallery */}
          <div className="container mx-auto px-4 pb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Project Gallery
            </h2>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={alxpcPhotoA} 
                  alt="ALX-PC Project - Image 1" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={alxpcPhotoB} 
                  alt="ALX-PC Project - Image 2" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={alxpcPhotoC} 
                  alt="ALX-PC Project - Image 3" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={alxpcPhotoD} 
                  alt="ALX-PC Project - Image 4" 
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
