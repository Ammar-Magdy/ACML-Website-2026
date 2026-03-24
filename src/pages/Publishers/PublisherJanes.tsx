import { useEffect } from "react";

// Logo and Video
import janesLogo from "../../assets/Photos/Publishers/Janes/logo.svg";
import janesVideo from "../../assets/Videos/Publishers/Janes/Janes.mp4";

// Images
import janesPage1 from "../../assets/Photos/Publishers/Janes/Janes_Page_01_Image_0001.webp";
import leopard2 from "../../assets/Photos/Publishers/Janes/Leopard-2.webp";

import img13 from "../../assets/Photos/Publishers/Janes/Janes_Page_05_Image_0002.webp";
import img14 from "../../assets/Photos/Publishers/Janes/Janes_Page_07_Image_0001.webp";
import img15 from "../../assets/Photos/Publishers/Janes/Janes_Page_07_Image_0002.webp";
import img16 from "../../assets/Photos/Publishers/Janes/Janes_Page_10_Image_0001.webp";
import img17 from "../../assets/Photos/Publishers/Janes/Janes_Page_10_Image_0002.webp";

export default function PublisherJanes() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Janes";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      {/* 80vh Premium Hero Section styled exactly like UIC, IEC, and Accuris */}
      {/* Brand-Aligned Video Overlay using #EF6C00 Orange extracted from the HTML */}
      <div className="relative w-full h-[80vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={janesVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay (Janes Orange) */}
          <div className="absolute inset-0 bg-[#EF6C00]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container (Left Aligned like UIC/IEC) */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={janesLogo}
                  alt="Janes Logo"
                  className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-3xl p-4 bg-[#1A1A1E]"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
              Defence Equipment and Technology
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-2xl font-light">
              Connected, structured equipment data that delivers unique insights
            </p>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.janes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#EF6C00] hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
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

      <div className="mx-20 mb-12"></div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-12">
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 items-stretch">
            {/* Left Main Content Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Introduction Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Connected, structured equipment data that delivers unique
                  insights
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  Janes Defence Equipment and Technology (JDET) offers the
                  worlds only single resource for comprehensive, unclassified,
                  and up-to-date intelligence on military equipment (air, sea,
                  land and space) in production and use around the globe. With
                  over 70,000 equipment profiles, Janes structured equipment
                  database allows analysts and operators to rapidly identify
                  equipment and accurately assess capabilities and status.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Building on over 100 years of data, and leveraging Janes team
                  of subject matter experts, Janes Defence Equipment and
                  Technology Intelligence Centre is critical to the success of
                  any national security, defence industry or academic
                  organisation that needs timely, accurate and validated
                  information on military platforms, weapons and systems.
                </p>

                <h3 className="text-xl font-bold text-[#EF6C00] dark:text-orange-400 mb-4">
                  Defence Equipment and Technology Intelligence Centre enables
                  you to:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                  <li>Identify military equipment and assess capabilities</li>
                  <li>
                    Research markets and gain insights into your competitors
                    equipment
                  </li>
                  <li>Support simulations and training</li>
                  <li>Educate analysts</li>
                  <li>
                    Track weapon system developments and technological
                    innovation
                  </li>
                  <li>
                    Benchmark and compare technologies to procure and maintain
                    low risk, value for money defence systems
                  </li>
                </ul>

                <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-8">
                  <h3 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-6">
                    Janes Defence Equipment and Technology profile content
                    categories
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Land Platforms
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Key Facts</li>
                        <li>Description</li>
                        <li>Variants</li>
                        <li>Specifications</li>
                        <li>Users</li>
                        <li>Development</li>
                        <li>Contractor</li>
                        <li>Images</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Sea Platforms
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Fleetlist</li>
                        <li>Specifications</li>
                        <li>Programmes</li>
                        <li>Modernisations</li>
                        <li>Structure</li>
                        <li>Operational</li>
                        <li>Images</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Air Platforms
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Type</li>
                        <li>Programme</li>
                        <li>Current Versions</li>
                        <li>Customers</li>
                        <li>Costs</li>
                        <li>Power Plant</li>
                        <li>Accommodations</li>
                        <li>Systems</li>
                        <li>Avionics</li>
                        <li>Armament</li>
                        <li>Contractor</li>
                        <li>Images</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        C4ISR Systems
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Type</li>
                        <li>Description</li>
                        <li>Variants</li>
                        <li>Specifications</li>
                        <li>Status</li>
                        <li>Contractor</li>
                        <li>Images</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        Weapons
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>Key Facts</li>
                        <li>Status</li>
                        <li>Description</li>
                        <li>Variants</li>
                        <li>Specifications</li>
                        <li>Contract Information</li>
                        <li>Development History</li>
                        <li>Images</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leopard 2 Profile section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-6">
                  Profile Example: Leopard 2
                </h2>
                {/* Main wide Leopard 2 photo */}
                <img loading="lazy" decoding="async" src={leopard2}
                  alt="Leopard 2 Profile"
                  className="w-full mb-4 shadow-md rounded-3xl transition-transform duration-500 ease-in-out hover:scale-110 "
                />
              </div>

              {/* Data Discovery Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-6">
                  Faster data discovery, analysis and export
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Powerful explorers support equipment recognition,
                      capability assessment and market analysis by enabling you
                      to visually explore connections between entities including
                      platforms, systems, operators, weapons and manufacturers.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Leveraging Janes unique structured military equipment
                      database, you will be able to distinguish between
                      equipment variants, display specifications, conduct
                      side-by-side comparisons and link to associated weapons
                      and subsystems.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      You can then continue to build out your analysis, for
                      example you can link from weapons and systems related to
                      your chosen platform to all other platforms that also
                      carry that weapon or system and look to make capability
                      comparisons.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Janes equipment data is connected to the inventories for
                      more than 190 countries, ORBATs for 19,000 military units,
                      23,000 installations and more than 26,000 organisations to
                      deliver unique insights.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img loading="lazy" decoding="async" src={img13}
                      alt="Faster data discovery"
                      className="w-full rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-transform duration-500 ease-in-out hover:scale-110 "
                    />
                  </div>
                </div>
              </div>

              {/* Modules Grouping */}
              <div className="space-y-6">
                {/* Air & Space Module */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-4">
                    Air & Space Module
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Air & Space Module provides a complete reference portfolio
                    of air and space platforms, systems and subsystems under
                    development, in production and in service with air forces
                    around the world.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    It provides military and security organisations with the
                    critical technical intelligence they need in order to
                    develop and maintain an effective airborne capability
                    advantage and provides defence manufacturers with market
                    intelligence that helps drive successful business
                    development, strategy, and product development activity.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Defence: Air & Space Module allows you to:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>
                          Assess offensive/defensive airborne capabilities
                        </li>
                        <li>Recognise global aerospace market trends</li>
                        <li>Model existing and future air threat scenarios</li>
                        <li>Direct long-term product development</li>
                        <li>Identify air and space sales opportunities</li>
                      </ul>
                      <div className="bg-orange-600 text-white p-4 rounded-lg text-sm">
                        <strong>Tableau Data Analytics:</strong> Equipment
                        Comparison Tool: Fixed Wing Aircraft; Specifications
                        Search: Fixed Wing Aircraft, Helicopters, UAVs; Data
                        Analytics Explorer Tool; Intelligence Briefings
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-[#EF6C00] text-white font-bold px-4 py-3 text-lg">
                          What's Covered
                        </div>
                        {[
                          "Aircraft Types, Versions & Variants",
                          "Design Features",
                          "Space Systems & Technologies",
                          "Aero Engines",
                          "Avionic Systems",
                          "Simulation & Training Systems",
                          "Weapons: Air-Launched",
                          "Weapons: Naval",
                          "Weapons: Strategic",
                          "C4ISR: Air, Joint & Common",
                          "Land Platforms: Artillery & Air Defence",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2.5 text-sm font-medium border-t border-gray-600"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* C4ISR Module */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-2">
                    C4ISR & Mission Systems Module
                  </h2>
                  <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                    Master the information component of the battle space
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    C4ISR & Mission Systems combines information and analysis on
                    the worlds air, land and sea C4ISR and mission systems,
                    incorporating trusted content covering military C4I systems,
                    sensors, communications and other critical systems. Market
                    and competitor intelligence aids defence manufacturers,
                    while military and security organisations benefit from
                    information on global capabilities, inventories, and
                    technologies.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Defence: C4ISR & Mission Systems Module allows you to:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Direct long-term product development</li>
                        <li>Monitor current and emerging technologies</li>
                        <li>Identify global defence system market trends</li>
                        <li>Research competitors, partners and acquisitions</li>
                        <li>
                          Identify C4ISR and missions systems sales
                          opportunities
                        </li>
                      </ul>
                      <div className="bg-orange-600 text-white p-4 rounded-lg text-sm">
                        <strong>Tableau Data Analytics:</strong> Data Analytics
                        Explorer Tool; Intelligence Briefings
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-[#EF6C00] text-white font-bold px-4 py-3 text-lg">
                          What's Covered
                        </div>
                        {[
                          "Technical & Specification Details",
                          "Functionality & Operational Parameters",
                          "Software & Hardware",
                          "Joint & Common Systems",
                          "Simulation & Training Systems",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2.5 text-sm font-medium border-t border-gray-600"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <img loading="lazy" decoding="async" src={img14}
                          alt="Helmet"
                          className="w-1/2 rounded-lg object-cover"
                        />
                        <img loading="lazy" decoding="async" src={img15}
                          alt="Jet"
                          className="w-1/2 rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Land Module */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-2">
                    Defence: Land Module
                  </h2>
                  <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                    Strengthen your military land defence positioning
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    This comprehensive resource combines all Janes military
                    land-based defence information, covering weapons, platforms,
                    systems, operations, military land vehicles, key
                    technologies, programmes, and upgrades worldwide. Defence
                    manufacturers leverage market analysis, while military and
                    security organisations get intelligence on global
                    capabilities, inventories and technology.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Defence: Land Module allows you to:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Direct long-term product development</li>
                        <li>Model existing and future land threat scenarios</li>
                        <li>Assess current and emerging technologies</li>
                        <li>Target suppliers, partners and acquisitions</li>
                        <li>Identify sales opportunities</li>
                      </ul>
                      <div className="bg-orange-600 text-white p-4 rounded-lg text-sm">
                        <strong>Tableau Data Analytics:</strong> Specifications
                        Search: Land Vehicles; Data Analytics Explorer Tool;
                        Intelligence Briefings
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-[#EF6C00] text-white font-bold px-4 py-3 text-lg">
                          What's Covered
                        </div>
                        {[
                          "Specifications & Variants",
                          "Profiles of Military Land Upgrades",
                          "Logistics, Support & Unmanned",
                          "Software & Hardware",
                          "Weapons: Air-Launched",
                          "Weapons: Infantry",
                          "Weapons: Strategic",
                          "Weapons: Ammunition",
                          "C4ISR: Land, Joint & Common",
                          "Mines, EOD & CBRN",
                          "Simulation & Training Systems",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2.5 text-sm font-medium border-t border-gray-600"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sea Module */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-2">
                    Defence: Sea Module
                  </h2>
                  <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                    Bolster sea defence decisions
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    The Sea Module offers access to all Janes military naval and
                    military sea-defence content on platforms, weapons, and
                    systems in development, in production and in service.
                    Defence manufacturers leverage market analysis, while
                    military and security organisations get intelligence on
                    global capabilities, inventories, and technologies.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Defence: Sea Module allows you to:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Direct long-term product development</li>
                        <li>Assess current and emerging technologies</li>
                        <li>
                          Research competitors, partners and acquisition targets
                        </li>
                        <li>Recognise global sea-defence market trends</li>
                        <li>Gather information on naval vessels</li>
                      </ul>
                      <div className="bg-orange-600 text-white p-4 rounded-lg text-sm">
                        <strong>Tableau Data Analytics:</strong> Specification
                        Search: Fighting Ships; Fighting Ships: 50 Year
                        Commissioning Profiles; Data Analytics Explorer Tool;
                        Intelligence Briefings
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-[#EF6C00] text-white font-bold px-4 py-3 text-lg">
                          What's Covered
                        </div>
                        {[
                          "Dimensions, Displacement, Speed & Range",
                          "Construction & Modernisation Programmes",
                          "Functionality & Operational Parameters",
                          "Weapons: Naval",
                          "Weapons: Strategic",
                          "Weapons: Air-Launched",
                          "C4ISR: Maritime, Joint & Common",
                          "Simulation & Training Systems",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2.5 text-sm font-medium border-t border-gray-600"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weapons Module */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-4">
                    Defence: Weapons Module
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    The Weapons Module provides a complete tri-service, joint
                    and strategic reference portfolio of air-launched, infantry,
                    naval and strategic weapons systems, along with ammunition,
                    under development, in production, and in service around the
                    world.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Defence: Weapons Module helps you:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Direct long-term product development</li>
                        <li>Forecast weapons and ammunition market trends</li>
                        <li>Assess current and emerging technologies</li>
                        <li>Research competitors, partners and acquisitions</li>
                        <li>Identify sales opportunities</li>
                      </ul>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-[#EF6C00] text-white font-bold px-4 py-3 text-lg">
                          What's Covered
                        </div>
                        {[
                          "Technical Details & Capability Descriptions",
                          "Functionality & Operational Parameters",
                          "Variants, Upgrades & Planned Future Enhancements",
                          "Photographs & Diagrams",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2.5 text-sm font-medium border-t border-gray-600"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <img loading="lazy" decoding="async" src={img16}
                          alt="Missiles"
                          className="w-1/2 object-contain rounded-lg"
                        />
                        <img loading="lazy" decoding="async" src={img17}
                          alt="Rifle"
                          className="w-1/2 object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-600 text-white p-4 rounded-lg text-sm mt-6">
                    <strong>Tableau Data Analytics:</strong> Specification
                    Search: Missiles; Data Analytics Explorer Tool; Intelligence
                    Briefings
                  </div>
                </div>

                {/* News Module */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-[#EF6C00] dark:text-orange-400 mb-4">
                    News Module
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Janes News Module offers the full suite of Janes security
                    events, terrorism, technology and industry reporting
                    capabilities.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Trusted and relied upon by commercial and security
                    organisations across the world, our authoritative reporting
                    and analysis provides impartial and independent insight
                    across all key defence and security subject areas key to
                    supporting your mission critical research.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        Janes News Module will help you:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Monitor events in your regions of interest</li>
                        <li>Keep abreast of ongoing military activity</li>
                        <li>
                          Analyse national, regional and international security
                          issues
                        </li>
                        <li>Track emerging defence technologies and systems</li>
                        <li>
                          Understand the latest capability upgrades and
                          programmes
                        </li>
                        <li>Assess supplier/competitor activities</li>
                      </ul>
                      <div className="bg-orange-600 text-white p-4 rounded-lg text-sm inline-block">
                        <strong>Analytic Tools:</strong> Mapping Tool;
                        Intelligence Briefings
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="bg-[#EF6C00] text-white font-bold px-4 py-3 text-lg">
                          Areas of Coverage Include:
                        </div>
                        {[
                          "Global Risk-Relevant Events",
                          "Strategic Trend & Changing Risk Analysis",
                          "Special Reports: IMINT, SOCMINT and more",
                          "Militant Propaganda Analysis",
                          "Major Incident Response Assessments",
                          "Emerging Defence Technologies & Systems",
                          "Modernisation Programmes",
                          "Forward Looking Market Analysis",
                          "Defence Industry Trends",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2.5 text-sm font-medium border-t border-gray-600"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Janes overview image */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <img loading="lazy" decoding="async" src={janesPage1}
                  alt="Janes Overview"
                  className="w-full rounded-xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

              {/* Contact card — sticky so it follows scroll */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 uppercase">
                  Contact Janes
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4 font-medium mb-8">
                  <p>
                    <strong className="text-gray-900 dark:text-white">
                      Email:
                    </strong>{" "}
                    enquiries@janes.com
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">
                      Americas:
                    </strong>{" "}
                    +1 800 447 2273
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">
                      Europe, Middle East, and Africa:
                    </strong>{" "}
                    +44 (0) 1344 328 300
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">
                      Asia and the Pacific Rim:
                    </strong>{" "}
                    +604 291 3600
                  </p>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    For more information, visit:
                  </p>
                  <a
                    href="https://www.janes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-[#EF6C00] hover:text-orange-700 dark:hover:text-orange-400"
                  >
                    www.janes.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
