import { useEffect } from "react";
import {
  Train,
  BookOpen,
  Globe,
  
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import colasLogo from "../../assets/Photos/About/Projects/COLAS-RAIL/COLAS-RAIL_logo.webp";
import colasVideo from "../../assets/Videos/Projects/COLAS-RAIL/Background.mp4";
import colasPhotoA from "../../assets/Photos/About/Projects/COLAS-RAIL/a.webp";
import colasPhotoB from "../../assets/Photos/About/Projects/COLAS-RAIL/b.webp";

export default function ProjectCOLASRAIL() {
  useEffect(() => {
    document.title = "COLAS-RAIL Metro Projects";
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
            <source src={colasVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay */}
          

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block bg-white rounded-3xl p-4">
                <img loading="lazy" decoding="async" src={colasLogo}
                  alt="COLAS-RAIL Logo"
                  className="h-24 md:h-32 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#fff] mb-6">
              A PIONEER PROJECT

FOR INTERNATIONAL CONSORTIA OF

ORASCOM - COLAS RAIL - HITACHI RAIL
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://colasrail.com/en/egypt"
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
                  A PIONEER PROJECT FOR INTERNATIONAL CONSORTIA
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    METRO LINE 1 - METRO LINE 4 - METRO ABOU KIR - SPEED TRAIN
                  </p>
                  <p>
                    ACML INTEGRATED INFORMAION SOLUTIONS & SYSTEMS (a future company) represents ACCURIS (Formerly I H S) from 2000 in Egypt, succeed & proud to apply this sophisticated project for INTERNATIONAL CONSORTIA FOR RAILROADS IN EGYPT.
                  </p>
                  <p>
                    The Consortia compounds from Colas Rail - Hitachi Rail - Orascom -to build a "Sophisticated Digital Library of International Codes & Standards" for the consortia to apply codes & standards with the supervision of NATIONAL AUTHORITY OF TUNNELS (NAT).
                  </p>
                  <p>
                    The Digital library has "4 Sites" (serving more than 500 engineers working in the projects), with almost more than 3000 international codes from the following SDO,s (Standard Development Organization):
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    CEN - ISA - IEEE - NFPA - TIA - UL - IEC - ISO - BSI -UIC - EEMU - ADA - ITU - EURO SOURSE - ASHRE - AWWA - SMACNA - ASTM
                  </p>
                  <p>
                    NAT (NATIONAL AUTHORITYY OF TUNNELS) has following up the three projects in three forms: Online Access, PDF, & print versions.
                  </p>
                  <p>
                    The Four projects under this international Consortia considers one of the biggest projects in Egypt which use international codes & standards (more than 3000) in implementing the projects steps & details.
                  </p>
                  <p>
                    The partners of the consortia: Colas Rail / HITACHI Rail / ORASCO are specializing in railway infrastructure construction and modernization projects.
                  </p>
                  <p>
                    "ACML 2I2s" succeeded to be part of many projects under the supervision of "National Authority of Tunnels (NAT)" by building a digital library of international codes & standards through the famous platform of ACCURIS EWB, which is Engineering Workbench "EWB". The consortia handles the following projects:
                  </p>
                </div>
              </div>

              {/* Projects Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                  <Train className="mr-3" />
                  Metro Projects Under Consortia
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Train className="mr-2 text-emerald-500 w-5 h-5" />
                      Project 1:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Alexandria Regional Metro Project Abu Qir / Misr Station.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Train className="mr-2 text-emerald-500 w-5 h-5" />
                      Project 2:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Cairo Metro Line 4
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Train className="mr-2 text-emerald-500 w-5 h-5" />
                      Project 3:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Cairo Metro Line 1
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Train className="mr-2 text-emerald-500 w-5 h-5" />
                      Project 4:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Speed Train
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Leading Railway Infrastructure Projects
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Partner with us to access comprehensive international codes & standards for railway projects.
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
                  <BookOpen className="mr-2 text-emerald-500" />
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {[
                    "4 Digital Sites",
                    "500+ Engineers",
                    "3000+ Codes",
                    "Online Access",
                    "PDF Versions",
                    "Print Versions",
                    "NAT Supervision",
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
                  Consortia Partners
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 italic">
                  Colas Rail, Hitachi Rail, and Orascom specializing in railway infrastructure construction and modernization projects.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={colasPhotoA} 
                  alt="COLAS-RAIL Project - Image 1" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={colasPhotoB} 
                  alt="COLAS-RAIL Project - Image 2" 
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
