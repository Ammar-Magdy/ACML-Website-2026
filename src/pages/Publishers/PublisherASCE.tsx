import React, { useEffect } from "react";
import { ExternalLink, Calculator, BookOpen, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import asceLogo from "../../assets/Photos/Publishers/ASCE/logo_1029.svg";
import asceVideo from "../../assets/Videos/Publishers/ASCE/ASCE.mp4";
import asceImg from "../../assets/Photos/Publishers/ASCE/ASCE2.webp";
// PDF with spaces in filename — accessed via runtime URL to avoid ESM import issues
const ascePdf = new URL(
  "../../assets/PDF/Publishers/ASCE/list of ASCE Journals + Dis.pdf",
  import.meta.url,
).href;

const VIDEO_OVERLAY = "#1F4D83";

const PublisherASCE: React.FC = () => {
  useEffect(() => {
    document.title = "ASCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Video BG */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl">
        <video preload="metadata" autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover">
          <source src={asceVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${VIDEO_OVERLAY}cc` }}
        ></div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={asceLogo}
                alt="ASCE Logo"
                className="h-24 md:h-34 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Society of Civil Engineers
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              The nation's oldest engineering society, representing more than
              150,000 members of the civil engineering profession.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.asce.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: VIDEO_OVERLAY }}
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
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: VIDEO_OVERLAY }}
                  >
                    <Calculator size={20} />
                  </div>
                  About ASCE
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <div className="mb-4">
                    <img loading="lazy" decoding="async" src={asceImg}
                      alt="ASCE Standard"
                      className="w-full max-w-lg h-auto rounded-xl shadow-md mx-auto"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <p className="text-justify">
                    The American Society of Civil Engineers represents more than
                    150,000 members of the civil engineers profession in 177
                    countries.
                  </p>
                  <p className="text-justify">
                    Founded in 1852, ASCE is the nation's oldest engineering
                    society.
                  </p>
                  <a
                    href="https://ascelibrary.org/journals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-medium hover:underline"
                    style={{ color: VIDEO_OVERLAY }}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    https://ascelibrary.org/journals
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Globe className="mr-3 text-emerald-600 dark:text-emerald-400" />
                  ASCE's Mission
                </h2>
                <div
                  className="p-6 rounded-xl mb-6 text-center"
                  style={{ backgroundColor: `${VIDEO_OVERLAY}0d` }}
                >
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Deliver value to our members, advance civil engineering, and
                    protect the public health, safety, and welfare.
                  </p>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300 font-medium text-center">
                  In carrying out our mission, ASCE:
                </p>
                <ul className="space-y-3">
                  {[
                    "Advances technology",
                    "Encourages lifelong learning",
                    "Promotes professionalism and the profession",
                    "Develops civil engineer leaders",
                    "Advocates infrastructure and environmental stewardship",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: VIDEO_OVERLAY }}
                      ></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: VIDEO_OVERLAY }}
              >
                <h3 className="text-xl font-bold mb-4">Access ASCE Library</h3>
                <p className="text-white/80 mb-6">
                  150,000+ members in 177 countries. The oldest U.S. engineering
                  society, founded 1852.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: VIDEO_OVERLAY }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Quick Links
                </h3>
                <div className="space-y-4 mb-6">
                  <a
                    href={ascePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg transition-colors"
                    style={{
                      backgroundColor: `${VIDEO_OVERLAY}0d`,
                      color: VIDEO_OVERLAY,
                    }}
                  >
                    <BookOpen size={20} className="mr-3" />
                    <span>List of ASCE Journals</span>
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>150,000+ Members</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>177 Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherASCE;
