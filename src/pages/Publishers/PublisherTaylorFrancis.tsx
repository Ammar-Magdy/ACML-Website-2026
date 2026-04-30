import { useEffect } from "react";
import { ExternalLink, Globe, Layers, BookOpen } from "lucide-react";

import tfLogo from "../../assets/Photos/Publishers/TaylorAndFrancis/logo.png";
import tfBg from "../../assets/Photos/Publishers/TaylorAndFrancis/Background.png";
import imgCRCnetBASE from "../../assets/Photos/Publishers/TaylorAndFrancis/CRCnetBASE.webp";
import imgEBooks from "../../assets/Photos/Publishers/TaylorAndFrancis/Taylor-&-Francis-eBooks.webp";
import imgEuropaWorld from "../../assets/Photos/Publishers/TaylorAndFrancis/EuropaWorld.webp";
import imgEuropaWorldOfLearning from "../../assets/Photos/Publishers/TaylorAndFrancis/The-Europa-World-of-Learning.webp";
import imgWorldWhosWho from "../../assets/Photos/Publishers/TaylorAndFrancis/World-Who's-Who.webp";
import imgIISS from "../../assets/Photos/Publishers/TaylorAndFrancis/IISS-Armed-Conflict-Database.webp";
import imgRoutledgeEncyclopedia from "../../assets/Photos/Publishers/TaylorAndFrancis/Routledge-Encyclopedia-of-Philosophy-Online.webp";
import imgRoutledgeReference from "../../assets/Photos/Publishers/TaylorAndFrancis/Routledge-Reference-Resources.webp";

const products = [
  {
    img: imgCRCnetBASE,
    title: "CRCnetBASE",
    desc: "Allows access to full text handbooks, references, and monographs published by CRC Press.",
    link: "http://www.crcnetbase.com/",
  },
  {
    img: imgEBooks,
    title: "Taylor & Francis eBooks",
    desc: "Over 23,000 eBook titles in the Humanities, Social Science, Behavioural Sciences, STM and Law.",
    link: null,
  },
  {
    img: imgEuropaWorld,
    title: "EuropaWorld",
    desc: "An interactive online library for all of the countries and territories of each of the world regions.",
    link: null,
  },
  {
    img: imgEuropaWorldOfLearning,
    title: "The Europa World of Learning",
    desc: "A unique and invaluable online source of global educational contents.",
    link: null,
  },
  {
    img: imgWorldWhosWho,
    title: "World Who's Who",
    desc: "A Comprehensive directory of almost 60,000 of the world's most eminent personalities.",
    link: null,
  },
  {
    img: imgIISS,
    title: "IISS: Armed Conflict Database",
    desc: "An Authoritative and unique online source of data and independent analysis on current and recent conflicts.",
    link: null,
  },
  {
    img: imgRoutledgeEncyclopedia,
    title: "Routledge Encyclopedia of Philosophy Online",
    desc: "A dynamic online resource for researching, teaching and studying philosophy and related disciplines.",
    link: null,
  },
  {
    img: imgRoutledgeReference,
    title: "Routledge Reference Resources",
    desc: "The very best reference works available online across 9 diverse subject areas.",
    link: null,
  },
];

export default function PublisherTaylorFrancis() {
  useEffect(() => {
    document.title = "Taylor & Francis";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Image instead of Video */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={tfBg}
            alt="Taylor & Francis Background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Overlay */}
          <div className="absolute inset-0 bg-[#07094B]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={tfLogo}
                  alt="Taylor & Francis Logo"
                  className="h-48 md:h-48 object-contain rounded-2xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Taylor &amp; Francis Group
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8 font-medium">
              Informing Academics from Past to Present. A leading international
              academic publisher.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.taylorandfrancisgroup.com/"
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
                  About Taylor &amp; Francis
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Taylor &amp; Francis has grown rapidly over the last two
                    decades to become a leading international academic
                    publisher. With offices in London, Brighton, Basingstoke and
                    Abingdon in the UK, New York and Philadelphia in the USA and
                    Singapore and Melbourne in the Pacific Rim, the Taylor &amp;
                    Francis Group publishes more than 1000 journals and around
                    1,800 new books each year, with a books backlist in excess
                    of 20,000 specialist titles.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                    Publishing Groups
                  </h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        Taylor &amp; Francis Books:
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Including imprints Routledge, Taylor &amp; Francis,
                        Europa Publications, Garland Science, RoutledgeFalmer,
                        Spon Press, Gordon &amp; Breach, Harwood Academic,
                        RoutledgeCurzon, CRC Press, Frank Cass and BIOS
                        Scientific Publishers.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        Specialist Divisions:
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Martin Dunitz including the Isis medical titles.
                        Psychology Press (UK and North America).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Products Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <BookOpen size={20} />
                  </div>
                  Key Products
                </h2>

                <div className="grid grid-cols-1 gap-6">
                  {products.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all group"
                    >
                      <div className="md:w-1/3 flex-shrink-0">
                        <img loading="lazy" decoding="async" src={product.img}
                          alt={product.title}
                          className="rounded-lg w-full h-40 object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                          {product.desc}
                        </p>
                        {product.link && (
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center text-sm"
                          >
                            Visit Website
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Layers className="mr-2 text-blue-500" size={20} />
                  Taylor &amp; Francis at a Glance
                </h3>

                <div className="space-y-5 text-sm text-gray-600 dark:text-gray-300">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Publishing Scale
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>1,000+ journals published</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>~1,800 new books each year</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>20,000+ specialist titles backlist</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>23,000+ eBook titles available</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Global Offices
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>
                          London, Brighton, Basingstoke, Abingdon (UK)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>New York &amp; Philadelphia (USA)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Singapore &amp; Melbourne (Pacific Rim)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Imprints
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Routledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>CRC Press</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Psychology Press</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Europa Publications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Garland Science</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Martin Dunitz</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href="http://www.taylorandfrancisgroup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      Visit Official Website
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
