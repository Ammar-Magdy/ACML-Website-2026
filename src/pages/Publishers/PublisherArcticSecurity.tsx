import React, { useEffect } from "react";
import { ExternalLink, Shield, Zap, Activity } from "lucide-react";
import { Link } from "react-router-dom";

import arcticLogo from "../../assets/Photos/Publishers/Arcticsecurity/logo.svg";
import arcticBg from "../../assets/Photos/Publishers/Arcticsecurity/Background.webp";

const BRAND = "#00C8FF";
const DARK = "#006d8c";

const PublisherArcticSecurity: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Arctic Security";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={arcticBg}
            alt="Arctic Security background"
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
              <img loading="lazy" decoding="async" src={arcticLogo}
                alt="Arctic Security Logo"
                className="h-24 md:h-32 object-contain rounded-3xl bg-white"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Arctic Security
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Early Warning Service for cybersecurity. Identifying vulnerable
              services and compromised assets before others do.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="https://www.arcticsecurity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: DARK }}
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
                    style={{ backgroundColor: DARK }}
                  >
                    <Zap size={20} />
                  </div>
                  It's time to preact
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>Monitoring cybersecurity, day and night</p>
                  <p>
                    When it comes to vulnerable services and compromised assets,
                    you should know about yours before others do. Early warnings
                    about your cybersecurity issues reduce time-to-discovery.
                  </p>
                  <p>
                    Every day, we observe 15 million cyber threat observations
                    across 80,000 organizations from around the world
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="mr-3" style={{ color: DARK }} />
                  Simplifying cybersecurity
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Improving cybersecurity and reducing cyber risk doesn't have
                    to be mysterious or complicated – the goal is to reach as
                    few and as insignificant notifications as possible. Many
                    issues can and should be solved by IT staff in the course of
                    their routine tasks.
                  </p>
                  <p>
                    As a change agent in cybersecurity, Arctic Security designed
                    Early Warning Service to provide its clients with
                    easy-to-digest and actionable information. Not only does
                    this systematically build up the capabilities of staff, but
                    it helps you to achieve the goal of improving stakeholder
                    cybersecurity posture.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Activity className="mr-3" style={{ color: DARK }} />A
                  cybersecurity service with a proven track record
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Early warning services for cybersecurity issues are not a
                    new idea. They have been successfully used in cyber defense
                    to protect critical national infrastructure and improve
                    cybersecurity for companies. Until now, these have been
                    implemented by National Cyber Security Centers (NCSCs) and
                    Computer Emergency Response Teams (CERTs) in many countries.
                    Arctic Security developed the technology platform used in
                    many of the established warning systems, and we have seen in
                    practice how beneficial that can be.
                  </p>
                  <p>
                    When you perform a cybersecurity assessment for your
                    company, it is crucial to have access to a reliable source
                    of information. For companies with assets spread over
                    multiple countries, for example, Early Warning Service
                    provides additional information and improved coverage
                    compared to even national services. Now, our Early Warning
                    Service is commercially available to any company in the
                    world.
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: DARK }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Get Early Warning Protection
                </h3>
                <p className="text-white/80 mb-6">
                  Monitoring 15 million cyber threat observations daily across
                  80,000 organizations worldwide.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: DARK }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {[
                    "Early Warning Service",
                    "15M Daily Observations",
                    "80,000+ Organizations",
                    "Actionable Intelligence",
                    "Reduces Discovery Time",
                    "Staff Capability Building",
                    "NCSC-Proven Technology",
                    "Global Commercial Access",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm"
                        style={{ backgroundColor: DARK }}
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
              <div
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: DARK }}
              >
                <h3 className="text-lg font-bold mb-3">At Arctic Security</h3>
                <p className="text-sm text-white/80 italic">
                  Proactive cybersecurity — know about your vulnerabilities
                  before others do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherArcticSecurity;
