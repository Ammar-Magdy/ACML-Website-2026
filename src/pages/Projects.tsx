import { useEffect } from "react";
import { Globe, Award, ExternalLink, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects | ACML";
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
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl ml-14">
                We lead sophisticated projects with over 30 years of experience.
                We design, analyze, create, and implement pioneering projects.
                We handle a wide range of related project samples.
              </p>
            </div>

            <div id="projects-samples" className="space-y-4 scroll-mt-24">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-800 pb-2">
                Samples of main projects
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about/projects/suez"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Workflow size={18} className="mr-2" /> SUEZ (SCA)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/projects/elsewedy"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Workflow size={18} className="mr-2" /> Elsewedy (PSP)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/projects/alx-pc"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Workflow size={18} className="mr-2" /> APC
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/projects/colas-rail"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Workflow size={18} className="mr-2" /> COLAS-RAIL
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/projects/enppi"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Workflow size={18} className="mr-2" /> ENPPI
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Award Recognition Section ────────────────────────── */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="grid md:grid-cols-3">
                {/* Left accent column */}
                <div className="bg-emerald-600 dark:bg-emerald-700 p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center mb-6 shadow-inner">
                    <Award size={38} className="text-white" />
                  </div>
                  <p className="text-white/80 text-sm font-medium uppercase tracking-widest">
                    Award Recognition
                  </p>
                </div>

                {/* Right content column */}
                <div className="md:col-span-2 p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">
                    Awarded by Accuris
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-snug">
                    Best Performing Channel Partner Worldwide
                    <span className="block text-emerald-600 dark:text-emerald-400 mt-1">
                      2026
                    </span>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                    ACML has been recognised by Accuris as the best performing
                    channel partner worldwide for 2026 — a testament to our
                    commitment to delivering premium technical intelligence and
                    standards to institutions across the region.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                    >
                      Learn More
                    </Link>
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
    </div>
  );
}