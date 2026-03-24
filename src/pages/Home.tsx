import {
  BookOpen,
  Database,
  Building2,
  Shield,
  Users,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "ACML";
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Digital Library of International Codes and Standards",
      description:
        "Access to a comprehensive collection of international codes and standards.",
      path: "/publishers#digital-library",
    },
    {
      icon: Database,
      title: "Digital Databases",
      description:
        "Access to full-text databases, electronic journals, and digital content management systems.",
      path: "/services#databases",
    },
    {
      icon: Building2,
      title: "Library and Archives Solutions",
      description:
        "Complete library automation systems, furniture, and restoration materials for modern libraries.",
      path: "/services#software-products",
    },
    {
      icon: Shield,
      title: "Publishers",
      description:
        "Standards and regulations from professional societies, trade associations, and regulatory bodies.",
      path: "/publishers#partners-by-type",
    },
    {
      icon: Users,
      title: "Implemented Projects - Sample",
      description: "We introduce sample of some main sophisticated projects.",
      path: "/about#projects-samples",
    },
    {
      icon: TrendingUp,
      title: "E-Content Management",
      description:
        "Leading solutions in electronic content management and digital transformation.",
      path: "/publishers/sp-global",
    },
  ];

  const stats = [
    { value: "1995", label: "Year Of Establishment" },
    { value: "+32", label: "Partner Publishers" },
    { value: "+1000", label: "Satisfied Clients" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover "
          >
            <source
              src={`${import.meta.env.BASE_URL}videos/Background.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 dark:from-gray-900/80 dark:to-gray-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Gateway to the
              <span className="text-emerald-600 dark:text-emerald-400">
                {" "}
                Information Age
              </span>
            </h1>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-300 mb-8 leading-relaxed">
              ACML is the leading provider of library media, technology
              solutions, and digital content management. We are the exclusive
              agent for multiple international publishers and information
              service providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Explore Our Services
                <ChevronRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/contact"
                className="bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg border-2 border-emerald-600 dark:border-emerald-500 inline-flex items-center justify-center"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions for libraries and information centers,
              institutions, and organizations in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block group"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                  <feature.icon
                    size={28}
                    className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                We Lead, Others Follow
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                For over three decades, ACML has been at the forefront of
                information technology and library solutions in Egypt and the
                region. As exclusive agents for numerous international
                publishers and technology providers, we bring world-class
                resources to your institution.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Our mission is to develop the information infrastructure and
                empower institutions with cutting-edge tools, comprehensive
                databases, and expert consultancy services.
              </p>
              <Link
                to="/about"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg inline-block"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.BASE_URL}002.webp`}
                alt="ACML E-Books and Journals"
                className="rounded-lg shadow-lg w-full h-48 object-fill dark:opacity-90"
              />
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.BASE_URL}003.webp`}
                alt="Library Collection"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8 dark:opacity-90"
              />
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.BASE_URL}004.webp`}
                alt="Digital Solutions"
                className="rounded-lg shadow-lg w-full h-48 object-cover dark:opacity-90"
              />
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.BASE_URL}005.webp`}
                alt="ACML Mission"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8 dark:opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Library?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discover how ACML can help modernize your
            institution with cutting-edge technology and comprehensive
            information resources.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-600 dark:text-emerald-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
