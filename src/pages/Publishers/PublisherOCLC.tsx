import { useEffect } from "react";
import {
  Briefcase,
  Zap,
  Globe,
  Shield,
  ExternalLink,
  Database,
  Monitor,
  Server,
  Share2,
  BookOpen,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

import oclcLogo from "../../assets/Photos/Publishers/OCLC/logo.svg";
import oclcVideo from "../../assets/Videos/Publishers/OCLC/OCLC.mp4";
import worldcatLogo from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/Logo-WorldCat.webp";
import worldcatImg1 from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/image003.webp";
import worldcatImg2 from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/image004.webp";
import worldcatMetric2 from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/image005.webp";
import worldcatMetric3 from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/image006.webp";
import worldcatMetric4 from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/image007.webp";
import worldcatMetric5 from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/image008.webp";
import worldcatDiagram from "../../assets/Photos/Publishers/OCLC/OCLC-WorldCat/image009.webp";
import webdeweyImg from "../../assets/Photos/Publishers/OCLC/OCLC-Webdewey/OCLC-Webdewey.webp";

export default function PublisherOCLC() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "OCLC";
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
            <source src={oclcVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay */}
          <div className="absolute inset-0 bg-[#4c8c2b]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={oclcLogo}
                  alt="OCLC Logo"
                  className="h-24 md:h-40 object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              OCLC
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.oclc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              {/* About OCLC Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About OCLC
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    OCLC is a global library organization founded in 1967 that
                    provides shared technology services, original research, and
                    community programs for its membership and the library
                    community at large. We are librarians, technologists,
                    researchers, pioneers, leaders, and learners. With thousands
                    of library members nearly 30,000 in more than 100 countries,
                    we come together as OCLC to make information more accessible
                    and more useful.
                  </p>
                  <p>
                    Whether we’re supporting advancements on the leading edge of
                    science or helping children build a strong learning
                    foundation, shared knowledge is the common thread. People
                    can find the answers they need to solve important problems
                    in their lives, in their communities, and in the world.
                    Together we make breakthroughs possible. Both big and small.
                  </p>
                </div>
              </div>

              {/* WorldCat Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <div className="flex flex-col sm:flex-row gap-6 mb-6 items-start">
                  {/* WorldCat Logo */}
                  <div className="w-full sm:w-1/3 bg-white dark:bg-gray-700/50 rounded-xl h-32 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-600 overflow-hidden shadow-sm transition-transform hover:shadow-md hover:scale-[1.02]">
                    <a
                      href="https://search.worldcat.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full w-full flex items-center justify-center"
                    >
                      <img loading="lazy" decoding="async" src={worldcatLogo}
                        alt="WorldCat Logo"
                        className="h-full w-full object-contain p-4 drop-shadow-sm"
                      />
                    </a>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                      <Briefcase className="mr-3" />
                      What is WorldCat.org?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                      WorldCat is the world’s largest library catalog, helping
                      you find library materials online.
                    </p>
                  </div>
                </div>

                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-8">
                  <p>
                    WorldCat.org is a resource for locating unique, trustworthy
                    materials that you often can’t find anywhere except in a
                    library. By connecting thousands of libraries’ collections
                    in one place, WorldCat.org makes it easy for you to browse
                    the world’s libraries from one search box.
                  </p>
                  <p>
                    In the past fifty years, thousands of libraries have
                    represented their collections in WorldCat. Today, you can
                    search WorldCat in nearly 500 languages to find physical
                    items like books, audiobooks, maps, musical scores, and
                    recordings, along with electronic items like ebooks,
                    e-journals, articles, and digital images you can access
                    online.
                  </p>
                  <p>
                    Search WorldCat.org for information on almost any topic:
                    from science to cooking to history and genealogy. Here,
                    you'll find out which libraries own bestsellers and
                    one-of-a-kind items like family histories, photos, and other
                    unique materials. A search on WorldCat.org delivers a single
                    set of search results that integrates information about
                    relevant library resources to support your information
                    needs.
                  </p>
                  <p>
                    WorldCat.org is provided by OCLC, a nonprofit global library
                    organization that provides shared technology services,
                    original research, and community programs so libraries can
                    better fuel learning, research, and innovation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Globe className="mr-2 text-emerald-500 w-5 h-5" />
                      Why become a WorldCat.org library?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      WorldCat.org makes your library’s resources visible to
                      information seekers on a freely available website. It is
                      the foundation of our web visibility program, which
                      connects people to libraries from search engines and
                      nonlibrary websites where they usually begin their
                      research. Information about library materials is spread
                      across the web via strategic partnerships with search
                      engines and key sites, such as Google Books and Goodreads.
                      Searchers link from those sites to WorldCat.org and from
                      there, to catalogs of libraries that own needed items. The
                      result: Your local resources gain a more global presence,
                      promoting libraries as a vital information source and
                      allowing anyone to quickly and easily access resources in
                      libraries around the world.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                      As the world’s largest library catalog website,
                      WorldCat.org helps users find items in libraries close to
                      them
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Zap className="mr-2 text-emerald-500 w-5 h-5" />
                      Put your library in WorldCat.org
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      WorldCat.org helps people know more about libraries and
                      their collections, connecting people who may not otherwise
                      visit in person or via a website. It expands the
                      communities you serve while personalizing and localizing
                      the experience for the people you care about most.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-600 mb-4">
                      {/* Top Header Row with Explore Title */}
                      <div className="flex flex-col items-center justify-center mb-8 gap-4">
                        <span className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-600 px-6 py-3 rounded-xl inline-block shadow-sm text-center">
                          Explore resources in libraries worldwide
                        </span>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <img loading="lazy" decoding="async" src={worldcatImg1}
                          alt="Articles"
                          className="w-full object-contain rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 bg-white"
                        />
                        <img loading="lazy" decoding="async" src={worldcatImg2}
                          alt="Books"
                          className="w-full object-contain rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 bg-white"
                        />
                        <img loading="lazy" decoding="async" src={worldcatMetric2}
                          alt="Sound recordings"
                          className="w-full object-contain rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 bg-white"
                        />
                        <img loading="lazy" decoding="async" src={worldcatMetric3}
                          alt="Musical scores"
                          className="w-full object-contain rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 bg-white"
                        />
                        <img loading="lazy" decoding="async" src={worldcatMetric4}
                          alt="Theses/Dissertations"
                          className="w-full object-contain rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 bg-white"
                        />
                        <img loading="lazy" decoding="async" src={worldcatMetric5}
                          alt="Maps"
                          className="w-full object-contain rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 bg-white sm:col-span-2 md:col-span-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Database className="mr-2 text-emerald-500 w-5 h-5" />
                      WorldCat helps you share what makes your library great to
                      make all libraries better
                    </h3>

                    <div className="mb-6">
                      <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600 mb-6">
                        <img loading="lazy" decoding="async" src={worldcatDiagram}
                          alt="WorldCat Diagram"
                          className="w-full max-w-lg object-contain rounded-lg shadow-sm"
                        />
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      WorldCat is the manifestation of the creativity and
                      innovation of the staff of OCLC and thousands of
                      librarians. Unique in scale and unparalleled in data
                      quality, WorldCat makes library collections findable and
                      accessible around the world.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      By enabling libraries to share high-quality library
                      metadata and bibliographic records with each other,
                      WorldCat has helped librarians dramatically reduce the
                      time they spend on original cataloging. Between July 2023
                      and June 2024,{" "}
                      <strong>
                        OCLC member librarians copy cataloged 95% of their items
                        from WorldCat, saving an average of 10 minutes per title
                      </strong>
                      . These librarians copy cataloged 357,798,128 titles
                      during that time, so they saved around 59 million hours,
                      collectively.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Partner content providers add records to
                      WorldCat—sometimes before a resource is published—so
                      library users can find the information they need as soon
                      as it’s available.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Shield className="mr-2 text-emerald-500 w-5 h-5" />
                      WorldCat supercharges library collections
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      The resources in your library power “light bulb moments”
                      for learners and researchers every day. WorldCat
                      supercharges your collection by aggregating and enriching
                      your library metadata in its cloud-based infrastructure to
                      power greater collection reach and usage.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      WorldCat is the manifestation of the creativity and
                      innovation of the staff of OCLC and thousands of
                      librarians. Unique in scale and unparalleled in data
                      quality, WorldCat makes library collections findable and
                      accessible around the world.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      OCLC’s team of expert catalogers and data quality
                      specialists constantly enrich WorldCat records with new
                      and corrected information to ensure that WorldCat contains
                      the highest quality records possible. Library staff
                      members also enhance records through the{" "}
                      <a
                        href="https://www.oclc.org/en/cataloging-subscription.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        OCLC Cataloging and Metadata Subscription
                      </a>{" "}
                      (previously the OCLC Cataloging Subscription), making
                      these records the industry standard for quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* WebDewey Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
                  <Database className="mr-3" />
                  About WebDewey
                </h2>

                <div className="mb-8 flex justify-center">
                  <a
                    href="https://www.oclc.org/en/dewey/webdewey.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md block transition-transform hover:scale-[1.02] hover:shadow-xl rounded-xl"
                  >
                    <img loading="lazy" decoding="async" src={webdeweyImg}
                      alt="WebDewey Dashboard"
                      className="w-full rounded-xl shadow-md border border-gray-100 dark:border-gray-700 object-contain"
                    />
                  </a>
                </div>

                <div className="space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Monitor className="mr-2 text-blue-500 w-5 h-5" />
                      Access WebDewey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      WebDewey is a web browser-based electronic version of the
                      Dewey Decimal Classification® (DDC) system. You can access
                      WebDewey at: dewey.org/WebDewey/login
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      WebDewey provides functions to make Dewey classification
                      and cataloging efficient and accurate:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Associations between Dewey numbers and Library of Congress subject headings as additional access points to the DDC.",
                        "Access to many pre-built numbers that are found only in the web version, especially in the literature area.",
                        "Awareness of the latest changes to the Classification via the frequent updates made to WebDewey.",
                        "Easy annotation of the DDC with the Comments feature.",
                        "Thousands of additional Relative Index terms as additional access points to the DDC.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5 leading-none px-1 text-sm">
                            ●
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Server className="mr-2 text-blue-500 w-5 h-5" />
                      WebDewey database
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      The WebDewey database, which is updated regularly,
                      includes the most current version of the Dewey Decimal
                      Classification (DDC 23 and all updates since its
                      publication in 2011), plus supplemental data. Major
                      components are:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Records for Dewey entry numbers in the schedules and tables",
                        "Records for entries in the DDC manual",
                        "DDC Relative Index",
                        "Library of Congress subject headings associated with Dewey class numbers",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5 leading-none px-1 text-sm">
                            ●
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Share2 className="mr-2 text-blue-500 w-5 h-5" />
                      Searching, browsing, and linking
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Basic searching lets you search the entire database.",
                        "Search functionality includes limiting by index, combined-term searches in one or multiple indexes using Boolean AND/OR/NOT operators, proximity searches, truncation, and character masking (wildcards).",
                        "Browsable sequential indexes of DDC numbers, the Relative Index, and LCSH.",
                        "Hierarchical displays that show the position of each class number in relation to broader and narrower classes.",
                        "Extensive use of hyperlinks for convenient access to related records and manual entries cited in notes.",
                        "Links from LCSH listed in a record to the corresponding subject authority records.",
                        "Displays of the ten Main Classes and the DDC tables that enable top-down navigation through the DDC.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5 leading-none px-1 text-sm">
                            ●
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <BookOpen className="mr-2 text-blue-500 w-5 h-5" />
                      Dewey Decimal Classification Introduction and Glossary
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "View the complete Introduction to the DDC.",
                        "Check the DDC Glossary for brief explanations of DDC terminology.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5 leading-none px-1 text-sm">
                            ●
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Settings className="mr-2 text-blue-500 w-5 h-5" />
                      Subscribe to WebDewey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      A WebDewey subscription:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Can begin at any time and extends for one year from the starting date.",
                        "Requires an annual fee only; no per-use charges.",
                        "Is available on a single-user or site-license basis.",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5 leading-none px-1 text-sm">
                            ●
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800 text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Make your collections visible
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                  Data about library collections, which house some of the most
                  authoritative and unique resources in the world, is difficult
                  to share directly from independent library catalogs. The
                  collaborative nature of WorldCat helps libraries take
                  advantage of linked data opportunities to lessen their
                  workloads and to increase their online presence and
                  discoverability.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Database className="mr-2 text-emerald-500" />
                  Key Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Cataloging & Metadata",
                    "Collection Management",
                    "Digitization & Preservation",
                    "Resource Sharing",
                    "Reference Tools",
                    "eContent Management",
                    "Group Services",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-100 dark:border-emerald-800">
                <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-3">
                  At OCLC
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 italic">
                  We make information more accessible and more useful, helping
                  librarians dramatically reduce the time they spend on original
                  cataloging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
