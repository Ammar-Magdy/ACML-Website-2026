import { useEffect } from "react";
import { Zap } from "lucide-react";

import chemLogo from "../../../assets/Photos/Publishers/ChemWatch/logo.webp";
import chemBg from "../../../assets/Photos/Publishers/ChemWatch/Background.webp";
import img1 from "../../../assets/Photos/Publishers/ChemWatch/GoldFFX.webp";
import img2 from "../../../assets/Photos/Publishers/ChemWatch/Backpack.webp";
import img3 from "../../../assets/Photos/Publishers/ChemWatch/GoldFFX.webp";
import img4 from "../../../assets/Photos/Publishers/ChemWatch/Backpack.webp";
import img5 from "../../../assets/Photos/Publishers/ChemWatch/Backpack-Limited.webp";
import img6 from "../../../assets/Photos/Publishers/ChemWatch/CHEMERITUS.webp";
import img7 from "../../../assets/Photos/Publishers/ChemWatch/COSHH-COBRA.webp";
import img8 from "../../../assets/Photos/Publishers/ChemWatch/AuthorITe.webp";
import imgSmart from "../../../assets/Photos/Publishers/ChemWatch/Smarter-Suite-App.webp";
import imgAaas from "../../../assets/Photos/Publishers/ChemWatch/Smart-AaaS-app.webp";

