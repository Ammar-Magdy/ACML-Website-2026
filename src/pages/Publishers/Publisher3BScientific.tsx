import { useEffect } from "react";
import {
  Globe,
  BookOpen,
  Activity,
  Zap,
  User,
  Leaf,
  Heart,
  Gift,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import b3Logo from "../../assets/Photos/Publishers/3B-Scientific/logo.webp";
import b3Video from "../../assets/Videos/Publishers/3B-Scientific/3B-Scientific .mp4";

const productCategories = [
  {
    icon: Zap,
    label: "Acupuncture",
    color: "purple",
    desc: "Wide range of supplies including needles (Seirin, Moxom), charts, models, cupping glasses, and laser devices.",
    items: [
      "Needles & Accessories",
      "Charts & Models",
      "Laser Devices",
      "Moxibustion",
    ],
  },
  {
    icon: User,
    label: "Anatomical Models",
    color: "blue",
    desc: "World-renowned high-quality models for every part of the human body, from skeletons and musculature to organs and microanatomy.",
    items: [
      "Skeletons & Skulls",
      "Torsos & Organs",
      "Brain & Nervous System",
      "Heart & Circulatory",
    ],
  },
  {
    icon: Activity,
    label: "Anatomical Charts",
    color: "teal",
    desc: "Extensive collection of charts and posters for anatomy, diseases, and medical education.",
    items: [],
  },
  {
    icon: BookOpen,
    label: "Anatomical Software",
    color: "cyan",
    desc: "3D anatomy software for detailed examination of the human body, including Primal Pictures.",
    items: [],
  },
  {
    icon: Leaf,
    label: "Biology Supplies",
    color: "green",
    desc: "Zoology models, botany models, microscopes, slides, and lab equipment.",
    items: [],
  },
  {
    icon: Activity,
    label: "Chemistry",
    color: "yellow",
    desc: "Molecular models, chemistry kits, and educational supplies for learning chemical structures.",
    items: [],
  },
  {
    icon: User,
    label: "Anthropological Findings",
    color: "orange",
    desc: "Replicas and models for anthropological study.",
    items: [],
  },
  {
    icon: Gift,
    label: "Geek Gifts",
    color: "pink",
    desc: "Fun scientific gifts, jewelry, T-shirts, mugs, and novelties.",
    items: [],
  },
  {
    icon: Zap,
    label: "Physics",
    color: "indigo",
    desc: "Hands-on experiments for mechanics, optics, electricity, thermodynamics, and atomic physics.",
    items: [],
  },
  {
    icon: Heart,
    label: "Health Education",
    color: "red",
    desc: "Visual aids and displays for nutrition, sex education, diabetes, substance abuse awareness, and patient education.",
    items: [],
  },
  {
    icon: Activity,
    label: "Simulators & Trainers",
    color: "amber",
    desc: "Advanced tools for medical training including patient care Manikins, ALS trainers, and injection arms.",
    items: [],
  },
  {
    icon: BookOpen,
    label: "Therapy & Fitness",
    color: "lime",
    desc: "Equipment for physical therapy, rehabilitation, and fitness including massage tables, taping, and exercise gear.",
    items: [],
  },
  {
    icon: Zap,
    label: "Veterinary",
    color: "stone",
    desc: "Animal-specific specialization models and instrumentation.",
    items: [],
  },
];

const colorMap: Record<string, string> = {
  purple:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  teal: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
  cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  yellow:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  orange:
    "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  indigo:
    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  lime: "bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400",
  stone: "bg-stone-100 dark:bg-stone-900/30 text-stone-600 dark:text-stone-400",
};

export default function Publisher3BScientific() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "3B Scientific";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#07094B]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={b3Video} type="video/mp4" />
          </video>
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
                <img loading="lazy" decoding="async" src={b3Logo}
                  alt="3B Scientific Logo"
                  className="h-16 md:h-24 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              3B Scientific
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.3bscientific.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#07094B] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-4">
                    <Activity size={20} />
                  </div>
                  About 3B Scientific
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    The international group of companies 3B Scientific
                    specializes in the manufacturing and marketing of didactic
                    material for scientific, medical and patient education. The
                    group's oldest site in Budapest/Hungary began its
                    manufacturing history in 1819, making 3B Scientific the most
                    experienced group of companies in the industry.
                  </p>
                  <p>
                    The brand name 3B Scientific® is represented in over 100
                    countries worldwide in the medical and educational sector.
                    Achieving constantly growing sales, the 3B Scientific group
                    is the worldwide leader in the anatomy market today.
                  </p>
                  <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                    That is what 3B stands for today: Best quality, Best value,
                    Best service!
                  </p>
                </div>
              </div>

              {/* Product Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#07094B] dark:text-indigo-300 mb-6 flex items-center">
                  <Globe className="mr-3" />
                  Comprehensive Product Range
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productCategories.map((cat, i) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={i}
                        className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5 border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center mb-3">
                          <div
                            className={`p-3 rounded-lg mr-4 ${colorMap[cat.color]}`}
                          >
                            <Icon size={22} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {cat.label}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {cat.desc}
                        </p>
                        {cat.items.length > 0 && (
                          <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 ml-1">
                            {cat.items.map((item, j) => (
                              <li key={j}>• {item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Global Presence */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl shadow-sm p-8 border border-indigo-100 dark:border-indigo-800 text-center">
                <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
                  Global Presence
                </h3>
                <p className="text-indigo-700 dark:text-indigo-400 mb-6">
                  With offices in Germany, USA, Japan, France, China, Italy,
                  Spain, UK, Russia, Brazil, Thailand, South Korea, and Turkey,
                  3B Scientific serves customers in over 100 countries.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-[#07094B] text-white hover:bg-indigo-900 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <BookOpen className="mr-2 text-[#07094B] dark:text-indigo-400" />
                  Product Line Highlights
                </h3>
                <ul className="space-y-4">
                  {[
                    "Artificial skeletons, torsos and human organ models",
                    "Teaching aids for physics and technology",
                    "Injection training arms & patient care mannequins",
                    "Biology, zoology and chemistry models",
                    "Anatomical charts and software",
                    "SEIRIN® and Moxa Acupuncture Needles",
                    "Therapy & Fitness products",
                    "Massage & Treatment tables",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
                <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-3">
                  At 3B Scientific
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-400 italic">
                  Best quality, Best value, Best service — the worldwide leader
                  in the anatomy market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
