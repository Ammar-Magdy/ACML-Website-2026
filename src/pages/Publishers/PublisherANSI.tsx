import React, { useEffect } from "react";
import { ExternalLink, ShieldCheck, Globe, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

import ansiLogo from "../../assets/Photos/Publishers/ANSI/logo.webp";
import ansiBg from "../../assets/Photos/Publishers/ANSI/Background.webp";

const BRAND = "#0075BF";

const PublisherANSI: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ANSI";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={ansiBg}
            alt="ANSI background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={ansiLogo}
                alt="ANSI Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-black p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American National Standards Institute
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Administrator and coordinator of the United States private sector
              voluntary standardization system for more than 90 years.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.ansi.org/"
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
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  About ANSI
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    The American National Standards Institute (ANSI) has served
                    in its capacity as administrator and coordinator of the
                    United States private sector voluntary standardization
                    system for more than 90 years. Founded in 1918 by five
                    engineering societies and three government agencies, the
                    Institute remains a private, nonprofit membership
                    organization supported by a diverse constituency of private
                    and public sector organizations. ANSI also represents the
                    U.S. in international standardization forums, providing
                    access to global standards, guidelines, statistics and
                    international standards compiled by and/or its member
                    bodies.
                  </p>
                  <p>
                    Throughout its history, ANSI has maintained as its primary
                    goal the enhancement of global competitiveness of U.S.
                    business and the American quality of life by promoting and
                    facilitating voluntary consensus standards and conformity
                    assessment systems and promoting their integrity. The
                    Institute represents the interests of its nearly 1,000
                    company, organization, government agency, institutional and
                    international members through its office in New York City,
                    and its headquarters in Washington, D.C.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Globe className="mr-3" style={{ color: BRAND }} />
                  Our Mission
                </h2>
                <div
                  className="p-6 rounded-xl border-l-4"
                  style={{ backgroundColor: `${BRAND}0d`, borderColor: BRAND }}
                >
                  <p className="text-lg text-gray-800 dark:text-gray-200 font-medium italic">
                    "To enhance both the global competitiveness of U.S. business
                    and the U.S. quality of life by promoting and facilitating
                    voluntary consensus standards and conformity assessment
                    systems, and safeguarding their integrity."
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access ANSI Standards
                </h3>
                <p className="text-white/80 mb-6">
                  Over 90 years of serving as the U.S. voluntary standardization
                  system administrator with 1,000+ member organizations.
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

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  At a Glance
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Building2
                      size={20}
                      className="mr-3 flex-shrink-0"
                      style={{ color: BRAND }}
                    />
                    <span>Founded in 1918</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe
                      size={20}
                      className="mr-3 flex-shrink-0"
                      style={{ color: BRAND }}
                    />
                    <span>1,000+ Members</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <ShieldCheck
                      size={20}
                      className="mr-3 flex-shrink-0"
                      style={{ color: BRAND }}
                    />
                    <span>90+ Years of Service</span>
                  </li>
                </ul>
              </div>
              <div
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-lg font-bold mb-3">At ANSI</h3>
                <p className="text-sm text-white/80 italic">
                  Safeguarding the integrity of voluntary consensus standards
                  for U.S. business and government since 1918.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherANSI;
