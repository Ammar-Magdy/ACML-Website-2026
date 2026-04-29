import { Shield, FileText, Globe, Search, Download, Lock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Publishers() {
  useEffect(() => {
    document.title = "Publishers";
  }, []);

  const location = useLocation();
  const publisherBodies = [
    {
      category: "Aviation Products",
      organizations: [
        {
          name: "AIAA - American Institute of Aeronautics and Astronautics",
          id: "aiaa",
        },

        {
          name: "ICAO - International Civil Aviation Organization",
          id: "icao",
        },
        { name: "ILS - Inventory Locator Service", id: "ils" },
      ],
    },
    {
      category: "Engineering Design's & Tools",
      organizations: [
        { name: "ESDU - Engineering Sciences Data Unit", id: "esdu" },
      ],
    },
    {
      category: "Aggregators & Data Banks",
      organizations: [
        { name: "ACM - Association for Computing Machinery", id: "acm" },

        { name: "EBSCO Information Services ", id: "ebsco" },
        { name: "EBSCO Databases List", id: "ebsco-databases" },
        { name: "Taylor & Francis Research", id: "taylor-francis" },
      ],
    },
    {
      category: "Humanities , Social Sciences & Art Databases",
      organizations: [
        { name: "Bloomsbury", id: "bloomsbury" },
        { name: "Harmattan E-Books", id: "harmattan" },
      ],
    },
    {
      category: "Economics & Business",
      organizations: [
        { name: "Global Trade Tracker", id: "gtt" },
        { name: "HeinOnline Business & Economics", id: "hein" },
      ],
    },
    {
      category: "Medical & Pharmaceutical Databases",
      organizations: [
        { name: "3B Scientific ", id: "3b-scientific" },
        { name: "Primal Pictures ", id: "primal-pictures" },
        { name: "Jaypee ", id: "jaypee" },
        { name: "Thieme Group", id: "thieme" },
        { name: "EBSCO Information Services ", id: "ebsco" },
      ],
    },
    {
      category: "Education & Early Learning",
      organizations: [{ name: "Teaching Strategies", id: "teaching" }],
    },

    {
      category: "Library & Information Science Tools",
      organizations: [
        { name: "EndNote", id: "endnote" },
        { name: "PressReader", id: "pressreader" },
        { name: "Library of Congress", id: "loc" },
        { name: "OCLC - Online Computer Library Center", id: "oclc" },
      ],
    },
    {
      category: "Integrated Library Management System",
      organizations: [{ name: "Librarian A", id: "librarian" }],
    },
    {
      category: "Library Supplies & Furniture",
      organizations: [
        { name: "Demco", id: "demco" },
        { name: "Gaylord Library", id: "gaylord" },
        { name: "Hannecke", id: "hannecke" },
      ],
    },
    {
      category: "Security & Defense",
      organizations: [
        { name: "S&P Global (Maritime Portal)", id: "sp-global" },
        { name: "Arctic Security", id: "arctic" },
        { name: "Janes", id: "janes" },
        {
          name: "EBSCO (Military & Government Collections)",
          id: "ebsco-military",
        },
        { name: "Haystack Gold", id: "haystack-gold" },
      ],
    },
    {
      category: "Nondestructive Testing",
      organizations: [
        {
          name: "ASNT - American Society for Nondestructive Testing",
          id: "asnt",
        },
      ],
    },
    {
      category: "Engineering and Physical Science Databases",
      organizations: [
        {
          name: "AIAA - American Institute of Aeronautics and Astronautics",
          id: "aiaa",
        },
        { name: "ESDU - Engineering Sciences Data Unit", id: "esdu" },
        {
          name: "AASHTO - American Association of State Highway and Transportation Officials",
          id: "aashto",
        },
        { name: "ACI - American Concrete Institute", id: "aci" },
        { name: "ANSI - American National Standards Institute", id: "ansi" },
        { name: "API - American Petroleum Institute", id: "api" },
        { name: "ASCE - American Society of Civil Engineers", id: "asce" },
        { name: "ASME - American Society of Mechanical Engineers", id: "asme" },
        {
          name: "ASME Boiler & Pressure Vessel Code (ASME BPVC)",
          id: "asme-bpvc",
        },
        {
          name: "ASTM - American Society for Testing and Materials",
          id: "astm",
        },
        { name: "ASTM Proficiency Testing Program (PTP)", id: "astm-ptp" },

        { name: "AWS – American Welding Society", id: "aws" },
        { name: "AIP - American Institute of Physics", id: "aip" },
        { name: "ChemWatch", id: "chemwatch" },
        { name: "Haystack Gold", id: "haystack-gold" },
        {
          name: "ICAO - International Civil Aviation Organization",
          id: "icao",
        },
        { name: "NFPA - National Fire Protection Association", id: "nfpa" },

        { name: "SAE - Society of Automotive Engineers", id: "sae" },
        {
          name: "SIAM - Society for Industrial and Applied Mathematics",
          id: "siam",
        },
        {
          name: "SDO’s - Standards Development Organizations & International Societies",
          id: "standards",
        },
      ],
    },
    {
      category: "Digital Library of International Codes and Standards",
      id: "digital-library",
      organizations: [
        {
          name: "ACCURIS - Complete Engineering Intelligence for Your Business",
          id: "accuris",
        },
        {
          name: "AASHTO - American Association of State Highway and Transportation Officials",
          id: "aashto",
        },
        { name: "ANSI - American National Standards Institute", id: "ansi" },
        { name: "API - American Petroleum Institute", id: "api" },
        { name: "ASCE - American Society of Civil Engineers", id: "asce" },
        { name: "ASME - American Society of Mechanical Engineers", id: "asme" },
        {
          name: "ASME - Boiler & Pressure Vessel Code (ASME BPVC)",
          id: "asme-bpvc",
        },
        {
          name: "ASTM - American Society for Testing and Materials",
          id: "astm",
        },
        { name: "IEC - International Electrotechnical Commission", id: "iec" },
        {
          name: "IEEE - Institute of Electrical and Electronics Engineers",
          id: "",
        },
        { name: "NFPA - National Fire Protection Association", id: "nfpa" },
        {
          name: "SDO’s - Standards Development Organizations & International Societies",
          id: "standards",
        },
        { name: "UIC - International Union of Railways", id: "uic" },
        { name: "ETC...", },

      ],
    },
    {
      category: "ASTM - American Society for Testing and Materials",
      id: "digital-library",
      organizations: [
        { name: "ASTM Proficiency Testing Program (PTP)", id: "astm-ptp" },
      ],
    },
    {
      category: "Books & Periodicals :E-Forms",
      id: "digital-library",
      organizations: [
        { name: "International Publishers Representatives (IPR)", id: "ipr" },
      ],
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Advanced Search",
      description:
        "Quickly find the exact publishers you need across thousands of documents",
    },
    {
      icon: Download,
      title: "Instant Access",
      description: "Download content immediately upon subscription or purchase",
    },
    {
      icon: Lock,
      title: "Secure Platform",
      description:
        "Protected access ensuring compliance with licensing agreements",
    },
    {
      icon: FileText,
      title: "Complete Collections",
      description:
        "Access to full standards, amendments, and historical versions",
    },
  ];

  const industries = [
    "Aerospace & Aviation",
    "Automotive Engineering",
    "Building & Construction",
    "Chemical Engineering",
    "Electrical & Electronics",
    "Energy & Power",
    "Environmental Management",
    "Food & Beverage",
    "Healthcare & Medical",
    "Information Technology",
    "Manufacturing",
    "Materials Science",
    "Mechanical Engineering",
    "Oil & Gas",
    "Quality Management",
    "Safety & Security",
    "Telecommunications",
    "Transportation",
  ];

  // Handle scroll to hash on load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              ACML Publishers
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Comprehensive access to technical standards, regulations, and
              specifications from international standardization bodies,
              professional societies, trade associations, and government
              sources.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon
                    size={28}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="partners-by-type"
        className="py-20 lg:mx-20 md:mx-10 mx-0 scroll-mt-24"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Publishers by Organization Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access standards and regulations from leading organizations
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publisherBodies.map((section, index) => (
              <div
                key={index}
                id={section.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 scroll-mt-24"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-4">
                    <Globe
                      size={24}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.organizations.map((org, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {org.id ? (
                        <Link
                          to={
                            org.id === "librarian"
                              ? "/services/librarian"
                              : `/publishers/${org.id}`
                          }
                          className="text-left hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                        >
                          {org.name}
                        </Link>
                      ) : (
                        <span>{org.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries Covered
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Standards and regulations for every major industry sector
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 px-4 py-4 rounded-lg text-gray-700 dark:text-gray-300 text-center hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all duration-200 hover:shadow-md cursor-pointer"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Why Partners Matter
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Quality Assurance
                    </h3>
                    <p>
                      Ensure products and processes meet internationally
                      recognized quality benchmarks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Safety & Compliance
                    </h3>
                    <p>
                      Meet regulatory requirements and maintain workplace and
                      product safety
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Global Trade
                    </h3>
                    <p>
                      Facilitate international commerce through standardized
                      specifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Innovation
                    </h3>
                    <p>
                      Stay current with the latest technical developments and
                      best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Access to Specific Partners?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need individual standards, complete collections, or
            ongoing subscriptions, our team can help you find the right solution
            for your organization.
          </p>
          <button className="bg-white text-emerald-600 dark:text-emerald-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
            Request Partners Information
          </button>
        </div>
      </section>
    </div>
  );
}
