import { useEffect } from "react";
import { BookOpen, Layers, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import heinLogo from "../../assets/Photos/Publishers/HeinOnline/Logo.webp";
import heinBg from "../../assets/Photos/Publishers/HeinOnline/Background.webp";

export default function PublisherHeinOnline() {
  useEffect(() => {
    document.title = "HeinOnline";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#C4C3A4]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={heinBg}
            alt="HeinOnline background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Overlay */}
          <div className="absolute inset-0 bg-[#C4C3A4]/85 mix-blend-multiply"></div>
          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={heinLogo}
                  alt="HeinOnline Logo"
                  className="h-32 md:h-48 object-contain drop-shadow-2xl rounded-3xl p-4"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              HeinOnline
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://home.heinonline.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#C4C3A4] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#C4C3A4] dark:text-[#C4C3A4] mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#C4C3A4]/20 dark:bg-[#C4C3A4]/20 flex items-center justify-center text-[#C4C3A4] dark:text-[#C4C3A4] mr-4">
                    <BookOpen size={20} />
                  </div>
                  About HeinOnline
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    <a
                      href="http://heinonline.org/HeinDocs/HOLBrochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4C3A4] hover:underline"
                    >
                      HeinOnline
                    </a>{" "}
                    is Hein's premier online research product with more than 60
                    million pages of legal history available in an online,
                    fully-searchable, image-based format. HeinOnline bridges the
                    gap in legal history by providing comprehensive coverage
                    from inception of more than 1,400 law and law-related
                    periodicals.
                  </p>
                  <p>
                    In addition to its vast collection of law journals,
                    HeinOnline also contains the Congressional Record Bound
                    volumes in entirety, complete coverage of the U.S. Reports
                    back to 1754, famous world trials dating back to the early
                    1700′s, legal classics from the 16th to the 20th centuries,
                    the United Nations and League of Nations Treaty Series, all
                    United States Treaties, the Federal Register from inception
                    in 1936, the CFR from inception in 1938, and much more.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">
                      Image is Everything!
                    </h4>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      ALL Image-Based in PDF Format. HeinOnline provides exact
                      page images of the documents in PDF format just as they
                      appear in the original print. This means that all charts,
                      graphs, tables, pictures, hand written notes, photographs,
                      and footnotes appear where they belong!
                    </p>
                  </div>
                  <p>
                    Now, in more than 3,200 locations in over 150 countries,
                    HeinOnline is the world's largest image-based legal research
                    collection. HeinOnline is a product of{" "}
                    <a
                      href="https://www.wshein.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4C3A4] hover:underline"
                    >
                      William S. Hein &amp; Co., Inc.
                    </a>
                    , which has been serving the library community for nearly 90
                    years as a legal publisher, periodical subscription agent,
                    and the world's largest distributor of legal periodicals.
                  </p>
                </div>
              </div>

              {/* Subscription Options */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#C4C3A4] dark:text-[#C4C3A4] mb-4 flex items-center">
                  <Layers className="mr-3" />
                  Subscription Options
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#C4C3A4] pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      I. Core Subscription Package
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      HeinOnline offers a variety of subscription options,
                      including a core subscription package which includes the
                      Law Journal Library, Federal Register/CFR, U.S. Code, U.S.
                      Supreme Court Library, Legal Classics, U.S. Presidential
                      Library, Treaties &amp; Agreements, English Reports, U.S.
                      Statutes at Large, U.S. Federal Legislative History
                      Library, U.S. Attorney General Opinions, European Center
                      for Minority Issues, Manual of Patent Examining Procedure,
                      Trends in Law Library Management and Technology, American
                      Association of Law Libraries, and Association of American
                      Law Schools.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#C4C3A4] pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      II. A-La-Carte Collections
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      There are also a variety of a-la-carte libraries that can
                      be added to a subscription to create a powerful legal
                      research collection. Some of these libraries include the
                      U.S. Congressional Documents, United Nations Law
                      Collection, Subject Compilations of State Laws, Kluwer Law
                      International Journal Library, and more!
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-400 text-center italic">
                    Subscription prices are based on the size and type of your
                    institution, as well as the length and content of the
                    subscription. A License Agreement is required.
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#C4C3A4]/20 rounded-2xl shadow-sm p-8 border border-[#C4C3A4]/20 dark:border-[#C4C3A4]/20 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Access 9 Centuries of Legal History
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The world's largest image-based legal research collection.
                  Partner with us to gain access.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#C4C3A4] text-white hover:bg-[#C4C3A4]/80 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <BookOpen className="mr-2 text-[#C4C3A4] dark:text-[#C4C3A4]" />
                  Key Facts
                </h3>
                <ul className="space-y-4">
                  {[
                    "60+ Million Pages of Legal History",
                    "1,400+ Law & Law-Related Periodicals",
                    "3,200+ Locations Worldwide",
                    "150+ Countries Covered",
                    "9 Centuries of Legal History",
                    "Federal Register from 1936",
                    "CFR from Inception (1938)",
                    "U.S. Reports from 1754",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#C4C3A4]/20 dark:bg-[#C4C3A4]/20 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="http://heinonline.org/HeinDocs/HOLBrochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-[#C4C3A4]/20 dark:hover:bg-[#C4C3A4]/20 transition-all"
                  >
                    <FileText
                      size={20}
                      className="text-[#C4C3A4] dark:text-[#C4C3A4] mr-3"
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Download Brochure
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-[#C4C3A4]/20 rounded-xl p-6 border border-[#C4C3A4]/20 dark:border-[#C4C3A4]/20">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  At HeinOnline
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  Serving the library community for nearly 90 years as a legal
                  publisher, periodical subscription agent, and the world's
                  largest distributor of legal periodicals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
