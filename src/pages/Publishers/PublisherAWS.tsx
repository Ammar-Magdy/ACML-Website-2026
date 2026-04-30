import React, { useEffect } from "react";
import { ExternalLink, Flame, Target } from "lucide-react";
import { Link } from "react-router-dom";

import awsLogo from "../../assets/Photos/Publishers/AWS/Logo.svg";
import awsBg from "../../assets/Photos/Publishers/AWS/Background.webp";
import awsImg from "../../assets/Photos/Publishers/AWS/aws_2.webp";

const BRAND = "#003360";

const PublisherAWS: React.FC = () => {
  useEffect(() => {
    document.title = "AWS";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={awsBg}
            alt="AWS background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${BRAND}cc` }}
          ></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <img loading="lazy" decoding="async" src={awsLogo}
                alt="AWS Logo"
                className="h-28 md:h-36 object-contain drop-shadow-2xl rounded-3xl bg-white"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Welding Society - AWS
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Advancing the science, technology and application of welding and
              allied joining and cutting processes.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.aws.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: BRAND }}
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
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Flame size={20} />
                  </div>
                  About AWS
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      The American Welding Society (AWS) was founded in 1919 as
                      a multifaceted, nonprofit organization with a goal to
                      advance the science, technology and application of welding
                      and related joining disciplines.
                    </p>
                    <p>
                      From factory floor to high-rise construction, from
                      military weaponry to home products, AWS continues to lead
                      the way in supporting welding education and technology
                      development to ensure a strong, competitive and exciting
                      way of life for all Americans.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={awsImg}
                      alt="AWS Welding"
                      className="w-48 h-auto rounded-xl shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Target className="mr-3" style={{ color: BRAND }} />
                  AWS Mission
                </h2>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: `${BRAND}0d` }}
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    The mission of the American Welding Society is to advance
                    the science, technology and application of welding and
                    allied joining and cutting processes, including brazing,
                    soldering and thermal spraying.
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: BRAND }}
              >
                <h3 className="text-xl font-bold mb-4">Access AWS Standards</h3>
                <p className="text-white/80 mb-6">
                  Founded 1919, advancing welding science and technology for all
                  Americans.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: BRAND }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  At a Glance
                </h3>
                <ul className="space-y-4">
                  {[
                    "Founded 1919",
                    "Nonprofit Organization",
                    "Welding Science & Tech",
                    "Allied Joining Processes",
                    "Brazing & Soldering",
                    "Thermal Spraying",
                    "Education Support",
                    "Industry Leadership",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm"
                        style={{ backgroundColor: BRAND }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublisherAWS;
