import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Globe,
  BookOpen,
  Wrench,
  Users,
  Target,
} from "lucide-react";

import esduLogo from "../../assets/Photos/Publishers/ESDU/logo.webp";
import esduBg from "../../assets/Photos/Publishers/ESDU/Background.webp";
import esduImg from "../../assets/Photos/Publishers/ESDU/ESDU.webp";

export default function PublisherESDU() {
  useEffect(() => {
    document.title = "ESDU";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Image instead of Video */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={esduBg}
            alt="ESDU Background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Video Overlay */}
          <div className="absolute inset-0 bg-[#0082CA]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block bg-[#FFFFFF] p-6 rounded-3xl drop-shadow-2xl">
                <img loading="lazy" decoding="async" src={esduLogo}
                  alt="ESDU Logo"
                  className="h-24 md:h-32 object-contain mix-blend-multiply"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Engineering Sciences Data Unit (ESDU)
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://accuristech.com/solutions/esdu/"
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
              {/* About ESDU Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About ESDU
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/3">
                    <img loading="lazy" decoding="async" src={esduImg}
                      alt="ESDU"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Accuris ESDU provides engineering insight based on the
                    collective knowledge of hundreds of engineers from around
                    the world. It is actively managed and updated regularly to
                    keep abreast of the latest science and practices to deliver
                    the most advanced resources.
                  </p>
                  <p>
                    ESDU methods are regularly reviewed and validated by
                    industry, technical society and academic experts to provide
                    current best practices and data.
                  </p>
                </div>
              </div>

              {/* Design Guides Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                  <BookOpen className="mr-3" />
                  Design Guides & Methods
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                  This unique collection of design guides and methods will
                  minimize the time required to run complex calculations with:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Detailed descriptions of the principles on which methods are based",
                    "Analysis methods described with ranges of accuracy, derivation lists, and worked examples",
                    "Detailed calculation diagrams to show program data flows",
                    "The ability to capture conditions and reuse previous calculations.",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors shadow-sm"
                    >
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
                  <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed font-medium">
                    With the ESDU Aerodynamics Design Collection, your
                    development team can eliminate dependence on outdated or
                    inaccurate methods to move from research and development
                    through design and certification as effectively as possible.
                  </p>
                </div>
              </div>

              {/* Tools Collection Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                  <Wrench className="mr-3" />
                  Tools Collection
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                  It provides an extensive collection of tools to solve complex
                  aerodynamic and structural problems related to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Airfoils and Wings",
                    "Wing-Body Combinations",
                    "Controls and Flaps",
                    "Powerplant and Airframe Interactions",
                    "Stability of Aircraft",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 border-gray-100 dark:border-gray-700"></span>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                  <Target className="mr-3" />
                  Benefits
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Achieve Greater Design Accuracy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Ensure your design calculations are accurate with
                      comprehensive, in-depth information for more than 1200
                      aerospace design and performance topics. Accuris ESDU is
                      the ideal complement to other design tools such as finite
                      element analysis, computational fluid dynamics programs as
                      well as in-house practices, codes and industry standards
                    </p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Optimize Designs
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Accuris ESDU provides an in-depth discussion of the
                      relevant design parameters and the tools to research
                      alternative configurations to optimize the design
                    </p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Improve Collaboration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Accuris ESDU methods and data enable cooperation on joint
                      development projects without compromising proprietary
                      methods and resources
                    </p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Reduce Rework or Redesign
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Because Accuris ESDU methods are validated, calculations
                      will accurately predict performance with less rework or
                      reliance on costly prototypes
                    </p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Meet Project Budgets and Schedules
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Accuris ESDU helps engineers effectively solve complex
                      problems to shorten the initial design and development
                      phases and reduce research costs
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Access ESDU Design Tools
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Contact us to learn more about accessing global engineering
                  design guides and methods.
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
                  <Users className="mr-2 text-emerald-500" />
                  Who relies on ESDU:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Aerospace and defense industry contractors",
                    "Commercial aircraft manufacturers and suppliers",
                    "Government research and testing agencies",
                    "Academic institutions",
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

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <ExternalLink className="mr-2 text-emerald-500" />
                  Quick Actions
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <a
                      href="https://accuristech.com/solutions/esdu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <span className="mt-1">Visit ESDU Website</span>
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
