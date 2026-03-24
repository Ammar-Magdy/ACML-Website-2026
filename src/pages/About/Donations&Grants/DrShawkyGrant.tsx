import { Award, FileText, Globe } from "lucide-react";

import sscgPdf from "../../../assets/PDF/About/Donations/DrShawkyGrant/winners-full-details-SSCAG.pdf";
import { useEffect } from "react";

export default function DrShawkyGrant() {
  useEffect(() => {
    document.title = "Dr. Shawky Grant";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dr. Shawky Salem Grant
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            IFLA Conference Attendance (SSCA) For Arab Librarians
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Arabic Section */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-right"
              dir="rtl"
            >
              <div className="flex items-center justify-end gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  جائزة الدكتور شوقي سالم لأخصائي المكتبات العرب
                </h2>
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <Award
                    className="text-emerald-600 dark:text-emerald-400"
                    size={20}
                  />
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-arabic">
                <p className="mb-4">
                  يعلن الاتحاد الدولي للمكتبات (إفلا) كل عام عن الفائز بالجائزة
                  السنوية المسماه:
                </p>
                <p className="font-bold text-lg text-emerald-700 dark:text-emerald-400 mb-4">
                  "جائزة الدكتور شوقي سالم لأخصائي المكتبات والمعلومات العرب"
                </p>
                <p className="mb-4">
                  لحضور المؤتمر السنوي للاتحاد الدولي للمكتبات (إفلا).
                </p>
                <p className="mb-4">
                  ويجدر الذكر أن الجائزة منشأة منذ عام 1993 وقد فاز بها اشخاص من
                  الدول العربية من جنسيات مختلفة (مصر – السودان – لبنان – فلسطين
                  – الأردن – الكويت – الإمارات العربية المتحدة- البحرين) .
                </p>
                <p className="mb-4">
                  ويقوم الاتحاد الدولي للمكتبات (إفلا) بعقد مؤتمر صحفي أثناء
                  المؤتمر للإعلان عن الجوائز والحاصلين عليها يحضره رئيس الاتحاد
                  وسكرتيره ومقدمو الجوائز والحاصلون عليها.
                </p>
                <p className="mb-6">
                  ويدعو الاتحاد الدولي للمكتبات (إفلا) المهنيين العرب إلى
                  الاستفادة من وجود هذه الجائزة الدائمة، والتقدم لها كل عام قبل
                  الموعد المحدد لانتهاء التقدم وهو نهاية يناير من كل عام.
                </p>

                <a
                  href={`${sscgPdf}#view=FitH`}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold"
                >
                  <FileText size={18} />
                  قائمة بأسماء الفائزين بجائزة دكتور شوقي سالم لأخصائي المكتبات
                </a>
              </div>
            </div>

            {/* English Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Globe
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Dr. Shawky Salem Grant
                </h2>
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                  IFLA Conference Attendance (SSCA) For Arab Librarians
                </h3>
                <p className="mb-4">
                  The International Federation for Library Associations &
                  Institutions (IFLA) will announce every year the winner of the
                  Grant named "<strong>(SSCA)</strong>", aimed to attend the
                  annual conference of The International Federation for Library
                  Associations & Institutions (IFLA).
                </p>
                <p className="mb-4">
                  This Grant is allocated for professionals in the field
                  "Library and Information Sciences" in the Arab world. The
                  Grant includes the attendance of the annual conference of the
                  IFLA Federation, in addition to the cost of tickets and
                  accommodations for the conference period. The winner must
                  prepare a report about attending the conference and the
                  benefits gained from this international gathering and send it
                  to IFLA after the conference.
                </p>
                <p className="mb-6">
                  It also should be mentioned that this Grant is organized since
                  1993 and applicants from the Arab countries of different
                  nationalities has won it so far
                  (Egypt-Sudan-Lebanon-Palestine-Jordan-Kuwait-United Arab
                  Emirates-Bahrain).
                </p>

                <a
                  href={`${sscgPdf}#view=FitH`}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold"
                >
                  <FileText size={18} />
                  Winners OF IFLA Shawky Salem Conference Attending Grant (SSCA)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
