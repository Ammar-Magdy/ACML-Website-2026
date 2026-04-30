import React, { useEffect } from "react";
import { ExternalLink, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import astmLogo from "../../assets/Photos/Publishers/ASTM-PTP/ASTM/Logo.svg";
import astmVideo from "../../assets/Videos/Publishers/ASTM-PTP/ASTM.mp4";
import astmImg from "../../assets/Photos/Publishers/ASTM-PTP/ASTM/biodegrade_starch.webp";
import astmPdf from "../../assets/PDF/Publishers/ASTM/BOS-Summary-Form-2021.pdf";

const VIDEO_OVERLAY = "#021740";

const PublisherASTM: React.FC = () => {
  useEffect(() => {
    document.title = "ASTM";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Video BG */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl">
        <video preload="metadata" autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover">
          <source src={astmVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${VIDEO_OVERLAY}cc` }}
        ></div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={astmLogo}
                alt="ASTM Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-white p-2"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Society for Testing and Materials - ASTM
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Globally recognized leader in the development and delivery of
              international voluntary consensus standards.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.astm.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: VIDEO_OVERLAY }}
              >
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Shield className="mr-3" style={{ color: VIDEO_OVERLAY }} />
              About American Society for Testing and Materials
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  ASTM International, formerly known as the American Society for
                  Testing and Materials (ASTM), is a globally recognized leader
                  in the development and delivery of international voluntary
                  consensus standards. Today, some 12,000 ASTM standards are
                  used around the world to improve product quality, enhance
                  safety, facilitate market access and trade, and build consumer
                  confidence.
                </p>
                <p>
                  ASTM's leadership in international standards development is
                  driven by the contributions of its members: more than 30,000
                  of the world's top technical experts and business
                  professionals representing 135 countries. Working in an open
                  and transparent process and using ASTM's advanced electronic
                  infrastructure, ASTM members deliver the test methods,
                  specifications, guides and practices that support industries
                  and governments worldwide.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img loading="lazy" decoding="async" src={astmImg}
                  alt="ASTM"
                  className="w-40 h-40 rounded-xl shadow-md object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h3
              className="text-xl font-bold hover:underline"
              style={{ color: VIDEO_OVERLAY }}
            >
              <a
                href={astmPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <BookOpen size={24} className="mr-2" />
                ASTM Digital Library for International Standards &amp; Codes
              </a>
            </h3>
          </div>

          <div
            className="rounded-2xl shadow-sm p-8 text-center text-white"
            style={{ backgroundColor: VIDEO_OVERLAY }}
          >
            <h3 className="text-xl font-bold mb-4">Access ASTM Standards</h3>
            <p className="text-white/80 mb-6">
              12,000+ standards used globally. 30,000+ experts from 135
              countries driving international standards development.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
              style={{ color: VIDEO_OVERLAY }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherASTM;
