import {
  Shield,
  Search,
  ArrowRight,
  ExternalLink,
  Target,
  Globe,
  Award,
  CheckCircle2,
  Cpu,
  Zap,
} from "lucide-react";

import logo from "../../assets/Photos/Publishers/Accuris/Logo.webp";
import accurisVideo from "../../assets/Videos/Publishers/Accuris/Accuris.mp4";

import img1 from "../../assets/Photos/Publishers/Accuris/Image_001.webp";
import img2 from "../../assets/Photos/Publishers/Accuris/Image_002.webp";
import img3 from "../../assets/Photos/Publishers/Accuris/Image_003.webp";
import img35 from "../../assets/Photos/Publishers/Accuris/Image_035.webp";
import img36 from "../../assets/Photos/Publishers/Accuris/Image_036.webp";
import { useEffect } from "react";

export default function PublisherAccuris() {
  useEffect(() => {
    document.title = "Accuris";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      {/* 80vh Premium Hero Section styled exactly like UIC and IEC */}
      {/* Brand-Aligned Video Overlay using the #1300E9 Blue extracted from the HTML */}
      <div className="relative w-full h-[80vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={accurisVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay (Accuris Dark Blue) */}
          <div className="absolute inset-0 bg-[#0F172A]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container (Left Aligned like UIC/IEC) */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={logo}
                  alt="Accuris Logo"
                  className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-2xl bg-white"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
              Engineering Workbench Professional
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl font-light">
              The most advanced knowledge platform in the industry,
              revolutionizing the way engineers work
            </p>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://accuristech.com/?utm_source=email&utm_medium=brochure&utm_id=PC001208&utm_content=ewb%2Bpro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1300E9] hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Left Main Content Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Built to Address Header Image */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                <img loading="lazy" decoding="async" src={img2}
                  alt="Built to address engineering challenges of today and the future"
                  className="w-full object-cover"
                />
              </div>

              {/* Engineering Challenges */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Built to address engineering challenges of today and the
                  future
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  Today's organizations rely on their engineers to help them
                  meet key strategic priorities, such as:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                  <li>Drive growth through new product design</li>
                  <li>Innovate faster, without compromising safety</li>
                  <li>Optimize costs by minimizing re-work</li>
                  <li>Ensure compliance in emerging markets</li>
                  <li>
                    Reduce risk in development of unprecedented technology
                  </li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  However, engineers face significant day-to-day barriers that
                  prevent them from efficiently contributing to these
                  priorities, including:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                  <li className="flex items-start">
                    <Shield
                      className="text-[#1300E9] mr-3 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Pain of consolidating standards across multiple providers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield
                      className="text-[#1300E9] mr-3 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Difficulty finding standards with the exact information
                      needed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield
                      className="text-[#1300E9] mr-3 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Effort required to quickly understand changes to standards
                    </span>
                  </li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-[#1300E9]">
                  Engineering Workbench Professional (EWB Professional) solves
                  these challenges for your engineers better than ever before,
                  helping them perform research and solve problems more
                  efficiently so they can spend more of their time creating and
                  innovating.
                </p>
              </div>

              {/* Advanced Platform Features */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-[#1300E9] dark:text-blue-400 mb-6 flex items-center">
                  <Cpu className="mr-3" />
                  Best-in-Class Platform
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  Engineering Workbench Professional offers the most advanced
                  technology and features on the market, including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center mb-2">
                        <Search className="text-emerald-500 mr-2" size={16} />
                        Smart Search
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Locate accurate information and insights using natural
                        language search, spending 70% less time searching, and
                        highlight relevant sections within a document
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center mb-2">
                        <Globe className="text-emerald-500 mr-2" size={16} />
                        Dynamic Linking
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Improve efficiency by allowing engineers to access
                        standards across publishers with embedded hyperlinks
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center mb-2">
                        <Target className="text-emerald-500 mr-2" size={16} />
                        Section-level persistent linking
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Share links to direct team members to specific
                        paragraphs or even words and improve compliance by
                        ensuring links always send users to the exact version
                        referenced
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center mb-2">
                        <ArrowRight
                          className="text-emerald-500 mr-2"
                          size={16}
                        />
                        Smart Compare Professional
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        View versions side by side, filter out editorial changes
                        to quickly understand important updates, select types of
                        changes (e.g., additions / deletions), and compare
                        non-sequential standards (e.g., 2021 to 2023)
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center mb-2">
                        <Zap className="text-emerald-500 mr-2" size={16} />
                        Micro-Alerts
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Receive change alerts for only the specific sections of
                        a standard you care about
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center mb-2">
                        <Award className="text-emerald-500 mr-2" size={16} />
                        Research Assistant
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Use a virtual subject matter expert to find precise
                        answers and explore resources beyond just standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Packages / Support / Assets */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 border-t-4 border-t-[#1300E9]">
                <h2 className="text-xl font-bold text-[#1300E9] dark:text-blue-400 mb-6 uppercase">
                  Industry-Leading Products and Services
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm font-medium">
                  As the leading engineering standards platform, Engineering
                  Workbench offers unparalleled:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-[#1300E9] mr-2">
                      Access:
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      A one-stop shop for all the content you need
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-[#1300E9] mr-2">
                      Technology:
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Most advanced platform available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-[#1300E9] mr-2">
                      Service:
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Market-leading customer support
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 border-t-4 border-t-[#1300E9]">
                <h2 className="text-xl font-bold text-[#1300E9] dark:text-blue-400 mb-4 uppercase">
                  One-Stop Shop for Content
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm font-medium">
                  Engineering Workbench Professional provides access to the most
                  extensive standards content library in the industry, so
                  engineers can:
                </p>
                <ul className="list-disc pl-5 space-y-3 mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    Access customized content selected from the{" "}
                    <span className="text-[#1300E9] font-semibold">
                      most extensive content library available
                    </span>{" "}
                    (400+ SDO partnerships)
                  </li>
                  <li>
                    Receive{" "}
                    <span className="text-[#1300E9] font-semibold">
                      best-in-class quality and accuracy
                    </span>{" "}
                    (99.9% accurate content typically published within 24-48
                    hours)
                  </li>
                </ul>
                <img loading="lazy" decoding="async" src={img3}
                  alt="Icon"
                  className="h-10 object-contain mt-4"
                />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                <img loading="lazy" decoding="async" src={img1}
                  alt="Engineering Workbench Professional Brochure"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features Table Matrix Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 md:p-8 border border-[#1300E9]/20 dark:border-gray-700 mb-12 overflow-x-auto">
            <h2 className="text-2xl font-bold text-[#1300E9] dark:text-blue-400 mb-6">
              Platform Capabilities Matrix
            </h2>
            <table className="w-full text-left border-collapse min-w-[800px] border border-[#1300E9] dark:border-gray-700">
              <thead>
                <tr className="bg-[#1300E9] dark:bg-blue-600 text-white">
                  <th className="p-3 font-bold border border-white dark:border-gray-700 text-center text-lg">
                    Capability
                  </th>
                  <th className="p-3 font-bold border border-white dark:border-gray-700 text-lg">
                    Feature
                  </th>
                  <th className="p-3 font-bold border border-white dark:border-gray-700 text-center text-lg">
                    EWB
                  </th>
                  <th className="p-3 font-bold border border-white dark:border-gray-700 text-center text-lg">
                    EWB Professional
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-gray-900 dark:text-gray-200 leading-snug">
                {/* Search Section */}
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td
                    className="p-4 font-bold border border-white dark:border-gray-700 text-center bg-[#f4f4fa] dark:bg-gray-800 text-base"
                    rowSpan={3}
                  >
                    Search
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700">
                    Content search: Use AI-powered semantic search and receive
                    results based on plain English phrases or questions
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Smart Search: Use AI-powered semantic search to highlight
                    relevant content within a document
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center"></td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Research Assistant: Use a virtual subject matter expert to
                    find relevant content beyond standards and build your
                    knowledge base
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center"></td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>

                {/* View Section */}
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td
                    className="p-4 font-bold border border-white dark:border-gray-700 text-center bg-[#f4f4fa] dark:bg-gray-800 text-base"
                    rowSpan={3}
                  >
                    View
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700">
                    Download: Download documents as PDFs directly onto your
                    computer
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Document Viewer: Stream documents and browse with
                    interactive Table of Contents
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Auto-generated summaries: Use dynamically-generated document
                    summaries of standards content
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>

                {/* Link Section */}
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td
                    className="p-4 font-bold border border-white dark:border-gray-700 text-center bg-[#f4f4fa] dark:bg-gray-800 text-base"
                    rowSpan={5}
                  >
                    Link
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700">
                    Get Link: Create shareable links to full standards documents
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Persistent linking: Ensure links stay live when documents
                    are updated
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Dynamic Linking: Access standards referenced within other
                    standards
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Section-level Get Link: Create links to specific sections of
                    a document
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center"></td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Comparison Get Link: Generate links to select side-by-side
                    views of historical and active standards, and unique links
                    to every single document change
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center"></td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>

                {/* Alert Section */}
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td
                    className="p-4 font-bold border border-white dark:border-gray-700 text-center bg-[#f4f4fa] dark:bg-gray-800 text-base"
                    rowSpan={2}
                  >
                    Alert
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700">
                    Watchlist: Receive alerts when the version of the document
                    changes status
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Micro-Alerts: Create alerts to receive notifications only
                    when there are changes to relevant sub-sections of a
                    standard
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center"></td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>

                {/* Compare Section */}
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td
                    className="p-4 font-bold border border-white dark:border-gray-700 text-center bg-[#f4f4fa] dark:bg-gray-800 text-base"
                    rowSpan={2}
                  >
                    Compare
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700">
                    Smart Compare: Compare documents side by side with changes
                    highlighted, synced scroll, and the ability to search across
                    both documents
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Smart Compare Professional: Compare documents side-by-side,
                    filter on types of changes, and compare non-sequential
                    standards
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center"></td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>

                {/* Personalize Section */}
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td
                    className="p-4 font-bold border border-white dark:border-gray-700 text-center bg-[#f4f4fa] dark:bg-gray-800 text-base"
                    rowSpan={3}
                  >
                    Personalize
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700">
                    Bookmarks: Create bookmarks to documents for easy workspace
                    access
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4e4f5] dark:bg-gray-800/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Annotations: Create annotations within documents for
                    enhanced collaboration
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
                <tr className="bg-[#f0f0fb] dark:bg-gray-900/50">
                  <td className="p-3 border border-white dark:border-gray-700">
                    Homepage customization: Tailor and personalize your homepage
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                  <td className="p-3 border border-white dark:border-gray-700 text-center">
                    <CheckCircle2
                      className="mx-auto text-[#1300E9] dark:text-blue-400"
                      size={22}
                      strokeWidth={2}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Grid for Support / About */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Market-Leading Support
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
                We have a specialized team of 60+ Customer Experience
                representatives to help you get the most out of EWB
                Professional, with:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      24/6
                    </span>{" "}
                    customer support in{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      15+
                    </span>{" "}
                    languages
                  </li>
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      70,000+
                    </span>{" "}
                    cases closed per year
                  </li>
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      &lt;1 hr
                    </span>{" "}
                    first response time
                  </li>
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      75%
                    </span>{" "}
                    of our cases are closed in 24 hours
                  </li>
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      15 seconds
                    </span>{" "}
                    average speed of phone answer
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      96%
                    </span>{" "}
                    customer satisfaction from closed cases
                  </li>
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      90%
                    </span>{" "}
                    training meets needs
                  </li>
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      22,000
                    </span>{" "}
                    users trained
                  </li>
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1300E9] mr-2">•</span>{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      15%
                    </span>{" "}
                    reduction in time to value through onboarding
                  </li>
                </ul>
              </div>

              <div className="mt-8 grid grid-cols-2 h-64 md:h-80 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
                <img loading="lazy" decoding="async" src={img35}
                  alt="Market Leading Support"
                  className="w-full h-full object-cover"
                />
                <img loading="lazy" decoding="async" src={img36}
                  alt="Support Features"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 flex flex-col">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 uppercase">
                  About Accuris
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>
                    Accuris is the leading provider of engineering standards,
                    with over 60 years of experience helping organization solve
                    engineering problems, reduce risk, and accelerate
                    innovation. Headquartered in Denver, CO, Accuris specializes
                    in SaaS technology that leverages proprietary artificial
                    intelligence and unmatched access to engineering data.
                  </p>
                  <p>
                    Accuris partners with 400+ Standards Development
                    Organizations to support over 650,000 engineering end users
                    in over 100 countries and dozens of industries, including
                    aerospace and defense, energy, and government.
                  </p>
                  <p>
                    Previously Engineering Solutions, Accuris was formed in 2023
                    with the integration of Techstreet and a renewed focus on
                    and investment in its solutions, customer experience, and
                    long-term innovation.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-[#1300E9] mt-8">
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    <a
                      href="https://accuristech.com/solutions/engineering-workbench/?utm_source=email&utm_medium=brochure&utm_id=PC001208&utm_content=ewb%2Bpro"
                      className="text-[#1300E9] hover:underline font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      EWB Professional
                    </a>{" "}
                    is the industry-leading platform that combines 60+ years of
                    experience with cutting-edge technology to enable your
                    engineers to research, collaborate, and problem-solve more
                    efficiently than ever.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-auto text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  For more information, visit:
                </p>
                <a
                  href="https://accuristech.com/?utm_source=email&utm_medium=brochure&utm_id=PC001208&utm_content=ewb%2Bpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-[#1300E9] hover:text-blue-700 dark:hover:text-blue-400"
                >
                  www.accuristech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
