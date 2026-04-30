import { useEffect } from "react";
import { BookOpen, Languages, FileText, ExternalLink } from "lucide-react";

import harmattanLogo from "../../assets/Photos/Publishers/Harmattan/LOGO.webp";
import harmattanBg from "../../assets/Photos/Publishers/Harmattan/Background.webp";
import harmattanCatalog from "../../assets/PDF/Publishers/Harmattan/listeebook_bouquets.xls?url";

const categories = [
  {
    en: "Fine arts",
    fr: "Beaux-arts",
    url: "https://www.harmatheque.com/bouquet/4",
  },
  {
    en: "Communication and Linguistics",
    fr: "Communication et Linguistique",
    url: "https://www.harmatheque.com/bouquet/9",
  },
  { en: "Law", fr: "Droit", url: "https://www.harmatheque.com/bouquet/1" },
  {
    en: "Economics and management",
    fr: "Economie et management",
    url: "https://www.harmatheque.com/bouquet/2",
  },
  {
    en: "Education",
    fr: "Education",
    url: "https://www.harmatheque.com/bouquet/11",
  },
  {
    en: "History - Geography",
    fr: "Histoire - Géographie",
    url: "https://www.harmatheque.com/bouquet/3",
  },
  {
    en: "Youth",
    fr: "Jeunesse",
    url: "https://www.harmatheque.com/bouquet/13",
  },
  {
    en: "Literature",
    fr: "Littérature",
    url: "https://www.harmatheque.com/bouquet/8",
  },
  {
    en: "Philosophy",
    fr: "Philosophie",
    url: "https://www.harmatheque.com/bouquet/7",
  },
  {
    en: "Psychoanalysis - Psychology",
    fr: "Psychanalyse – Psychologie",
    url: "https://www.harmatheque.com/bouquet/14",
  },
  {
    en: "Sciences and Health",
    fr: "Sciences et Santé",
    url: "https://www.harmatheque.com/bouquet/10",
  },
  {
    en: "Human Sciences - Ethnology",
    fr: "Sciences Humaines - Ethnologie",
    url: "https://www.harmatheque.com/bouquet/6",
  },
  {
    en: "Sociology",
    fr: "Sociologie",
    url: "https://www.harmatheque.com/bouquet/6",
  },
  {
    en: "Political and social sciences",
    fr: "Sciences politiques et sociales",
    url: "https://www.harmatheque.com/bouquet/5",
  },
];

export default function PublisherHarmattan() {
  useEffect(() => {
    document.title = "L'Harmattan";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#37353E]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={harmattanBg}
            alt="L'Harmattan background"
            className="w-full h-full"
          />
          {/* Brand-Aligned Overlay */}
          <div className="absolute inset-0 bg-[#37353E]/85 mix-blend-multiply"></div>
          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={harmattanLogo}
                  alt="L'Harmattan Logo"
                  className="h-32 md:h-40 object-contain drop-shadow-2xl rounded-3xl p-4 rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              L'Harmattan
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.harmatheque.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: "#37353E" }}
              >
                Visit Harmathèque
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4"
                    style={{ backgroundColor: "#37353E" }}
                  >
                    <BookOpen size={20} />
                  </div>
                  The "Harmathèque" Platform
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium">
                    The Harmathèque platform offers online subscriptions to a
                    vast collection of digital works from L'Harmattan.
                  </p>
                  <p>
                    <strong>
                      <u>French Digital Library (FDL) - Harmattan:</u>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      An unique Digital Library from the famous French publisher
                      The HARMATTAN – Paris- France.
                    </strong>
                  </p>
                  <p>
                    <strong>The French </strong>
                    <a
                      href="https://www.harmatheque.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                      style={{ color: "#37353E" }}
                    >
                      <strong>Digital Libraray - Harmattan</strong>
                    </a>
                    <strong>
                      : is a digital multimedia platform, the Harmathèque,
                      offering 65,000 digitized books that can be consulted
                      online; 24000 articles; plenty of videos and Audio
                      produts. The Harmattan is leading the publishing in
                      French-speaking countries worldwide, concentrating on
                      humanities; social sciences &amp; history
                    </strong>
                  </p>
                  <p>
                    <strong>
                      This unique platform compound of the following categories
                      mentioned below, which is linked subject by subject to
                      Harmattan platform.
                    </strong>
                  </p>
                </div>
              </div>

              {/* FDL Categories Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#37353E] dark:text-gray-100 mb-4 flex items-center">
                  <Languages className="mr-3" />
                  FDL Harmattan Categories
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {categories.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:shadow-md transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {item.en}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                        {item.fr}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Section */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: "#37353E" }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Download Full Catalog
                </h3>
                <a
                  href={harmattanCatalog}
                  download
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: "#37353E" }}
                >
                  <FileText className="mr-2" size={20} />
                  FDL – Harmattan Total List of Books (Excel File)
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <BookOpen className="mr-2" style={{ color: "#37353E" }} />
                  About the Collection
                </h3>
                <ul className="space-y-4">
                  {[
                    "65,000+ Digitized Books",
                    "24,000 Articles",
                    "Videos & Audio Content",
                    "French-Language Focus",
                    "Humanities & Social Sciences",
                    "History & Political Sciences",
                    "Francophone Publishers",
                    "Online Consultation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#37353E" }}
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
                className="rounded-xl p-6 text-white"
                style={{ backgroundColor: "#37353E" }}
              >
                <h3 className="text-lg font-bold mb-3">At L'Harmattan</h3>
                <p className="text-sm text-white/80 italic">
                  Leading French-speaking publishing worldwide, concentrating on
                  humanities, social sciences and history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
