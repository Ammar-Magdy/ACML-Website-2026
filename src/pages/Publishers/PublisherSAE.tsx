import React, { useEffect } from "react";
import { ExternalLink, Cog, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import saeLogo from "../../assets/Photos/Publishers/SAE/sae.svg";
import saeVideo from "../../assets/Videos/Publishers/SAE/SAE.mp4";
import saeImg from "../../assets/Photos/Publishers/SAE/saeMain.webp";

const VIDEO_OVERLAY = "#25B9E4";

const PublisherSAE: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SAE";
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
          <source src={saeVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${VIDEO_OVERLAY}cc` }}
        ></div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={saeLogo}
                alt="SAE Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-2xl bg-white p-2"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Society of Automotive Engineers
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Advancing mobility knowledge and solutions for the benefit of
              humanity.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.sae.org"
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
                    <Cog size={20} />
                  </div>
                  About SAE International
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      SAE International is a global association of more than
                      128,000 engineers and related technical experts in the
                      aerospace, automotive and commercial-vehicle industries.
                      SAE International's core competencies are life-long
                      learning and voluntary consensus standards development.
                    </p>
                    <p>
                      SAE International's charitable arm is the SAE Foundation,
                      which supports many programs, including A World In Motion®
                      and the Collegiate Design Series.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={saeImg}
                      alt="Automotive Engineering"
                      className="w-48 h-auto rounded-xl shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Globe className="mr-3 text-emerald-600 dark:text-emerald-400" />
                  Industries Served
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Aerospace", "Automotive", "Commercial Vehicle"].map(
                    (industry, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-xl text-center"
                        style={{ backgroundColor: `${VIDEO_OVERLAY}0d` }}
                      >
                        <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                          {industry}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: VIDEO_OVERLAY }}
              >
                <h3 className="text-xl font-bold mb-4">Access SAE Resources</h3>
                <p className="text-white/80 mb-6">
                  128,000+ engineers across aerospace, automotive, and
                  commercial vehicle industries worldwide.
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
                  Quick Stats
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>128,000+ Engineers</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe
                      size={20}
                      className="mr-3"
                      style={{ color: VIDEO_OVERLAY }}
                    />
                    <span>Global Association</span>
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
export default PublisherSAE;
