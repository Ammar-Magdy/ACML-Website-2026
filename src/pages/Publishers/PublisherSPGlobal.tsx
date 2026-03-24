import { Shield, ExternalLink, Target, Globe } from "lucide-react";

import spGlobalLogo from "../../assets/Photos/Publishers/S&P-Global/logo.webp";
import spGlobalVideo from "../../assets/Videos/Publishers/S&P-Global/S&P-Global.mp4";

import img1 from "../../assets/Photos/Publishers/S&P-Global/Image_001.webp";
import img5 from "../../assets/Photos/Publishers/S&P-Global/Image_005.webp";
import img6 from "../../assets/Photos/Publishers/S&P-Global/Image_006.webp";
import img7 from "../../assets/Photos/Publishers/S&P-Global/Image_007.webp";
import img8 from "../../assets/Photos/Publishers/S&P-Global/Image_008.webp";
import img9 from "../../assets/Photos/Publishers/S&P-Global/Image_009.webp";
import { useEffect } from "react";


export default function PublisherSPGlobal() {
  useEffect(() => {
    document.title = "S&P Global";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      {/* 80vh Premium Hero Section styled exactly like UIC and IEC */}
      {/* The S&P Global brand red is approximately #E4002B, used for the overlay */}
      <div className="relative w-full h-[80vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={spGlobalVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay (S&P Global Red) */}
          <div className="absolute inset-0 bg-[#2e2829]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container (Left Aligned like UIC/IEC) */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={spGlobalLogo}
                  alt="S&P Global Logo"
                  className="h-20 md:h-28 object-contain drop-shadow-2xl rounded-3xl bg-white p-2"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              S&P Global Market Intelligence
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.spglobal.com/marketintelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-900 hover:bg-red-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-8">
              {/* Maritime Portal Overview */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 mr-4">
                    <Globe size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Maritime Portal – Overview
                  </h2>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  The Only Source You Need for Maritime and Ship Tracking
                  Intelligence
                </h3>

                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Maritime, Trade & Supply Chain from Market Intelligence is
                    the leading source of maritime data and expertise. We are
                    uniquely positioned to provide a platform which combines
                    data from our two flagship online products: Sea-web and
                    AISLive. By connecting Sea-web's comprehensive ship and
                    ownership data with AISLive's terrestrial and satellite ship
                    movement intelligence, Maritime Portal delivers a powerful
                    market-leading solution.
                  </p>
                  <p>
                    Ships, movements, maritime intelligence and insight are
                    integrated into one online solution. This enables deeper
                    analysis of the global shipping fleet and answer's the
                    industry's needs by utilising all of our capabilities.
                  </p>
                </div>
              </div>

              {/* The Maritime Portal Provides */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
                  <Target className="mr-3" />
                  The Maritime Portal provides you with:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Integrated products and business intelligence",
                    "Actionable maritime information and insight",
                    "Global picture of the world fleet, the companies that manage them, the ports they call at, and their movements and trading history",
                    "Designed to streamline your operational workflows",
                    "Access to world leading forecasting tools",
                    "Only source of maritime intelligence you need",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <Shield
                        className="text-emerald-500 mr-2 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Products (Sea-web & AISLive) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                    <span>Sea-web™</span>
                  
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Combines extensive ships, owners, shipbuilders, ship
                    movements, fixtures and casualty information integrated with
                    Ports, Insight and News.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                    <span>AISLive</span>
                  
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Provides access to real-time ship movements through an
                    online application. It displays the position of every
                    AIS-equipped ship within the areas of shore-based coverage,
                    and is updated every 60 seconds, 24/7. This award-winning
                    service provides coverage of over 137,000+ live vessels
                    every day.
                  </p>
                </div>
              </div>

              {/* Features Map */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  We make the connections, you make the decisions
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Search
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        From over 200,000+ ships, 240,000+ companies and 15,500+
                        ports & terminals using simple or complex queries
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Visualise
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Live ship positions, port traffic, weather conditions
                        and 5-day forecasts on multiple map layers with animated
                        ship track
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Filter
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        To quickly sort results to gain a highly granular view
                        of specific areas of interest using extensive data
                        filtering options
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Benchmark
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Fleet performance, operational analysis and competitor
                        activities to understand trends over the past six months
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Make
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Smart business decisions using one source that connects
                        the world's largest maritime databases with live ship
                        positions providing unrivalled intelligence
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Receive
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Email alerts advising of changes to a ship's itinerary
                        for operational planning, & ships entering an area of
                        interest for risk analysis
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Understand
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Market share & global shipbuilding activities for
                        undertaking analysis for strategic business planning
                        decisions
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Monitor, Export, Verify, Navigate, Assess
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Comprehensive capabilities for identifying new business,
                        understanding trends, and seamlessly assessing current
                        and historic ship ownership and operational data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Assets */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                <img loading="lazy" decoding="async" src={img1}
                  alt="Maritime Portal Brochure"
                  className="w-full object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                <img loading="lazy" decoding="async" src={img5}
                  alt="AISLive Map"
                  className="w-full object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                <img loading="lazy" decoding="async" src={img6}
                  alt="Ship Assess Dashboard"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Subscription Plans & Value Sections */}
          <div className="space-y-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Subscription Plan Options
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-medium">
                Market-leading maritime intelligence tool for identifying sales
                leads, undertaking market research and increasing operational
                efficiency.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Our connected service provides subscription levels to suit every
                individual and organisation and provides customers with access
                to the most complete, reliable and accurate maritime information
                available – anywhere.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl text-center border-t-4 border-yellow-400">
                  <img loading="lazy" decoding="async" src={img7}
                    alt="Gold Plan"
                    className="w-32 h-32 mx-auto mb-6 object-contain drop-shadow-sm"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Gold
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sea-web with Movements, Ports, AutoWatch, Casualty,
                    Security, Insight* and Directory modules and AISLive Premium
                    using extensive data filtering options
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl text-center border-t-4 border-gray-400">
                  <img loading="lazy" decoding="async" src={img8}
                    alt="Silver Plan"
                    className="w-32 h-32 mx-auto mb-6 object-contain drop-shadow-sm"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Silver
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sea-web with Movements, Ports and AutoWatch modules and
                    AISLive Standard using extensive data filtering options
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl text-center border-t-4 border-amber-600">
                  <img loading="lazy" decoding="async" src={img9}
                    alt="Bronze Plan"
                    className="w-32 h-32 mx-auto mb-6 object-contain drop-shadow-sm"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Bronze
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sea-web and AISLive Standard using extensive data filtering
                    options
                  </p>
                </div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Providing value to customers worldwide
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-medium">
                Market Intelligence connects the world's largest maritime
                database with the market- leading AIS intelligence for easy &
                instant insight into the global fleet.
              </p>

              

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                      Ships
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>
                        Identify every propelled sea-going merchant ship of 100
                        GT and above
                      </li>
                      <li>
                        We are the sole originating source for assigning IMO
                        Ship and Company numbers
                      </li>
                      <li>
                        Unrivalled accuracy and depth of coverage for vessel
                        characteristics and the global newbuiliding book
                      </li>
                      <li>
                        220,000+ ships, including ships in service, broken up,
                        under construction, newbuilding
                      </li>
                      <li>Port State Control, ISM</li>
                      <li>500,000 images</li>
                      <li>
                        Dynamic links to comprehensive ship characteristics or
                        port details
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                      Companies
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>240,000 ship owners, operators and managers</li>
                      <li>
                        Seven levels of ship ownership from group beneficial
                        owner
                      </li>
                      <li>Country of domicile and true nationality</li>
                      <li>Unique IMO Company number</li>
                      <li>
                        64,000 maritime-related companies (Shipbrokers, marine &
                        safety equipment suppliers, class societies, shipyards,
                        engine builders, repairers & dry docks)
                      </li>
                      <li>Company profiles, Personnel, products</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                      AIS Movements
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>
                        Track live ship positions with unrivalled global
                        coverage
                      </li>
                      <li>Tracking between 135-140K vessels daily</li>
                      <li>Over 500M messages collected yearly</li>
                      <li>Over 11.5M port callings yearly</li>
                      <li>Port/zone estimated arrival times</li>
                      <li>Ten year archive of movement history</li>
                      <li>
                        Only Market Intelligence operates the world's largest
                        network of land-based receivers, supplemented with
                        satellite surveillance of mid-ocean positions
                      </li>
                      <li>
                        Unrivalled global coverage of live ship positions &
                        detailed cargo movements
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                      Ports
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>Plan a port call with ease</li>
                      <li>
                        Geo-referencing of over 22,500+ berths in over 300 world
                        ports
                      </li>
                      <li>Details on more than 15,500 ports & terminals</li>
                      <li>Over 26,600 port service providers</li>
                      <li>4,000 port plans</li>
                      <li>
                        Data can be integrated into bridge navigation and
                        planning software
                      </li>
                      <li>
                        Latest details of LNG bunker and Cold Ironing facilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* About & Footer Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About Maritime, Trade & Supply Chain Solutions
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 mb-8">
                <p>
                  Technology, regulation, market risk and geopolitical threats
                  have made the world's oceans challenging to navigate both
                  profitably and safely. Accurate and timely intelligence
                  enables the market to understand global trade flows to make
                  confident business critical decisions and maximize ROI.
                </p>
                <p>
                  Maritime, Trade & Supply Chain is the trusted source of
                  maritime and data, research, analytics and consulting
                  services, with a global customer base of over 8,000 commercial
                  and public sector organisations.
                </p>
                <p>
                  Our capabilities and expertise enable our customers to manage
                  complex global supply chains profitably, efficiently and
                  safely.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our core capabilities include:
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                <li>
                  The world's most comprehensive database of vessels, 100 GT and
                  over
                </li>
                <li>
                  The world's largest network of land-based and satellite AIS
                  receivers providing real-time coverage of live vessel
                  positions
                </li>
                <li>
                  The largest database of bilateral trade statistics covering
                  104 countries and over 90% of total global trade
                </li>
                <li>
                  PIERS database of U.S. seaborne imports and exports at
                  highly-granular bill of lading level of detail
                </li>
                <li>
                  Industry-leading conferences around the world including TPM,
                  attended by over 2,000 delegates annually
                </li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                The combination of these capabilities, in addition to data
                modelling, macroeconomic and industry expertise enables us to
                provide unique analysis and forecasts addressing strategic
                issues for our customers. These include detailed forecasts of
                global trade by commodity and transportation mode, shipping
                fleet capacity and freight rate forecasts, and the creation of
                bespoke market studies for clients in support of specific
                industries, regulatory or investment requirements.
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      CUSTOMER CARE
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Americas: +1 800 447 2273</li>
                      <li>Europe, Middle East & Africa: +44(0) 134 432 8300</li>
                      <li>Asia-Pacific: +604 291 3600</li>
                      <li>Japan: +81 3 6262 1887</li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0 text-center md:text-right">
                    <img loading="lazy" decoding="async" src={spGlobalLogo}
                      alt="S&P Global"
                      className="h-12 object-contain mb-2 inline-block"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Copyright © 2022 S&P Global. All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
