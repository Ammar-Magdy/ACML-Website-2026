import { useEffect } from "react";
import { Globe, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import suezLogo from "../assets/Photos/About/Projects/SUEZ/SUEZ_Logo.webp";
import elsewedyLogo from "../assets/Photos/About/Projects/Elsewedy/Elsewedy_logo.webp";
import apcLogo from "../assets/Photos/About/Projects/ALX-PC/ALX-PC_logo.webp";
import colasRailLogo from "../assets/Photos/About/Projects/COLAS-RAIL/COLAS-RAIL_logo.webp";
import enppiLogo from "../assets/Photos/About/Projects/Enppi/Enppi_Logo.webp";

interface Project {
  name: string;
  logo: string;
  path: string;
  description: string;
  logoBg?: string;
}

const projects: Project[] = [
  {
    name: "SUEZ (SCA)",
    logo: suezLogo,
    path: "/about/projects/suez",
    description:
      "A sophisticated maritime intelligence project supporting vessel movement surveillance and analytics.",
  },
  {
    name: "Elsewedy (PSP)",
    logo: elsewedyLogo,
    path: "/about/projects/elsewedy",
    description:
      "A digital library implementation enabling power systems projects to apply international standards.",
  },
  {
    name: "APC",
    logo: apcLogo,
    path: "/about/projects/alx-pc",
    description:
      "A long-running standards project for Alexandria Petroleum Company engineering and process needs.",
    
  },
  {
    name: "COLAS-RAIL",
    logo: colasRailLogo,
    path: "/about/projects/colas-rail",
    description:
      "A multi-site standards solution supporting major rail and metro infrastructure projects in Egypt.",
    
  },
  {
    name: "ENPPI",
    logo: enppiLogo,
    path: "/about/projects/enppi",
    description:
      "An engineering standards project serving petroleum and process industry requirements across projects.",
       logoBg: "#26424A",
  },
];

export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Gradient background — no video needed for a partners page */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#0F172A]" />

        {/* Subtle corporate grid overlay — matches UIC / IEC */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            {/* Icon badge */}
            <div className="flex justify-start mb-8">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
                <Globe size={40} className="text-emerald-300" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Featured Projects
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
              We lead sophisticated projects with over 30 years of experience.
              We design, analyze, create, and implement pioneering projects. We
              handle a wide range of related project samples.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Become a Partner
              </Link>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-12">
          {/* ── Strategic Partners Section ───────────────────────── */}
          <section className="mb-16">
            {/* Section header */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-4 flex-shrink-0">
                  <Globe size={20} />
                </div>
                Featured Projects
              </h2>
            
            </div>

            {/* Project card grid — 3 cols desktop / 2 tablet / 1 mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.name}
                  to={project.path}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Logo */}
                  <div
                    className={`h-20 w-full flex items-center justify-center mb-6 rounded-xl px-4${project.logoBg === "#ffffff" ? " border border-gray-200 shadow-sm" : ""}`}
                    style={
                      project.logoBg
                        ? { backgroundColor: project.logoBg }
                        : undefined
                    }
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-px bg-emerald-200 dark:bg-emerald-700 mb-5" />

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Visit link indicator */}
                  <span className="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                    View Project
                    <ExternalLink size={14} className="ml-1.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA Section ─────────────────────────────────────── */}
          <section className="mb-8">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-10 border border-emerald-100 dark:border-emerald-800 text-center">
              <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                Looking for a Specific Publisher or Resource?
              </h3>
              <p className="text-emerald-700 dark:text-emerald-400 mb-6 max-w-xl mx-auto">
                Our network is extensive and continuously growing. If you need
                access to a specific publisher or database, reach out — we may
                already have access or can establish a new partnership for you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
              >
                Contact Us About Publishers
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
