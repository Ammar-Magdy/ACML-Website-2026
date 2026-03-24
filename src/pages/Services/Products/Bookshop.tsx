import { ShoppingBag, Layout, Mail, FileText } from "lucide-react";
import { useEffect } from "react";

import LogoImage from "../../../assets/Photos/Services/Products/Bookshop/Logo.webp";
import BrochurePdf from "../../../assets/PDF/Services/Products/Bookshop/Mbc-Bourchore-Full.pdf";

export default function Bookshop() {
  useEffect(() => {
    document.title = "Bookshop";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="sm:p-6 mb-6 w-full max-w-sm mx-auto">
            <img loading="lazy" decoding="async" src={LogoImage}
              alt="MBC System"
              className="w-full h-auto max-h-96 object-contain rounded-2xl"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            'MBC' MANAGEMENT BOOKSHOPS CONTENT
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-8">
            'MBC' Management Bookshops Content
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Placeholder for free_price.png and free_trail.png links */}
            <a
              href="mailto:info@ACML-egypt.com"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              {/* WHAT IS MBC Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                    <ShoppingBag
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    WHAT IS MBC
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p>
                    The Alexandria Center for Media and Libraries (ACML) to
                    build this system to serve the sale of books and stationery
                    supplies libraries, this Knowing that many bookshops in
                    Egypt and the Arab world in need Severe for such electronic
                    software, which manages and controls the libraries Sales,
                    and provide appropriate reports, and of course the program
                    applies all specifications Global required for this kind of
                    libraries and the program works on environment Web Hosting
                    and on the base of Microsoft, also deals with all programs
                    Windows in Arabic and English, which is the basis
                    Alalangelazah work.
                  </p>
                </div>
              </div>

              {/* Work Area Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <Layout
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Work Area
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p>
                    Place an order to allow the selling points libraries operate
                    in a regulated environment, through the system cover Of all
                    daily transactions, sales, purchases, stores, returns,
                    financial control. The system works by focusing on the
                    organization and help improve profits and success factors
                    And planning and control, as does meet all the daily
                    requirements and all work related to the Library Easily the
                    sale, adding that the system implements all international
                    specifications and standards.
                  </p>
                </div>
              </div>

              {/* Features and characteristics Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Features and characteristics of the system
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  MBC provides sales and POS to improve its system through the
                  following features.
                </p>
                <div className="space-y-2">
                  {[
                    "1- Multi Branches.",
                    "2- Security system.",
                    "3- Sales.",
                    "4- Purchases.",
                    "5- Returns for (customers and suppliers).",
                    "6- Stores Managment.",
                    "7- Reports.",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Features Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  General Features
                </h3>
                <div className="space-y-2">
                  {[
                    "1- Language program in English and Arabic supports.",
                    "2- The possibility of sales tax expense ratios discount automatically.",
                    "3- system software supports Barcode & QR.",
                    "4- The program works in more than one branch.",
                    "5- The software environment is the Web.",
                    "6- Take into account international standards and working environment in Egypt and Arab countries.",
                    "7- Base programs and data SQL & MYSQL.",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Quick Links */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Downloads
                </h3>

                <div className="space-y-3">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">
                    Please Download The PDF For More Information:
                  </p>
                  <a
                    href={BrochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors font-medium text-sm"
                  >
                    <FileText size={16} className="mr-2" />
                    MBC BROCHURE
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
