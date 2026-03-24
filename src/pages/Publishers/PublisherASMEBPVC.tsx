import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import asmeBpvcLogo from "../../assets/Photos/Publishers/ASME/Logo.svg";
import asmeBpvcBg from "../../assets/Photos/Publishers/ASME/ASME-BPVC/Background.webp";
import asmeBpvcImg from "../../assets/Photos/Publishers/ASME/ASME-BPVC/Background.webp";

const BRAND = "#00A5D8";

const PublisherASMEBPVC: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ASME BPVC";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section — Photo Background */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={asmeBpvcBg}
            alt="ASME BPVC background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={asmeBpvcLogo}
                alt="ASME BPVC Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-[#00A5D8] p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ASME Boiler &amp; Pressure Vessel Code (ASME BPVC)
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Establishing rules of safety governing design, fabrication,
              maintenance and inspection of boilers and pressure vessels.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="https://www.asme.org/codes-standards/bpvc-standards"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
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
              {/* About ASME BPVC */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-14 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 font-bold text-sm px-2"
                    style={{ backgroundColor: BRAND }}
                  >
                    BPVC
                  </div>
                  About ASME BPVC
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <div className="mb-4">
                    <img loading="lazy" decoding="async" src={asmeBpvcImg}
                      alt="ASME BPVC"
                      className="w-full h-auto max-h-48 rounded-xl shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <p>
                    The ASME Boiler &amp; Pressure Vessel Code (BPVC)
                    establishes rules of safety governing the design,
                    fabrication, maintenance and inspection of boilers and
                    pressure vessels, power producing machines (and associated
                    subsystems) and nuclear power plant components. The
                    objective of the rules is to provide a margin for
                    deterioration in service.
                  </p>
                  <p>
                    The ASME BPVC today encompasses 14 sections, 30 volumes and
                    more than 16,000 pages in total.
                  </p>
                  <div
                    className="p-6 rounded-xl my-6"
                    style={{ backgroundColor: `${BRAND}0d` }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Between BPVC release dates, addendums and supplements are
                      added when advancements are achieved in design and
                      materials and real world experience provides valuable
                      insight.
                    </p>
                  </div>
                  <p>
                    BPVC purchasers receive further value through ASME's ongoing
                    conformity-assessment programs, referenced and related
                    standards, training courses, technical publications and
                    industry conferences.
                  </p>
                  <p>
                    Originating in 1914, ASME BPVC is now adopted in part or in
                    its entirety by all 50 states and numerous municipalities
                    and territories of the United States and all the provinces
                    of Canada. More than 92,000 copies of the BPVC Codes are in
                    use in 100 countries around the world.
                  </p>
                  <p>
                    The Code is kept current by the Boiler and Pressure
                    Committee, a volunteer group of more than 950 engineers.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">Access ASME BPVC</h3>
                <p className="text-white/80 mb-6">
                  92,000+ copies in use across 100 countries. 14 sections, 30
                  volumes, 16,000+ pages.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: BRAND }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  At a Glance
                </h3>
                <ul className="space-y-4">
                  {[
                    "Originating 1914",
                    "All 50 U.S. States",
                    "All Canadian Provinces",
                    "14 Sections",
                    "30 Volumes",
                    "16,000+ Pages",
                    "92,000 Copies in Use",
                    "100 Countries",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm"
                        style={{ backgroundColor: BRAND }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherASMEBPVC;
