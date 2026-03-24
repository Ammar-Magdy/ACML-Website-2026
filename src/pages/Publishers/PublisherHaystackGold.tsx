import { useEffect } from "react";
import {
  ExternalLink,
  CheckCircle2,
  Shield,
  ShieldAlert,
  Globe,
  Database,
  Plane,
  BarChart3,
  GitBranch,
  FolderMinus,
  Quote,
  Bell,
  Hash,
  Award,
  Cpu,
  Monitor,
  ClipboardList,
  ArrowRightLeft,
} from "lucide-react";
import haystackVideo from "../../assets/Videos/Publishers/Haystack-Gold/Haystack-Gold.mp4";
import haystackLogo from "../../assets/Photos/Publishers/Haystack-Gold/Logo.webp";
import helicopterImg from "../../assets/Photos/Publishers/Haystack-Gold/AdobeStock_100731409-300x200_helicopter.webp";
import jetImg from "../../assets/Photos/Publishers/Haystack-Gold/AdobeStock_407995949.webp";

const PublisherHaystackGold = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Haystack Gold";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={haystackVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay: Dark Navy/Gold Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2027]/90 via-[#203A43]/80 to-[#D4AF37]/40 mix-blend-multiply"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={haystackLogo}
                  alt="Haystack Gold Logo"
                  className="h-22 md:h-32 object-contain drop-shadow-2xl rounded-3xl bg-white"
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
              Haystack Gold Defense Parts & Logistics Management
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light">
              Design and maintain efficient defense systems with Haystack Gold.
            </p>

            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://accuristech.com/solutions/haystack/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0F2027] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-[#D4AF37] text-gray-900 hover:bg-[#c59b27] border border-[#D4AF37] px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Defense Parts and Logistic Management
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Drive supply chain savings, efficiency and risk mitigation
                  with Haystack Gold, the leading defense parts and logistics
                  management system. Engineers, procurement, and other technical
                  professionals use the Haystack Gold platform for secure,
                  single-point access to DLA, Army, Navy, Air Force, and Marine
                  Corp military equipment parts, critical dual-use and
                  commercial parts, and government and commercial suppliers.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "See current pricing, technical and availability data.",
                    "Ensure materials are delivered at the right place, time, and cost from qualified suppliers.",
                    "Manage obsolescence and maintain system readiness throughout the product lifecycle.",
                    "Access online with multiple purchase options based on the content and functionality you need.",
                    "Quickly find suppliers, qualified parts lists, government procurement history, and pricing.",
                    "Learn about new business opportunities by monitoring government solicitations.",
                    "Search by National and NATO Stock Numbers (NSNs), Federal Supply Class (FSC), Commercial and Government Entity (CAGE) code, description, technical characteristics, part status and more.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Data Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[#D4AF37]">
                      350M+
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Part References
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[#D4AF37]">
                      70+
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Datasets
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[#D4AF37]">
                      100K+
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Users
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[#D4AF37]">
                      37
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Countries
                    </span>
                  </div>
                </div>
              </div>

              {/* Target Audience Image Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group transition-colors duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy" decoding="async" src={helicopterImg}
                    alt="Military Helicopter representing Government and Defense Professionals"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">
                      For Military, Government, and Aerospace & Defense
                      Professionals
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-medium">
                    Hundreds of thousands of professionals in 37 countries use
                    Haystack Gold. It’s built for:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "US military organizations",
                      "Foreign military services",
                      "Aerospace and defense contractors",
                      "Any organization that builds or sells items to the US government",
                    ].map((target, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl"
                      >
                        <Shield className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Insight Features Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden group transition-colors duration-300">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img loading="lazy" decoding="async" src={jetImg}
                    alt="Military Jet representing Aerospace Supply Chains"
                    className="w-full h-[150%] md:h-[200%] object-cover object-[center_90%] -mt-12 md:-mt-24 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">
                      The deepest insight into defense industry supply chains
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Haystack Gold provides the most current pricing, technical
                    and availability data on 350+ million part references in 70+
                    datasets.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                    {[
                      { icon: Globe, text: "US, UK, and Canadian data" },
                      {
                        icon: GitBranch,
                        text: "National Forging Tooling database",
                      },
                      {
                        icon: FolderMinus,
                        text: "Access to cFolders documentation/drawings",
                      },
                      { icon: Quote, text: "ISO Group RFP quote system" },
                      {
                        icon: Bell,
                        text: "Unique supplier inventory with RFQ alerts when customer inventory has been uploaded",
                      },
                      {
                        icon: Hash,
                        text: "Addition of the Unique Entity Identifier (UEI), in addition to CAGE and DUNS numbers",
                      },
                      {
                        icon: Award,
                        text: "Integrate with industry and military standards in Engineering Workbench",
                      },
                      {
                        icon: Cpu,
                        text: "Integrate with electronic parts, electro-mechanical components, and fasteners in BOM and Parts Intelligence",
                      },
                      {
                        icon: Monitor,
                        text: "Integration with Parts XML Web Services",
                      },
                      {
                        icon: ClipboardList,
                        text: "Integrate with ILSmart inventory locator system",
                      },
                      {
                        icon: ArrowRightLeft,
                        text: "Integrate with Crestwood Technology Group (CTG) inventory, expanding our capability to include dual use and commercial parts",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <item.icon
                          className="w-6 h-6 text-[#D4AF37] mt-1 mr-4 flex-shrink-0"
                          strokeWidth={1.5}
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              {/* Value Proposition Card */}
              <div className="bg-[#0F172A] p-8 rounded-2xl shadow-lg border border-gray-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-bl-full -mr-8 -mt-8"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <ShieldAlert className="w-6 h-6 mr-3 text-[#D4AF37]" />
                  Rely on Haystack Gold to:
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#D4AF37] mb-2">
                      Increase efficiency
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Accelerate business, manufacturing and supply chain
                      processes
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Shorten cycle times & Accelerate research & innovation
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      • Reduce manual data entry & Locate hard-to-find items
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#D4AF37] mb-2">
                      Ensure quality & Reduce Cost
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Maintain mission-readiness & Improve product quality
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Improve & enrich internal data quality
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      • Reduce purchasing or manufacturing costs
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#D4AF37] mb-2">
                      Gain a competitive advantage
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Access to 70+ years of history to conduct cost and
                      pricing analysis
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Provide alternate sources of supply
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      • Price to win
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#D4AF37] mb-2">
                      Build supply chain resilience
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Extensive list of alternate parts as catalogued by the
                      DLA
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-1">
                      • Locate form, fit & function replacement
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      • Obsolescence indicators for part availability & vendor
                      status
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials Card */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-[#D4AF37]" />
                  Trusted by a global customer base
                </h3>

                <blockquote className="italic text-gray-600 dark:text-gray-400 pl-4 border-l-4 border-[#D4AF37] mb-6">
                  "Can’t stress enough how important Haystack is for this
                  critical data. These groups are one-person efforts. When they
                  put together data and make a claim that this is what the cost
                  is, this is what you need to win… People often don’t agree
                  with this and then start to really drill into you for
                  evidence. When you can substantiate it with Haystack data and
                  government data... People will then believe you and you don’t
                  lose credibility."
                </blockquote>
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                  — Program Manager for RFPs at Leading Aerospace & Defense
                  Corporation
                </p>
              </div>

              {/* Key Areas Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Key functional areas:
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: Database, text: "Acquisition and purchasing" },
                    { icon: Plane, text: "Engineering" },
                    { icon: Shield, text: "Integrated logistics support" },
                    { icon: BarChart3, text: "Obsolescence management" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <item.icon className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherHaystackGold;
