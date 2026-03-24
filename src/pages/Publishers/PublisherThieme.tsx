import React, { useEffect } from "react";
import { ExternalLink, Book, Stethoscope, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import thiemeLogo from "../../assets/Photos/Publishers/Thieme/Logo.svg";
import thiemeBg from "../../assets/Photos/Publishers/Thieme/Background.webp";

const BRAND = "#013476";

const ebookSpecialties = [
  "Anatomy",
  "Audiology",
  "Basic Sciences",
  "Chemistry",
  "Clinical Sciences",
  "Dentistry",
  "Dermatology",
  "Internal Medicine",
  "Neurology",
  "Neurosurgery",
  "Nutrition",
  "Oncology",
  "Ophthalmology",
  "Orthopedic Surgery",
  "Osteopathy & Manual Medicine",
  "Otolaryngology",
  "Pathology",
  "Radiological Technology",
  "Radiology",
  "Student Education",
];

const ejournalsSpecialties = [
  "Anesthesiology, Critical Care, and Emergency Medicine",
  "Biology",
  "Cardiology",
  "Chemistry",
  "Complementary Alternative Medicine",
  "Critical Care",
  "Dentistry and Dental Surgery",
  "Dermatology",
  "Endocrinology and Metabolism",
  "ENT - Audiology, Phoniatrics",
  "Gastroenterology, Hepatology",
  "General and Internal Medicine",
  "Geriatrics",
  "Hematology",
  "Homeopathy",
  "Kinesitherapy",
  "Manual Medicine",
  "Manual Therapy",
  "Naturopathy and Complementary Medicine",
  "Neurology, Psychiatry, Psychology",
  "Neurorehabilitation",
  "Neurosurgery",
  "Nursing",
  "Obstetrics, Gynecology, Perinatology",
  "Occupational Therapy",
  "Oncology",
  "Ophthalmology",
  "Orthopedics and Orthopedic Surgery",
  "Osteopathy",
  "Pediatrics",
  "Pharmacy",
  "Physiotherapy",
  "Phytotherapy",
  "Plastic Surgery",
  "Pneumology",
  "Politics, Man and Health",
  "Psychotherapy",
  "Radiology, Nuclear Medicine and Medical Imaging",
  "Rheumatology",
  "Speech Therapy",
  "Sports Medicine",
  "Sports Therapy",
  "Surgery",
  "Urology",
  "Veterinary Medicine",
];

const PublisherThieme: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thieme";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={thiemeBg}
            alt="Thieme background"
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
              <img loading="lazy" decoding="async" src={thiemeLogo}
                alt="Thieme Logo"
                className="h-16 md:h-32 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Thieme Publishers
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.thieme.com/index.php"
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
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Stethoscope size={20} />
                  </div>
                  About Thieme
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Thieme is an award-winning international medical and science
                    publisher serving health professionals and students for more
                    than 125 years. Thieme promotes the latest advancements in
                    clinical practice, publishes the latest research findings,
                    advocates medical education and is known for the high
                    quality and didactic nature of its books, journals, and
                    electronic products.
                  </p>
                  <p>
                    With more than 900 employees worldwide, Thieme maintains
                    offices in seven cities, including New York, Beijing, Delhi,
                    Stuttgart and three other locations in Germany.
                  </p>
                  <p>
                    In addition to publishing 70 new book titles every year,
                    Thieme publishes more than 130 medical and scientific
                    journals both in traditional print and electronic format, a
                    number of which are printed on behalf of professional
                    societies, as well as dozens of online products.
                  </p>
                  <p>
                    The Thieme Medical Publishing Group is one of the few
                    publishing firms that remains a family owned and run
                    business. With the same dedication that Georg Thieme had
                    over a century ago, Thieme still stands apart from its
                    competitors by emphasizing high standards of quality in
                    content and presentation in all of its products.
                  </p>
                </div>
              </div>

              {/* Thieme E-Book Library */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Book className="mr-3" style={{ color: BRAND }} />
                  1. Thieme E-Book Library
                  <a
                    href="http://ebooks.thieme.com/catalog/show/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-6">
                  <p>
                    The Thieme E-Book Library is an acclaimed online collection
                    of lavishly illustrated full-color downloadable textbooks
                    from Thieme's renowned Color Atlases and Flexibook series.
                    It is exclusively available by institutional subscription.
                    Each electronic book retains the outstanding educational
                    utility of the print version, including exquisite full-color
                    illustrations and instructive text – plus a powerful search
                    function to help users easily locate topics across the
                    entire collection.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {[
                      "Focused coverage of every clinical course",
                      "Practical two-page units with clear text & illustrations",
                      "Ideal course supplement for students & educators",
                      "Essential research resource for scientists",
                      "Constant expansion with new topics",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"
                          style={{ backgroundColor: BRAND }}
                        ></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                    Specialties Covered
                  </h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    {ebookSpecialties.map((spec, i) => (
                      <div key={i} className="flex items-center">
                        <div
                          className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                          style={{ backgroundColor: BRAND }}
                        ></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thieme E-Journals */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Book className="mr-3" style={{ color: BRAND }} />
                  2. Thieme E-Journals
                  <a
                    href="http://www.thieme.com/journals/246-thieme-ejournals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
                  The online journal service of the Thieme Publishing Group
                  giving you access to some 130 medical and scientific journals.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                    Subject List
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {ejournalsSpecialties.map((spec, i) => (
                      <div key={i} className="flex items-start">
                        <div
                          className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: BRAND }}
                        ></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access Thieme Resources
                </h3>
                <p className="text-white/80 mb-6">
                  Award-winning international medical and science publisher
                  serving health professionals and students for more than 125
                  years.
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <GraduationCap className="mr-2" style={{ color: BRAND }} />
                  Student Education
                </h3>
                <div
                  className="p-4 rounded-lg mb-4"
                  style={{ backgroundColor: `${BRAND}15` }}
                >
                  <GraduationCap
                    className="mb-2"
                    size={32}
                    style={{ color: BRAND }}
                  />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Thieme E-Book Library covers every course in the medical
                    school curriculum to help students master critical subjects.
                  </p>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 pt-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.thieme.com/index.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center transition-colors"
                      style={{ color: BRAND }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Thieme Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://ebooks.thieme.com/catalog/show/all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center transition-colors"
                      style={{ color: BRAND }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      E-Book Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.thieme.com/journals/246-thieme-ejournals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center transition-colors"
                      style={{ color: BRAND }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      E-Journals
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: BRAND, borderColor: BRAND }}
              >
                <h3 className="text-lg font-bold mb-3">At Thieme</h3>
                <p className="text-sm text-white/80 italic">
                  A family-owned medical publisher emphasizing high standards of
                  quality in content and presentation across books, journals and
                  electronic products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherThieme;
