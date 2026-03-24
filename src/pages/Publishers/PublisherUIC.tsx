import { useEffect } from "react";
import {
  Train,
  Briefcase,
  Zap,
  Globe,
  Shield,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import uicLogo from "../../assets/Photos/Publishers/UIC/uic_logo.svg";
import uicVideo from "../../assets/Videos/Publishers/UIC/UIC.mp4";

export default function PublisherUIC() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "UIC";
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
            <source src={uicVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay */}
          <div className="absolute inset-0 bg-[#33AE93]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={uicLogo}
                  alt="UIC Logo"
                  className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              International Union of Railways (UIC)
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://uic.org/"
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
              {/* About UIC Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About UIC
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    UIC, the worldwide professional association representing the
                    railway sector and promoting rail transport.
                  </p>
                  <p>
                    UIC leads an innovative and dynamic sector, helping Members
                    find continuing success and opportunities. Members are
                    invited to take a proactive role in the UIC working groups
                    and assemblies where the railways’ position on
                    regional/worldwide issues is shaped.
                  </p>
                  <p>
                    The mission and overall objectives for UIC activities result
                    from the statutes that were unanimously adopted by the UIC
                    Members at the General Assembly on 31 March 2009.
                  </p>
                </div>
              </div>

              {/* Objectives Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                  <Briefcase className="mr-3" />
                  Overall objectives for UIC
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                  To enable UIC to effectively fulfil its mission, 3 levels have
                  been defined for international cooperation activities:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Globe className="mr-2 text-emerald-500 w-5 h-5" />
                      Strategic Level:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Coordination with and between the 6 UIC Regions created as
                      part of the new Governance (activities steered by the UIC
                      Regional Assemblies for Africa, Asia, North America, South
                      America, Europe and Middle-East).
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Zap className="mr-2 text-emerald-500 w-5 h-5" />
                      Technical/Professional Level:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Cooperation level structured around the following railway
                      activities: Passenger, Freight, Rail System (including
                      infrastructure, rolling stock, operations).
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      And Fundamental Values including cross-sector activities
                      such as Sustainable Development, Research Coordination,
                      Safety, Security, Expertise Development. Strategic
                      priorities are set out by forums and platforms composed of
                      member representatives.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Shield className="mr-2 text-emerald-500 w-5 h-5" />
                      Support Services Level:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Finance, Human Resources, Legal, Communications and
                      Institutional Relations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Join the Worldwide Railway Community
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Partner with us to gain access to global railway standards,
                  research, and innovation.
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
                  <Train className="mr-2 text-emerald-500" />
                  Key Domains
                </h3>
                <ul className="space-y-4">
                  {[
                    "Passenger Transport",
                    "Freight Operations",
                    "Rail Infrastructure",
                    "Rolling Stock",
                    "Safety and Security",
                    "Sustainable Development",
                    "Research Coordination",
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
                  At UIC
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 italic">
                  We shape the railway's position on regional and worldwide
                  issues, helping our members find continuing success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
