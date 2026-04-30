import React, { useEffect } from "react";
import {
  ExternalLink,
  Calculator,
  BookOpen,
  Users,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

import siamLogo from "../../assets/Photos/Publishers/SIAM/logo.svg";
import siamBg from "../../assets/Photos/Publishers/SIAM/Background.webp";
import siamImg from "../../assets/Photos/Publishers/SIAM/CS08.webp";

const BRAND = "#00A499";

const PublisherSIAM: React.FC = () => {
  useEffect(() => {
    document.title = "SIAM";
  }, []);

  const journals = [
    "Multiscale Modeling and Simulation",
    "SIAM Journal on Applied Dynamical Systems",
    "SIAM Journal on Applied Mathematics",
    "SIAM Journal on Computing",
    "SIAM Journal on Control and Optimization",
    "SIAM Journal on Discrete Mathematics",
    "SIAM Journal on Financial Mathematics",
    "SIAM Journal on Mathematical Analysis",
    "SIAM Journal on Matrix Analysis and Applications",
    "SIAM Journal on Numerical Analysis",
    "SIAM Journal on Optimization",
    "SIAM Journal on Scientific Computing",
    "SIAM/ASA Journal on Uncertainty Quantification",
    "SIAM Review",
    "Theory of Probability and Its Applications",
    "SIAM Journal on Imaging Sciences",
  ];

  const bookSubjects = [
    "Applied Geometry",
    "Applied Mathematics Education",
    "Applied Probability",
    "Astronomy, Planetary Sciences, and Optics",
    "Atmospheric and Oceanographic Sciences",
    "Biological Sciences",
    "Chemical Kinetics",
    "Communication Theory",
    "Computational Mathematics",
    "Computer Sciences",
    "Control and Systems Theory",
    "Data Mining and Information Retrieval",
    "Discrete Mathematics and Graph Theory",
    "Dynamical Systems",
    "Economics and Finance",
    "Electromagnetic Theory and Semiconductor and Circuit Analysis",
    "Environmental Sciences",
    "Fluid Mechanics",
    "Functional Analysis",
    "General Interest",
    "Geophysical Sciences",
    "Image Processing",
    "Linear Algebra and Matrix Theory",
    "Management Sciences and Operations Research",
    "Materials Science",
    "Math and Computation in Industrial Applications",
    "Mathematical Physics",
    "Mechanics of Solids",
    "Nonlinear Waves and Coherent Structures",
    "Numerical Analysis",
    "Optimization Theory and Mathematical Programming",
    "Ordinary Differential Equations",
    "Partial Differential Equations",
    "Real and Complex Analysis",
    "Simulation and Modeling",
    "Social Sciences",
    "Statistics",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={siamBg}
            alt="SIAM background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={siamLogo}
                alt="SIAM Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-2xl bg-white p-2"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Society for Industrial and Applied Mathematics
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Building cooperation between mathematics and the worlds of science
              and technology through research, publications, and community.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.siam.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
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
              {/* About */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Calculator size={20} />
                  </div>
                  About SIAM
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      The Society for Industrial and Applied Mathematics (SIAM)
                      is an international community of over 14,000 individual
                      members. Almost 500 academic, manufacturing, research and
                      development, service and consulting organizations,
                      government, and military organizations worldwide are
                      institutional members.
                    </p>
                    <p>
                      SIAM fosters the development of applied mathematical and
                      computational methodologies needed in these various
                      application areas. Applied mathematics in partnership with
                      computational science is essential in solving many
                      real-world problems.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={siamImg}
                      alt="Mathematics"
                      className="w-48 h-auto rounded-xl shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              </div>

              {/* Journals */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="mr-3" style={{ color: BRAND }} />
                  SIAM Journals
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {journals.map((journal, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 rounded-lg"
                      style={{ backgroundColor: `${BRAND}0d` }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: BRAND }}
                      ></span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {journal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Subjects */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Book Subjects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                  {bookSubjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded"
                    >
                      <span className="w-1 h-1 rounded-full mr-2 flex-shrink-0 bg-blue-500"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conferences */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Calendar className="mr-3" style={{ color: BRAND }} />
                  Conferences
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  SIAM conferences focus on timely topics in applied and
                  computational mathematics and applications and provide a place
                  for members to exchange ideas and to expand their network of
                  colleagues in both academia and industry. The SIAM Annual
                  Meeting provides a broad view of the state of the art in
                  applied mathematics, computational science and their
                  applications.
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">
                  Proceedings
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  SIAM publishes selected proceedings from its yearly meetings
                  and conferences.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title:
                        "Workshop on Algorithm Engineering and Experiments (ALENEX)",
                      desc: "The aim of the ALENEX workshop is to provide a forum for presentation of original research in the implementation and experimental evaluation of algorithms and data structures.",
                    },
                    {
                      title:
                        "Workshop on Analytic Algorithmics and Combinatorics (ANALCO)",
                      desc: "The aim of the ANALCO workshop is to provide a forum for the presentation of original research in the analysis of algorithms and associated combinatorial structures.",
                    },
                    {
                      title: "Data Mining",
                      desc: "Data mining is an important tool in science, engineering, industrial processes, healthcare, business, and medicine. This conference provides a venue for researchers who are addressing these problems to present their work in a peer-reviewed forum.",
                    },
                    {
                      title: "ACM-SIAM Symposium on Discrete Algorithms (SODA)",
                      desc: "This symposium focuses on research topics related to efficient algorithms and data structures for discrete problems. In addition to the design of such methods and structures, the scope also includes their use, performance analysis, and the mathematical problems related to their development or limitations.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SIAM News */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  SIAM News &amp; Reports
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Welcome to SIAM News, the news journal of the applied
                  mathematics community! SIAM News offers:
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 ml-4">
                  {[
                    "Technical overview articles written by experts in a wide range of disciplines",
                    "Reports of progress and breakthroughs in research",
                    "Commentaries on the issues -- political, ethical, educational, and scientific -- that affect the mathematical sciences community",
                    "News about legislation and funding issues, people, and university programs",
                    "Comprehensive calendar of events",
                    "Professional opportunity advertisements from all over the world",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  A subscription to SIAM News is provided FREE when you become a
                  member of SIAM.
                </p>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Access SIAM Publications
                </h3>
                <p className="text-white/80 mb-6">
                  14,000+ members, 16 journals, 400+ books, and world-class
                  conferences in applied mathematics.
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

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Quick Stats
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users
                      size={20}
                      className="mr-3"
                      style={{ color: BRAND }}
                    />
                    <span>14,000+ Members</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <BookOpen
                      size={20}
                      className="mr-3"
                      style={{ color: BRAND }}
                    />
                    <span>16 Journals</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <BookOpen
                      size={20}
                      className="mr-3"
                      style={{ color: BRAND }}
                    />
                    <span>400+ Books</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherSIAM;
