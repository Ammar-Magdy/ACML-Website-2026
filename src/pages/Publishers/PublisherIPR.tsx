import { useEffect } from "react";
import { Globe, Briefcase, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import iprLogo from "../../assets/Photos/Publishers/IPR/logo.webp";
import iprBackground from "../../assets/Photos/Publishers/IPR/Background.webp";
import iprImage002 from "../../assets/Photos/Publishers/IPR/image002.webp";
import iprImage003 from "../../assets/Photos/Publishers/IPR/image003.webp";
import iprImage004 from "../../assets/Photos/Publishers/IPR/image004.webp";
import iprImage005 from "../../assets/Photos/Publishers/IPR/image005.webp";

export default function PublisherIPR() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "IPR";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={iprBackground}
            alt="IPR Background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Image Overlay */}
          <div className="absolute inset-0 bg-[#0031E8]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={iprLogo}
                  alt="IPR Logo"
                  className="h-16 md:h-20 object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              International Publishers Representatives (IPR)
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.ipr-pub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0031E8] hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              {/* About IPR Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#0031E8] dark:text-blue-400 mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  About Us
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    International Publishers Representatives (IPR) was founded in 1966 at a time when the Middle East and North Africa were starting to build more educational establishments teaching in English. IPR bridged the gap between publisher and institution by providing ready access to the materials needed to fulfil the needs of students, and connecting with local booksellers to fulfil resulting orders.
                  </p>
                  <p>
                    Since those early days, IPR has gone on to successfully represent a significant number of publishers large and small to an educational sector that, fifty years on, has a first-class reputation worldwide.
                  </p>
                  <p>
                    From 1966 to the present, IPR has successfully adapted to the positive changes and development in a region that has also had its share of political instability.
                  </p>
                  <p>
                    Our Head Office is strategically located in Cyprus, at the crossroads of Europe and the Middle East, with an additional office in Lebanon.
                  </p>
                </div>
              </div>

              {/* Publishers Represented Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#0031E8] dark:text-blue-400 mb-6 flex items-center">
                  <Briefcase className="mr-3" />
                  Publishers Represented
                </h2>

                {/* Academic & Professional - Print Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Academic & Professional
                  </h3>
                  <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4 text-center">
                    Print
                  </h4>
                  <div className="mb-8">
                    <img
                      src={iprImage002}
                      alt="Academic & Professional Print"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Trade Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Trade
                  </h3>
                  <div className="mb-8">
                    <img
                      src={iprImage003}
                      alt="Trade Publishers 1"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="mb-8">
                    <img
                      src={iprImage004}
                      alt="Trade Publishers 2"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Schools Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Schools
                  </h3>
                  <div className="mb-8">
                    <img
                      src={iprImage005}
                      alt="Schools Publishers"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl shadow-sm p-8 border border-blue-100 dark:border-blue-800 text-center">
                <h3 className="text-xl font-bold text-[#0031E8] dark:text-blue-300 mb-4">
                  Connect with IPR
                </h3>
                <p className="text-[#0031E8] dark:text-blue-400 mb-6">
                  Explore our comprehensive collection of educational and trade publications.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#0031E8] text-white hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-[#0031E8] dark:text-blue-400 mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Briefcase className="mr-2" />
                  Key Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Publisher Representation",
                    "Educational Distribution",
                    "Trade Publishing",
                    "Academic Materials",
                    "School Supplies",
                    "Local Fulfillment",
                    "Regional Network",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-[#0031E8] dark:text-blue-400 font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                <h3 className="text-lg font-bold text-[#0031E8] dark:text-blue-300 mb-3">
                  At IPR
                </h3>
                <p className="text-sm text-[#0031E8] dark:text-blue-400 italic">
                  Bridging publishers and institutions since 1966, providing quality educational and trade materials to the Middle East and North Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
