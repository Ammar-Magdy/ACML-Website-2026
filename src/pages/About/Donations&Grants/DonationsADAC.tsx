import { Heart, FileText, Mail, MapPin, Phone } from "lucide-react";

import adacDocx from "../../../assets/PDF/About/Donations/DonationsADAC/ADAC-LIS.docx";
import { useEffect } from "react";

export default function DonationsADAC() {
  useEffect(() => {
    document.title = "Donations ADAC";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <section className="bg-emerald-900 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ACML Donations For Arab Countries (ADAC)
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Supporting the development of information infrastructure across the
            Arab world
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <Heart
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Commitment
                </h2>
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed mb-6">
                  ACML has decided to donate{" "}
                  <strong>5% of its Net Income (Profits)</strong> to fund
                  projects in Arab Organizations (Academic, Government, and
                  Corporate) across the 22 Arab countries.
                </p>
                <p className="leading-relaxed mb-6">
                  We aim to help Arab organizations improve and develop their
                  infrastructure in Library & Information Sciences (LIS). The
                  organizations will be selected according to criteria
                  established by a Regional Jury formed by ACML-Egypt.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-sm">
                    The Regional Jury will decide on the acceptance of any
                    projects and the required budget for applying these selected
                    projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                How to Apply
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="text-emerald-500" size={20} />
                    Online Submission
                  </h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      All organizations are strongly encouraged to apply using
                      our online application form.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Online applications will be acknowledged via email
                        within 24 hours.
                      </li>
                      <li>
                        If no acknowledgement is received, please resubmit.
                      </li>
                      <li>
                        All fields marked with an asterisk must be completed.
                      </li>
                    </ul>
                    <a
                      href={adacDocx}
                      download
                      className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2 w-fit"
                    >
                      <FileText size={18} />
                      Download Application Form
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="text-emerald-500 mt-1" size={20} />
                      <div>
                        <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                          Email
                        </span>
                        <a
                          href="mailto:info@ACML-egypt.com"
                          className="text-gray-900 dark:text-white hover:text-emerald-600"
                        >
                          info@ACML-egypt.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-emerald-500 mt-1" size={20} />
                      <div>
                        <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                          Postal Address
                        </span>
                        <p className="text-gray-900 dark:text-white">
                          P.O. Box 115, Al-Saray 21411
                          <br />
                          Alexandria, Egypt
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-emerald-500 mt-1" size={20} />
                      <div>
                        <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                          Fax
                        </span>
                        <p className="text-gray-900 dark:text-white">
                          +(203) 5411742
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
