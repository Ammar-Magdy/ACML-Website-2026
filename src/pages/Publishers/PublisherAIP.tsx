import React, { useEffect } from "react";
import { ExternalLink, Atom, History, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

import aipLogo from "../../assets/Photos/Publishers/AIP/Logo.svg";
import aipVideo from "../../assets/Videos/Publishers/AIP/AIP.webm";
import aipImg from "../../assets/Photos/Publishers/AIP/pt_digital_archive_1.webp";

const VIDEO_OVERLAY = "#120D61";

const PublisherAIP: React.FC = () => {
  useEffect(() => {
    document.title = "AIP";
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
          <source src={aipVideo} type="video/webm" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${VIDEO_OVERLAY}cc` }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={aipLogo}
                alt="AIP Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-white p-2"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The American Institute of Physics
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Promoting the advancement and diffusion of the knowledge of
              physics and its application to human welfare.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.aip.org"
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
              {/* Overview & Mission */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: VIDEO_OVERLAY }}
                  >
                    <Atom size={20} />
                  </div>
                  Overview &amp; Mission
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      The American Institute of Physics (AIP) is a
                      not-for-profit membership corporation created for the
                      purpose of promoting the advancement and diffusion of the
                      knowledge of physics and its application to human welfare.
                      It is the mission of the Institute to serve the sciences
                      of physics and astronomy by serving its Member Societies,
                      individual scientists, students and the general public.
                    </p>
                    <div
                      className="p-6 rounded-xl"
                      style={{ backgroundColor: `${VIDEO_OVERLAY}0d` }}
                    >
                      <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                        Our mission is accomplished through leadership and
                        cooperation within the scholarly publishing community,
                        in the dissemination of scientific information via
                        appropriate information services, and in support of
                        education and scientific research.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium italic mt-6">
                        "A society of societies"
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        AIP supports ten Member Societies, who collectively
                        represent a broad cross-section of more than 135,000
                        scientists, engineers, and educators in the global
                        physical science community.
                      </p>
                    </div>
                    <p>
                      With an extensive catalog of top-cited journals, AIP is
                      one of the world's leading publishers in the physical
                      sciences. AIP pursues innovation in electronic publishing
                      of scholarly journals and offers full-solution publishing
                      services for its Member Societies. Through the AIP Center
                      for History of Physics, the Institute preserves and shares
                      the history of the physical sciences and the people who
                      have pioneered it.
                    </p>
                  </div>
                </div>
              </div>

              {/* AIP History */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: VIDEO_OVERLAY }}
                  >
                    <History size={20} />
                  </div>
                  AIP History
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      The American Institute of Physics (AIP) was founded in
                      1931 in response to funding problems brought on by the
                      Great Depression. To address these issues, the five major
                      physics societies of the time agreed to form a consortium
                      to coordinate publishing and information activities on a
                      cooperative basis. AIP's membership has grown to include
                      ten Member Societies, and more than 100,000 scientists and
                      students have joined this physics community.
                    </p>
                    <p>
                      AIP has developed essential research services and
                      information programs that are acknowledged worldwide. By
                      creating innovative partnerships, AIP provides access to
                      quality physics programs and services for a worldwide
                      community of more than 135,000 scientists, educators and
                      students. The Institute's visibility as the voice for the
                      physical sciences increases awareness among policymakers
                      regarding the value of physics and the pivotal role it
                      plays throughout society.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={aipImg}
                      alt="AIP Digital Archive"
                      className="w-48 h-auto rounded-xl shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              </div>

              {/* Service and Supply Companies */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="mr-3" style={{ color: VIDEO_OVERLAY }} />
                  Service and Supply Companies
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    <strong>Advancing the physical sciences </strong>as
                    publisher of leading research journals and conference
                    proceedings.
                  </p>
                  <p>
                    <strong>Advancing the AIP Member Societies </strong>by
                    providing efficient publishing services and systems for
                    essential society functions.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: VIDEO_OVERLAY }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access AIP Publications
                </h3>
                <p className="text-white/80 mb-6">
                  135,000+ scientists, engineers and educators. 13 journals.
                  Leading publisher in the physical sciences since 1931.
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
                  Quick Stats
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>135,000+ Scientists</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <BookOpen
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>13 Journals</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Atom
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>Founded 1931</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>10 Member Societies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherAIP;
