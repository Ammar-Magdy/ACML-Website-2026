import { useEffect } from "react";
import {
  Globe,
  Search,
  FolderOpen,
  PenTool,
  Users,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import endnoteLogo from "../../assets/Photos/Publishers/EndNote/Logo.webp";
import endnoteBg from "../../assets/Photos/Publishers/EndNote/Background.webp";

const BRAND = "#202124";

export default function PublisherEndNote() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EndNote";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={endnoteBg}
            alt="EndNote background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={endnoteLogo}
                alt="EndNote Logo"
                className="h-22 md:h-40 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              EndNote
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              The industry standard software tool for publishing and managing
              bibliographies, citations, and references on the Windows and
              Macintosh desktop.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.endnote.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                <Globe size={20} className="mr-2" /> Visit Website
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Request Quote
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
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Globe size={20} />
                  </div>
                  About EndNote
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Millions of researchers, scholarly writers, students, and
                    librarians use EndNote to search online bibliographic
                    databases, organize their references, images and PDFs in any
                    language, and create bibliographies and figure lists
                    instantly.
                  </p>
                  <div
                    className="p-6 rounded-xl border"
                    style={{
                      backgroundColor: `${BRAND}0d`,
                      borderColor: `${BRAND}33`,
                    }}
                  >
                    <p className="font-bold text-gray-900 dark:text-white mb-2">
                      ACML is the Authorized EndNote Distributor for the
                      following 23 Arab countries:
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      Afghanistan, Algeria, Bahrain, Djibouti, Egypt, Iraq,
                      Iran, Jordan, Kuwait, Lebanon, Libya, Mauritania, Moon
                      Islands, Morocco, Oman, Pakistan, Palestine, Qatar, Saudi
                      Arabia, Somalia, Tunisia, UAE, and Yemen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Search Online Databases */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Search className="mr-3" style={{ color: BRAND }} />
                  Search Bibliographic Databases
                </h2>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                  {[
                    "Search Internet databases just as easily as your local library.",
                    "Open more than 4,300 predefined connection files.",
                    "Access hundreds of remote databases (Web of Science, Ovid, PubMed, Library of Congress).",
                    "Support for MARC formats and native language libraries.",
                    "Simple search window for locating specific references.",
                    "Export directly from Web of Science, Highwire Press, Ovid, OCLC, ProQuest.",
                    "Save and load search strategies.",
                    "Drag and drop references between libraries (no importing required).",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Organize References */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FolderOpen className="mr-3" style={{ color: BRAND }} />
                  Organize References &amp; Files
                </h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {[
                    {
                      label: "Unlimited Libraries:",
                      text: "Create libraries of any size. 46 customizable reference types (Ancient Texts to Web Pages) with up to 52 fields each. Unicode support.",
                    },
                    {
                      label: "Group References:",
                      text: "Custom groups, smart groups (auto-update), and combined groups. Drag-and-drop organization.",
                    },
                    {
                      label: "Find Full Text:",
                      text: "Automatically locate and download full text PDF links to references.",
                    },
                    {
                      label: "Import & Search PDFs:",
                      text: "Extract DOI data to create records. Search contents of imported PDFs.",
                    },
                    {
                      label: "File Attachments:",
                      text: "Store up to 45 files (PDFs, images) per reference.",
                    },
                    {
                      label: "Organize Images:",
                      text: "Track charts, figures, equations with captions and keywords.",
                    },
                    {
                      label: "Customize Display:",
                      text: "Click-sort columns, choose up to 8 fields to display.",
                    },
                    {
                      label: "Preview & Edit:",
                      text: "Preview in 5,000+ styles. Quick Edit tab for modifying while viewing PDFs.",
                    },
                    {
                      label: "Import Filters:",
                      text: "Over 700 filters for online providers (Ovid, EBSCO). Create custom filters.",
                    },
                    {
                      label: "Term Lists:",
                      text: "Ensure consistent data entry with glossaries for authors, journals (biomedicine, chemistry, humanities included).",
                    },
                    {
                      label: "Global Editing:",
                      text: "Change Text, Change Field, Move Field commands for mass updates.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      <span>
                        <strong>{item.label}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cite While You Write */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <PenTool className="mr-3" style={{ color: BRAND }} />
                  Cite While You Write™
                </h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND }}
                    ></div>
                    <span>
                      <strong>Instant Bibliographies:</strong> Works in
                      Microsoft Word, Apple Pages, OpenOffice, Mathematica.
                      Citations appear as you write.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND }}
                    ></div>
                    <span>
                      <strong>Advanced Formatting:</strong> Handles tricky
                      details like shortened forms in footnotes (e.g., "Ibid."),
                      numbered text notes within bibliographies, anonymous works
                      options, hanging indent options, capitalization options
                      for authors/titles, and composite styles (number and
                      letter grouping).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND }}
                    ></div>
                    <span>
                      <strong>5,000+ Styles:</strong> Predefined styles for
                      leading journals. Create or modify styles.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND }}
                    ></div>
                    <span>
                      <strong>Word Templates:</strong> Built-in templates to
                      guide manuscript creation for publishers.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Collaborate */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="mr-3" style={{ color: BRAND }} />
                  Collaborate
                </h2>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                  {[
                    "Transfer references between desktop and Web (including attachments).",
                    "Share EndNote Web groups to simplify collaboration.",
                    "Cite from local and Web libraries in a single paper.",
                    "Organize publication lists for ResearcherID community.",
                    "Work seamlessly on desktop, Web, or both.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Get EndNote for Your Institution
                </h3>
                <p className="text-white/80 mb-6">
                  ACML is the Authorized EndNote Distributor for 23 Arab
                  countries.
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

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {[
                    "Search 4,300+ Databases",
                    "Organize References",
                    "Cite While You Write™",
                    "5,000+ Citation Styles",
                    "46 Reference Types",
                    "Find Full Text Auto",
                    "PDF Import & Search",
                    "Team Collaboration",
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
              <div
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: BRAND, borderColor: BRAND }}
              >
                <h3 className="text-lg font-bold mb-3">
                  Authorized Distributor
                </h3>
                <p className="text-sm text-white/80 italic">
                  ACML is the official EndNote distributor for 23 Arab
                  countries, providing local support and licensing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
