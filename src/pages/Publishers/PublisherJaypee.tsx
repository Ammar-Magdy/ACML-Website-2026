import { useEffect } from "react";
import { Book, Video, FileText, Globe, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import jaypeeLogo from "../../assets/Photos/Publishers/Jaypee/jaypee.webp";
import jaypeeBg from "../../assets/Photos/Publishers/Jaypee/Background.webp";

const BRAND = "#853282";

export default function PublisherJaypee() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Jaypee";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={jaypeeBg}
            alt="Jaypee background"
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
              <img loading="lazy" decoding="async" src={jaypeeLogo}
                alt="Jaypee Logo"
                className="h-20 md:h-40 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Jaypee Digital
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.jaypeedigital.com/"
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
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 text-white flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Book size={20} />
                  </div>
                  About Jaypee
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Jaypeedigital is powerful, unparalleled comprehensive online
                    health science platform for health care practitioners,
                    educators, researchers and students encompassing array of
                    medical resource in the form of reference works, textbooks,
                    videos, MCQs and journals. Jaypeedigital content reflect
                    current, evidence based and expert information covering
                    clinical diagnosis, laboratory studies, state-of-the-art
                    surgical procedures, clinical techniques and cutting edge
                    high quality videos from the best minds in the industry
                    across the globe.
                  </p>
                  <p>
                    With Jaypeedigital, medical libraries can build a high
                    quality collection of clinical and allied health science
                    content from growing list of scholarly and award winning
                    titles from Jaypee covering a broad range of medical,
                    dentistry, nursing and allied health sciences subjects to
                    meet the diverse need of health science students,
                    academicians and professionals.
                  </p>
                </div>
              </div>

              {/* E-Book Collection */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Book className="mr-3" style={{ color: BRAND }} />
                  E-Book Collection
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    "800+ textbooks for medicine, dentistry, and nursing.",
                    "2200+ Professional and Reference books from the best minds in the industry.",
                    "Thousands of MCQs, SBAs, SCE and other preparatory books like USMLE, MRCP, FRCS, hands on guides to laboratory studies, clinical diagnosis and experimental techniques.",
                    "Personalized features: bookmarking, notes, export.",
                    "Convenient and instant access to book content wherever and whenever needed.",
                    "Titles regularly reviewed by Doody's and international top class peer reviewed journals.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Surgical Videos */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Video className="mr-3" style={{ color: BRAND }} />
                  Surgical Videos
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    "4000+ high-quality videos of surgical procedures.",
                    "Specialties covered include cardiology, dermatology, obstetrics and gynecology, ophthalmology, orthopedics, otolaryngology, paediatrics, surgery (both general and laparoscopy) and urology.",
                    "fully downloadable videos in FLV and MP4 formats.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MCQs & Testing */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FileText className="mr-3" style={{ color: BRAND }} />
                  MCQs &amp; Testing
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    "Recently launched MCQ tab for Mock test.",
                    "Students get an opportunity to revise the syllabus before their examinations.",
                    "Trainees looking for postgraduate studies.",
                    "Academicians formulating tests.",
                    "Answer keys to the questions are provided with link to explanations.",
                    "User may access the MCQs by logging into his or her sub user account.",
                    "The tests are saved in My Account tab of the user for future reference.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* E-Journals */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Globe className="mr-3" style={{ color: BRAND }} />
                  E-Journals
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Partnerships with numerous international societies to deliver
                  highly acclaimed journals.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {[
                    "Ian Donald Inter-University School of Medical Ultrasound",
                    "South Asia Federation of Obstetrics and Gynecology",
                    "International Federation of Gynecology & Obstetrics",
                    "International Society of Glaucoma Surgery",
                    "World Association of Laparoscopic Surgeons",
                    "Pan-American Trauma Society",
                    "Duke University Medical Centre",
                    "International Association of General Dentistry",
                    "and many more",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access Jaypee Digital Resources
                </h3>
                <p className="text-white/80 mb-6">
                  A powerful, unparalleled comprehensive online health science
                  platform for health care practitioners, educators,
                  researchers, and students.
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
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {[
                    "800+ Medical Textbooks",
                    "4000+ Surgical Videos",
                    "MCQ Mock Testing",
                    "E-Journals Platform",
                    "Evidence-Based Content",
                    "Bookmarking & Notes",
                    "IP & Proxy Access",
                    "Mobile Compatible",
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
                <h3 className="text-lg font-bold mb-3">At Jaypee</h3>
                <p className="text-sm text-white/80 italic">
                  Award-winning health science publisher delivering cutting-edge
                  clinical resources across medicine, dentistry, nursing and
                  allied health sciences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
