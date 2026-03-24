import { useEffect } from "react";
import { Zap } from "lucide-react";

import chemLogo from "../../../assets/Photos/Publishers/ChemWatch/logo.webp";
import chemBg from "../../../assets/Photos/Publishers/ChemWatch/Background.webp";
import img1 from "../../../assets/Photos/Publishers/ChemWatch/GoldFFX.webp";
import img2 from "../../../assets/Photos/Publishers/ChemWatch/Backpack.webp";
import img3 from "../../../assets/Photos/Publishers/ChemWatch/GoldFFX.webp";
import img4 from "../../../assets/Photos/Publishers/ChemWatch/Backpack.webp";
import img5 from "../../../assets/Photos/Publishers/ChemWatch/Backpack-Limited.webp";
import img6 from "../../../assets/Photos/Publishers/ChemWatch/CHEMERITUS.webp";
import img7 from "../../../assets/Photos/Publishers/ChemWatch/COSHH-COBRA.webp";
import img8 from "../../../assets/Photos/Publishers/ChemWatch/AuthorITe.webp";
import imgSmart from "../../../assets/Photos/Publishers/ChemWatch/Smarter-Suite-App.webp";
import imgAaas from "../../../assets/Photos/Publishers/ChemWatch/Smart-AaaS-app.webp";

