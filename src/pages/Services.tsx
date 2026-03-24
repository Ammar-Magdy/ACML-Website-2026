import {
  BookOpen,
  Database,
  Monitor,
  Sofa,
  HardDrive,
  FileText,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import imgBooks from "../assets/Photos/Services/Books-&-Periodicals.webp";
import imgDatabases from "../assets/Photos/Services/Databases-&-Full-Text-Access.webp";
import imgEJournal from "../assets/Photos/Services/e-journal.webp";
import imgFurniture from "../assets/Photos/Services/Library-Furniture.webp";
import imgSoftware from "../assets/Photos/Services/Our-Software-Products.webp";
import pressreaderLogo from "../assets/Photos/Publishers/PressReader/Background.webp";

interface Service {
  icon: any;
  title: string;
  description: string;
  features: (string | { label: string; path: string })[];
  linkId?: string;
  path?: string;
  image?: string;
  imageFit?: "contain" | "cover";
}

export default function Services() {
  const location = useLocation();
  const services: Service[] = [
    {
      icon: BookOpen,
      title: "Books & Periodicals :E-Forms",
      image: imgBooks,
      description:
        "Comprehensive collection of academic books, journals, and periodicals from leading international publishers. We provide access to the latest publications across all disciplines and fields of study.",
      features: [
        "Academic and professional publications",
        "Journals and periodicals subscriptions",
        "Special orders and procurement services",
        "Latest editions from top publishers",
      ],
    },
    {
      icon: Database,
      title: "Databases & Full-Text Access",
      path: "/publishers/ebsco-databases",
      image: imgDatabases,
      description:
        "Access to comprehensive databases and full-text resources from major international providers. Searchable, indexed content covering all academic and professional fields.",
      features: [
        "Full-text database subscriptions",
        "Multi-disciplinary research databases",
        "Subject-specific collections",
        "Advanced search and filtering tools",
      ],
      linkId: "databases",
    },
    {
      icon: FileText,
      title: "Electronic Journals :Computers & Electronic",
      path: "/publishers/acm#publications-services",
      image: imgEJournal,
      imageFit: "contain",
      description:
        "Extensive collection of electronic journals from leading publishers worldwide. Instant access to thousands of peer-reviewed journals across all disciplines.",
      features: [
        "Thousands of e-journal titles",
        "Major publisher partnerships",
        "Archive access and backfiles",
        "Mobile and remote access",
      ],
    },
    {
      icon: Sofa,
      title: "Library Furniture",
      path: "/publishers/demco",
      image: imgFurniture,
      description:
        "Professional library furniture designed for modern learning spaces. Ergonomic, durable, and aesthetically pleasing furniture solutions for libraries of all sizes.",
      features: [
        "Reading room furniture",
        "Shelving and storage systems",
        "Study carrels and workstations",
        "Custom design and installation",
      ],
    },
    {
      icon: HardDrive,
      title: "Digital Media",
      path: "/publishers/pressreader",
      image: pressreaderLogo,
      imageFit: "cover",
      description:
        "Digital content on media formats. Educational software, reference materials, and multimedia resources for libraries and institutions.",
      features: [
        "Reference Materials",
        "Reference databases",
        "Multimedia learning resources",
        "Site licenses available",
      ],
    },
    {
      icon: Monitor,
      title: "Our Software Products",
      image: imgSoftware,
      description:
        "Explore our specialized software solutions designed for libraries, archives, legal firms, and bookshops.",
      features: [
        {
          label: "LIBRARIAN A (Integrated Library Management System)",
          path: "/services/librarian",
        },
        { label: "MAC (Management Archives Content)", path: "/services/mac" },
        {
          label: "L-MAC (Lawyer MAC)",
          path: "/services/lawyer-mac",
        },
        {
          label: "MBC (Management Bookshops Content)",
          path: "/services/bookshop",
        },
      ],
      linkId: "software-products",
    },
  ];

  // Handle scroll to hash on load
  useEffect(() => {
    document.title = "Services";
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
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services & Solutions
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Comprehensive library and information technology solutions
              tailored to meet the unique needs of academic institutions,
              research centers, and corporate libraries,Specially oil & gas
              industries and other main industriel projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.linkId}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center scroll-mt-24`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                    <service.icon
                      size={32}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.path ? (
                      <Link
                        to={service.path}
                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-3 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {typeof feature === "string" ? (
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        ) : (
                          <Link
                            to={feature.path}
                            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-left underline decoration-emerald-500/30 hover:decoration-emerald-500"
                          >
                            {feature.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  {service.image ? (
                    <div className="rounded-xl h-80 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full ${
                          service.imageFit === "contain"
                            ? "object-contain"
                            : "object-cover"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-12 h-80 flex items-center justify-center">
                      <service.icon
                        size={120}
                        className="text-emerald-200 dark:text-emerald-800"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                The LIBRARIAN A Software Application
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our proprietary library management system designed for modern
                institutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                  Key Features
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Complete cataloging and classification
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Circulation and lending management
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Digital resource management
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    User-friendly interface
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                  Benefits
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Available in three versions
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Supports tri-languages
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Scalable for libraries of all sizes
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Comprehensive training included
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/services/librarian"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg inline-block"
              >
                Learn More About LIBRARIAN A
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We work closely with each client to understand their unique
            requirements and deliver tailored solutions that meet their specific
            needs and budget.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
