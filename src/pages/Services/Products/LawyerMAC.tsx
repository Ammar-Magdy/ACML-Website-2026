import { Scale, FileText, Mail } from "lucide-react";
import { useEffect } from "react";

import LogoImage from "../../../assets/Photos/Services/Products/LawyerMAC/Logo.webp";
import Page4Image from "../../../assets/Photos/Services/Products/LawyerMAC/Page_4.webp";
import Page5Image from "../../../assets/Photos/Services/Products/LawyerMAC/Page_5.webp";
import Page6Image from "../../../assets/Photos/Services/Products/LawyerMAC/Page_6.webp";
import Page7Image from "../../../assets/Photos/Services/Products/LawyerMAC/Page_7.webp";
import Page8Image from "../../../assets/Photos/Services/Products/LawyerMAC/Page_8.webp";

import BrochurePdf from "../../../assets/PDF/Services/Products/LawyerMAC/L-MAC.pdf";

export default function LawyerMAC() {
  useEffect(() => {
    document.title = "Lawyer MAC";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="sm:p-6 mb-6 w-full max-w-lg mx-auto">
            <img loading="lazy" decoding="async" src={LogoImage}
              alt="Lawyer MAC System"
              className="w-full h-auto max-h-96 object-contain rounded-2xl"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            LAWYER - MANAGEMENT ARCHIVES CONTENT (L-MAC)
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@ACML-egypt.com"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Request Free Trial
              <Mail size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 py-12 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info (RTL for Arabic) */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
              {/* Definition Section */}
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700"
                dir="rtl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-slate-100 dark:bg-slate-900/30 rounded-xl ml-4">
                    <Scale
                      className="text-slate-600 dark:text-slate-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    التعريف بالبرنامج:
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p>
                    هو أحد البرامج التى تم تصميمها من مجموعة شركات اكمل ليقدم
                    الدعم والمساعدة الفنية ويوفر الوقت والجهد لمكاتب وشركات
                    المحاماه الكبري، حيث يقوم بتنظيم كل مايتعلق بنشاطات المحامى
                    المالية والادارية، فهو يتسع ليشمل كافه الاوراق القانونيه
                    الخاصة بجميع انواع القضايا وتتبع القضايا بمراحلها المتعددة (
                    من القضايا الابتدائية و الاستأناف و النقض والطعن ) وجلساتها
                    ومستنداتها وعلاقة القضية بالقضايا الاخرى، وإعلانات المحضرين
                    والتحقيقات ومتابعة التزامات المحامى الادارية حسب توقيتاتها،
                    وكذلك جلسات الخبير، ويتابع مصروفات وأتعاب القضايا
                  </p>
                  <p>
                    كما أنه يعتمد على برنامج ماك <strong>MAC</strong> كأرشيف
                    إلكترونى متكامل يحمل علية كافة المستندات الخاصة بالقضا يا
                    لإمكانية استرجاعها باسرع وقت وأقل جهد، بما يشمله برنامج
                    "ماك" من تحليل وتوصيف. وهو نظام الكتروني صمم لادارة مكاتب
                    المحاماة حيث يسمح للمدير باسناد المهام الي الموظفين بالوقت
                    والتاريخ وكل مهمة تخضع لنظام نقاط في تقييم اداء الموظفين
                    للمهام داخل المكتب. كما أن النظام يتيح أرشفة القضايا
                    والمستندات للاطلاع عليها في اي وقت واي مكان. ويوجد بالمحامي
                    الذكي نظام الجلسات الذي يتيح تحديد موعد الجلسة وتسجيل
                    تفاصيلها بما يضمن عدم فوات موعد الجلسه ويسهل اعلام العميل
                    بها
                  </p>
                  <p>
                    ويتضمن البرنامج المكتبة القانونية مدعومة باداة بحث متقدمة
                    تساعدك في الحصول على متطلباتك بسرعة ويسر
                  </p>
                  <p>بالإضافة الي العديد من المميزات الأخري داخل النظام</p>
                  <p>
                    المحامي برنامج متكامل صمم خصيصاً لادارة مكاتب المحاماة من
                    خلال الانترنت بشكل مرن وسهل وسريع ومنظم وقوي بنفس الوقت.
                    يتميز برنامج المحامي بانه برنامج ويب (Web Based Application)
                    يمكن الوصول السريع اليه في أي وقت ومن أي مكان
                  </p>
                  <p>
                    واذا كان لك موظفين خارج المكتب لا تشغل بالك المحامي يساعدك
                    في ايصال المهام اليهم أولاً بأول. هذه الخدمة تجعلك تطلع على
                    كل العمليات التي تتم داخل المكتب بأريحية تامه وهذا يزيد من
                    انتماء الموظفين وانجازاتهم . كما يساعدك المحامي في اسناد
                    المهام للموظفين بطريقة ذكية بحيث يعرف كل موظف مهامه كاملة
                    وآخر موعد للتنفيذ
                  </p>
                  <p>ويشتمل برنامج المحامى على الاتى:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>الجرائم الرئيسية</li>
                    <li>بيانات المحاكم</li>
                    <li>بيانات العملاء</li>
                    <li>بيانات الخصوم</li>
                    <li>اكواد دوائر المحاكم</li>
                    <li>اكواد انواع صفات الموكلين</li>
                    <li>اكواد انواع صفات الخصوم</li>
                    <li>اكواد طبيعة الموكلين</li>
                    <li>اكواد طبيعة الخصوم</li>
                    <li>اكواد انواع القضايا</li>
                    <li>اكواد انواع المحاكم</li>
                    <li>اكواد الجرائم</li>
                    <li>القوانين والدستور</li>
                    <li>صيغ الدعاوى</li>
                    <li>بيانات القضايا</li>
                    <li>تفاصيل القضايا</li>
                    <li>دفتر اعلان محضرين</li>
                    <li>مصاريف المحامين</li>
                  </ol>
                  <p className="mt-4">كما يشمل البرنامج على بيانات</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>الحسابات</li>
                    <li>الشهود</li>
                    <li>الوثائق المطلوبة</li>
                    <li>جلسات القضايا</li>
                    <li>خصوم الضايا</li>
                    <li>موكلين القضايا</li>
                  </ol>
                </div>
              </div>

              {/* Elements Section */}
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700"
                dir="rtl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  ويتكون هذا البرنامج من عدة عناصر يمكن تلخصها فيما يلي :
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">القائمة الرئيسية</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      وهى تضم جميع البيانات الأساسية عن كل ما يتعلق بأنواع
                      المحاكم والدوائر وأماكن تواجدها وأرقام التليفونوعنوانها
                      وأنواع الجرائم الخاصة بالقضايا وبيانات العملاء والخصوم
                      والمصاريف وغيرها من البيانات الأساسية
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">حركات القضايا</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      والتى تضم كافة البيانات المتعلقه بالقضايا ،حيت تضم بيانات
                      القضيه الاساسيه من نوع القضية وموضوعها وتاريخ بدايتها
                      ونهايتها أن وجد والحكم النهائي للقضية في حالة الانتهاء
                      منها ، كما يتم ادخال بيانات وتفاصيل اكتر عن القضية من رقم
                      القضية والمحكمة التابعه لها و المحامى المسؤول عنها وبيانات
                      الخصم و الوكيل وعناوينهم وذكر الجلسات الخاصه بالقضية
                      وتاريخها وما صدر فيها من أحكام ، والشهود أن وجد والأوراق
                      المطلوبه في كل جلسة
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">البحث</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      يقدم البرنامج إمكانية البحث البسيط عن قضية معينه سواء برقم
                      القضية أو أسم الوكيل أو الخصم أو نوع القضية وغيرها من
                      مصطلحات البحث للوصول القضيه بأسرع وقت ممكن
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">التقارير</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      يقدم البرنامج إمكانية عمل تقارير بعدد القضايا المحملة على
                      البرنامج اوبمصاريف المحاماه أو تقارير عن دفتر اعلان
                      المحضرين
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">أمن النظام</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      وهو يحدد فيه صلاحيات كل محامى ،أى يحدد من المسئول عن
                      الاضافة التعديل في القضايا المدخلة على النظام وغيرها من
                      الصلاحيات التى يقوم المسؤل بتحددها للمجموعات
                    </p>
                  </div>
                </div>
              </div>

              {/* Images Placeholders */}
              <div className="w-full">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    Page4Image,
                    Page5Image,
                    Page6Image,
                    Page7Image,
                    Page8Image,
                  ].map((imgSrc, index) => (
                    <a
                      key={index}
                      href={imgSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block h-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                        index === 0 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <img loading="lazy" decoding="async" src={imgSrc}
                        alt={`Lawyer MAC Feature ${index + 4}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Reasons Section */}
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700"
                dir="rtl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  الأسباب الرئيسية لجعل نظام إدارة البيانات والوثائق أساسى داخل
                  مؤسستك :
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>حفظ البيانات</strong> : تعد مرحلة حفظ البيانات
                    وتخزينها من أهم المراحل داخل النظام حيث تضمن عدم ضياع ملفات
                    العملاء والموظفين العاملين بالمؤسسة بالأضافة إلى التصدى
                    لعمليات الإختراق الحادثة
                  </p>
                  <p>
                    <strong>زيادة الإنتاج</strong> : عند التمكن من الوصول إلى
                    البيانات والوثائق فى أقل وقت ممكن وذلك عكس الوقت المعتاد
                    عليه عند البحث عليهم ذاتياً مما يعمل على زيادة الإنتاج
                  </p>
                  <p>
                    <strong>توفير التكاليف الزائدة</strong> : عند إمتلاك نظام
                    لإدارة البيانات والوثائق إلكترونياً ومواجهة مشكلة ما أثناء
                    دوام العمل، يعمل النظام حينها على حل تلك المشكلة فى أقل وقت
                    وبأقل تكلفة مما يعمل على تقليل الوقت والتكلفة و فقدان
                    الوثائق مثلاً لديك عدة فروع لشركتك ويتم شحن جميع المستندات
                    والأوراق بشكل يومي او اسبوعي عبر شركات الشحن مما يزيد
                    التكلفة وفرصة ضياع الأوراق او المستندات فلماذا لا تتحول الى
                    وثائق إلكترونية
                  </p>
                  <p>
                    <strong>التقليل من كم البيانات والوثائق الضائعة</strong> :
                    يعمل نظام إدارة البيانات والوثائق الإلكتروني على التقليل من
                    كم البيانات والوثائق الضائعة أو المفقودة وحفظ الملفات فى
                    أمان تام حيث يتوفر به وجود نسخة إحتياطية يمكن إستعادها عند
                    حدوث مشكلة ما أو فقد ملف أو وثيقة هامة
                  </p>
                  <p>
                    <strong>إصدار القرارات بشكل صحيح</strong> : يتم إصدار
                    القرارات بشكل صحيح عند إيجاد الوثائق والبيانات بسهولة ويسر
                    أثناء البحث عليها من خلال الصيغة الرقمية الخاصة بكل معاملة
                  </p>
                  <p>
                    <strong>تدفق المعاملات بيسر</strong> : يمكنك نظام إدارة
                    البيانات والوثائق الإلكتروني من سير عملية تدفق المعاملات
                    بيسر وأمان تام
                  </p>

                  <p className="font-bold text-lg mt-6 text-center text-emerald-600 dark:text-emerald-400">
                    وثق وأرشف مستنداتك و أدر معاملاتك الصادر و الوارد عبر أقوى
                    نظام أرشفة وإتصالات إدارية .. الادارة - بلا- أوراق
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Quick Links */}
            <div className="space-y-6 order-1 lg:order-2">
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24"
                dir="rtl"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  بيانات البرنامج
                </h3>
                <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">
                    تحميل
                  </p>
                  <a
                    href={BrochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-3 bg-slate-50 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900/30 transition-colors font-medium text-sm"
                  >
                    <FileText size={16} className="ml-2" />
                    تحميل بروشور L-MAC
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
