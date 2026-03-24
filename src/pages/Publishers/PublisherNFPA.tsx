import React, { useEffect } from "react";
import { ExternalLink, Flame, Shield, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import nfpaLogo from "../../assets/Photos/Publishers/NFBA/logo.webp";
import nfpaBg from "../../assets/Photos/Publishers/NFBA/Background.webp";
import nfpaImg from "../../assets/Photos/Publishers/NFBA/article-new-ehow-images-a07-4t-th-nfpa-requirements-1.1-800x800.webp";

const BRAND = "#D40031";

const PublisherNFPA: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NFPA";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl" style={{ backgroundColor: BRAND }}>
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={nfpaBg} alt="NFPA background" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: `${BRAND}cc` }}></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={nfpaLogo} alt="NFPA Logo" className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-white p-2" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">National Fire Protection Association</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Reducing the worldwide burden of fire and other hazards on the quality of life.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a href="http://www.nfpa.org" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center" style={{ color: BRAND }}>
                Visit Website <ExternalLink size={18} className="ml-2" />
              </a>
              <a href="mailto:info@acml-egypt.com" className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
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
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0" style={{ backgroundColor: BRAND }}>
                    <Shield size={20} />
                  </div>
                  About NFPA
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>The mission of the international nonprofit NFPA, established in 1896, is to reduce the worldwide burden of fire and other hazards on the quality of life by providing and advocating consensus codes and standards, research, training, and education.</p>
                    <p>The world's leading advocate of fire prevention and an authoritative source on public safety, NFPA develops, publishes, and disseminates more than 300 consensus codes and standards intended to minimize the possibility and effects of fire and other risks.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={nfpaImg} alt="Fire Safety" className="w-48 h-auto rounded-xl shadow-md object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="mr-3" style={{ color: BRAND }} />
                  Codes &amp; Standards
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="http://www.nfpa.org/codes-and-standards" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl transition-colors group" style={{ backgroundColor: `${BRAND}0d` }}>
                    <BookOpen size={20} className="mr-3" style={{ color: BRAND }} />
                    <span className="font-medium text-gray-900 dark:text-white">Browse Codes &amp; Standards</span>
                    <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRAND }} />
                  </a>
                  <a href="http://www.nfpa.org/codes-and-standards" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl transition-colors group" style={{ backgroundColor: `${BRAND}0d` }}>
                    <Flame size={20} className="mr-3" style={{ color: BRAND }} />
                    <span className="font-medium text-gray-900 dark:text-white">Research &amp; Training</span>
                    <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRAND }} />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl shadow-sm p-8 text-center text-white" style={{ backgroundColor: BRAND }}>
                <h3 className="text-xl font-bold mb-4">Access NFPA Resources</h3>
                <p className="text-white/80 mb-6">300+ codes and standards protecting life safety worldwide since 1896.</p>
                <Link to="/contact" className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md" style={{ color: BRAND }}>
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">Quick Stats</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users size={20} className="mr-3" style={{ color: BRAND }} />
                    <span>70,000+ Members</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <BookOpen size={20} className="mr-3" style={{ color: BRAND }} />
                    <span>300+ Codes</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Shield size={20} className="mr-3" style={{ color: BRAND }} />
                    <span>Est. 1896</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherNFPA;
