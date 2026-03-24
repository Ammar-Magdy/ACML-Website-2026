import { useEffect } from "react";
import { ExternalLink, Shield, Users, BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";

import asntLogo from "../../assets/Photos/Publishers/ASNT/Logo.webp";
import asntBg from "../../assets/Photos/Publishers/ASNT/Background.webp";

const BRAND = "#00519F";

const PublisherASNT: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ASNT";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={asntBg}
            alt="ASNT background"
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
              <img loading="lazy" decoding="async" src={asntLogo}
                alt="ASNT Logo"
                className="h-28 md:h-32 object-contain drop-shadow-2xl rounded-2xl bg-white p-2"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Society for Nondestructive Testing (ASNT)
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              The world's largest technical society for Nondestructive Testing
              (NDT) professionals.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="https://www.asnt.org/"
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
                    <Shield size={20} />
                  </div>
                  About American Society for Nondestructive Testing (ASNT)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The American Society for Nondestructive Testing, Inc. (ASNT)
                  is the world's largest technical society for NonDestructive
                  Testing (NDT) professionals. Through our organization and
                  partners membership, we provide a forum for exchange of NDT
                  technical information; NDT educational materials and programs;
                  and standards and services for the qualification and
                  certification of NDT personnel. ASNT promotes the discipline
                  of NDT as a profession and facilitates NDT research and
                  technology applications.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="mr-3" style={{ color: BRAND }} />
                  Partners Membership
                </h2>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: `${BRAND}0d` }}
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    ASNT was founded in 1941 (under the name of The American
                    Industrial Radium and X-Ray Society) and currently boasts a
                    membership of more than 16,000 including nearly{" "}
                    <a
                      href="https://www.asnt.org/MajorSiteSections/Membership/JoinASNT/Directory_of_ASNT_Corporate_Partners.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:underline"
                      style={{ color: BRAND }}
                    >
                      700 Corporate Partner
                    </a>{" "}
                    affiliated companies. The Society is structured into local
                    Sections (or chapters) throughout the world. There are over
                    90 chartered local Sections in over 10 countries. Our
                    membership represents a wide cross-section of NDT
                    practitioners working in manufacturing, construction,
                    education, research, consulting, services, and the military.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Target className="mr-3" style={{ color: BRAND }} />
                  Structure
                </h2>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: `${BRAND}0d` }}
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    ASNT is a nonprofit corporation governed by a board of
                    directors and national officers. The Society is organized
                    into councils which govern issues related to 1) Technical
                    and Education, 2) Research, 3) Section Operations and 4)
                    Certification. These councils meet regularly to achieve the
                    goals and objectives of the overall organization. Day to day
                    operations and activities are managed by the ASNT
                    International Service Center staff in Columbus.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BookOpen className="mr-3" style={{ color: BRAND }} />
                  Society Activities
                </h2>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: `${BRAND}0d` }}
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    In terms of specific activities, ASNT is the world leader in
                    organizing and sponsoring conferences and meetings
                    pertaining to NDT. Our Annual Conference, Research
                    Symposium, and numerous topical conferences attract
                    thousands of participants each year. The Society also
                    maintains an extensive publications operation which produces
                    and distributes NDT related books, standards, technical
                    journals, and training materials
                  </p>
                  <p className="font-bold text-gray-900 dark:text-white">
                    FOR MORE DETAILS OF "ASNT" PRODUCTS, PLEASE CONTACT:
                  </p>
                  <a
                    href="mailto:info@acml-egypt.com"
                    className="hover:underline"
                    style={{ color: BRAND }}
                  >
                    info@acml-egypt.com
                  </a>
                </div>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access ASNT Resources
                </h3>
                <p className="text-white/80 mb-6">
                  The world's largest technical society for NDT professionals
                  with 16,000+ members across 10+ countries.
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
                  {[
                    "Founded 1941",
                    "16,000+ Members",
                    "700+ Corporate Partners",
                    "90+ Chartered Sections",
                    "10+ Countries",
                    "NDT Certification",
                    "Annual Conference",
                    "Research Symposium",
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
export default PublisherASNT;
