import React, { useEffect } from "react";
import { ExternalLink, Settings, BookOpen, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import asmeLogo from "../../assets/Photos/Publishers/ASME/logo.svg";
import asmeVideo from "../../assets/Videos/Publishers/ASME/ASME.mp4";
import asmeImg from "../../assets/Photos/Publishers/ASME/article-new-ehow-images-a07-9s-lq-asme-section-xi-training-800x800.jpg";
import asmePdfEbooks from "../../assets/PDF/Publishers/ASME/ASME-e-books-list.pdf";
import asmePdfJournals from "../../assets/PDF/Publishers/ASME/list-of-ASME-journals+Dis..pdf";

const VIDEO_OVERLAY = "#00A5D8";

const PublisherASME: React.FC = () => {
  useEffect(() => {
    document.title = "ASME";
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
          <source src={asmeVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${VIDEO_OVERLAY}cc` }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={asmeLogo}
                alt="ASME Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-[#00A5D8] p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Society of Mechanical Engineers
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Enabling collaboration, knowledge sharing, career enrichment, and
              skills development across all engineering disciplines.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.asme.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: VIDEO_OVERLAY }}
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
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
            <div className="md:col-span-2 space-y-8">
              {/* About ASME */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: VIDEO_OVERLAY }}
                  >
                    <Settings size={20} />
                  </div>
                  About ASME
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      ASME is a not-for-profit membership organization that
                      enables collaboration, knowledge sharing, career
                      enrichment, and skills development across all engineering
                      disciplines, toward a goal of helping the global
                      engineering community develop solutions to benefit lives
                      and livelihoods.
                    </p>
                    <div
                      className="p-6 rounded-xl"
                      style={{ backgroundColor: `${VIDEO_OVERLAY}0d` }}
                    >
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Founded in 1880 by a small group of leading
                        industrialists, ASME has grown through the decades to
                        include more than 130,000 members in 151 countries.
                        Thirty-two thousand of these members are students.
                      </p>
                    </div>
                    <p>
                      From college students and early-career engineers to
                      project managers, corporate executives, researchers and
                      academic leaders, ASME's members are as diverse as the
                      engineering community itself. ASME serves this
                      wide-ranging technical community through quality programs
                      in continuing education, training and professional
                      development, codes and standards, research, conferences
                      and publications, government relations and other forms of
                      outreach.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={asmeImg}
                      alt="ASME Training"
                      className="w-48 h-auto rounded-xl shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              </div>

              {/* Key Resources */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="mr-3" style={{ color: VIDEO_OVERLAY }} />
                  Key Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href={asmePdfEbooks}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors group"
                  >
                    <div className="mr-4 p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                      <BookOpen style={{ color: VIDEO_OVERLAY }} size={20} />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      ASME E-books List
                    </span>
                  </a>
                  <a
                    href={asmePdfJournals}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors group"
                  >
                    <div className="mr-4 p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                      <BookOpen style={{ color: VIDEO_OVERLAY }} size={20} />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      List of ASME Journals
                    </span>
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: VIDEO_OVERLAY }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access ASME Resources
                </h3>
                <p className="text-white/80 mb-6">
                  130,000+ members in 151 countries. 32,000 student members. The
                  world's engineering knowledge hub since 1880.
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

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Quick Links
                </h3>
                <div className="space-y-4 mb-6">
                  <a
                    href="https://www.asme.org/publications-submissions/books"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg transition-colors text-sm"
                    style={{
                      backgroundColor: `${VIDEO_OVERLAY}0d`,
                      color: VIDEO_OVERLAY,
                    }}
                  >
                    <Globe size={18} className="mr-3 flex-shrink-0" />
                    <span className="break-all">
                      asme.org/publications-submissions/books
                    </span>
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>130,000+ Members</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>151 Countries</span>
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

export default PublisherASME;
