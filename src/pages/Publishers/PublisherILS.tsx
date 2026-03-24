import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Globe,
  Plane,
  Shield,
  Database,
  Wrench,
  Zap,
} from "lucide-react";

import ilsLogo from "../../assets/Photos/Publishers/ILS/Logo.svg";
import ilsVideo from "../../assets/Videos/Publishers/ILS/ILS.mp4";
import ilsImg from "../../assets/Photos/Publishers/ILS/ils.webp";

export default function PublisherILS() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ILS";
  }, []);

  const solutions = [
    {
      icon: Plane,
      title: "Owner / Operators",
      desc: "Sourcing parts and managing inventory.",
    },
    {
      icon: Wrench,
      title: "MRO",
      desc: "Maintenance, Repair, and Overhaul support.",
    },
    {
      icon: Database,
      title: "Manufacturers",
      desc: "Connecting with global buyers.",
    },
    {
      icon: Globe,
      title: "Suppliers",
      desc: "Expanding market reach.",
    },
    {
      icon: Shield,
      title: "Military / Defense",
      desc: "Mission-critical supply chain support.",
    },
    {
      icon: Shield,
      title: "Defense Contractors",
      desc: "Efficient procurement and logistics.",
    },
  ];

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
            <source src={ilsVideo} type="video/mp4" />
          </video>
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
                <img loading="lazy" decoding="async" src={ilsLogo}
                  alt="ILS Logo"
                  className="h-24 md:h-32 object-contain"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Inventory Locator Service
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.ilsmart.com"
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
              {/* About ILS Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About ILS
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/3">
                    <img loading="lazy" decoding="async" src={ilsImg}
                      alt="ILS Marketplace"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Since 1979, Inventory Locator Service,® LLC has provided
                    information via its global electronic marketplace to enable
                    subscribers in the aviation and defense industries to buy
                    and sell parts, equipment, and services. With over 5 billion
                    parts listed, 60,000 customer accesses each day and 22,000
                    subscribers, ILS is the first, largest, and most active
                    business-to-business electronic marketplace serving these
                    industries.
                  </p>
                  <p>
                    ILS is also focused on expanding its B-to-B electronic
                    marketplace to give customers advanced business tools and
                    services. ILS employs state-of-the-art technology to ensure
                    rapid information distribution along with maximum security
                    and reliability.
                  </p>
                  <p>
                    Headquartered in Memphis, TN, ILS has offices in Atlanta,
                    Boston, Dallas, Frankfurt, London, Los Angeles, Miami, New
                    York, Paris, Philadelphia, Phoenix, San Diego, Seattle,
                    Shanghai, Singapore, St. Louis, and Washington, D.C. ILS is
                    a Boeing subsidiary.
                  </p>
                  <p>
                    ILS supply chain solutions assist Aviation & Defense
                    companies in managing their supply chain from sourcing to
                    sale. Our solutions range from ILSmart, the most active
                    aviation marketplace, to supply chain services that manage
                    sales, inventory and MRO. ILS provides critical business
                    intelligence regarding supply and demand of parts in the
                    worldwide market.
                  </p>
                </div>
              </div>

              {/* Industry Solutions Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                  <Zap className="mr-3" />
                  Industry Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {solutions.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors shadow-sm"
                    >
                      <div className="flex items-center mb-2">
                        <item.icon
                          className="mr-3 text-emerald-500 flex-shrink-0"
                          size={20}
                        />
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Join the ILS Community
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Partner with us to gain access to the world's largest digital
                  marketplace for parts and services.
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
                      href="http://www.ilsmart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <span className="mt-1">Visit ILS Website</span>
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
