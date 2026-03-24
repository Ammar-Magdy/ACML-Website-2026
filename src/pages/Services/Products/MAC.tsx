import { Database, Mail, FileText } from "lucide-react";
import { useEffect } from "react";
import MACImage from "../../../assets/Photos/Services/Products/MAC/MAC-1.webp";
import Mac2Image from "../../../assets/Photos/Services/Products/MAC/MAC-2.webp";
import LogoImage from "../../../assets/Photos/Services/Products/MAC/Logo.webp";

import BrochurePdf from "../../../assets/PDF/Services/Products/MAC/Bourchormacfull.pdf";
import FeaturesPdf from "../../../assets/PDF/Services/Products/MAC/وصف-برنامج-الأرشف-الالكترونية-ماك.pdf";
import ExcellencePdf from "../../../assets/PDF/Services/Products/MAC/التميز-عن-الانظمة-الاخرى.pdf";
export default function MAC() {
  useEffect(() => {
    document.title = "MAC";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="sm:p-6 mb-6 w-full max-w-lg mx-auto">
            <img loading="lazy" decoding="async" src={LogoImage}
              alt="MAC System"
              className="w-full h-auto max-h-96 object-contain rounded-2xl"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            'MAC' MANAGEMENT ARCHIVES CONTENT
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@ACML-egypt.com"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Request Free Trial
              <Mail size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-12 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* WHAT IS MAC */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <Database
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    WHAT IS MAC
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p>
                    MAC (Management Archives Content) is a smart integrated
                    application designed to apply all international standards &
                    specs, which creates an accredited electronic archives
                    application, taking in consideration solving all problems
                    facing archives systems, to lead for a unique design,
                    applying the up to date sophisticated technology.
                  </p>
                  <p>
                    MAC is applying the standards of "International Standards
                    for Archival Description (ISAD) which is issued by
                    International Council of Archives (ICA), these standard
                    contains 26 fields of Meta Data related to Archives.
                  </p>
                </div>
              </div>

              {/* MAC STANDARDS */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  MAC STANDARDS
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>
                    ISO (International Standards Organization) & ICA
                    (International Council of Archives):
                  </strong>
                  <br />
                  The International Standards of ISO & ICA are applied regarding
                  the <strong>Meta Data</strong> of each Archive 22Types. User
                  starts to enter the Meta Data of each document type according
                  to the standards of ISO & ICA, Taking in consideration that
                  the whole design is <strong>dynamic</strong>. The system
                  creates a default standardized <strong>Meta Data</strong> for
                  each type of document, the default is dynamic too until the
                  client reach the optimum design for his archives types.
                </p>
              </div>

              {/* OCR */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  OCR (Optical Character Recognition)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The System is applying OCR on all digital files. And convert
                  scanned files into digital text, Search specific document
                  using keywords, Edit the scanned document in a word processing
                  program.
                </p>
              </div>

              {/* CONTENT STRUCTURING */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  CONTENT STRUCTURING
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The user defines a DYNAMIC TREE-based content of each type of
                  archive.
                </p>
              </div>

              {/* DOCUMENT CAPTURE */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  DOCUMENT CAPTURE
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The System is integrated with all types of scanners.
                  <br />
                  Client capture documents that need to be archived, or scan the
                  documents. The user browse the Meta Data form and feed the
                  data and the system will start automatically to archive them
                  into the database.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Image Editor Tool can modify the image colors and sizes, add
                  notes or annotations, cleaning the documents from any dirty or
                  affects happen to it due to bad reservation or conservation.
                </p>
                <div className="mt-4 text-center rounded overflow-hidden">
                  <img loading="lazy" decoding="async" src={MACImage}
                    alt="Document Capture"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* WEB BASE */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  WEB BASE
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The system is designed as Web Base applacation to enable users
                  & top management from following up folow of documents and
                  responsibilities ONLINE.
                </p>
              </div>

              {/* HANDLING ALL TYPES... */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  HANDLING ALL TYPES & CATEGORIES OF DOCUMENTS (22 TYPES)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The system handles all types of printed documents
                  (administrative, financial & technical … etc.) ; also all
                  types of non-printed documents, such as slides, CD,s , DVD,s,
                  Video, computer files, photos, images…. Etc. And all types of
                  digital forms.
                </p>
              </div>

              {/* INDEXING & DEPTH ANALYSIS */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  INDEXING & DEPTH ANALYSIS
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Applying indexing of ISAD, the User defines the style of
                  indexing (By Name, Date, Type, subject send by, received by,
                  organization,… etc).
                  <br />
                  After the user archives the document, the system starts to
                  make the indexing for each document according to the
                  predefined authentication glossary of indexing terms.
                </p>
              </div>

              {/* SEARCH & RETRIEVAL */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  SEARCH & RETRIEVAL
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  “Basic Search” using index words … keywords search
                  capabilities (Auto Complete Function)
                  <br />
                  “Advanced Search” by combining the various criteria defined
                  above (content, con-text, and document Meta data) plus{" "}
                  <strong>Boolean search “and/or/not”</strong> are used to reach
                  the optimum results of retrieval. The search words will be
                  highlighted in the results of combined search of full text,
                  indexing fields, document categories and folder location All
                  meta data field are used as search segments. The used keywords
                  will create an authority field for each type of keywords,
                  either name, subject, author, received unit …. Etc., which can
                  create deep analysis for the documents.
                </p>
              </div>

              {/* MULTI BRANCH */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  MULTI BRANCH
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  User starts to enter the data of each tree a Sub tree.The
                  system categorized these Tree according to managerial policy.
                  The top management can access the data easily and secured.
                  Retrieve the data filtered by branch or accumulated branches.
                </p>
              </div>

              {/* SECURITY */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  SECURITY
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Admin defines groups and users for each group.Define user
                  name and password for each user.The Admin user assigns the
                  privileges for each group.
                  <br />
                  The privilege includes system pages and page functions. When
                  login with the admin user, all pages and functions will be
                  available, when login with another limited user, only the
                  assigned privileges will be visible .
                </p>
                <div className="mt-4 text-center rounded overflow-hidden">
                  <img loading="lazy" decoding="async" src={Mac2Image}
                    alt="MAC Barcode/QR feature"
                    className="w-full h-auto rounded-lg max-w-xs mx-auto"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  BARCODE / QR the system is applying Barcode / QR to be used
                  with the documents to facilitate the reaching of retrieval
                  documents and to enumitate Quantities & types.
                </p>
              </div>

              {/* REPORTING */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  REPORTING
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Search results can be presented in form of reports,{" "}
                  <strong>MS Excel, MS Word, PDF, and HTML</strong> beside the
                  normal reports for all documents & users.
                </p>
              </div>

              {/* WEB BASED BROWSING */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  WEB BASED BROWSING
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  As the system is built on "Web Base Browsing" environment, the
                  users can use the system online through the Internet, by using
                  the security functions for user or document.
                </p>
              </div>

              {/* IMPORT & EXPORT TRANSACTIONS */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  IMPORT & EXPORT TRANSACTIONS
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Manage all import and export transactions for any type whether
                  it includes attachment and link the transactions together with
                  ability to search and retrieve any transaction
                </p>
              </div>

              {/* WORK FLOW & ASSIGN RESPONSIBILITIES */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  WORK FLOW & ASSIGN RESPONSIBILITIES
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The system is applying the work flow functions to trace the
                  document movement in the organization from the starting of
                  creating the document to storing and retrieval of it, plus the
                  flow of using and movement of the document. This function
                  enables the control of the document movement within the
                  organization.
                </p>
              </div>
            </div>

            {/* Right Column - Stats/Quick Links */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Downloads
                </h3>

                <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">
                    Please Download The PDF For More Information:
                  </p>
                  <a
                    href={BrochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium text-sm"
                  >
                    <FileText size={16} className="mr-2" />
                    MAC BROCHURE
                  </a>
                  <a
                    href={FeaturesPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium text-sm"
                  >
                    <FileText size={16} className="mr-2" />
                    Features of MAC
                  </a>
                  <a
                    href={ExcellencePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium text-sm text-right"
                    dir="rtl"
                  >
                    <FileText size={16} className="ml-2" />
                    مزايا وخصائص تتوفر في نظام الأرشيف الاليكترونى عن غيره من
                    النظم
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
