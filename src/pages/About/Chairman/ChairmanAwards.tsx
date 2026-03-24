import { Award, MessageSquare, Quote } from "lucide-react";
import awardPhoto1 from "../../../assets/Photos/About/Chairman/Awards/IFLA-Medal-Photo-1.webp";
import awardPhoto2 from "../../../assets/Photos/About/Chairman/Awards/IFLA-Medal-Photo-2.webp";
import awardPhoto3 from "../../../assets/Photos/About/Chairman/Awards/IFLA-Medal-Photo-3.webp";
import { useEffect } from "react";

export default function ChairmanAwards() {
  useEffect(() => {
    document.title = "Chairman Awards";
  }, []);

  const awards = [
    {
      title: "IFLA GOLDEN HONOR MEDAL",
      year: "2009",
      desc: "Presented at the 75th IFLA Conference in Milan, Italy (23-27 August 2009) at the closing session. Awarded for distinguished service to IFLA and the international library community through leadership in representation, contribution to professional literature, and support for development of the profession.",
      organization:
        "International Federation of Library Associations & Institutions (IFLA)",
    },
    {
      title: "JASON FARRADANE INTERNATIONAL AWARD",
      year: "2010",
      desc: "Awarded by UKeIG, CILIP, October 2010.",
      organization: "UKeIG, CILIP",
    },
    {
      title: "CILIP Honorary Fellow",
      year: "1982",
      desc: "For distinguished service to the international library community.",
      organization: "CILIP",
    },
    {
      title: "IFLA HONOR MEDAL",
      year: "2009",
      desc: "Milan – ITALY, 27 August 2009.",
      organization: "IFLA",
    },
  ];

  const messages = [
    {
      from: "Mohamed Benjelloun",
      role: "Rabat, Maroc",
      text: "J'ai appris avec grande joie ta décoration de la grande médaille de l'IFLA à Milan. En cette heureuse occasion, je te présente toutes mes félicitations.",
    },
    {
      from: "Alim Garga",
      role: "Bibliotheque de l'assemblee nationale du Cameroun",
      text: "Permettez moi de joindre ma modeste voix pour vous feliciter. Puisse votre professionalisme inspirer toute l'Afrique.",
    },
    {
      from: "Ellen Ndeshi Namhila",
      role: "University Librarian, University of Namibia",
      text: "When one of us stands out, we all shine.",
    },
    {
      from: "Hilda T. Nassar",
      role: "Director, Medical Librarian, American University of Beirut",
      text: "Mabrouk for the “IFLA MEDAL MILAN 2009”. You really deserve it.",
    },
    {
      from: "Dr Mayank Trivedi",
      role: "",
      text: "Definately we shall meet, pl inform me whenever you come to India",
    },
    {
      from: "Dr Mayank Trivedi",
      role: "University Librarian, Sardar Patel University, India",
      text: "Warmest congratulations! The presentation of the IFLA Medal to you. It is testimony to your long service to IFLA and your generosity to up and coming librarians. A tremendous culmination of your career!",
    },
    {
      from: "Jianzhong Wu",
      role: "Shanghai",
      text: "I wonder if you have received my congratulating message. I am so happy that you have received the honor.",
    },
    {
      from: "Mayada",
      role: "",
      text: "Hi ya walah ya Shoushou, Eh el gamal dah bas? This is amazing, you deserve it as you have dedicated all your life to this. So a thousand congratulations to you Dad!! Very proud of you and love you very much!",
    },
    {
      from: "Robert Wedgeworth",
      role: "University Librarian Emeritus, University of Illinois",
      text: "I was delighted to receive the news that you have been awarded the IFLA Medal. You certainly deserve it for all of the contributions you have made to advance the growth and development of IFLA, especially in the Middle East.",
    },
    {
      from: "Stephen Parker",
      role: "Editor, IFLA Journal",
      text: "Many congratulations! Well-deserved recognition of your many years of work on behalf of IFLA!",
    },
    {
      from: "Shivanthi Weerasinghe",
      role: "Librarian, Bank of Ceylon, Sri Lanka",
      text: "Congratulations for the accolade you received at IFLA in Milan... We always knew that you were a strength to the LIS community and an active leader in this field.",
    },
    {
      from: "Dan Dorner",
      role: "Chair, Regional Standing Committee for Asia and Oceania",
      text: "On behalf of all the members of the Regional Standing Committee for Asia and Oceania, I wish to offer congratulations to you... I have come to know and respect you for your insights on important issues, for your dedication to hard work, for your generousity to IFLA members from developing countries and for your warm personality and lively sense of humour.",
    },
    {
      from: "Nazha Hachad",
      role: "Ecole des Sciences de l'Information (ESI), Morocco",
      text: "My sincere congratulations for IFLA HONOR MEDAL MILAN 2009. You really deserve it.",
    },
    {
      from: "Ivone Talamo",
      role: "Supervisora da Biblioteca, Brazil",
      text: "It was with great joy that we have received the news about the awarding to you by IFLA of the Honor Medal. I believe that we, librarians, also feel honored... Congratulation for the Honor Medal and congratulation for your multiplicative and continuous work in behalf of the development of the profession.",
    },
    {
      from: "Ellen Ndeshi Namhila",
      role: "University Librarian, University of Namibia",
      text: "Very many congratulations to you, Shawky, for this great recognition. It attests to your great leadership quality and aptitudes. You have done us proud and please continue aspiring us all with your passion for the profession.",
    },
    {
      from: "Buhle Mbambo-Thata",
      role: "",
      text: "Congratulatins on your Award. You deserved. Welldone.",
    },
    {
      from: "Jacinta",
      role: "",
      text: "CONGRATULATIONS for the IFLA medal !!!!! That was a deserving honour. Your achievement is a pride for Africa",
    },
    {
      from: "Prof Bruce Royan",
      role: "Outgoing Secretary, IFLA AV & Multimediedia Section",
      text: "Many Congratulations Shawky: a well-deserved honour!",
    },
    {
      from: "Rosemary Gitachu",
      role: "University Librarian, Daystar University, Kenya",
      text: "My hearty congratulations to Dr. Shawky for receipt of IFLA medal award.",
    },
    {
      from: "Lindy Nhlapo",
      role: "IFLA Regional Manager for Africa",
      text: "I would like to join the ululation for Shawky receipt of the Award. Africa prides itself with you, congrats!",
    },
    {
      from: "Helena R.Asamoah-Hassan",
      role: "Member, Governing Board of IFLA",
      text: "I wish to congratulate you for your well deserved award. This shows that IFLA honours members who work hard for it.",
    },
    {
      from: "Gary (Professor G E Gorman)",
      role: "Victoria University of Wellington, New Zealand",
      text: "Please let me add a quiet personal note to congratulate you on your IFLA honour... It has always been great to have you around, to exchange views and to share laughter. YOUR award is well-deserved, my friend.",
    },
    {
      from: "Barbara Tillett",
      role: "Library of Congress",
      text: "Congratulations on a well-deserved recognition of your contributions. It was a pleasure working with you on the IFLA Governing Board.",
    },
    {
      from: "Sawsan Habre",
      role: "Lebanon",
      text: "I didn’t know that you have received an Honor Medal. ALF MABROUK !!!!!! You really deserve it... We are proud that that an Egyptian receive the Honor Medal.",
    },
    {
      from: "Dr Alex Byrne",
      role: "University Librarian, University of Technology, Sydney",
      text: "The presentation of the IFLA Medal to you before an audience of the world’s librarians is testimony to your long service to IFLA and your generosity to up and coming librarians. A tremendous culmination of your career!",
    },
    {
      from: "Professor Kanwal Ameen",
      role: "University of the Punjab, Lahore",
      text: "Accept my heartiest congratulations on this award and reward. You deserved that!",
    },
    {
      from: "Elizabeth Fong",
      role: "",
      text: "Congratulations to you on your receipt of the IFLA Medal Award. You truly deserve this as an acknowledgement of your work in the Arab library world and for SCAO which has been valued by us all.",
    },
    { from: "Frode Baken", role: "", text: "congratulations" },
    {
      from: "Rashidah Begum",
      role: "Penang, Malaysia",
      text: "Congratulations for the well-deserved award.",
    },
    {
      from: "Kai Ekholm",
      role: "Director, The National Library of Finland",
      text: "My deepest gratulations and I hope to carry on the good spirit of cooperation with you.",
    },
    {
      from: "Ibrahim Ramjaun",
      role: "Librarian, National Library of Mauritius",
      text: "I wish to congratulate you for being honored by IFLA for your valuable contribution to the profession.",
    },
    {
      from: "Marwa EL SAHN",
      role: "Head of Archive Unit, Bibliotheca Alexandrina",
      text: "I know that many colleagues in IFLA who attended will agree with me that the selection of you by IFLA was proper and appropriate as it represents your efforts with IFLA for more than 20 years. As one of your faithful students... I believe that awarding you this unique prize is not only an honor for you but for the whole professional librarians in the Arab World.",
    },
    {
      from: "Ellen Saliba",
      role: "Head Librarian, Al-Haq Library, Ramallah",
      text: "ألف مبروك.",
    },
    {
      from: "Dina Youssef",
      role: "Deputy Director, IFLA Center for Arabic Speaking Libraries",
      text: "The award you received is an honor for all Arab Librarians and you are surely the best to receive it.",
    },
  ];

  const arabicMessages = [
    {
      from: "خديجة بو خلفا",
      text: "وددت فقط دكتور من خلال هدا ايميل تهنئتك بجائزة الميدالية الذهبية الشرقية لإفلا 2009 نتمنى لك المزيد من النجاحات و التفوق.",
    },
    {
      from: "بروفسير السريحي",
      text: "هذا خبر مشرف ومفخرة لكل الاختصاصيين في مجال المكتبات والمعلومات في العالم العربي.",
    },
    {
      from: "Misa Abdelatif Abbass Ali",
      text: "مبروك الميدالية الذهبية. ان هذا التكريم يعد تكريما لكل المكتبيين العرب",
    },
    {
      from: "الدكتور جاسم محمد جرجيس",
      text: "مبروك الميدالية الذهبية. ان هذا التكريم يعد تكريما لكل المكتبيين العرب. أدامك الله ورعاك ايها ألأخ الحبيب",
    },
    {
      from: "راية احمد",
      text: "الف الف مبروك وان كان هذا النجاح ليس جديد على الدكتور موفقين دايما",
    },
    {
      from: "فكري محمد همام",
      text: "نشارككم التهنئة للبروفيسور شوقي ودائما موفقين للإتحاد وأعضاءه ومبروك",
    },
    {
      from: "أ.د. حسن عواد السريحي",
      text: "يسرني وأعضاء المكتب التنفيذي للاتحاد العربي وكافة أعضاء الاتحاد في كل مكان أن نهنئ الأستاذ الدكتور شوقي سالم بمناسبة منحه الميدالية الشرفية الذهبية للاتحاد الدولي للمكتبات (إفلا)...",
    },
    {
      from: "ثروت",
      text: "أبارك لكم بكل خالص الود والاحترام حصولكم على الميدالية الذهبية من الإفلا و هي أقل ما تستحق يا دكتور فأنتم شرف لكل عربي و مصري",
    },
    {
      from: "سعد الزهري",
      text: "أبارك لكم فيها تكريمكم من قبل الإفلا بالميدالية الشرفية الذهبية... والتي تستحقونها لما قدمتم من جهود كبيرة خلال مسيرتكم مع الاتحاد الدولي حيث كنتم صوت العرب الناطق في تلك المحافل",
    },
    {
      from: "ليانا قويدر",
      text: "سلامات ياريس أنا افتخر واعتز بك وبصداقتك... ألف مبروك وأنت بتستاهل عقبال الأكبر",
    },
    {
      from: "أ.د. حسن عواد السريحي",
      text: "أسعدني منح الإتحاد الدولي لجمعيات ومؤسسات المكتبات (إفلا) لكم الميدالية الذهبية الشرفية وتكريكم وأود بهذه المناسبة تهنئتكم وانتم أهل لذلك فجهودكم يعرفها الجميع",
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dr. Shawky Salem Awards
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Celebrating a lifetime of contribution to Library and Information
            Science
            <br />
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center flex items-center justify-center gap-3">
              <Award className="text-emerald-500" size={32} />
              Prestigious Awards
            </h2>
            <div className="grid gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-l-8 border-emerald-500 flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-full flex-shrink-0">
                    <Award
                      size={32}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {award.year}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                        {award.organization}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Image Gallery as per original HTML photo gallery */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden group">
                <img
                  loading="lazy"
                  decoding="async"
                  src={awardPhoto1}
                  alt="IFLA Medal Photo 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden group">
                <img
                  loading="lazy"
                  decoding="async"
                  src={awardPhoto2}
                  alt="IFLA Medal Photo 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden group">
                <img
                  loading="lazy"
                  decoding="async"
                  src={awardPhoto3}
                  alt="IFLA Medal Photo 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
              <MessageSquare className="text-blue-500" size={32} />
              Sample congratulations messages from all over the world
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 relative hover:shadow-lg transition-shadow"
                >
                  <Quote
                    className="absolute top-4 right-4 text-emerald-200 dark:text-emerald-900/40"
                    size={40}
                  />
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4 relative z-10 leading-relaxed">
                    "{msg.text}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {msg.from}
                    </p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      {msg.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3"
              dir="rtl"
            >
              <MessageSquare className="text-emerald-500" size={32} />
              رسائل التهنئة (Arabic)
            </h2>
            <div className="grid md:grid-cols-1 gap-6" dir="rtl">
              {arabicMessages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 relative hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-800 dark:text-gray-200 text-lg mb-4 leading-relaxed font-arabic">
                    "{msg.text}"
                  </p>
                  <div>
                    <p className="font-bold text-emerald-800 dark:text-emerald-300 font-arabic">
                      {msg.from}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
