import { useEffect } from "react";
import { Book, BookOpen, Users, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import bloomsburyLogo from "../../assets/Photos/Publishers/Bloomsbury/logo.svg";
import bloomsburyBg from "../../assets/Photos/Publishers/Bloomsbury/Background.webp";
import img004 from "../../assets/Photos/Publishers/Bloomsbury/image004.webp";
import img005 from "../../assets/Photos/Publishers/Bloomsbury/image005.webp";
import img006 from "../../assets/Photos/Publishers/Bloomsbury/image006.webp";
import img007 from "../../assets/Photos/Publishers/Bloomsbury/image007.webp";
import img008 from "../../assets/Photos/Publishers/Bloomsbury/image008.webp";
import img009 from "../../assets/Photos/Publishers/Bloomsbury/image009.webp";
import img010 from "../../assets/Photos/Publishers/Bloomsbury/image010.webp";

const harryPotterImages = [
  {
    src: img004,
    alt: "Harry Potter and the Philosopher's Stone (Welsh) cover",
    label: "Accessible Editions",
  },
  {
    src: img005,
    alt: "Harry Potter and the Philosopher's Stone cover",
    label: "Adult Editions",
  },
  {
    src: img006,
    alt: "Harry Potter Ravenclaw House Edition Paperback Box Set cover",
    label: "Box Sets & Gift Editions",
  },
  {
    src: img007,
    alt: "The Harry Potter Wizarding Almanac cover",
    label: "Companion Books",
  },
  {
    src: img008,
    alt: "Harry Potter Boxed Set: The Complete Collection (Adult Paperback) cover",
    label: "Hogwarts House Editions",
  },
  {
    src: img009,
    alt: "Harry Potter and the Philosopher's Stone Illustrated cover",
    label: "Illustrated Editions",
  },
  {
    src: img010,
    alt: "Harry Potter and the Prisoner of Azkaban cover",
    label: "Classic Series",
  },
];

const harryPotterLinks = [
  {
    name: "Accessible Editions and Other Languages",
    url: "https://www.bloomsbury.com/uk/harry-potter/accessible-editions-and-other-languages/",
  },
  {
    name: "Adult Editions",
    url: "https://www.bloomsbury.com/uk/harry-potter/adult-editions/",
  },
  {
    name: "Box Sets and Gift Editions",
    url: "https://www.bloomsbury.com/uk/harry-potter/box-sets-and-gift-editions/",
  },
  {
    name: "Companion Books",
    url: "https://www.bloomsbury.com/uk/harry-potter/companion-books/",
  },
  {
    name: "Hogwarts House Editions",
    url: "https://www.bloomsbury.com/uk/harry-potter/hogwarts-house-editions/",
  },
  {
    name: "Illustrated Editions",
    url: "https://www.bloomsbury.com/uk/harry-potter/illustrated-editions/",
  },
  {
    name: "The Classic Harry Potter Series",
    url: "https://www.bloomsbury.com/uk/harry-potter/the-classic-harry-potter-series/",
  },
];

const bloomsburyProducts = [
  {
    name: "Bloomsbury Collections",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-collections/",
  },
  {
    name: "Bloomsbury Cultural History",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-cultural-history/",
  },
  {
    name: "Bloomsbury Education and Childhood Studies",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-education-and-childhood-studies/",
  },
  {
    name: "Bloomsbury Fashion Central",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-fashion-central/",
  },
  {
    name: "Bloomsbury Food Library",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-food-library/",
  },
  {
    name: "Bloomsbury History: Theory & Method",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-history-theory-method/",
  },
  {
    name: "Bloomsbury Medieval Studies",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-medieval-studies/",
  },
  {
    name: "Bloomsbury Music and Sound",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-music-and-sound/",
  },
  {
    name: "Bloomsbury Philosophy Library",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-philosophy-library/",
  },
  {
    name: "Bloomsbury Video Library",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-video-library/",
  },
  {
    name: "Bloomsbury Visual Arts",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-visual-arts/",
  },
  {
    name: "Churchill Archive",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/churchill-archive/",
  },
  {
    name: "Cite Them Right",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/cite-them-right/",
  },
  {
    name: "Drama Online",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/drama-online/",
  },
  {
    name: "Fairchild Books Interior Design Library",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/fairchild-books-interior-design-library/",
  },
  {
    name: "Human Kinetics Library",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/human-kinetics-library/",
  },
  {
    name: "Jessica Kingsley Publishers Library",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/jessica-kingsley-publishers-library/",
  },
  {
    name: "Maths Engine",
    url: "https://www.bloomsburyonlineresources.com/maths-engine/home",
  },
  { name: "Research Right", url: "https://bloomsburyresearchright.com/" },
  {
    name: "Screen Studies",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/screen-studies/",
  },
  {
    name: "Skills for Study",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/skills-for-study/",
  },
  { name: "Social Work Toolkit", url: "https://www.socialworktoolkit.com/" },
  {
    name: "Theology and Religion Online",
    url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/theology-and-religion-online/",
  },
];

const institutionBenefits = [
  "No limit on the number of simultaneous users",
  "Access by IP address, proxy server, Shibboleth, WAYFless URL and other standard authentication methods",
  "Convenient online account management service",
  "Support for outbound OpenURL linking from citations",
  "Digital Object Identifiers (DOIs)",
  "COUNTER 5 usage statistics",
  "MARC records at volume level for all book titles",
  "Institutional logo displayed on interface",
  "Conforms to accessibility standards for most Level A (Priority 1) and AA (Priority 2) success criteria of the Web Content Accessibility Guidelines (WCAG 2.0) developed by the Worldwide Web Consortium (W3C)",
  "Promotional materials available",
];

export default function PublisherBloomsbury() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bloomsbury";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#32438F]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={bloomsburyBg}
            alt="Bloomsbury background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Overlay */}
          <div className="absolute inset-0 bg-[#32438F]/85 mix-blend-multiply"></div>
          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={bloomsburyLogo}
                  alt="Bloomsbury Logo"
                  className="h-12 md:h-16 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bloomsbury Publishing Plc.
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.bloomsbury.com"
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
              {/* About Bloomsbury */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                    <BookOpen size={20} />
                  </div>
                  About Bloomsbury
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Bloomsbury Publishing is a leading independent publishing
                    house, established in 1986, with authors who have won the
                    Nobel, Pulitzer and Booker Prizes, and is the originating
                    publisher and custodian of the{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/harry-potter/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 font-bold hover:underline"
                    >
                      Harry Potter
                    </a>{" "}
                    series. Bloomsbury has offices in{" "}
                    <strong>London, New York, New Delhi, Oxford</strong> and{" "}
                    <strong>Sydney</strong>. Within Bloomsbury's Academic
                    division, it publishes under Bloomsbury, as well as under a
                    number of prestigious and historic imprint names.{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Our Story
                    </a>{" "}
                    for how it all began.
                  </p>
                </div>
              </div>

              {/* Harry Potter Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 mr-4">
                    <Award size={20} />
                  </div>
                  <a
                    href="https://www.bloomsbury.com/uk/harry-potter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 dark:text-red-400 hover:underline"
                  >
                    Harry Potter
                  </a>
                </h2>
                <p className="text-blue-700 dark:text-blue-300 font-semibold mb-3">
                  Bloomsbury is the originating publisher and custodian of the
                  Harry Potter series.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Welcome to the home of Harry Potter books! From children's
                  paperbacks to stunning illustrated editions and gorgeous
                  boxsets, magic is only the turn of a page away..
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                  {harryPotterImages.map((img) => (
                    <div key={img.label} className="flex flex-col items-center">
                      <div className="w-full aspect-[2/3] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img loading="lazy" decoding="async" src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {harryPotterLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium hover:underline"
                      >
                        <ExternalLink
                          size={14}
                          className="mr-1 flex-shrink-0"
                        />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mission and Values */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#07094B] dark:text-indigo-300 mb-4 flex items-center">
                  <Users className="mr-3" />
                  Mission and Values
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Our mission is to be a creative, entrepreneurial,
                    independent publisher of books, audiobooks and digital
                    content of excellence and originality and to bring these
                    works to a worldwide audience. Our purpose is to inform,
                    educate, entertain and inspire readers of all ages and
                    backgrounds. We champion a life-long love of reading and
                    learning and seek to help build a reading culture with all
                    the benefits which that brings society.
                  </p>
                  <p>
                    We want to create a working environment that stimulates
                    creativity and collaboration, is respectful of difference,
                    inclusive and ethical in its practice and supports
                    well-being. We are determined to nurture and develop our
                    authors and our employees to their highest potential and
                    know that our success is down to the passion, commitment and
                    hard work of our talented people. We recognize the urgent
                    need to help people from all backgrounds and identities to
                    become part of the global publishing industry, allowing
                    diverse voices to both reflect and shape our culture and
                    society.
                  </p>
                  <p>
                    We are committed to helping authors, both new and
                    established, to bring original and powerful works across an
                    array of genres and subjects to readers and learners
                    worldwide, sharing ideas, knowledge and experience, and
                    sometimes challenging convention. Our editorial decisions
                    are informed by a belief in the freedom of speech.
                  </p>
                </div>
              </div>

              {/* Adult Special Interest */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#07094B] dark:text-indigo-300 mb-4 flex items-center">
                  <Book className="mr-3" />
                  Adult Special Interest
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  Our special interest division was shortlisted for the British
                  Book Awards' Publisher of the Year, 2018 (in conjunction with
                  our trade list) and includes the following imprints:
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/nautical/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Adlard Coles
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/series/bbc-proms-guides"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    BBC Proms
                  </a>
                  , Bloomsbury Caravel, Bloomsbury China, Bloomsbury Continuum,
                  Bloomsbury Wildlife, Bloomsbury Reader,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/popular-science/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Bloomsbury Sigma
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/sport-fitness/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Bloomsbury Sport
                  </a>
                  , Burns &amp; Oates, Helm, Herbert Press, Conway, Green Tree,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Osprey Games
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Osprey Publishing
                  </a>
                  , Philip Wilson Publishers, Shire Publications, T&amp;A D
                  Poyser,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/discover/reeds-nautical-almanac/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Reeds
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/wisden/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Wisden
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/reference/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Bloomsbury Yearbooks
                  </a>
                  .
                </p>
              </div>

              {/* Children's Division */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#07094B] dark:text-indigo-300 mb-4 flex items-center">
                  <BookOpen className="mr-3" />
                  Children's Division
                </h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Shortlisted for Children's Publisher of the Year 2018 for
                    both the Independent Publishing Group Award and the British
                    Book Awards, our children's consumer division includes the
                    bestselling authors J.K. Rowling, Michael Rosen, Sarah J.
                    Maas, Debi Gliori, Sarah Crossan, Lucy Worsley, Sibeal
                    Pounder, Louis Sachar and Neil Gaiman. The imprints in the
                    division are{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/childrens/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Children's Books
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/childrens/young-adult/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury YA
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/childrens/books-for-0-5/activity-sticker-books/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Activity Books
                    </a>
                    .
                  </p>
                  <p>
                    Our education division incorporates the imprints{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/education/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Education
                    </a>
                    , Featherstone and Andrew Brodie.
                  </p>
                </div>
              </div>

              {/* Academic & Professional Division */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#07094B] dark:text-indigo-300 mb-4 flex items-center">
                  <Award className="mr-3" />
                  Bloomsbury Academic and Professional Division
                </h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    The Academic &amp; Professional division has lifelong
                    learning at the heart of our business, publishing works of
                    excellence and originality to inspire, educate and inform,
                    and believing that intellectual curiosity and educational
                    achievement go hand-in-hand.
                  </p>
                  <p>
                    The{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Academic
                    </a>{" "}
                    division specialises in the arts, humanities and social
                    sciences, law, business and management, and study skills. It
                    includes{" "}
                    <a
                      href="https://www.bloomsburyfashioncentral.com/products/fairchild-books"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Fairchild Books
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/law/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Hart Publishing
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/middle-east/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      I.B. Tauris
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/drama-performance-studies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Methuen Drama
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/drama-performance-studies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      The Arden Shakespeare
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/discover/superpages/academic/celebrating-200-years-of-t-t-clark/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      T&amp;T Clark
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/african-studies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Zed Books
                    </a>
                    . In 2021 we acquired{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/discover/bloomsbury-academic/red-globe-press/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Red Globe Press
                    </a>{" "}
                    from Macmillan Education Limited, as well as{" "}
                    <a
                      href="https://www.abc-clio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      ABC-CLIO
                    </a>
                    .
                  </p>
                  <p>
                    <a
                      href="https://www.bloomsburyprofessional.com/uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Professional
                    </a>{" "}
                    leads in UK and Ireland law, tax and accounting.
                  </p>
                  <p>
                    <a
                      href="https://www.bloomsbury.com/uk/discover/bloomsbury-digital-resources/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Digital Resources
                    </a>{" "}
                    provides creative online research and learning environments
                    that deliver excellence and originality.
                  </p>
                  <p>
                    The division has won the Bookseller Industry Award for
                    Academic, Educational &amp; Professional Publisher of the
                    Year three times: in 2013, 2014 and 2021.
                  </p>
                </div>
              </div>

              {/* About Products */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-[#07094B] dark:text-indigo-300 mb-4 flex items-center">
                  <Book className="mr-3" />
                  About Products
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-semibold mb-2">
                  Our products cover a range of disciplines in the Humanities,
                  Social Sciences, Visual Arts, and Performing Arts.
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-semibold mb-4">
                  All of Bloomsbury's Digital Resources offer these benefits for
                  institutions:
                </p>
                <ul className="space-y-2">
                  {institutionBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl shadow-sm p-8 border border-indigo-100 dark:border-indigo-800 text-center">
                <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
                  Explore Bloomsbury Digital Resources
                </h3>
                <p className="text-indigo-700 dark:text-indigo-400 mb-6">
                  Partner with us to access the full range of Bloomsbury's
                  academic and professional content.
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
                  <BookOpen className="mr-2 text-indigo-500" />
                  Digital Products
                </h3>
                <ul className="space-y-3">
                  {bloomsburyProducts.map((product, index) => (
                    <li key={index}>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <ExternalLink
                          size={14}
                          className="mr-2 mt-0.5 flex-shrink-0"
                        />
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
                <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.bloomsbury.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Bloomsbury Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bloomsbury.com/uk/academic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Academic Division
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bloomsbury.com/uk/discover/bloomsbury-digital-resources/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Digital Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
