import { useEffect } from "react";
import { Archive, Clock, Lightbulb, Box, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import gaylordLogo from "../../assets/Photos/Publishers/Gaylord-Archival/Gaylord-Archival.webp";
import gaylordVideo from "../../assets/Videos/Publishers/Gaylord-Archival/Gaylord-Archival.mp4";

export default function PublisherGaylord() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gaylord";
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
            <source src={gaylordVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay - Gray/Orange Theme */}
          <div className="absolute inset-0 bg-[#374151]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={gaylordLogo}
                  alt="Gaylord Archival Logo"
                  className="h-24 md:h-24 object-contain drop-shadow-2xl rounded-3xl bg-white/10 backdrop-blur-sm p-4"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Gaylord Archival
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.gaylord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-orange-600 text-white hover:bg-orange-700 border border-orange-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              {/* About Gaylord Archival Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mr-4">
                    <Archive size={20} />
                  </div>
                  About Gaylord Archival
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Gaylord Archival, and we’ve been serving cultural and
                    educational institutions for 130 years.
                  </p>
                  <p>
                    It all started with two brothers and $6. Meet our founders,
                    Henry and Willis Gaylord. In 1896, they invented a simple
                    mending tape to fix torn currency, but it soon became a hit
                    with librarians for mending books. Gaylord Bros. became a
                    purveyor of supplies to libraries across the country.
                  </p>
                  <p>
                    We even invented the Model C Book Charger. You know, before
                    library computer systems, it was that little machine that
                    stamped your date due card and went ca-thunk.
                  </p>
                </div>
              </div>

              {/* Evolution & Innovation Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-500 mb-4 flex items-center">
                  <Clock className="mr-3" />
                  Evolution & Innovation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                  But as our customers evolved over the years, so did we.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Lightbulb className="mr-2 text-orange-500 w-5 h-5" />
                      Preservation Focus
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      In the 1980s, the Library of Congress warned the public of
                      the damaging effects that acids were having on our
                      cultural heritage. In response, Gaylord formed a
                      Preservation Advisory Committee to develop products that
                      would help preserve valued documents and artifacts.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Box className="mr-2 text-orange-500 w-5 h-5" />
                      Leading Provider
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      It’s our continuing evolution, innovation and dedication
                      to serving our customers that has kept us in business for
                      so long. Today, we are the leading provider of
                      preservation and exhibit products. We handcraft countless
                      products, such as archival-quality boxes, folders, sleeves
                      and binders, at our factory in Syracuse, NY.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl shadow-sm p-8 border border-orange-100 dark:border-orange-800 text-center">
                <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-4">
                  Partner with Gaylord Archival
                </h3>
                <p className="text-orange-700 dark:text-orange-400 mb-6">
                  Our extensive product selection and manufacturing
                  capabilities, uniquely position us as a partner to support
                  your preservation and exhibit projects.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Box className="mr-2 text-orange-500" />
                  Beyond Supplies
                </h3>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm space-y-4">
                  <p>
                    Beyond preservation supplies, Gaylord Archival now offers
                    the largest selection of exclusive exhibit case lines, as
                    well as custom casework. We’ve designed cases for all sorts
                    of unique situations, from cases that fit around
                    architectural columns to a case for a huge, fossilized
                    dinosaur.
                  </p>
                  <p>
                    We also offer steel storage, environmental monitors and many
                    other products to help preserve collections.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  At Gaylord Archival
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  We’ve come a long way from our humble beginnings in the
                  Gaylord brothers’ basement, but our commitment to meeting the
                  needs of our customers remains the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
