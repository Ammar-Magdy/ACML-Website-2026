import { Link } from "react-router-dom";
import { FileText, Download, Globe } from "lucide-react";
import chairmanImg from "../../../assets/Photos/About/Chairman/Chairman.webp";
import arabicCV from "../../../assets/PDF/About/Chairman/Arabic-CV.pdf";
import englishCV from "../../../assets/PDF/About/Chairman/English-CV.pdf";
import { useEffect } from "react";

export default function Chairman() {
  useEffect(() => {
    document.title = "Chairman";
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chairman</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Prof. Dr. Shawky Salem
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-64 flex-shrink-0">
                <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                  <img loading="lazy" decoding="async" src={chairmanImg}
                    alt="Dr. Shawky Salem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Dr. Shawky Salem
                </h2>
                <div className="space-y-4">
                  <Link
                    to="/about/chairman/ar"
                    className="flex items-center justify-center md:justify-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors group border border-gray-200 dark:border-gray-700 w-full md:w-auto"
                  >
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                      <Globe
                        className="text-emerald-600 dark:text-emerald-400"
                        size={20}
                      />
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                      View Full Profile in Arabic
                    </span>
                    <Globe
                      className="ml-auto text-gray-400 group-hover:text-emerald-500"
                      size={18}
                    />
                  </Link>

                  <a
                    href={`${arabicCV}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="flex items-center justify-center md:justify-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors group border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                      <FileText
                        className="text-emerald-600 dark:text-emerald-400"
                        size={20}
                      />
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                      Download Brief CV in Arabic
                    </span>
                    <Download
                      className="ml-auto text-gray-400 group-hover:text-emerald-500"
                      size={18}
                    />
                  </a>

                  <a
                    href={`${englishCV}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="flex items-center justify-center md:justify-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors group border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                      <FileText
                        className="text-emerald-600 dark:text-emerald-400"
                        size={20}
                      />
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                      Download Brief CV in English
                    </span>
                    <Download
                      className="ml-auto text-gray-400 group-hover:text-emerald-500"
                      size={18}
                    />
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
