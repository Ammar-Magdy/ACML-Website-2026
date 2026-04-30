import { useEffect, useState } from "react";
import { Globe, ExternalLink, FileText, X } from "lucide-react";
import { Link } from "react-router-dom";

import suezLogo from "../assets/Photos/About/Projects/SUEZ/SUEZ_Logo.webp";
import elsewedyLogo from "../assets/Photos/About/Projects/Elsewedy/Elsewedy_logo.webp";
import apcLogo from "../assets/Photos/About/Projects/ALX-PC/ALX-PC_logo.webp";
import colasRailLogo from "../assets/Photos/About/Projects/COLAS-RAIL/COLAS-RAIL_logo.webp";
import enppiLogo from "../assets/Photos/About/Projects/Enppi/Enppi_Logo.webp";
import accurisLogo from "../assets/Photos/Publishers/Accuris/Logo.webp";
import awardProof from "../assets/Photos/Partners/award_proof.webp";
import awardPdf from "../assets/PDF/Partners/ACML-2I2S BEST-PERFORMANCE-ACCURIS-CHANNEL PARTNER 2025.pdf";

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
      logoBg: "#ffffff",
  },
  {
    name: "APC",
    logo: apcLogo,
    path: "/about/projects/alx-pc",
    description:
      "A long-running standards project for Alexandria Petroleum Company engineering and process needs.",
    logoBg: "#ffffff",
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
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Projects";
  }, []);

  useEffect(() => {
    if (!isAwardModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isAwardModalOpen]);

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

          {/* ── Award Recognition Section ────────────────────────── */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className=" p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full h-full rounded-2xl bg-white/90 flex items-center justify-center mb-6 shadow-inner px-4 py-3">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={accurisLogo}
                      alt="Accuris logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-widest">
                    Award Recognition
                  </p>
                </div>

                <div className="md:col-span-2 p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">
                    Awarded by Accuris
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-snug">
                    Best Performing Channel Partner Worldwide
                    <span className="block text-emerald-600 dark:text-emerald-400 mt-1">
                      Recognised in 2026 for FY2025 Performance
                    </span>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                    ACML 2I2S was officially recognised by Accuris as the
                    top-performing channel partner worldwide based on FY2025
                    sales performance results. This achievement reflects our
                    long-standing commitment to delivering high-value technical
                    intelligence, standards, and trusted industry solutions
                    across the region.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => setIsAwardModalOpen(true)}
                      className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                    >
                      Learn More
                    </button>
                    <a
                      href="https://www.accuristech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition-colors"
                    >
                      Visit Accuris
                      <ExternalLink size={14} className="ml-1.5" />
                    </a>
                  </div>
                </div>
              </div>
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

      {isAwardModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 p-4 sm:p-6 flex items-start sm:items-center justify-center"
          onClick={() => setIsAwardModalOpen(false)}
        >
          <div
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100 dark:border-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Official Verification
              </h3>
              <button
                type="button"
                onClick={() => setIsAwardModalOpen(false)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close verification modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Verified by official Accuris communication dated 12 February
                2026, confirming that ACML 2I2S was the 2025 top sales
                performer among all channel partners worldwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-xl border border-emerald-100 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-900/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-1">
                    Rank
                  </p>
                  <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
                    #1 Worldwide
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-100 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-900/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-1">
                    Performance Attainment
                  </p>
                  <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
                    252%
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-100 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-900/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-1">
                    FY25 Target
                  </p>
                  <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
                    226,791
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-100 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-900/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-1">
                    Won Value
                  </p>
                  <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
                    572,228
                  </p>
                </div>
              </div>

              <section>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Email Proof Snapshot
                </h4>
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/70 p-2 sm:p-3 shadow-sm">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={awardProof}
                    alt="Accuris award proof snapshot"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Supporting Document
                </h4>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 bg-white dark:bg-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center flex-shrink-0">
                      <FileText size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white truncate">
                        Accuris Channel Partner Recognition
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        Official supporting PDF
                      </p>
                    </div>
                  </div>
                  <a
                    href={awardPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2.5 rounded-lg font-semibold transition-colors"
                  >
                    View Recognition PDF
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
