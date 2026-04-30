import React, { useEffect } from "react";
import { ExternalLink, HardHat, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import aciLogo from "../../assets/Photos/Publishers/ACI/logo.webp";
import aciVideo from "../../assets/Videos/Publishers/ACI/ACI.mp4";
import aciImg1 from "../../assets/Photos/Publishers/ACI/concrete_plant650x340.webp";
import aciImg2 from "../../assets/Photos/Publishers/ACI/Bookstore.webp";

const VIDEO_OVERLAY = "#F5F4F1";

const PublisherACI: React.FC = () => {
  useEffect(() => {
    document.title = "ACI";
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
          <source src={aciVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${VIDEO_OVERLAY}b3` }}
        ></div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={aciLogo}
                alt="ACI Logo"
                className="h-28 md:h-28 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              American Concrete Institute - ACI
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-8">
              Advancing concrete knowledge by conducting seminars, managing
              certification programs, and publishing technical documents.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.concrete.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <HardHat className="mr-3 text-gray-600 dark:text-gray-400" />
              About ACI
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in 1904 and headquartered in Farmington Hills, Michigan,
                the American Concrete Institute is advancing concrete knowledge
                by conducting 125 seminars annually, managing 14 different
                certification programs, publishing hundreds of technical
                documents, and offering scholarships to students in the field.
                With 98 chapters, 37 student chapters, and nearly 20,000 members
                spanning over 120 countries, the American Concrete Institute has
                always retained the same basic mission - to develop, share, and
                disseminate the knowledge and information needed to utilize
                concrete to its fullest potential.
              </p>
              <div className="flex-shrink-0">
                <img loading="lazy" decoding="async" src={aciImg1}
                  alt="Concrete Plant"
                  className="w-72 h-auto rounded-xl shadow-md object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Introduction
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  The American Concrete Institute (ACI) is a nonprofit technical
                  and educational society organized in 1904 and is one of the
                  world's leading authorities on concrete technology. ACI is a
                  forum for the discussion of all matters related to concrete
                  and the development of solutions to problems. ACI conducts
                  this forum through conventions and meetings; the ACI
                  Structural Journal, the ACI Materials Journal, Concrete
                  International, and technical publications; chapter activities;
                  and technical committee work. As its mission states, its
                  purpose is to{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    "Provide knowledge and information for the best use of
                    concrete."
                  </span>
                </p>
                <p>
                  This implies a willingness on the part of each member to
                  contribute from his or her training and knowledge to the
                  benefit of the public at large. By maintaining a high standard
                  of professional and technical ability in its committee
                  memberships and in the authorship of papers and publications,
                  as well as in local chapter programs, ACI has contributed to a
                  detailed knowledge of materials and their resulting
                  structures.
                </p>
                <p>
                  ACI publishes reliable information on concrete and its
                  applications, conducts educational seminars, provides a
                  standard certification program for the industry, provides
                  local forums for discussion through the Chapter program, and
                  encourages student involvement in the concrete field.
                  Committee members involved with these activities meet at
                  bi-annual conventions.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img loading="lazy" decoding="async" src={aciImg2}
                  alt="Bookstore"
                  className="w-64 h-auto rounded-xl shadow-md object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <BookOpen className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Publications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              The Institute has an extensive publications program, including
              national standards, committee reports, periodicals, symposia
              publications, certification manuals, educational publications, and
              videos.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-sm p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-4">Access ACI Publications</h3>
            <p className="text-white/80 mb-6">
              20,000+ members across 120 countries advancing concrete knowledge
              since 1904.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherACI;
