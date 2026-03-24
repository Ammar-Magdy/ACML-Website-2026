import { useEffect } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import astmLogo from "../../assets/Photos/Publishers/ASTM-PTP/Logo.svg";
import astmVideo from "../../assets/Videos/Publishers/ASTM-PTP/ASTM.mp4";

import img003 from "../../assets/Photos/Publishers/ASTM-PTP/Image_003.webp";
import img010 from "../../assets/Photos/Publishers/ASTM-PTP/Image_010.webp";
import img013 from "../../assets/Photos/Publishers/ASTM-PTP/Image_013.webp";
import img015 from "../../assets/Photos/Publishers/ASTM-PTP/Image_015.webp";
import img016 from "../../assets/Photos/Publishers/ASTM-PTP/Image_016.webp";
import img024 from "../../assets/Photos/Publishers/ASTM-PTP/Image_024.webp";

export default function PublisherASTMPTP() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ASTM PTP";
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
            <source src={astmVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay (Extracted from ASTM Blue) */}
          <div className="absolute inset-0 bg-[#006BB6]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={astmLogo}
                  alt="ASTM PTP Logo"
                  className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-white p-2"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ASTM Proficiency Testing Program (PTP)
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.astm.org/standards-and-solutions/laboratory-services/proficiency-testing-all-programs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#006BB6] hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-blue-600 text-white hover:bg-blue-700 border border-blue-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Request Information
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-0">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              {/* About ASTM-PTP Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-[#006BB6] dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About ASTM PTP
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    ASTM Proficiency Testing programs are statistical quality
                    assurance programs that enable laboratories to assess their
                    performance in conducting test methods within their own
                    laboratories when their data are compared against other
                    laboratories that participate worldwide in the same program.
                  </p>
                  <p>
                    As a program participant, you receive different samples
                    (representative of the product line) for each test cycle,
                    electronic data submittal forms, and test instructions. Your
                    laboratory performs the test that you normally conduct
                    within your own facility using the specified ASTM methods
                    cited in the program.
                  </p>
                  <p>
                    Upon completing the tests, each laboratory electronically
                    submits their test data to ASTM for use in generating
                    statistical summary reports. Final summary reports, provided
                    in electronic format, contain:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Each participating laboratory's test results (coded for
                      confidentiality)
                    </li>
                    <li>Statistical analysis of test data</li>
                    <li>Charts plotting test results versus laboratory code</li>
                    <li>Other pertinent information</li>
                  </ul>
                  <p className="font-medium mt-4">
                    The final statistical summary reports will help your
                    laboratory:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Monitor strengths and weaknesses of your laboratory's
                      performance
                    </li>
                    <li>
                      Periodically compare test results and calculated
                      statistical parameters with other laboratories worldwide
                    </li>
                    <li>
                      Demonstrate proficiency in the specific analysis to meet
                      laboratory accreditation requirements
                    </li>
                  </ul>
                  <p className="font-bold text-[#006BB6] dark:text-blue-400 mt-6">
                    Worldwide participation allows every laboratory to achieve a
                    competitive edge in the marketplace! See specific{" "}
                    <a
                      href="https://www.astm.org/STATQA/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600 transition-colors"
                    >
                      programs
                    </a>{" "}
                    for more information.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar CTA Block */}
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl shadow-sm p-8 border border-blue-100 dark:border-blue-800 text-center sticky top-24">
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                  For multi-site subscription and pricing
                </h3>
                <p className="text-blue-700 dark:text-blue-400 mb-6 font-medium">
                  Please contact sales{" "}
                  <a
                    href="https://www.astm.org/DEMO/salesforce.htm?demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600 transition-colors"
                  >
                    here
                  </a>{" "}
                  or call 1-877-909-ASTM
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-md w-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- INFOGRAPHIC SECTION (Matches Photo) --- */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border justify-center border-gray-100 dark:border-gray-700 max-w-7xl mx-auto my-12 overflow-hidden px-4 md:px-0">
        <div className="p-8 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            Why Should You Participate?
          </h2>

          {/* Row 1 / 2 Cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b-2 border-dashed border-gray-200 dark:border-gray-700 pb-12 mb-12 relative items-center">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 border-l-2 border-dashed border-gray-200 dark:border-gray-700 -ml-[1px]"></div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 md:pr-10">
              <img loading="lazy" decoding="async" src={img003}
                alt="Accreditation"
                className="w-28 h-28 object-contain flex-shrink-0"
              />
              <p className="text-gray-800 dark:text-gray-200 text-xl font-medium pt-2">
                Maintain and fulfill mandatory{" "}
                <span className="text-[#F68B1E] font-bold">accreditation</span>{" "}
                requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 md:pl-10">
              <img loading="lazy" decoding="async" src={img016}
                alt="Capability"
                className="w-28 h-28 object-contain flex-shrink-0"
              />
              <p className="text-gray-800 dark:text-gray-200 text-xl font-medium pt-2">
                Assess your capability in{" "}
                <span className="text-[#75BA4D] font-bold">
                  performing test methods
                </span>{" "}
                in your own laboratory.
              </p>
            </div>
          </div>

          {/* Row 2 / 3 Cols */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b-2 border-dashed border-gray-200 dark:border-gray-700 pb-12 mb-12 relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/3 border-l-2 border-dashed border-gray-200 dark:border-gray-700 -ml-[1px]"></div>
            <div className="hidden md:block absolute top-0 bottom-0 left-2/3 border-l-2 border-dashed border-gray-200 dark:border-gray-700 -ml-[1px]"></div>

            <div className="flex flex-col items-center text-center gap-6 px-4">
              <img loading="lazy" decoding="async" src={img010}
                alt="Target"
                className="w-32 h-32 object-contain"
              />
              <p className="text-gray-800 dark:text-gray-200 text-xl">
                Improve{" "}
                <span className="text-[#E83627] font-bold">competence</span> and
                determine{" "}
                <span className="text-[#E83627] font-bold">precision</span> and{" "}
                <span className="text-[#E83627] font-bold">accuracy</span>.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-6 px-4">
              <p className="text-gray-800 dark:text-gray-200 text-xl lg:-mb-4">
                Compare results with{" "}
                <span className="text-[#009ADA] font-bold">
                  4,800 participating labs from 95 countries
                </span>
                .
              </p>
              <img loading="lazy" decoding="async" src={img013}
                alt="Globe with Flasks"
                className="w-32 h-32 object-contain hidden md:block"
              />
            </div>

            <div className="flex flex-col items-center text-center gap-6 px-4">
              <img loading="lazy" decoding="async" src={img015}
                alt="Browser 24/7"
                className="w-32 h-32 object-contain"
              />
              <p className="text-gray-800 dark:text-gray-200 text-xl pt-2">
                Review programs at any time with{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  24/7 access to custom PTP web portal
                </span>
                .
              </p>
            </div>
          </div>

          {/* Row 3 / Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 py-4 relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-2/3 border-l-2 border-dashed border-gray-200 dark:border-gray-700 -ml-[1px]"></div>

            {/* Programs Column */}
            <div className="md:col-span-2 md:pr-10">
              <p className="text-gray-800 dark:text-gray-200 text-xl font-medium mb-8 text-center sm:text-left">
                Choose from{" "}
                <span className="text-[#005568] dark:text-teal-400 font-bold">
                  50+ programs
                </span>
                , including
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 lg:gap-14">
                <img loading="lazy" decoding="async" src={img024}
                  alt="Programs Document List"
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 flex-grow mt-2">
                  {[
                    "aviation fuel",
                    "metals",
                    "gasoline",
                    "textiles",
                    "biodiesel",
                    "concrete",
                    "oils and gases",
                    "metal powders",
                    "plastics",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-700 dark:text-gray-300 text-lg"
                    >
                      <span className="mr-3 text-gray-400 dark:text-gray-500 font-bold tracking-widest">
                        —
                      </span>{" "}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learn More & Contacts Column */}
            <div className="flex flex-col items-center md:items-start justify-center md:pl-10">
              <a
                href="https://www.astm.org/ptp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#66C2A5] hover:bg-[#52ad91] text-white font-bold py-3.5 px-8 rounded-lg text-center mb-8 transition-transform hover:scale-105 shadow-md w-full max-w-[220px]"
              >
                Learn More
              </a>
              <div className="text-gray-900 dark:text-white text-lg lg:text-xl font-bold space-y-3 tracking-wide text-center md:text-left">
                <p>tel +1.877.909.ASTM</p>
                <p>
                  <a
                    href="mailto:ptp@astm.org"
                    className="text-[#009ADA] hover:underline"
                  >
                    ptp@astm.org
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.astm.org/ptp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#009ADA] hover:underline"
                  >
                    www.astm.org/ptp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
