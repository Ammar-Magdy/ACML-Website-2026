import { Gift, Award, BookOpen, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import sscgPdf from "../../../assets/PDF/About/Donations/SSCG-winners-full-details-1992_2025.pdf";
import kwiPdf from "../../../assets/PDF/About/Donations/KWI-ASRT-SS.pdf";
import ielPdf from "../../../assets/PDF/About/Donations/Ideal-Egyptian-Librarian-(IEL).pdf";
import ielterms from "../../../assets/PDF/About/Donations/Terms&Conditions.pdf";
import { useEffect } from "react";

export default function DonationsGrantsMaster() {
  useEffect(() => {
    document.title = "Donations & Grants";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Donations & Grants
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Supporting the library community through grants, awards, and
            initiatives
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-8">
            {/* 1. General Donations */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    1. Donations
                  </h3>
                  <Link
                    to="/about/donations-grants/donations"
                    className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center gap-2 mt-2"
                  >
                    View Details <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Dr. Shawky Salem Grant */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    2. IFLA Grant to attend the annual conference
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Dr. Shawky Salem Grant (SSCG)
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/about/donations-grants/dr-shawky-grant"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-2"
                    >
                      View Grant Details <ExternalLink size={16} />
                    </Link>

                    <a
                      href={`${sscgPdf}#view=FitH`}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center gap-2 text-sm"
                    >
                      <FileText size={16} />
                      SSCG winners full details 1992-2025
                    </a>

                    <a
                      href="http://www.ifla.org/funds-grants-awards/SSCG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center gap-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      IFLA SSCG Grant Application
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. ASRT Award (KMI) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award
                    className="text-purple-600 dark:text-purple-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    3. ASRT Award for KMI
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/about/donations-grants/kmi-grant"
                      className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center gap-2"
                    >
                      View Award Details <ExternalLink size={16} />
                    </Link>
                    <a
                      href={`${kwiPdf}#view=FitH`}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center gap-2 text-sm"
                    >
                      <FileText size={16} />
                      KWI ASRT SS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. ADAC-LIS Grant */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen
                    className="text-orange-600 dark:text-orange-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    4. ADAC-LIS Grant
                  </h3>
                  <Link
                    to="/about/donations-grants/adac"
                    className="text-orange-600 dark:text-orange-400 font-medium hover:text-orange-700 dark:hover:text-orange-300 inline-flex items-center gap-2 mt-2"
                  >
                    View Details (ACML Donations) <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Ideal Egyptian Librarian */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award
                    className="text-teal-600 dark:text-teal-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    5. Ideal Egyptian Librarian (IEL)
                  </h3>
                  <a
                    href={`${ielPdf}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center gap-2 mt-2"
                  >
                    <FileText size={16} />
                    View PDF Document
                  </a>

                  <a 
                    href={`${ielterms}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center gap-2 mt-2 ml-4 "
                  >
                    <FileText size={16} />
                    Terms of Reference for the Ideal Egyptian Librarian Award (IEL)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
