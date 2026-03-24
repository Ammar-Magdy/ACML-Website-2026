import React from "react";
import { Award, Star } from "lucide-react";

import img1A from "../../../assets/Photos/About/Acml-Awards/1A.webp";
import img2A from "../../../assets/Photos/About/Acml-Awards/2A.webp";
import img3A from "../../../assets/Photos/About/Acml-Awards/3A.webp";
import img4A from "../../../assets/Photos/About/Acml-Awards/4A.webp";
import img5 from "../../../assets/Photos/About/Acml-Awards/5.webp";
import img6 from "../../../assets/Photos/About/Acml-Awards/6.webp";
import img7 from "../../../assets/Photos/About/Acml-Awards/7.webp";
import img8 from "../../../assets/Photos/About/Acml-Awards/8.webp";
import img9 from "../../../assets/Photos/About/Acml-Awards/9.webp";
import img10 from "../../../assets/Photos/About/Acml-Awards/10.webp";
import img11 from "../../../assets/Photos/About/Acml-Awards/11.webp";
import img12 from "../../../assets/Photos/About/Acml-Awards/12.webp";
import img13 from "../../../assets/Photos/About/Acml-Awards/13.webp";
import img14 from "../../../assets/Photos/About/Acml-Awards/14.webp";
import img15 from "../../../assets/Photos/About/Acml-Awards/15.webp";
import img16 from "../../../assets/Photos/About/Acml-Awards/16.webp";
import img17 from "../../../assets/Photos/About/Acml-Awards/17.webp";
import img18 from "../../../assets/Photos/About/Acml-Awards/18.webp";
import img19 from "../../../assets/Photos/About/Acml-Awards/19.webp";
import img20 from "../../../assets/Photos/About/Acml-Awards/20.webp";
import img21 from "../../../assets/Photos/About/Acml-Awards/21.webp";
import { useEffect } from "react";

const localAwardsImages = [
  img1A,
  img2A,
  img3A,
  img4A,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const foreignAwardsImages = [
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

export default function ACMLAwards() {
  useEffect(() => {
    document.title = "ACML Awards";
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Acquired Awards
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Recognition of Excellence: Local & Foreign Awards
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Local Awards */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                <Star className="text-emerald-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Local Awards
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {localAwardsImages.map((imgSrc, i) => (
                  <div
                    key={`local-${i}`}
                    className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group aspect-[4/3] relative"
                  >
                    <img loading="lazy" decoding="async" src={imgSrc}
                      alt={`Local Award ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Foreign Awards */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                <GlobeIcon className="text-emerald-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Foreign Awards
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {foreignAwardsImages.map((imgSrc, i) => (
                  <div
                    key={`foreign-${i}`}
                    className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group aspect-[4/3] relative"
                  >
                    <img loading="lazy" decoding="async" src={imgSrc}
                      alt={`Foreign Award ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GlobeIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