export default function ChemENG() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ChemWatch";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section — EXACTLY like TeachingStrategiesEN */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="p-8 md:p-12 md:w-2/3">
                <div className="flex items-center mb-6">
                  <img loading="lazy" decoding="async" src={chemLogo}
                    alt="ChemWatch Logo"
                    className="h-12 object-contain"
                  />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Chemwatch SDS
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Chemwatch provides SDS management and SDS authoring to keep
                  your chemical management systems up to date.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Chemwatch maintains the world's largest database of chemicals,
                  with over 3,215,992 substances, 140M SDS (Safety Data Sheet),
                  and chemical regulatory solutions that support local and
                  global requirements in over 90 countries. Chemwatch is the
                  global leader in chemicals management solutions. The access to
                  this comprehensive database gives clients a unique edge over
                  other chemical management providers.
                </p>
              </div>
              <div className="md:w-1/3 bg-yellow-50 dark:bg-yellow-900/20 flex items-stretch">
                <img loading="lazy" decoding="async" src={chemBg}
                  alt="ChemWatch Solutions"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Key Sections with Images — EXACTLY like TeachingStrategiesEN 2-grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Chemwatch provides{" "}
                <span className="font-bold text-yellow-600">
                  holistic solutions
                </span>{" "}
                to chemicals management, with a range of software packages
                suitable for small businesses to global enterprises. This
                includes data services and integrations with third party ERPs
                such as SAP.
              </p>
              
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At <span className="font-bold text-yellow-600">Chemwatch</span>,
                we provide SDS management and SDS authoring to keep your
                chemical management systems up to date, with chemical regulatory
                solutions that support both local and global requirements.
              </p>
             
            </div>
          </div>

          {/* Wide Info Card — EXACTLY like TeachingStrategiesEN */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Chemwatch encompasses the following features:{" "}
              <span className="font-bold text-yellow-600">SDS management</span>,
              Chemical registers and manifest, Risk assessments, Reports and
              documentation, Data services, Labelling, and so much more!
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "SDS management",
                "Chemical registers and manifest",
                "Risk assessments",
                "Reports and documentation",
                "Data services",
                "Labelling, and so much more!",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Zap
                    className="mr-3 text-yellow-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section — EXACTLY like TeachingStrategiesEN */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">
              Chemwatch Products:
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              For more details please contact us.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "GoldFFX",
                  img: img3,
                  desc: "Software offers complete chemicals inventory solutions. On top of SDS, this includes risk assessment reports and label generation, chemical registers, and manifests.",
                },
                {
                  name: "Backpack",
                  img: img4,
                  desc: "Backpack is a user-friendly online library for your SDS, with automatic weekly updates. Try it for free if you have fewer than 50 SDS to maintain.",
                },
                {
                  name: "Backpack Limited",
                  img: img5,
                  desc: "Free trial of Backpack, up to 50 chemicals. Create your own Chemicals Inventory System for FREE.",
                },
                {
                  name: "CHEMERITUS",
                  img: img6,
                  desc: "Chemeritus combines chemicals management with comprehensive supply chain solutions. This includes approvals, reports and documentation, SiSoT, and web services API integration.",
                },
                {
                  name: "COSHH COBRA",
                  img: img7,
                  desc: "Complete extensive Risk Assessments in under 30 seconds!",
                },
                {
                  name: "AuthorITe",
                  img: img8,
                  desc: "AuthorITe is the easy way to author SDS for the products you manufacture. Packed with pre-classified substances, helpful suggestion tools and a step-by-step method.",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {product.desc}
                    </p>
                  </div>
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img loading="lazy" decoding="async" src={product.img}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Applications - grid section */}
          <div className="space-y-12 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-6 underline text-center">
                Mobile Applications
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Smarter Suite is Chemwatch's chemicals management mobile app. It
                combines the features of our current apps, SmartSuite and SiSoT
                mobile, enabling accessibility from a single location. Smarter
                Suite is a one-stop-shop for clients to access extensive health
                and safety information, including Risk Assessments, and to
                manage their chemical inventory, using barcoding via SiSoT.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                      Smarter Suite App
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our new mobile app that combines both Smart Suite and
                      SiSoT Mobile in one. Chemicals management and assets
                      management in one app.
                    </p>
                  </div>
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img loading="lazy" decoding="async" src={imgSmart}
                      alt="Smarter Suite App"
                      className="w-full h-full object-center"
                    />
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                      Smart AaaS (Audit as a Service) app
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chemwatch's new Smart Audit as a Service (AaaS) tool is
                      the easier way to audit your chemical and article
                      inventories, by removing the need to create proprietary
                      barcodes compatible with Chemwatch systems.
                    </p>
                  </div>
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img loading="lazy" decoding="async" src={imgAaas}
                      alt="Smart AaaS"
                      className="w-full h-full object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

              
          

          {/* Chemwatch Functions & Modules — 4-column grid like TS feature cards */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "User Interface & Main Toolbar",
                  desc: "It includes all the visual elements like settings, eLearning, help, and language that users interact with the system.",
                },
                {
                  title: "Materials Search Panel",
                  desc: "Allows users to find information about chemicals and products by searching using various criteria like product name, synonym, chemical formula, or manufacturer's name.",
                },
                {
                  title: "Risk Assessment",
                  desc: "The Risk Module determines whether you complete the risk assessment based on the ILO standards for hazardous materials or by the UN standards for dangerous goods.",
                },
                {
                  title: "System Dashboard",
                  desc: "The System Dashboard is a data analytics tool that allows administrators and superusers to view a visual representation of information across the Chemwatch application.",
                },
                {
                  title: "Materials Search Table Columns",
                  desc: "These columns can be customized by right-clicking within the table. This table provides a central location to view chemical information relevant to your manifest.",
                },
                {
                  title: "Folders Tree Panel",
                  desc: "Where you can store your materials so that you can quickly and easily bring up the SDSs materials used by your organization.",
                },
                {
                  title: "SDS Settings",
                  desc: "The SDS settings allow the user to set the type of information to be shown in the Chemwatch Gold SDS as well as set preferred vendors for these documents.",
                },
                {
                  title: "Report Generator",
                  desc: "The report generator tool allows the user to create a customized report of their manifest using almost an unlimited amount of data from the materials SDS.",
                },
                {
                  title: "Copy SDS Demonstration",
                  desc: "Once we have found our correct material with the correct CAS number, we need to select the material, to go into the documents table, to specify a vendor.",
                },
                {
                  title: "Part Numbers & Preferred Names",
                  desc: "Preferred names can be given to a material or specific vendor documents to replace the material name in the material search table.",
                },
                {
                  title: "Filter Settings",
                  desc: "Allow users to refine search results and manage chemical data based on various criteria.",
                },
                {
                  title: "User Access",
                  desc: "The user access settings contain all the necessary steps to create new users, assign permissions and determine site access for users.",
                },
                {
                  title: "Approvals",
                  desc: "Approvals enable businesses and organizations to establish a workflow whereby new materials can be scrutinized and subject to approvals.",
                },
                {
                  title: "D-Gen Module",
                  desc: "In this module you can look for a material using the screen panel or look for an existing material from your folders or manifest using the tree panel.",
                },
                {
                  title: "4PL Module",
                  desc: "The 4PL tool ensures safe transport of dangerous goods by offering packaging guidance, labelling assistance, and documentation generation for various transport routes.",
                },
                {
                  title: "Waste Management Module",
                  desc: "Simplify tracking and compliance with automated waste SDS, waste codes, and definitions provided by certified chemists. Benefit from advanced life-cycle tracking.",
                },
                {
                  title: "Industrial Hygiene Module",
                  desc: "Elevate risk assessments with real-time monitoring, dashboard insights, and immediate alerts when sites approach regulatory limits.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-100 dark:border-gray-700 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 text-yellow-600 dark:text-yellow-400 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

      {/* Stats Section — EXACTLY like the blue box in TeachingStrategiesEN */}

        <div className="bg-gray-900 text-white rounded-3xl p-12 mb-16 text-center shadow-xl">
            <p className="text-xl mb-8 leading-relaxed">
              Chemical Management Systems backed by the world's largest database
              of chemicals. With access to more than 150 million Chemical SDS,
              Chemwatch products and services are used globally by more than
              5,000 organizations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left mt-12 bg-white/10 p-8 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  14,500+ Chemical families maintained
                </h3>
                <p className="text-gray-300">
                  With the world's largest chemicals database at your
                  fingertips.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  3,215,992+ Substances in our library
                </h3>
                <p className="text-gray-300">
                  Comprehensive coverage giving clients a unique edge over other
                  providers.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  150M+ SDS &amp; counting
                </h3>
                <p className="text-gray-300">
                  Chemical regulatory solutions that support both local and
                  global requirements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  49+ Languages · 123+ Countries
                </h3>
                <p className="text-gray-300">
                  Global reach with 9,096+ regulatory lists maintained by our
                  specialist team.
                </p>
              </div>
            </div>
          </div>











        </div>
      </div>
    </div>
  );
}

