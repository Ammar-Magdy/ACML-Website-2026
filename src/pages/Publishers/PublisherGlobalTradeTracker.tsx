import { useEffect } from "react";
import { Globe, BarChart, Bell, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import gttLogo from "../../assets/Photos/Publishers/Global-Trade-Tracker/logo.svg";
import gttBg from "../../assets/Photos/Publishers/Global-Trade-Tracker/Background.webp";

export default function PublisherGlobalTradeTracker() {
  useEffect(() => {
    document.title = "Global Trade Tracker";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#07094B]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={gttBg}
            alt="Global Trade Tracker background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Overlay */}
          <div className="absolute inset-0 bg-[#2A5BA5]/85 mix-blend-multiply"></div>
          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={gttLogo}
                  alt="Global Trade Tracker Logo"
                  className="h-16 md:h-24 object-contain drop-shadow-2xl rounded-3xl bg-transparent p-4"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Global Trade Tracker
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.globaltradetracker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#07094B] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
                  About Global Trade Tracker
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    With <strong>Global Trade Tracker</strong> you can create
                    accurate, timely, customized reports in seconds for any
                    commercially traded product in the world.
                  </p>
                  <p>
                    <strong>GlobalTradeTracker</strong> offers powerful
                    web-based access to original trade statistics from the
                    world's leading trading nations, giving you a clear
                    objective picture of the trade flows you need to know about.
                    Lightning fast updating, flexible output options and
                    tailored payment plans makes Global Trade Tracker the
                    service of choice for business analysts worldwide.
                  </p>
                  <p>
                    Global Trade Tracker offers you a state-of-the-art Web-based
                    service that gives access to original trade statistics from
                    the world's principal trading countries. Unlike some other
                    services, GTT does not manipulate the data in any way –
                    giving you a clear, objective picture of the trade flows you
                    need to know about.
                  </p>
                  <p>
                    Currently around 75 countries and growing report to Global
                    Trade Tracker. Statistics are obtained from the official
                    customs or national statistics office of each country.
                  </p>
                </div>
              </div>

              {/* Services & Features */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#07094B] dark:text-indigo-300 mb-4 flex items-center">
                  <BarChart className="mr-3" />
                  Services &amp; Features
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#07094B] pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Globe className="mr-2 text-[#07094B] dark:text-indigo-400 w-5 h-5" />
                      Global Trade Data Timely &amp; Accurate
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Some features of the Global Trade Tracker include:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {[
                        "Easy to use menu-driven searching",
                        "Report formats for macro-economic research",
                        "Output in either CSV or XML file formats",
                        "Customer-friendly subscriptions models",
                        "Searches and reports generated are saved for subsequent reuse",
                      ].map((feat, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#07094B] rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#07094B] pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Bell className="mr-2 text-[#07094B] dark:text-indigo-400 w-5 h-5" />
                      Alerts
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      If you need to monitor data on a regular basis the most
                      convenient and cost effective method is to set up an
                      Alert.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Alerts are saved searches automatically run by Global
                      Trade Tracker as soon as data is available. This enables
                      you to set up a search for your required country (ies) and
                      product(s) then receive data on a regular basis without
                      going on line.
                    </p>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        In addition to not searching, a key benefit of Alerts is
                        the significant reduction in report price. The same
                        report run on line can be as much as 33% cheaper as part
                        of a regular Standing Order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl shadow-sm p-8 border border-indigo-100 dark:border-indigo-800 text-center">
                <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
                  Access Global Trade Data
                </h3>
                <p className="text-indigo-700 dark:text-indigo-400 mb-6">
                  Create accurate, timely, customized reports in seconds for any
                  commercially traded product in the world.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#07094B] text-white hover:bg-indigo-900 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Globe className="mr-2 text-[#07094B] dark:text-indigo-400" />
                  Available Countries
                </h3>
                <ul className="space-y-3">
                  {[
                    { region: "Africa", count: 9 },
                    { region: "North & Central America", count: 7 },
                    { region: "Asia", count: 13 },
                    { region: "South America", count: 9 },
                    { region: "Europe", count: 33 },
                    { region: "Oceania", count: 2 },
                    { region: "Middle East", count: 1 },
                  ].map((r, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {r.region}
                      </span>
                      <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-md text-sm font-bold">
                        {r.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
                <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-3">
                  At Global Trade Tracker
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-400 italic">
                  We provide state-of-the-art web-based access to original trade
                  statistics from the world's principal trading countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