export default function ChemArabic() {
  useEffect(() => {
    document.title = "ChemWatch";
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300"
      dir="rtl"
    >
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section — EXACTLY like TeachingStrategiesAR (image left via flex-row-reverse in RTL) */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="p-8 md:p-12 md:w-2/3">
                <div className="flex items-center mb-6">
                  <img loading="lazy" decoding="async" src={chemLogo}
                    alt="ChemWatch Logo"
                    className="h-12 object-contain"
                  />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
                  Chemwatch SDS
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-arabic">
                  أنظمة إدارة المواد والعناصر الكيميائية مدعومة بأكبر قاعدة
                  بيانات للمواد الكيميائية في العالم.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-arabic">
                  توفر Chemwatch إدارة SDS وتأليف SDS للحفاظ على تحديث أنظمة
                  الإدارة الكيميائية الخاصة بك. تحتفظ Chemwatch بأكبر قاعدة
                  بيانات للمواد الكيميائية في العالم، مع أكثر من 3,215,992 مادة،
                  و 140 مليون SDS (ورقة بيانات السلامة)، وحلول تنظيمية كيميائية
                  تدعم المتطلبات المحلية والعالمية في أكثر من 90 دولة. تعد
                  Chemwatch الشركة الرائدة عالميًا في مجال حلول إدارة المواد
                  الكيميائية. يمنح الوصول إلى قاعدة البيانات الشاملة هذه العملاء
                  ميزة فريدة على غيرهم من مقدمي الخدمات الكيميائية.
                </p>
              </div>
              <div className="md:w-1/3 bg-yellow-50 dark:bg-yellow-900/20 flex items-stretch">
                <img loading="lazy" decoding="async" src={chemBg}
                  alt="ChemWatch Solutions"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Key Sections with Images — EXACTLY like TeachingStrategiesAR 2-grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-arabic">
                توفر{" "}
                <span className="font-bold text-yellow-600">Chemwatch</span>{" "}
                حلولاً شاملة لإدارة المواد الكيميائية، مع مجموعة من حزم البرامج
                المناسبة للشركات الصغيرة للمؤسسات العالمية. يتضمن ذلك خدمات
                البيانات وعمليات التكامل مع أنظمة تخطيط موارد المؤسسات (ERP)
                التابعة لجهات خارجية مثل SAP.
              </p>
              
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-arabic">
                ونساعد في{" "}
                <span className="font-bold text-yellow-600">Chemwatch</span>{" "}
                المؤسسات والشركات على تحسين جودة إدارتها الكيميائية من خلال
                تزويدها بأدوات SDS متكاملة وشاملة، وحلول تنظيمية تدعم المتطلبات
                المحلية والعالمية في أكثر من 90 دولة حول العالم.
              </p>
              
            </div>
          </div>

          {/* Wide Info Card — EXACTLY like TeachingStrategiesAR */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-arabic">
              وتشمل <span className="font-bold text-yellow-600">Chemwatch</span>{" "}
              الميزات التالية: إدارة SDS، والسجلات الكيميائية والبيانات،
              وتقييمات المخاطر، والتقارير والوثائق، وخدمات البيانات، ووضع
              العلامات، وأكثر من ذلك بكثير!
            </p>
            <ul className="space-y-3 mb-6 font-arabic">
              {[
                "إدارة SDS",
                "السجلات الكيميائية والبيانات",
                "تقييمات المخاطر",
                "التقارير والوثائق",
                "خدمات البيانات",
                "وضع العلامات، وأكثر من ذلك بكثير!",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Zap
                    className="ml-3 text-yellow-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section — EXACTLY like TeachingStrategiesAR */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 font-arabic">
              منتجات Chemwatch:
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 font-arabic">
              للمزيد من التفاصيل يُرجى التواصل معنا:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "GoldFFX",
                  img: img3,
                  desc: "برنامج يقدم حلول جرد المواد الكيميائية كاملة. بالإضافة إلى SDS، يتضمن ذلك تقارير تقييم المخاطر وإنشاء الملصقات والسجلات الكيميائية والبيانات.",
                },
                {
                  name: "Backpack",
                  img: img4,
                  desc: "Backpack مكتبة سهلة الاستخدام عبر الإنترنت لـ SDS الخاصة بك، مع تحديثات أسبوعية تلقائية. جربه مجانًا إذا كان لديك أقل من 50 SDS للمحافظة عليه.",
                },
                {
                  name: "Backpack Limited",
                  img: img5,
                  desc: "تجربة مجانية لحقيبة الظهر، حتى 50 مادة كيميائية. قم بإنشاء نظام جرد المواد الكيميائية الخاص بك مجانًا.",
                },
                {
                  name: "CHEMERITUS",
                  img: img6,
                  desc: "تجمع Chemeritus بين إدارة المواد الكيميائية وحلول سلسلة التوريد الشاملة. ويشمل ذلك الموافقات والتقارير والوثائق، وتكنولوجيا SiSoT، وتكامل واجهة برمجة تطبيقات خدمات الويب.",
                },
                {
                  name: "COSHH COBRA",
                  img: img7,
                  desc: "أكمل تقييمات مخاطر COSHH الشاملة في أقل من 30 ثانية!",
                },
                {
                  name: "AuthorITe",
                  img: img8,
                  desc: "AuthorITe هي الطريقة السهلة لتأليف صحيفة بيانات سلامة المواد للمنتجات التي تقوم بتصنيعها. مليئة بالمواد المصنفة مسبقًا وأدوات الاقتراح المفيدة وطريقة خطوة بخطوة.",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col font-arabic"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {product.desc}
                    </p>
                  </div>
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img loading="lazy" decoding="async" src={product.img}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Applications */}
          <div className="space-y-12 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-6 underline text-center font-arabic">
                تطبيقات الهاتف الجوال
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 font-arabic">
                Smarter Suite هو تطبيق جوال لإدارة المواد الكيميائية في
                Chemwatch. فهو يجمع بين ميزات تطبيقاتنا الحالية، SmartSuite و
                SiSoT mobile، مما يتيح إمكانية الوصول من موقع واحد. Smarter
                Suite عبارة عن متجر شامل للعملاء للوصول إلى معلومات الصحة
                والسلامة الشاملة، بما في ذلك تقييمات المخاطر، وإدارة مخزونهم
                الكيميائي، باستخدام التشفير الشريطي عبر SiSoT.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col font-arabic">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                      تطبيق Smarter Suite
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      تطبيق الهاتف المحمول الجديد الذي يجمع بين Smart Suite و
                      SiSoT Mobile في جهاز واحد. إدارة المواد الكيميائية وإدارة
                      الأصول في تطبيق واحد.
                    </p>
                  </div>
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img loading="lazy" decoding="async" src={imgSmart}
                      alt="Smarter Suite"
                      className="w-full h-full object-center"
                    />
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col font-arabic">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                      تطبيق Smart AaaS (التدقيق كخدمة)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      أداة Smart Audit as a Service الجديدة من Chemwatch هي
                      الطريقة الأسهل للتدقيق في مخزون المواد الكيميائية والمواد،
                      عن طريق إزالة الحاجة إلى إنشاء رموز شريطية خاصة متوافقة مع
                      أنظمة Chemwatch.
                    </p>
                  </div>
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img loading="lazy" decoding="async" src={imgAaas}
                      alt="Smart AaaS"
                      className="w-full h-full object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Modules & Sidebar Features — EXACTLY like TeachingStrategiesAR 4-col grid */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-arabic underline">
                وظائف ووحدات Chemwatch
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-arabic">
              {[
                {
                  title: "واجهة المستخدم وشريط الأدوات الرئيسي",
                  desc: "يتضمن جميع العناصر المرئية مثل الإعدادات والتعليم الإلكتروني والمساعدة واللغة التي يتفاعل معها المستخدمون للنظام.",
                },
                {
                  title: "لوحة البحث عن المواد وشاشة المنتج",
                  desc: "يسمح للمستخدمين بالعثور على معلومات حول المواد الكيميائية والمنتجات من خلال البحث باستخدام معايير مختلفة.",
                },
                {
                  title: "تقييم المخاطر",
                  desc: "تحدد وحدة تقييم المخاطر ما إذا كنت ستكمل تقييم المخاطر بناء على معايير منظمة العمل الدولية أو معايير الأمم المتحدة.",
                },
                {
                  title: "لوحة معلومات النظام",
                  desc: "هي أداة لتحليل البيانات، تتيح للمسؤولين والمستخدمين المميزين عرض تمثيل مرئي للمعلومات عبر تطبيقات Chemwatch.",
                },
                {
                  title: "البحث عن المواد في الجدول",
                  desc: "يمكن تخصيص هذه الأعمدة عن طريق النقر بزر الماوس الأيمن داخل الجدول. يوفر هذا الجدول موقعا مركزيا لعرض المعلومات الكيميائية.",
                },
                {
                  title: "شجرة المجلدات",
                  desc: "حيث يمكنك تخزين المواد الخاصة بك بسرعة وسهولة طرح صحائف بيانات السلامة المستخدمة من قبل مؤسستك.",
                },
                {
                  title: "اعدادات صحائف بيانات السلامة",
                  desc: "تسمح للمستخدم بتعيين نوع المعلومات التي سيتم عرضها في صحيفة بيانات السلامة وتعيين البائعين المفضلين.",
                },
                {
                  title: "منشئ التقارير",
                  desc: "تتيح هذه الاداة للمستخدم إنشاء تقرير مخصص لبيانه باستخدام كمية محدودة من البيانات من المواد. سيتم انشاء تقارير SDS من قاعدة البيانات.",
                },
                {
                  title: "نسخ صحائف بيانات السلامة",
                  desc: "بمجرد العثور على المادة الصحيحة الخاصة بنا مع رقم الـ CAS الصحيح، نحتاج إلى تحديد المادة للذهاب إلى جدول المستندات لتحديد البائع.",
                },
                {
                  title: "أرقام الأجزاء والأسماء المفضلة",
                  desc: "يمكن إعطاء الأسماء المفضلة لمواد أو مستندات بائع محددة ليتم استبدال اسم المادة في جدول البحث عن المواد.",
                },
                {
                  title: "اعدادات التصفية",
                  desc: "تسمح للمستخدمين بتحسين نتائج البحث وإدارة البيانات الكيميائية بناءا على معايير مختلفة.",
                },
                {
                  title: "وصول المستخدم",
                  desc: "تحتوي اعدادات الوصول على جميع الخطوات اللازمة لإنشاء مستخدمين جدد وتعيين الأذونات، وتحديد وصول المستخدمين إلي الموقع.",
                },
                {
                  title: "الموافقات",
                  desc: "تٌمكن الموافقات الشركات والمؤسسات من انشاء سير عمل يمكن من خلاله فحص المواد الجديدة واخضاعها للموافقات.",
                },
                {
                  title: "وحدة التوليد الموزع (D-Gen)",
                  desc: "يمكنك البحث عن مادة باستخدام لوحة الشاشة او البحث عن مادة موجودة في مجلداتك باستخدام شجرة المجلدات.",
                },
                {
                  title: "وحدة الخدمات اللوجستية (4PL)",
                  desc: "تضمن هذه الأداة النقل الآمن للبضائع من خلال تقديم ارشادات التعبئة والتغليف.",
                },
                {
                  title: "وحدة إدارة النفايات",
                  desc: "تبسيط عملية التتبع والامتثال لقواعد بيانات سلامة للنفايات، وأكودها، والتعريفات التي يقدمها الكيميائيون المعتمدون.",
                },
                {
                  title: "وحدة النظافة الصناعية",
                  desc: "رفع مستوى تقييمات المخاطر من خلال المراقبة في الوقت الفعلي، ورؤى لوحة المعلومات، والتنبيهات الفورية عندما تقترب المواقع من الحدود التنظيمية.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-100 dark:border-gray-700 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 text-yellow-600 dark:text-yellow-400 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
{/* Stats Box — EXACTLY like TeachingStrategiesAR blue box */}
          <div className="bg-gray-900 text-white rounded-3xl p-12 mb-16 text-center shadow-xl font-arabic">
            <p className="text-xl mb-8 leading-relaxed">
              أنظمة إدارة المواد والعناصر الكيميائية مدعومة بأكبر قاعدة بيانات
              للمواد الكيميائية في العالم. مع الوصول إلى أكثر من 150 مليون صحيفة
              بيانات سلامة. تستخدم منتجات وخدمات Chemwatch عالميا من قبل أكثر من
              5000 مؤسسة.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-right mt-12 bg-white/10 p-8 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  الحفاظ على أكثر من 14,500 عائلة كيميائية
                </h3>
                <p className="text-gray-300">
                  مع أكبر قاعدة بيانات للمواد الكيميائية في العالم بين يديك.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  أكثر من 3,000,000+ مادة كيميائية في مكتبتنا
                </h3>
                <p className="text-gray-300">
                  تغطية شاملة تمنح العملاء ميزة فريدة على مقدمي الخدمات الآخرين.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  مليون+ 150 صحيفة بيانات سلامة
                </h3>
                <p className="text-gray-300">
                  الحلول التنظيمية الكيميائية التي تدعم المتطلبات المحلية
                  والعالمية.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  49+ لغة · 123+ دولة
                </h3>
                <p className="text-gray-300">
                  انتشار عالمي مع 9,000+ قائمة تنظيمية يحتفظ بها الفريق المتخصص.
                </p>
              </div>
            </div>
          </div>














        </div>
      </div>
    </div>
  );
}
