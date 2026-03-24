import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ExternalLink,
  Globe,
  BookOpen,
  Layers,
  Search,
  FileText,
} from "lucide-react";
import { proceedings } from "../../data/acmProceedings";
import {
  journals,
  magazines,
  affiliated,
  sigNewsletters,
} from "../../data/acmPublications";

import acmLogo from "../../assets/Photos/Publishers/ACM/logo.svg";
import acmBg from "../../assets/Photos/Publishers/ACM/Background.webp";

export default function PublisherACM() {
  const location = useLocation();
  useEffect(() => {
    document.title = "ACM";
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProceedings = proceedings.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.range?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Image instead of Video */}
        <div className="absolute inset-0 w-full h-full">
          <img
            loading="lazy"
            decoding="async"
            src={acmBg}
            alt="ACM Background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Video Overlay */}
          <div className="absolute inset-0 bg-[#0082CA]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block bg-[#FFFFFF] p-6 rounded-3xl drop-shadow-2xl">
                <img
                  loading="lazy"
                  decoding="async"
                  src={acmLogo}
                  alt="ACM Logo"
                  className="h-16 md:h-24 object-contain mix-blend-multiply"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ACM Digital Library (DL)
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8 font-medium">
              The world’s largest computing society, strengthening the
              profession's collective voice through strong leadership, promotion
              of the highest standards, and recognition of technical excellence.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="https://www.acm.org/publications/digital-library"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About ACM Digital Library
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    The ACM Digital Library is a research, discovery and
                    networking platform containing a richly interlinked set of
                    connections among authors, works, institutions, and
                    specialized communities.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  About the ACM Organization
                </h3>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    ACM brings together computing educators, researchers, and
                    professionals to inspire dialogue, share resources, and
                    address the field's challenges. As the world's largest
                    computing society, ACM strengthens the profession's
                    collective voice through strong leadership, promotion of the
                    highest standards, and recognition of technical excellence.
                    ACM supports the professional growth of its members by
                    providing opportunities for life‐long learning, career
                    development, and professional networking.
                  </p>
                  <p>
                    Founded at the dawn of the computer age, ACM's reach extends
                    to every part of the globe, with more than half of its
                    100,000 members residing outside the U.S. Its growing
                    membership has led to Councils in Europe, India, and China,
                    fostering networking opportunities that strengthen ties
                    within and across countries and technical communities. Their
                    actions enhance ACM's ability to raise awareness of
                    computing's important technical, educational, and social
                    issues around the world.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Special Interest Groups (SIGs)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Special Interest Groups Form around ACM's Powerful,
                      Vibrant Communities. Networking opportunities in ACM's 37
                      Special Interest Groups (SIGs) are always expanding,
                      reflecting the growth of computing's discrete disciplines
                      and technical communities. The leading representatives of
                      their fields, ACM SIGs sponsor annual conferences,
                      workshops, and symposia serving practitioner‐ and
                      research‐based constituencies. Because they provide
                      objective arenas for novel, often competing ideas, many of
                      these meetings have become premier global events.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Chapters: ACM's "Local Neighborhoods"
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      ACM's broad‐based infrastructure supports more than 860
                      professional and student chapters worldwide. These "local
                      neighborhoods" offer opportunities for members to gain
                      access to critical research and establish personal
                      networking systems.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      ACM, Member-driven, Volunteer-led
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      ACM offers volunteer opportunities for members and
                      non‐members that create networking possibilities and
                      enhance career development. At the grassroots level, ACM
                      volunteers serve a growing international community of
                      researchers, practitioners and students by lending
                      valuable assistance at conferences, publications,
                      webinars, and other events.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      ACM Publications - Advancing Research
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      As a leading global source for scientific information, ACM
                      promotes computer research and innovation through its
                      journals, magazines, and the proceedings of more than 170
                      annual conferences and symposia. ACM authors are among the
                      world's leading thinkers in computing and information
                      technologies, providing original research and firsthand
                      perspectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Publications & Services */}
              <div
                id="publications-services"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <BookOpen size={20} />
                  </div>
                  Publications & Services
                </h2>

                <div className="space-y-8">
                  <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 block">
                      ACM Journals
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      ACM’s high-impact, peer-reviewed journals publish emerging
                      and established computing research for both practical and
                      theoretical applications. Available in print and online,
                      these subscription-based scholarly journals offer content
                      of the highest scientific quality in their respective
                      fields.
                    </p>
                    <a
                      href="http://dl.acm.org/pubs.cfm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
                    >
                      Browse ACM Journals
                      <ExternalLink size={14} className="ml-1" />
                    </a>

                    <div className="mt-4 h-64 overflow-y-auto pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                      <ul className="space-y-3">
                        {journals.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-col"
                            >
                              <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </span>
                              {item.range && (
                                <span className="text-xs text-gray-500 mt-1">
                                  {item.range}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 block">
                      ACM Magazines
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      ACM’s print and on-line magazines include its flagship
                      Communications of the ACM (CACM), which features trusted
                      insights for computing's leading professionals. CACM
                      provides in-depth coverage of emerging research in
                      computer science, new trends in information technology,
                      and practical applications.
                    </p>

                    <div className="mt-4 h-48 overflow-y-auto pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                      <ul className="space-y-3">
                        {magazines.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-col"
                            >
                              <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </span>
                              {item.range && (
                                <span className="text-xs text-gray-500 mt-1">
                                  {item.range}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 block">
                      ACM Books
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      ACM Books is a new series of scholarly research monographs
                      and graduate-level texts, authored by computer scientists
                      and practitioners at the forefront of computing
                      technology.
                    </p>
                    <a
                      href="http://books.acm.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
                    >
                      Visit ACM Books
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 block">
                      SIG Newsletters
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Newsletters from ACM's Special Interest Groups, covering
                      specific areas of computing including programming
                      languages, graphics, and interaction.
                    </p>
                    <div className="mt-4 h-64 overflow-y-auto pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                      <ul className="space-y-3">
                        {sigNewsletters.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-col"
                            >
                              <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </span>
                              {item.range && (
                                <span className="text-xs text-gray-500 mt-1">
                                  {item.range}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 block">
                      Affiliated Publications
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Publications from ACM affiliated organizations and
                      conferences.
                    </p>
                    <div className="mt-4 h-48 overflow-y-auto pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                      <ul className="space-y-3">
                        {affiliated.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-col"
                            >
                              <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </span>
                              {item.range && (
                                <span className="text-xs text-gray-500 mt-1">
                                  {item.range}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 block">
                      ACM Conference Proceedings
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Conference proceedings capture the cutting edge of
                      innovation across the spectrum of computing fields by
                      publishing refereed research findings and invited papers
                      from ACM conferences, workshops and symposia.
                    </p>
                    <a
                      href="http://dl.acm.org/proceedings.cfm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
                    >
                      Browse Conference Proceedings
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Conference Proceedings List */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-4">
                      <Layers
                        className="text-purple-600 dark:text-purple-400"
                        size={24}
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      All Conference Proceedings
                    </h2>
                  </div>
                  <div className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                    {filteredProceedings.length} results
                  </div>
                </div>

                <div className="mb-6 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search proceedings..."
                    className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
                  {filteredProceedings.length > 0 ? (
                    filteredProceedings.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 bg-white dark:bg-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all group"
                      >
                        <div className="pr-4">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.range}
                          </p>
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 px-4 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                      <Search className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        No proceedings found
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Try adjusting your search terms.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 ">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24 ">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center ">
                  <Layers className="mr-2 text-blue-500" />
                  ACM Products Overview
                </h3>

                <div className="space-y-6">
                  {/* Journals/Transactions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <FileText size={18} className="mr-2 text-blue-500" />
                      Journals & Transactions
                    </h4>
                    <div className="h-48 overflow-y-auto pr-2 text-sm text-gray-600 dark:text-gray-300 custom-scrollbar">
                      <ul className="space-y-2.5">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>ACM Computing Surveys (CSUR)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Journal of Computer Documentation (JCD)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Journal on Emerging Technologies in Computing
                            Systems (JETC)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Letters on Programming Languages and Systems
                            (LOPLAS)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Transactions on Accessible Computing (TACCESS)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>ACM Transactions on Algorithms (TALG)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Transactions on Applied Perception (TAP)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Transactions on Architecture and Code
                            Optimization (TACO)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Transactions on Database Systems (TODS)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>ACM Transactions on Graphics (TOG)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Transactions on Information Systems (TOIS)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>
                            ACM Transactions on Internet Technology (TOIT)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>Journal of the ACM (JACM)</span>
                        </li>
                        <li className="italic text-xs mt-2 text-gray-500">
                          ...and many more (see website for full list)
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Magazines */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <BookOpen size={18} className="mr-2 text-blue-500" />
                      Magazines
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2.5">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>ACM Inroads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Communications of the ACM</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Computers in Entertainment (CIE)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Crossroads / XRDS</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Queue</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Ubiquity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>eLearn</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>interactions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href="https://www.acm.org/publications/digital-library"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      View All Publications
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
