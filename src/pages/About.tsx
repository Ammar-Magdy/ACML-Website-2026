import {
  Target,
  Award,
  Globe,
  Users,
  BookOpen,
  User,
  Briefcase,
  FileText,
  Workflow,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    document.title = "About Us";

    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To develop the information infrastructure and empower institutions with world-class library solutions, digital content, and technology services.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality products and services from leading international publishers and technology providers.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Exclusive agent for multiple international companies, bringing global expertise and resources to the local market.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description:
        "Dedicated to understanding and meeting the unique needs of each library, institution, and organization we serve.",
    },
  ];

  const milestones = [
    {
      year: "1990s",
      title: "Foundation",
      description:
        "ACML established as a pioneer in providing library media and technology solutions.",
    },
    {
      year: "2000s",
      title: "Digital Transformation",
      description:
        "Expanded into electronic journals, databases, and library automation systems.",
    },
    {
      year: "2010s",
      title: "Market Leadership",
      description:
        "Became the leading provider of industry standards and restoration laboratory solutions.",
    },
    {
      year: "Today",
      title: "Innovation Leader",
      description:
        "Continuing to lead in e-content management, ICT consultancy, and digital library solutions.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About ACML
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              ACML Integrated Information Solutions & Systems is your trusted
              partner in the information age, providing comprehensive solutions
              for libraries, academic institutions, and organizations across
              Egypt and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                ACML is the leading provider of library media, technology
                solutions, and digital content management in Egypt. For over
                three decades, we have been the exclusive agent for numerous
                international publishers and technology providers, bringing
                world-class resources to libraries and institutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We specialize in books and periodicals, electronic journals,
                full-text databases, library automation systems, library
                furniture, restoration materials,and industry standards from
                professional societies and regulatory bodies worldwide.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our commitment to excellence and innovation has made us the
                preferred partner for universities, research centers, corporate
                libraries, and government institutions seeking to modernize
                their information infrastructure.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.BASE_URL}001.webp`}
                alt="ACML Store Front"
                className="rounded-xl shadow-2xl w-full dark:opacity-90"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6">
                  <value.icon
                    size={28}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="lg:mx-20 md:mx-10 mx-0">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Explore ACML
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover more about our organization, leadership, and standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Organization */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-800 pb-2">
                  Organization
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about/mission"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Target size={18} className="mr-2" /> Mission & Vision
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about/team/employees"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Users size={18} className="mr-2" /> Employees
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/represent"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Globe size={18} className="mr-2" /> ACML Represents
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Leadership */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-800 pb-2">
                  Leadership
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about/chairman"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <User size={18} className="mr-2" /> The Chairman
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/chairman/awards"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Award size={18} className="mr-2" /> Chairman Awards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/chairman/accomplishments"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Briefcase size={18} className="mr-2" /> Accomplishment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/chairman/clients"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <FileText size={18} className="mr-2" /> Client References
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Responsibility */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-800 pb-2">
                  Community
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about/donations-grants"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Award size={18} className="mr-2" /> Donations & Grants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/awards"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Award size={18} className="mr-2" /> ACML Awards
                    </Link>
                  </li>
                </ul>
              </div>

              {/*Standards */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-800 pb-2">
                  Standards
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/publishers#digital-library"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <BookOpen size={18} className="mr-2" /> Digital Library of
                      International Codes and Standards
                    </Link>
                  </li>
                </ul>
              </div>

              {/*Projects */}
              <div id="projects-samples" className="space-y-4 scroll-mt-24">
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-800 pb-2">
                  Samples of main projects
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about/chairman"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Workflow size={18} className="mr-2" /> SCA
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/chairman/awards"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Workflow size={18} className="mr-2" /> PSP
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/chairman/accomplishments"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Workflow size={18} className="mr-2" /> APC
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/chairman/clients"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Workflow size={18} className="mr-2" /> Colas Rail
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/chairman/clients"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Workflow size={18} className="mr-2" /> ENPPI
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Decades of excellence in information technology and digital library
              solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.BASE_URL}005.jpg`}
                alt="ACML Mission"
                className="rounded-xl shadow-2xl w-full dark:opacity-90"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Pioneer of Information Literacy
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                As a pioneer in the field, ACML has been instrumental in
                promoting information literacy and helping institutions
                transition into the digital age. We provide not just products,
                but comprehensive consultancy services in ICT and information
                management.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Our expertise extends to building restoration laboratories,
                implementing library automation systems, and providing access to
                thousands of international standards and regulations from
                professional societies, trade associations, and government
                sources.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border-l-4 border-emerald-600">
                <p className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                  "We don't just provide products – we build partnerships for
                  success."
                </p>
                <p className="text-emerald-700 dark:text-emerald-300">
                  Our commitment is to empower every institution with the tools
                  and knowledge they need to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
