import { Award, CheckCircle, FileText } from "lucide-react";

import fieldsPdf from "../../../assets/PDF/About/Donations/KMIGrant.tsx/Fields-of-The-Grant.pdf";
import { useEffect } from "react";

export default function KMIGrant() {
  useEffect(() => {
    document.title = "KMI Grant";
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ASRT Award for KMI
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Dr. Shawky Salem Award in Knowledge Management & Informatics
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-right"
              dir="rtl"
            >
              <div className="flex items-center justify-end gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  جائزة الأستاذ الدكتور شوقي سالم في مجال ادارة المعرفة
                  والمعلوماتية
                </h2>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Award
                    className="text-purple-600 dark:text-purple-400"
                    size={20}
                  />
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-arabic">
                <a
                  href="http://www.asrt.sci.eg/ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-purple-600 hover:text-purple-700 mb-4 text-left"
                  dir="ltr"
                >
                  http://www.asrt.sci.eg/ar
                </a>

                <p className="mb-4">
                  تم الأتفاق مع أكاديمية البحث العلمي والتكنولوجيا في جمهورية
                  مصر العربية علي إنشاء جائزة سنوية باسم:
                </p>
                <p className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-2 mx-auto text-center">
                  جائزة الأستاذ الدكتور شوقي سالم
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 mx-auto text-center">
                  في مجال ادارة المعرفة والمعلوماتية
                </p>

                <p className="mb-6">
                  وقد أنشئت الجائزة في فبراير عام 2008 ويحصل عليها الفائز من
                  المتقدمين لها من جمهورية مصر العربية في{" "}
                 
                    مجالات التخصص المتعددة
                  
                  كل عام ، وأصبحت الجائزة متاحة للمهنيين المصريين منذ انشائها ،
                  وهذه دعوة لهم للتقدم لها في نوفمبر من كل عام، وتقوم لجنة تحكيم
                  منشأة من قبل الأكاديمية بتحكيم الطلبات المقدمة للجائزة لإختيار
                  الفائز.
                </p>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    1. المجالات الرئيسية للجائزة وتخصصات المتقدمين لها:
                  </h3>
                  <ul className="space-y-2 pr-4 list-decimal list-inside">
                    <li>تكنولوجيا المعلومات.</li>
                    <li>المكتبات والمعلومات.</li>
                    <li>تناول المحتوي الإلكتروني.</li>
                    <li>الأرشفة الإليكترونية وإدارة الوثائق.</li>
                    <li>إدارة المعرفة وخطط التصنيف للمعرفة البشرية.....الخ.</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    ويحق لكافة المتخصصين التقدم للجائزة ، خاصة إذا كانوا يعملون
                    في هذه المجالات الرئيسية أو المجالات التفصيلية المذكورة
                    أدناه ، وسواء كانوا يعملوا في حقل التدريس بالجامعات أو العمل
                    التنفيذي بمراكز المعلومات خاصة العلمية والتكنولوجية ، أو
                    العمل بالقطاع الخاص في تنفيذ مشروعات رائده في تقنيات
                    المعلومات.
                  </p>
                  <a
                    href={`${fieldsPdf}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="inline-flex items-center gap-2 mt-4 text-purple-600 hover:text-purple-700 text-sm font-semibold"
                  >
                    <FileText size={16} />
                    (ملحق 1 : المجالات التفصيلية للتقدم للجائزة باللغة
                    الإنجليزية)
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    2. شـــروط الجـائـزة:
                  </h3>
                  <ul className="space-y-3 pr-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-purple-500 mt-1 flex-shrink-0"
                      />
                      1 – ألا يقل السن عن 30 عام ولا يزيد عن 65 عام ، وأن لا يقل
                      المستوي الأكاديمي عن درجة الماجستير.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-purple-500 mt-1 flex-shrink-0"
                      />
                      2 – أن يكون مصري الجنسية.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-purple-500 mt-1 flex-shrink-0"
                      />
                      <div>
                        3 – أن يكون عاملا في مجالات:
                        <ul className="pr-6 mt-2 space-y-1 list-disc text-gray-600 dark:text-gray-400">
                          <li>
                            أ – التدريس في الجامعات في مجالات المعلوماتية
                            وتكنولوجيا المعلومات وادارة المعرفة البشرية وعلوم
                            المكتبات والمعلومات.
                          </li>
                          <li>
                            ب – العمل التنفيذي بمراكز المعلومات المتخصصة في
                            مجالات العلوم والتكنولوجيا.
                          </li>
                          <li>
                            ج – القطاع الخاص في مجالات تكنولوجيا المعلومات
                            والمحتوي الالكتروني.
                          </li>
                          <li>
                            د - إنجاز غير مسبوق في مجال التقنيات المتصلة بمجالات
                            الجائزة.
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-purple-500 mt-1 flex-shrink-0"
                      />
                      4 - أن لا يقل المستوي الأكاديمي التأهيلي للمتقدمين عن درجة
                      الماجستير.
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    • شروط يجب توافرها في الإنتاج العلمي المقدم للجائزة:
                  </h3>
                  <ul className="space-y-2 pr-5 list-disc text-gray-700 dark:text-gray-300">
                    <li>
                      التقدم بأخر ثلاث أبحاث علمية نشرت ويفضل أن يكون النشر علي
                      المستوي الدولي.
                    </li>
                    <li>
                      أن تكون البحوث منشورة خلال السنتين الأخيرتين مع تقديم ما
                      يثبت النشر وذلك بإحضار المجلات المحلية أو الدولية أو صورة
                      الغلاف والمحتويات ، وفي حالة التقدم بمشروع ضمن الأبحاث يجب
                      التقدم بخطاب رسمي يفيد التنفيذ خلال تلك الفترة ، وفي حالة
                      النشر الإلكتروني فلا بد من إحضار خطاب من الناشر يفيد نشر
                      البحث كاملاً وتاريخ النشر وأسماء المشاركين في البحث ،
                      وتستبعد المقالات والبحوث المقبولة للنشر ولم تنشر بعد،
                      وملخصات البحوث والكتب الدراسية.
                    </li>
                    <li>
                      في حالة الأبحاث المشتركة يجب ذكر أسماء المشتركين في البحث
                      وتحديد دور ونصيب كل مشترك في البحث.
                    </li>
                    <li>
                      بالنسبة للبحوث التي ألقيت في مؤتمرات علمية فيشترط صدور
                      كتاب المؤتمر مشتملاً علي البحوث كاملة خلال الفترة المحددة
                      وإحضاره للإطلاع أو صورة الغلاف والمحتويات ، وفي حالة نشر
                      كتاب المؤتمر علي قرص ليزر((C.D فلا بد من إحضار نسخة منه.
                    </li>
                    <li>
                      ألا يكون قد سبق تقديم إنتاجه العلمي للحصول علي نفس الجائزة
                      أو جائزة أخري ما لم يتضمن إضافة جديدة ذات قيمة.
                    </li>
                    <li>
                      ألا يتضمن الإنتاج العلمي إنتاجاً سبق للمتقدم أن حصل به علي
                      درجة علمية ( ماجستير أو دكتوراه ).
                    </li>
                    <li>
                      لا يجوز للمتقدم سحب أوراقه أو التحويل لجائزة أخري بعد
                      انتهاء الموعد المحدد للتقديم ، كما أن الإنتاج العلمي
                      المقدم لا يرد.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    3. لجـنة التـحكـيم:
                  </h3>
                  <p>
                    تحدد الأكاديمية لجنة التحكيم لهذه الجائزة من ثلاثة من
                    المتخصصين في هذه المجالات علي المستوي القومي أو العربي لفحص
                    الإنتاج الفكري المقدم من المتقدمين للجائزة ولإقرار الاختيار.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
