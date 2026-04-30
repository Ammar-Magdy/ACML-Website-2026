import { useEffect } from "react";
import { Landmark, Book, Camera, Disc, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import locLogo from "../../assets/Photos/Publishers/Library-of-Congress/Logo.svg";
import locBg from "../../assets/Photos/Publishers/Library-of-Congress/Background.webp";

export default function PublisherLibraryOfCongress() {
  useEffect(() => {
    document.title = "Library of Congress";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section — no brand overlay per spec (None) */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-gray-900">
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={locBg}
            alt="Library of Congress background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={locLogo}
                alt="Library of Congress Logo"
                className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Library of Congress
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              The nation's oldest federal cultural institution and the largest
              library in the world.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.loc.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Learn More
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 bg-blue-900">
                    <Landmark size={20} />
                  </div>
                  About the Library
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    The Library of Congress is the nation's oldest federal
                    cultural institution and serves as the research arm of
                    Congress. It is also the largest library in the world, with
                    millions of books, recordings, photographs, maps and
                    manuscripts in its collections.
                  </p>
                  <p>
                    The Library's mission is to make its resources available and
                    useful to the Congress and the American people and to
                    sustain and preserve a universal collection of knowledge and
                    creativity for future generations. The Office of the
                    Librarian is tasked to set policy and to direct and support
                    programs and activities to accomplish the Library's mission.
                  </p>
                </div>
              </div>

              {/* Collections */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Vast Collections
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Book size={32} />,
                      title: "Books",
                      desc: "Millions of books and printed materials.",
                      color: "text-blue-600 dark:text-blue-400",
                    },
                    {
                      icon: <Camera size={32} />,
                      title: "Photographs",
                      desc: "Historic photos, prints, and drawings.",
                      color: "text-amber-600 dark:text-amber-400",
                    },
                    {
                      icon: <Disc size={32} />,
                      title: "Recordings",
                      desc: "Audio and video recordings, film, and music.",
                      color: "text-purple-600 dark:text-purple-400",
                    },
                  ].map((col, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl text-center"
                    >
                      <div className={`mx-auto mb-4 ${col.color}`}>
                        {col.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {col.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {col.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Catalog Products */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Catalog Products
                </h2>
                <a
                  href="http://catalog.loc.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    Library of Congress Online Catalog
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Search the diverse collections of the library.
                  </p>
                </a>
              </div>

              {/* CTA */}
              <div className="rounded-2xl shadow-sm p-8 text-center text-white bg-blue-900">
                <h3 className="text-xl font-bold mb-4">
                  Explore LOC Resources
                </h3>
                <p className="text-white/80 mb-6">
                  The nation's oldest federal cultural institution and the
                  largest library in the world.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  At a Glance
                </h3>
                <ul className="space-y-4">
                  {[
                    "Oldest Federal Institution",
                    "Largest Library Worldwide",
                    "Books & Printed Materials",
                    "Historic Photographs",
                    "Audio & Video Recordings",
                    "Maps & Manuscripts",
                    "Online Catalog Access",
                    "Research Arm of Congress",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm bg-blue-900">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-6 border text-white bg-blue-900">
                <h3 className="text-lg font-bold mb-3">
                  At Library of Congress
                </h3>
                <p className="text-sm text-white/80 italic">
                  Preserving universal knowledge and creativity for future
                  generations since the founding of the Republic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
