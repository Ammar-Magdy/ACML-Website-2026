import {
  User,
  Award,
  BookOpen,
  Globe,
  FileText,
  Briefcase,
} from "lucide-react";
import chairmanImg from "../../../assets/Photos/About/Chairman/Chairman.webp";
import { useEffect } from "react";

export default function ChairmanAr() {
  useEffect(() => {
    document.title = "Chairman (AR)";
  }, []);

  return (
    <div className="pt-20" dir="rtl">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            رئيس مجلس الإدارة
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            (رئيس شرفي)
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header / Bio */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-64 flex-shrink-0">
                  <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                    <img loading="lazy" decoding="async" src={chairmanImg}
                      alt="Dr. Shawky Salem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    الأستاذ الدكتور شوقي سالم
                  </h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <Award
                        className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span>
                        الحاصل علي جائزة جاسون فارادان الدولية للمعلوماتية -
                        انجلترا 2010
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <Award
                        className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span>
                        الحاصل علي الميدالية الذهبية الشرفية للاتحاد الدولي
                        للمكتبات (إفلا) ايطاليا 2009
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <Award
                        className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span>
                        الحاصل علي العضوية الشرفية لمعهد علماء المعلومات وجمعية
                        سبليب – انجلترا 1982
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <User
                    size={24}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                  السيرة الذاتية فى سطور
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify pl-4">
                  من مواليد جمهورية مصر العربية ويحمل الجنسية الكندية والمصرية .
                  حصل على السنة التمهيدية للماجستير ، ثم ماجستير في المكتبات
                  والمعلومات في تحليل المحتوى الفكري ، ودكتوراه في المعلومات
                  البترولية .
                  <br />
                  <br />
                  تشمل خبراته العلمية العديد من المناصب الإقليمية والدولية ،
                  ويعمل حالياً رئيسا شرفيا لمجلس الإدارة لمركز الإسكندرية
                  للوسائط الثقافية والمكتبات (أكمل – مصر)، وكذلك أستاذا في قسم
                  المكتبات والمعلومات - كلية الآداب – جامعة الإسكندرية، ومؤسسا
                  لقسم إدارة المعرفة والمعلوماتية - كلية الآداب - جامعة بيروت
                  العربية ، والمشرف على المكتبة العلمية المركزية لجامعة
                  الإسكندرية ، كما عمل مستشاراً فنياً لمدة عامين في مشروع إحياء
                  مكتبة الإسكندرية .
                </p>
              </div>
            </div>

            {/* International Awards & Memberships */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Award
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                الجوائز الدولية والعضوية بالجمعيات الدولية
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      الحاصل علي الجائزة الدولية للمعلوماتية " جاسون فارادان "
                    </strong>{" "}
                    – سيليب – لجنة المعلومات الالكترونية - انجلترا 2010
                    <br />
                    <a
                      href="http://www.ukeig.org.uk"
                      className="text-emerald-600 hover:underline mx-1"
                      dir="ltr"
                    >
                      www.ukeig.org.uk
                    </a>
                    <a
                      href="http://www.ukeig.org.uk/awards/jason-farradane"
                      className="text-emerald-600 hover:underline mx-1"
                      dir="ltr"
                    >
                      http://www.ukeig.org.uk/awards/jason-farradane
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      الحاصل علي الميدالية الذهبية الشرفية للاتحاد الدولي
                      للمكتبات (إفلا)
                    </strong>{" "}
                    في احتفال الجلسة الختامية ، ميلانو – ايطاليا في 27 أغسطس
                    2009
                    <br />
                    <a
                      href="http://www.ifla.org/en/honours-awards/ifla-medal"
                      className="text-emerald-600 hover:underline mx-1"
                      dir="ltr"
                    >
                      http://www.ifla.org/en/honours-awards/ifla-medal
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      الحاصل علس العضوية الشرفية لمعهد علماء المعلومات
                    </strong>{" "}
                    (انتخب في 27 سبتمبر 1988) وقد اندمج بعد ذلك في الجمعية
                    المهنية للمكتبات والمعلومات - CILIP بإنجلترا
                    <br />
                    <a
                      href="http://www.cilip.org.uk/default.cilip"
                      className="text-emerald-600 hover:underline mx-1"
                      dir="ltr"
                    >
                      http://www.cilip.org.uk/default.cilip
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    عضو الجمعية الأمريكية لعلوم المعلومات ASIS&T ، وجمعية
                    المكتبات الأمريكية ALA ، والجمعية الكندية للمكتبات CLA ،
                    والجمعية الامريكية للمعلومات والاتحاد الدولي للمكتبات IFLA ،
                    وجمعية المكتبات المهنية "سيليب" الانجليزية.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    ويشارك بنشاط في الجمعيات والاتحادات الدولية الآتية:
                    <br />
                    <span dir="ltr">
                      ALA - CLA –ASLIB – FID – IIS – IFLA - IITR - ASIS – CILIP
                      .
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Editorial Boards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FileText
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                عضوية التحرير للمجلات الدولية
              </h3>
              <ul className="space-y-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>عضو هيئة التحرير الاستشارية للمجلة الدولية:</strong>
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      INFORMATION DEVELOPMENT: THE INTERNATIONAL JOURNAL FOR
                      LIBRARIANS, ARCHIVSTS AND INFORMATION SPECIALSITS. U.K.
                    </p>
                    <p className="mt-1">
                      والتي حلت محل مجلة اليونسكو للمكتبات، الصادرة عن
                      الناشر"مانسل"، وذلك من عام 1978 حتي 1987
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>عضو هيئة التحرير الاستشارية للمجلة الدولية:</strong>
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      JOURNAL OF INFORMATION SCIENCE: PRINCIPLES & PRACTICE
                    </p>
                    <p className="mt-1">
                      وكانت منذ عام 1978 تتبع معهد علماء المعلومات IIS ثم اندمجت
                      مع جمعية المكتبات البريطانية وأصبحت تحت اسم CILIP وهي
                      الجمعية المهنية للمكتبات والمعلومات بانجلترا ، والعضوية
                      منذ إنشاء المجلة حتى الأن .
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>عضو هيئة التحرير الاستشارية للمجلة الدولية</strong>
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      MICROCOMPUTERS FOR INFORMATION MANAGEMENT: AN
                      INTERNATIONAL JOURNAL FOR LIBRARY AND INFORMATION SERVICES
                    </p>
                    <p className="mt-1">
                      التي يصدرها الناشر "أبليكس" - نيوجرسي - الولايات المتحدة
                      الأمريكية من عام 1989 حتى 1998 .
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>
                      عضو هيئة التحرير الاستشارية الدولية لمجلة المستخلصات
                      العالمية:
                    </strong>
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      LIBRARY AND INFORMATION SCIENCE ABSTRACTS (LISA)
                    </p>
                    <p className="mt-1">
                      التي يصدرها الناشر العالمي "Bowker" CSA في إنجلترا من عام
                      1989 حتى الآن .
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>
                      عضو هيئة التحرير الاستشارية الدولية لمجلة الاتحاد الدولي
                      للتوثيق والمعلومات "FID :"
                    </strong>{" "}
                    من عام 1992 حتى عام 2000.
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      INTERNATIONAL FORUM ON INFORMATION AND DOCUMENTATION
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>
                      عضو هيئة التحرير الاستشارية الدولية للمجلة الصادرة عن
                      الناشر العالمي EMERALD :
                    </strong>{" "}
                    منذ عام 2001 وحتي عام 2006
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      (THE ELECTRONIC LIBRARY (TEL)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>
                      مستشار التحرير للمجلة الدولية الصادرة عن جامعة البرتا -
                      كندا من 2010 حتي الان :
                    </strong>
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      Evidence Based Library and Information Practice (EBLIP)
                    </p>
                    <a
                      href="http://ejournals.library.ualberta.ca/index.php/EBLIP"
                      className="text-emerald-600 hover:underline"
                      dir="ltr"
                    >
                      http://ejournals.library.ualberta.ca/index.php/EBLIP
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>
                      عضو هيئة التحرير الاستشارية الدولية للمجلة الصادرة عن
                      الناشر العالمي ELSEVIER باسم:
                    </strong>
                    <p
                      className="font-semibold text-emerald-700 dark:text-emerald-300"
                      dir="ltr"
                    >
                      - The International Journal of Informatics and
                      Communication (IJIC), BANY SUIEF UNIVERSIT, EGYPT, 2015-
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* International Activities */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Globe
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                الأنشطة الدولية المميزة
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
                تقلد العديد من المناصب الدولية المميزة في مجال المعلومات من
                أهمها :
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>عضو مجلس ادارة "الفهرس العربي الموحد"</strong> (
                    Arab Union Catalog (AUC) ) وهو المشروع الذي يقوم مقام OCLC
                    في المنطقة العربية وذلك منذ عام 2008 .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>منظم المجمع الانتخابي لدول العالم الثالث</strong>{" "}
                    IFLA – TWCC " الأن قسم 8 في الاتحاد الدولي للمكتبات .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      رئيس الهيئة الإقليمية لمنطقة شمال أفريقيا والشرق الأدنى
                    </strong>{" "}
                    FID/NANE " ، "{" "}
                    <strong>
                      عضو المجلس التنفيذي للاتحاد الدولي للتوثيق والمعلومات
                    </strong>{" "}
                    (FID)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      عضو اللجنة الدولية لحرية تداول المعلومات وحرية التعبير
                    </strong>{" "}
                    IFLA - FAIFE .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      أول عربي ينتخب (2003 – 2007 ) عضوا للمجلس التنفيذي للاتحاد
                      الدولي للمكتبات (إفلا)
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      رئيس فرع الشرق الأوسط للاتحاد الدولي لموردي الدوريات
                    </strong>{" "}
                    (ASA)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      عضو اللجنة الاستشارية الدولية للمؤتمر الدولي الثالث عشر
                      والرابع عشر والخامس عشر للمعلومات المباشرة لندن – ديسمبر
                      1989 ، 1990 ، 1991 ،
                    </strong>
                    <br />
                    <span dir="ltr">
                      13,15 , 14, INTERNATIONAL ONLINE INFORMATION CONFERENCE
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      محرر السلسلة العربية الأولى المسماة "سلسلة المعلومات
                      والحاسب الإلكتروني"
                    </strong>{" "}
                    الصادرة عن مركز الإسكندرية للوسائط الثقافية والمكتبات وصدر
                    عنها حتى الآن سبعة عشرة كتاب .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>محرر سلسلة "أسليب للمعرفة"</strong> وهي سلسلة هامة
                    تمت بالاتفاق علي ترجمتها بين مؤسسة "أسليب" البريطانية ومركز
                    الإسكندرية للوسائط الثقافية والمكتبات وهي في مجال تناول
                    تقنية المعلومات وتشمل 52 عنوان صدر منها اثني عشر كتاب حتى
                    الآن .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      عمل مستشاراً للعديد من الهيئات الدولية والعربية
                    </strong>{" "}
                    وعلى رأسها اليونسكو الدولية واليونسكو العربية وجامعة الدول
                    العربية . عدا الكثير من الهيئات الدولية والهيئات العربية
                    المختلفة.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>محاضر مشارك في عشرات الدورات التدريبية</strong>{" "}
                    وانتدب سبع سنوات لتدريس مقرر "ميكنة المكتبات ومراكز
                    المعلومات" بكلية التربية الأساسية بالهيئة العامة للتعليم
                    التطبيقي والتدريب بالكويت .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      عضو ورئيس ومستشار خاص اللجنة الدائمة لمنطقة آسيا
                      والاقيانوسيا – الاتحاد الدولي لمؤسسات المكتبات
                    </strong>{" "}
                    IFLA منذ عام 1988 .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>عضو لللجان الدولية الآتية في إفلا :</strong>
                    <ul className="list-disc pr-6 mt-1 space-y-1">
                      <li>اللجنة الدائمة لأفريقيا منذ 2000.</li>
                      <li>اللجنة الدائمة لآسيا منذ 1992.</li>
                      <li>
                        اللجنة الدولية لحرية تداول المعلومات وحرية التعبير منذ
                        1998.
                      </li>
                      <li>اللجنة الدائمة لتكنولوجيا المعلومات .</li>
                      <li>
                        عضو اللجنة الدائمة للمكتبات الطبية والبيولوجية – الاتحاد
                        الدولي لمؤسسات المكتبات IFLA منذ عام 1989 حتي 1995.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      ضابط الاتصال للمنطقة العربية للكونسرتيوم الأوربي لمستشاري
                      المعلومات:
                    </strong>{" "}
                    منذ عام 1989.
                    <br />
                    <span dir="ltr">
                      EUROPEAN CONSORTIUM OF INFORMATION CONSULTANTS (GAVEL)
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      مستشار المنظمة العربية للتربية والثقافة والعلوم (اليكسو)
                    </strong>{" "}
                    في إصدار الطبعة العربية الأولى من (تصنيف ديوي العشري ) .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>مقرر مشروع الموسوعة الطبية العربية</strong> – مشروع
                    مشترك بين المركز العربي للوثائق والمطبوعات الصحية ومؤسسة
                    الكويت للتقدم العلمي 1985 – 1990.
                  </span>
                </li>
              </ul>
            </div>

            {/* Conferences and Publications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                المؤتمرات والانتاج الفكري
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>حضر 480 مؤتمرا ولقاءا دوليا وعربيا</strong> في مجال
                    المعلومات وشارك في معظمها بالأبحاث وأوراق العمل ورئاسة
                    الاجتماعات .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>له إنتاج أدبي غزير يتمثل في :</strong> خمسة أعمال
                    مرجعية شاملة – خمسة عشر كتاب: اثنان منها نشرا في هولندا
                    وإحدى عشر نشروا بالكويت ومصر – وأثنين وتسعون مقالاً منشورة
                    في المجلات الدولية الأجنبية المهتمة بالمعلومات – إضافة إلى
                    57 بحث مقدم إلى المؤتمرات والندوات الدولية – وعشرات التقارير
                    والدراسات والأبحاث.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>يصدر سلسلتان من المطبوعات كمحرر علمي لهما،</strong>{" "}
                    وهما علي النحو التالي :
                  </span>
                </li>
              </ul>

              <div className="mt-6 pr-4">
                <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                  سلسلة المعلومات والحاسب الالكتروني :
                </h4>
                <ul
                  className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300"
                  dir="ltr"
                >
                  <li>Information Systems & Networks 1986, 1999</li>
                  <li>Information Integrity & Privacy 1990, 2000.</li>
                  <li>Microfilm Technology 1987.</li>
                  <li>
                    The Design of Library Systems Based on Computer 1987, 1999.
                  </li>
                  <li>
                    Information and Computer Systems: Systems Analysis, Systems
                    Design, Systems. Implementation & Systems Evaluation. 1995,
                    2005.
                  </li>
                  <li>
                    Information Resources in Mass Communication & Mass Media
                    1989.
                  </li>
                  <li>Information Industry 1990, 1997, 2000, 2007.</li>
                  <li>
                    Organization and Administration of Computers and Information
                    centers 1992, 1998.
                  </li>
                  <li>Collection Development 1993, 2003.</li>
                  <li>Integrated Electronic Library. 2001.</li>
                  <li>
                    Introduction to Computer Science for Librarians. 2002.
                  </li>
                  <li>
                    Reference in Integrated Library Automation Systems.2003.
                  </li>
                  <li>Introduction to DDC. With the agreement of OCLC 2004.</li>
                  <li>Anthology basics of Information Science. 2008.</li>
                </ul>

                <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 mt-6">
                  سلسلة اسليب للمعرفة ، بالاتفاق مع مؤسسة اسليب الالنجليزية :
                </h4>
                <ul
                  className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300"
                  dir="ltr"
                >
                  <li value="3">
                    Performance Measurement in Library & Information Services.
                  </li>
                  <li>
                    E-mail For Library & Information Services Professional.
                  </li>
                  <li>CD-ROM: How to set up your workstation.</li>
                  <li>EIectronic information Resources Selection.</li>
                  <li>Managing Library Automation.</li>
                  <li>Installing a Local Area Network.</li>
                  <li>
                    Strategic Planning for Library and Information Services.
                  </li>
                  <li>Assessing Information Needs: Tools and Techniques.</li>
                </ul>
              </div>

              <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>
                    يعتبر من الرواد العرب في إنشاء المكانز ثنائية اللغة :
                  </strong>{" "}
                  حيث أنشأ : " المكنز العربي للأنشطة الاجتماعية والاقتصادية
                  والسياسية ATSEPA " لمجلس الوزراء – دولة الكويت . وأنشأ "المكنز
                  النفطي العربي APT " لمعهد النفط العربي للتدريب التابع لمنظمة
                  الأقطار العربية المصدرة للبترول (أوابك) . وهي من التجارب
                  الرائدة في العالم العربي .
                </p>
              </div>
            </div>

            {/* Grants and Donations */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Briefcase
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                المنح والجوائز والتبرعات
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      مؤسس "منحة الدكتور شوقي سالم لتدريب أخصائي المكتبات
                      والمعلومات العرب"
                    </strong>{" "}
                    وهي منحة سنوية دائمة بدأت منذ عام 1992 بالاتفاق مع الاتحاد
                    الدولي لمؤسسات ومعاهد المكتبات (IFLA) والاتحاد الدولي
                    للتوثيق و المعلومات (FID) لتدريب أحد المهنيين العرب في أحد
                    مراكز المعلومات بالدول المتطورة لمدة أسبوعين إما في الولايات
                    المتحدة الأمريكية ، أو كندا ، أو أوروبا ، وذلك على نفقة
                    المنحة شاملة السفر والإقامة ، وحاليا- منذ عام 2002- لحضور
                    المؤتمر السنوي للاتحاد الدولي للمكتبات من قبل أحد المتخصصين
                    العرب، ويشكل الإتحاد الدولي للمكتبات لجنة تحكيم للمتقدمين
                    لهذه المنحة ويعلن عنها سنويا في مؤتمر الاتحاد .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      مؤسس "منحة الدكتور شوقي سالم لادارة المعرفة والمعلوماتية"
                    </strong>{" "}
                    وهي منحة سنوية دائمة بدأت منذ عام 2007 بالاتفاق مع أكاديمية
                    البحث العلمي والتكنولوجيا بمصر .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      تبرع بمكتبته الخاصة في مجال المعلومات الي جامعة حلوان
                    </strong>{" "}
                    التي خصصت لها قاعة مستقلة تحمل اسمه وتحوي اكثر من عشرين الف
                    عنوان في مجال المعلوماتية وتكنولوجيا المعلومات في مجال
                    المكتبات .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>
                    <strong>
                      مؤسس "منحة الدكتور شوقي سالم "المكتبي المصري المتميز"
                    </strong>{" "}
                    وهي منحة سنوية دائمة بدأت منذ عام 2015 بالاتفاق مع الجمعية
                    المصرية للمكتبات، لمنح جائزة ودرع ومبلغ من المال الي المكتبي
                    الذي يتم اختياره كل عام.{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
