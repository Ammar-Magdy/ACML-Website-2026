import { useEffect } from "react";
import { Book, Monitor, Layers, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import primalLogo1 from "../../assets/Photos/Publishers/Primal-Pictures/Logo-1.svg";
import primalLogo2 from "../../assets/Photos/Publishers/Primal-Pictures/Logo-2.svg";
import primalBg from "../../assets/Photos/Publishers/Primal-Pictures/Background.webp";

const BRAND = "#E84E0F";

const packages = [
  {
    name: "Premier Library Package",
    desc: "Comprehensive package with 50+ titles",
  },
  {
    name: "Human Anatomy Package",
    desc: "Regional, Systemic, and Interactive Human",
  },
  {
    name: "Dentistry Package",
    desc: "Dentistry, Dental Hygiene, Real-time 3D",
  },
  {
    name: "Sports & Rehab",
    desc: "Functional Anatomy, Resistance Training, Yoga, Pilates",
  },
  { name: "Pelvic Health", desc: "Male & Female Pelvis, Urology" },
  { name: "Regional Anatomy Series", desc: "Focused regional anatomy titles" },
];

export default function PublisherPrimalPictures() {
  useEffect(() => {
    document.title = "Primal Pictures";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={primalBg}
            alt="Primal Pictures background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="bg-white rounded-2xl p-4 drop-shadow-2xl flex flex-col items-start gap-2">
                <img loading="lazy" decoding="async" src={primalLogo1}
                  alt="Primal Pictures"
                  className="h-6 md:h-10 object-contain"
                />
                <img loading="lazy" decoding="async" src={primalLogo2}
                  alt="Powering Anatomy.TV"
                  className="h-3 md:h-5 object-contain"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Primal Pictures
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.primalpictures.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                Visit Website
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
              {/* Anatomy & Physiology Online */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Book size={20} />
                  </div>
                  Anatomy &amp; Physiology Online
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="font-semibold">– Laying the foundations!</p>
                  <p>
                    <strong>
                      Make learning anatomy and physiology more engaging and
                      effective for your students with Anatomy &amp; Physiology
                      Online!
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Published as 19 comprehensive modules based on a body
                      system approach:
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Body Plan &amp; Organization – Homeostatis – Chemistry –
                      Cell Biology – Histology – Integumentary – Skeletal –
                      Muscular – Nervous – Special Senses – Endocrine – Blood –
                      Cardiovascular – Lymphatics &amp; Immunity – Respiratory –
                      Digestive – Metabolism – Urinary – Fluid, Electrolyte
                      &amp; Acid-Base Balance – Reproductive.
                    </strong>
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Each module has been designed to function as a stand-alone
                      resource – as well as part of a compressive program - so
                      students can work through modules in the order that best
                      fits with the curriculum of their particular course
                    </p>
                  </div>
                </div>
              </div>

              {/* Anatomy.tv */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Monitor className="mr-3" style={{ color: BRAND }} />
                  Anatomy.tv
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    <strong>
                      – Enhancing teaching and learning for hundreds of health
                      science programs.
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Engaging – Easy to use – Accurate – Comprehensive –
                      Flexible – Fun
                    </strong>
                  </p>
                  <p>
                    Anatomy.tv utilizes Primal's renowned library of accurate
                    and engaging 3D anatomy models to convey complex anatomy in
                    an easy-touse and interactive format. This fabulous 3D
                    anatomy is complemented and given context by a vast library
                    of other content – labeled dissection slides, clear and easy
                    to use biomechanics and muscle function animations,
                    annotated illustrations, movie clips of surgical procedures,
                    treatment and rehabilitation, clinical photographs, MRI
                    linked to cross sectional anatomy and more! From detailed
                    and accurate regional and system based anatomy models to
                    specialty specific titles for dentistry, speech language
                    pathology, kinesiology, surgery and therapy there is an
                    array of titles to suit hundreds of medical and health
                    science courses.
                  </p>
                  <ol className="space-y-3 list-decimal list-inside text-gray-600 dark:text-gray-400">
                    <li>
                      <strong>
                        Faculty has access to literally thousands of accurate
                        images, slides, illustration, animations and movies to
                        enhance and enliven lectures.
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Students can learn and revise more effectively using the
                        wide variety of engaging multimedia content including
                        interactive, fully labeled 3D anatomy models – anytime,
                        anywhere.
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Easily accessible through a login and password or IP
                        address anatomy.tv can be made available wherever and
                        whenever it is needed – for class or lab use, preparing
                        lectures, for study and revision.
                      </strong>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Primal Interactive Human */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Layers className="mr-3" style={{ color: BRAND }} />
                  Primal Interactive Human
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The Real-time 3D Body spanning 11 detailed regional models:
                  Head &amp; Neck, Spine, Shoulder, Hand, Thorax, Abdomen,
                  Pelvis (Male/Female), Hip, Knee, and Foot &amp; Ankle.
                </p>
              </div>

              {/* Available Packages */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Available Packages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg p-4 border"
                      style={{
                        borderColor: `${BRAND}33`,
                        backgroundColor: `${BRAND}0d`,
                      }}
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {pkg.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {pkg.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Formats */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Available Formats
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Products are available as Online Subscriptions (Anatomy.tv),
                  as well as through institutional licensing arrangements to
                  suit the needs of universities, medical schools, and health
                  science programs worldwide.
                </p>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Explore Primal Pictures
                </h3>
                <p className="text-white/80 mb-6">
                  The world's leading provider of 3D anatomy content for medical
                  and health science education.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: BRAND }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Key Products
                </h3>
                <ul className="space-y-4">
                  {[
                    "Anatomy & Physiology Online",
                    "Anatomy.tv",
                    "Primal Interactive Human",
                    "3D Dental Anatomy",
                    "Speech Language Pathology",
                    "Kinesiology & Sports",
                    "Surgery Specialty Titles",
                    "Real-time 3D Regional Models",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm"
                        style={{ backgroundColor: BRAND }}
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
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: BRAND, borderColor: BRAND }}
              >
                <h3 className="text-lg font-bold mb-3">At Primal Pictures</h3>
                <p className="text-sm text-white/80 italic">
                  Established in 1991 with the goal of creating the only
                  complete and medically accurate 3D model of the human anatomy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
