
// Images
import wholeIcon from "./Whole.png";
import dataIcon from "./Data.png";
import incorporatesIcon from "./Incorporates.png";
import intentionalIcon from "./Intentional.png";
import childrenImg from "./Images/Children.jpg";
import teachersImg from "./Images/Teachers.jpg";
import heroRightImg from "./Images/IT2_Solution_CTA@2x.webp";
import butterflyVideo from "./Videos/Ecosystem_Butterfly_min.mp4";

// Solution Images
import it2Hero from "./Images/IT2_Solution_Hero.png";
import preschHero from "./Images/TS_Solutions_PreK_Header.png";
import prekHero from "./Images/Solution.webp";
import headStartHero from "./Images/ProductCard_AlsPals.webp"; // HTML says ProductCard_AlsPals.webp for Head Start
import fccHero from "./Images/Solution_FamilyChildCare_header-1024x997.webp";
import privateHero from "./Images/Solution_FamilyChildCare_CTA.webp";
import gradesHero from "./Images/Solution_first_third_header_2-1024x997.webp";
import sorHero from "./Images/SOR_Hero-1024x930.webp"; // Science of Reading
import disabilitiesHero from "./Images/ProductCard_Gold.webp";

// Product Images
import ccInfant from "./Images/CCInfant_Footer.webp";
import ccToddler from "./Images/ProductCard_Tadpoles.webp"; // Used for Toddler in HTML?
import ccTwos from "./Images/CCTwos_ChildHero.webp";
import ccPreK from "./Images/CCTwos_Footer.webp"; // Used for Pre-K in HTML?
import ccPreschool from "./Images/Meaningful_Experiences-1024x799.webp";
import ccFCC from "./Images/Product_CCFCC_Hero-1024x961.webp";
import ccTK from "./Images/CCTK-Hero-ST-0710-e1720798024271.webp";
import socialImg from "./Images/Social.webp";
import literacyImg from "./Images/Teaching_Strategies-230192-1024x682.webp";
import assessmentImg from "./Images/Finch-Hero-new.webp";
import familyImg from "./Images/Tadpoles_Hero_iStock-878473646@2x.webp";
import pdImg from "./Images/PD-hero-final-1.webp";
import classroomImg from "./Images/ClassroomOverview_Hero.webp";

import { useEffect } from "react";

export default function TeachingStrategiesEN() {
  useEffect(() => {
    document.title = "Teaching Strategies";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 py-8">
        
          {/* Hero Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="p-8 md:p-12 md:w-2/3">
                <div className="flex items-center mb-6">
                  <a
                    href="https://teachingstrategies.com"
                    className="flex site-logo"
                  >
                    <span className="sr-only">Teaching Strategies</span>
                    <svg
                      className="w-full text-black dark:text-white transition hover:text-gray-900 dark:hover:text-gray-100 h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 800 142"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M138.761 52.467v47.813h-11.257V52.467h-16.155V42.361h43.575v10.106h-16.163Zm47.338 29.027H160.17c.386 8.067 3.572 11.745 8.92 11.745a13.096 13.096 0 0 0 10.184-5.413l6.213 5.346a20.532 20.532 0 0 1-16.698 7.971c-11.426 0-19.115-7.433-19.115-21.37 0-12.594 6.687-21.44 18.407-21.44 13.271 0 18.17 10.414 18.17 19.727 0 .853-.07 2.651-.155 3.44m-17.954-15.804c-4.036 0-6.999 2.973-7.841 9.557h16.159c-.623-6.496-3.43-9.557-8.318-9.557Zm49.044 34.591a26.78 26.78 0 0 1-.86-4.223 18 18 0 0 1-12.425 5.076 11.634 11.634 0 0 1-8.882-2.997 11.626 11.626 0 0 1-3.78-8.578c0-10.333 11.646-14.255 24.938-16.046v-1.877c0-3.989-2.336-5.71-6.842-5.71a14.734 14.734 0 0 0-11.027 5.63l-5.908-6.1a23.42 23.42 0 0 1 17.646-7.133c9.848 0 16.304 3.38 16.304 13.452v17.295a34.198 34.198 0 0 0 1.392 11.197h-10.546l-.01.014Zm-1.005-20.903c-8.783 1.565-14.846 4.074-14.846 9.405a4.459 4.459 0 0 0 4.98 4.927 15.361 15.361 0 0 0 9.866-4.247V79.384Zm36.046 21.756c-12.344 0-18.793-9.236-18.793-21.289 0-13.22 7.299-21.522 18.874-21.522a15.836 15.836 0 0 1 15.681 10.266l-8.141 3.894a8.17 8.17 0 0 0-7.533-6.178c-6.442 0-8.474 6.57-8.474 13.296 0 8.142 2.64 13.554 8.474 13.554 3.49 0 5.982-2.672 8.538-7.911l7.618 4.311c-3.112 6.492-7.306 11.572-16.237 11.572m46.552-.853V70.853a3.396 3.396 0 0 0-3.731-4.142c-3.105 0-5.823 1.88-9.558 5.24v28.339H275.08V42.365h10.417v22.3a20.099 20.099 0 0 1 14.209-6.343c6.372 0 9.473 3.763 9.473 10.563v31.391h-10.404l.011.004Zm66.786 0V70.853a3.392 3.392 0 0 0-3.724-4.141c-3.112 0-5.841 1.88-9.558 5.238v28.34h-10.403V59.186h10.403v5.49a20.142 20.142 0 0 1 14.223-6.343c6.372 0 9.473 3.763 9.473 10.563v31.391h-10.407l-.007-.007Zm88.003 1.093c-11.568 0-19.338-6.499-21.122-15.723l5.512-1.335a14.51 14.51 0 0 0 15.61 12.131c8.708 0 14.29-4.149 14.29-10.712 0-5.798-2.948-8.768-14.913-12.594-12.662-4.078-18.407-7.434-18.407-16.84 0-8.37 7.455-15.022 17.936-15.022 11.328 0 17.558 6.18 19.579 13.855l-5.511 1.564a13.33 13.33 0 0 0-13.993-10.499c-7.377 0-12.429 4.542-12.429 9.402 0 6.34 3.505 8.683 15.459 12.439 12.428 3.894 17.862 8.06 17.862 17.37 0 10.333-9.006 15.968-19.88 15.968m43.791-.467c-6.832 0-11.246-2.262-11.246-10.17V63.883h-7.15V59.19h7.15V44.248h5.345v14.945h9.94v4.694h-9.929v25.996a5.314 5.314 0 0 0 3.664 6.044c.825.253 1.7.301 2.548.14a15.526 15.526 0 0 0 3.972-.467v4.931c-1.411.27-2.846.398-4.283.382m35.572-37.33h-1.243a16.352 16.352 0 0 0-15.221 11.422v25.282h-5.349V59.189h5.349v8.538h.159a17.901 17.901 0 0 1 15.837-9.398h1.253l-.785 5.253Zm31.911 36.7a15.975 15.975 0 0 1-.931-5.635 23.783 23.783 0 0 1-15.763 6.495c-7.621 0-11.578-3.986-11.578-10.265 0-8.446 7.766-14.089 27.341-17.451V71.09a7.192 7.192 0 0 0-7.996-8.141 19.796 19.796 0 0 0-14.609 6.492l-3.724-3.126A25.21 25.21 0 0 1 556 58.325c8.761 0 13.285 4.542 13.285 12.677V89.08a33.878 33.878 0 0 0 1.416 11.196h-5.837l-.011.007Zm-.931-23.242c-17.242 3.292-21.982 7.9-21.982 13.232a6.013 6.013 0 0 0 1.942 4.733 6.015 6.015 0 0 0 4.883 1.528 21.713 21.713 0 0 0 15.157-6.346V77.04Zm30.967 23.872c-6.836 0-11.257-2.262-11.257-10.17v-26.86h-7.147V59.19h7.147V44.248h5.359v14.945h9.947v4.694h-9.947v25.996a5.319 5.319 0 0 0 1.476 4.733 5.306 5.306 0 0 0 4.74 1.451 15.437 15.437 0 0 0 3.958-.467v4.931c-1.409.27-2.842.398-4.276.382Zm15.065-20.665c.163 9.94 5.37 16.283 12.428 16.283a13.912 13.912 0 0 0 12.666-7.434l3.802 2.666a18.387 18.387 0 0 1-16.694 9.384c-7.77 0-17.561-5.717-17.561-21.593 0-13.77 8.474-21.207 17.639-21.207 10.711 0 16.697 9.15 16.697 21.281v.627h-28.977v-.007Zm12.117-17.452c-6.06 0-10.715 4.935-11.876 13.077h23.15c-.867-7.66-4.276-13.077-11.274-13.077Zm94.099 17.452c.149 9.94 5.363 16.283 12.425 16.283a13.91 13.91 0 0 0 12.662-7.434l3.812 2.666a18.408 18.408 0 0 1-16.697 9.384c-7.788 0-17.561-5.717-17.561-21.593 0-13.77 8.463-21.207 17.635-21.207 10.704 0 16.697 9.15 16.697 21.281v.627H716.17v-.007Zm12.12-17.452c-6.067 0-10.715 4.935-11.886 13.077h23.136c-.853-7.66-4.248-13.077-11.25-13.077Zm39.144 38.344a18.39 18.39 0 0 1-16.238-7.738l4.277-3.055a14.154 14.154 0 0 0 11.879 6.18c6.924 0 10.57-2.736 10.57-6.885 0-4.385-2.796-6.725-11.653-8.697-9.862-2.18-13.589-5.08-13.589-11.805 0-5.473 5.047-10.814 14.056-10.814a18.987 18.987 0 0 1 14.673 5.957l-3.646 3.919a13.39 13.39 0 0 0-11.108-5.25c-5.664 0-8.62 2.814-8.62 5.713 0 3.753 1.77 5.561 9.317 7.353 11.328 2.747 15.929 5.798 15.929 13.306 0 6.885-5.826 11.812-15.844 11.812m-83.221-42.34a20.56 20.56 0 0 0-9.558 3.685 16.851 16.851 0 0 0-11.327-4.155 15.124 15.124 0 0 0-15.993 14.807 14.033 14.033 0 0 0 6.439 11.964 7.364 7.364 0 0 0-5.281 5.876 5.356 5.356 0 0 0 2.831 4.726 16.781 16.781 0 0 0 7.314 2.082c2.478.24 4.955.392 7.401.605.737.056 1.434.103 2.153.177 6.605.549 9.472 2.58 9.472 6.488 0 3.855-4.272 6.503-13.118 6.503-9.866 0-14.453-2.885-14.453-7.041.003-.175.02-.35.049-.524h-5.168c-.043.275-.07.551-.081.829 0 7.363 6.984 11.122 19.26 11.122 10.871 0 18.715-3.837 18.715-11.586 0-6.1-4.584-9.618-12.821-10.333l-10.397-.938c-4.665-.39-5.982-1.257-5.982-2.97a4.002 4.002 0 0 1 3.111-3.448 18.19 18.19 0 0 0 6.521 1.165 15.12 15.12 0 0 0 16.074-14.694 13.994 13.994 0 0 0-2.563-8.23 18.112 18.112 0 0 1 7.381-1.172v-4.93l.021-.008Zm-20.885 24.885a10.324 10.324 0 0 1-10.8-10.548 10.174 10.174 0 0 1 10.8-10.652 10.446 10.446 0 0 1 10.871 10.652 10.14 10.14 0 0 1-.705 4.187 10.141 10.141 0 0 1-5.959 5.783c-1.346.488-2.78.685-4.207.578ZM319.717 47.405a5.743 5.743 0 0 1 9.82-3.991 5.739 5.739 0 0 1 1.22 6.252 5.743 5.743 0 0 1-5.302 3.53 5.76 5.76 0 0 1-5.738-5.79Zm104.708 10.928a17.165 17.165 0 0 0-10.174 3.61 19.87 19.87 0 0 0-12.035-3.61c-8.942 0-17.324 4.623-17.324 14.407a12.938 12.938 0 0 0 6.991 11.89 9.207 9.207 0 0 0-5.437 7.36 6.573 6.573 0 0 0 5.019 6.148 45.996 45.996 0 0 0 13.926 1.543c1.76.08 3.515.263 5.253.549a5.02 5.02 0 0 1 3.625 1.848c.327.575.507 1.222.524 1.883 0 3.14-3.412 5.182-11.416 5.182-7.766 0-11.034-1.734-11.034-5.182 0-.12.039-.234.05-.354h-8.97a8.927 8.927 0 0 0-.241 2.007c0 7.986 9.632 10.333 19.823 10.333 10.266 0 20.588-2.669 20.588-12.913 0-7.986-6.46-10.174-14.386-10.8l-9.38-.79c-3.739-.304-4.581-.786-4.581-2.19a3.703 3.703 0 0 1 1.858-2.73 22.31 22.31 0 0 0 5.13.541c8.934 0 17.401-4.541 17.401-14.322a12.987 12.987 0 0 0-1.416-6.194 14.16 14.16 0 0 1 6.213-.931v-7.285h-.007Zm-22.209 22.23a7.867 7.867 0 0 1-7.869-7.87 7.868 7.868 0 0 1 7.869-7.868 7.433 7.433 0 0 1 7.848 7.915 7.237 7.237 0 0 1-4.743 7.42 7.232 7.232 0 0 1-3.105.403Zm291.522-34.44a3.54 3.54 0 1 1 7.08.002 3.54 3.54 0 0 1-7.08-.001Zm.931 12.744v41.416h5.352V58.811c-.903.21-1.827.317-2.754.318-.873 0-1.743-.085-2.598-.262Zm-373.894.322h-.563v41.098h10.407V59.189h-.513a12.096 12.096 0 0 1-9.32 0M10.673 0h.028-5.862A4.704 4.704 0 0 0 0 2.952v120.379l73.795 18.297V18.443L4.839 5.836a3.09 3.09 0 0 1 3.487-1.416l77.777.333v118.867l-3.41 3.614h8.309V0h-80.33Zm50.775 74.5a4.548 4.548 0 1 1-4.177 4.54 4.382 4.382 0 0 1 4.177-4.54ZM39.264 26.997l9.911 2.347V41.65l-9.947-2.358.036-12.294Zm-.043 18.259 9.954 2.371v12.259l-9.986-2.365.032-12.265ZM23.324 23.25l10.149 2.385v12.27l-10.135-2.4V23.245l-.014.004Zm0 18.233 10.12 2.41-.018 12.266-10.099-2.386V41.48l-.003.003Zm760.039 16.195a8.324 8.324 0 0 1 9.988-8.086 8.32 8.32 0 0 1 6.501 6.556 8.328 8.328 0 0 1-3.553 8.523 8.324 8.324 0 0 1-4.618 1.396 8.355 8.355 0 0 1-8.318-8.39Zm.977 0a7.352 7.352 0 0 0 4.62 6.703 7.35 7.35 0 1 0 2.721-14.172 7.407 7.407 0 0 0-7.341 7.469Zm7.649.743h-1.844v3.88h-1.494v-9.296h3.381a2.722 2.722 0 0 1 3.295 2.705 2.475 2.475 0 0 1-1.823 2.478l1.954 4.085h-1.649l-1.82-3.852Zm-1.844-4.039v2.754h1.802c1.165 0 1.883-.354 1.883-1.416 0-1.001-.669-1.327-1.841-1.327h-1.844v-.01Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Teaching Strategies
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  ACML Company for Integrated Solutions and Systems (ACML 2I2S)
                  is pleased to announce that it has officially represented the
                  global supplier Teaching Strategies (TS) starting in 2026.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Teaching Strategies is a global leader in developing teaching
                  strategies and is considered one of the best leading platforms
                  and solutions in the field of early childhood learning for
                  children and educators. It is a world-class platform that
                  supports early childhood throughout their critical formative
                  years. Teaching Strategies helps early childhood educators
                  build effective learning environments and provides a strong
                  foundation for every child’s success by connecting teachers,
                  children, and families with inspiring learning experiences,
                  meaningful data, and stronger partnerships through its leading
                  early learning solutions platform.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  "Teaching Strategies (TS)" creates a broad and lasting impact
                  by empowering and inspiring early childhood educators to
                  effectively engage with children aged 1 to 8 years, providing
                  them with the necessary support and enhancing the overall
                  quality of education for young children.
                </p>
              </div>
              <div className="md:w-1/3 bg-blue-50 dark:bg-blue-900/20 flex items-stretch">
                <img loading="lazy" decoding="async" src={heroRightImg}
                  alt="Teaching Strategies Solutions"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Key Sections with Images (Aligned with Arabic Design) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We believe in{" "}
                <span className="font-bold text-blue-600">
                  Teaching Strategies
                </span>{" "}
                that all children deserve a nurturing, engaging, and
                high-quality learning environment designed to support their
                unique needs throughout the critical, formative years.
              </p>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src={childrenImg}
                  alt="Children"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At{" "}
                <span className="font-bold text-blue-600">
                  Teaching Strategies
                </span>
                , we help early childhood educators build this environment and
                provide the foundation for success for every child by connecting
                teachers, children, and families to inspired teaching and
                learning experiences, informative data, and stronger
                partnerships.
              </p>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src={teachersImg}
                  alt="Teachers"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At{" "}
              <span className="font-bold text-blue-600">
                Teaching Strategies
              </span>
              , the work we do together has a wide-reaching impact. By
              empowering and inspiring early childhood educators and providing
              them with the support they need, we’re improving the quality of
              education for young children everywhere and helping them to become
              lifelong creative and confident thinkers.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              The Creative Curriculum for Pre-K has been named:
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
              <pre className="whitespace-pre-wrap font-sans text-blue-800 dark:text-blue-300 font-bold">
                The Creative Curriculum for Pre-K has been named: The “Best
                PK/Early Childhood Learning Solution”
              </pre>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              in the 2025 CODiE Awards. The CODiE Awards are the premier
              peer-recognized program celebrating innovation and excellence in
              education and business technology.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-8 border-b pb-4">
              Teaching Strategies Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              For more details please contact us.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Infants, Toddlers & Twos */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={it2Hero}
                    alt="Infants, Toddlers & Twos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/infants-toddlers-twos/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Infants, Toddlers & Twos
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A comprehensive solution for our youngest learners
                  </p>
                </div>
              </div>

              {/* Preschool */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={preschHero}
                    alt="Preschool"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/preschool/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Preschool
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Learn why our ‘’Preschool’’ solution is the #1 choice
                    nationwide.
                  </p>
                </div>
              </div>

              {/* Pre-K */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={prekHero}
                    alt="Pre-K"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/pre-k/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Pre-K
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Support children, teachers, and families with our solution
                    for pre-k
                  </p>
                </div>
              </div>

              {/* Head Start */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={headStartHero}
                    alt="Head Start"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/head-start/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Head Start
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    See why our solutions have been chosen by Head Start
                    programs for 40+ years
                  </p>
                </div>
              </div>

              {/* Family Child Care */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={fccHero}
                    alt="Family Child Care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/family-child-care/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Family Child Care
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Solutions to meet the needs of any at-home care program
                  </p>
                </div>
              </div>

              {/* Private Child Care */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={privateHero}
                    alt="Private Child Care"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/private-childcare/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Private Child Care
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A child care management solution focused on improving
                    quality
                  </p>
                </div>
              </div>

              {/* Grades 1-3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={gradesHero}
                    alt="Grades 1-3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/1st-through-3rd-grade/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Grades 1-3
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Explore how our solutions can help teachers accelerate
                    learning
                  </p>
                </div>
              </div>

              {/* Science of Reading */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={sorHero}
                    alt="Science of Reading"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/solution/science-of-reading/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Science of Reading
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Explore our solutions that support the body of research
                  </p>
                </div>
              </div>

              {/* Children With Disabilities */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img loading="lazy" decoding="async" src={disabilitiesHero}
                    alt="Children With Disabilities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    <a
                      href="https://teachingstrategies.com/supporting-children-with-disabilities/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Children With Disabilities
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Explore our connected ecosystem of support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-8 border-b pb-4">
              Teaching Strategies Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              For more details please contact us.
            </p>

            <div className="space-y-12">
              {/* Whole-Child Curriculum Cluster */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                  Whole-Child Curriculum
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProductItem
                    title="Infant Curriculum"
                    link="https://teachingstrategies.com/product/infant-curriculum/"
                    img={ccInfant}
                  />
                  <ProductItem
                    title="Toddler Curriculum"
                    link="https://teachingstrategies.com/product/toddler-curriculum/"
                    img={ccToddler}
                  />
                  <ProductItem
                    title="Twos Curriculum"
                    link="https://teachingstrategies.com/product/curriculum-for-2-year-olds/"
                    img={ccTwos}
                  />
                  <ProductItem
                    title="Preschool Curriculum"
                    link="https://teachingstrategies.com/product/the-creative-curriculum-for-preschool/"
                    img={ccPreschool}
                  />
                  <ProductItem
                    title="Pre-K Curriculum"
                    link="https://teachingstrategies.com/product/prek-curriculum/"
                    img={ccPreK}
                  />
                  <ProductItem
                    title="Family Child Care Curriculum"
                    link="https://teachingstrategies.com/product/the-creative-curriculum-for-family-child-care/"
                    img={ccFCC}
                  />
                  <ProductItem
                    title="California TK Curriculum"
                    link="https://teachingstrategies.com/product/transitional-kindergarten-curriculum/"
                    img={ccTK}
                  />
                </div>
              </div>

              {/* Other Categories */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                    Social-Emotional
                  </h3>
                  <div className="mb-4">
                    <a
                      href="https://teachingstrategies.com/product/als-pals-social-emotional-learning-curriculum/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block mb-2 font-medium"
                    >
                      Social-Emotional Curriculum
                    </a>
                  </div>
                  <img loading="lazy" decoding="async" src={socialImg}
                    alt="Social-Emotional"
                    className="w-full h-48 object-cover rounded-lg mt-auto"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                    Literacy
                  </h3>
                  <div className="mb-4">
                    <a
                      href="https://teachingstrategies.com/product/preschool-literacy-curriculum/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block mb-2 font-medium"
                    >
                      Preschool Literacy Curriculum
                    </a>
                  </div>
                  <img loading="lazy" decoding="async" src={literacyImg}
                    alt="Literacy"
                    className="w-full h-48 object-cover rounded-lg mt-auto"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                    Assessment
                  </h3>
                  <div className="mb-4 space-y-2">
                    <a
                      href="https://teachingstrategies.com/product/comprehensive-assessment-solution/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Comprehensive Assessment
                    </a>
                    <a
                      href="https://teachingstrategies.com/product/gold/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Observation-based Assessment
                    </a>
                    <a
                      href="https://teachingstrategies.com/product/game-based-assessment-solution/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Game-based Assessment
                    </a>
                  </div>
                  <img loading="lazy" decoding="async" src={assessmentImg}
                    alt="Assessment"
                    className="w-full h-48 object-cover rounded-lg mt-auto"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                    Family Engagement
                  </h3>
                  <div className="mb-4 space-y-2">
                    <a
                      href="https://teachingstrategies.com/product/readyrosie/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Family Engagement Platform
                    </a>
                    <a
                      href="https://teachingstrategies.com/product/parenting-curriculum/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Parenting Curriculum
                    </a>
                    <a
                      href="https://teachingstrategies.com/product/tadpoles/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Center Management
                    </a>
                  </div>
                  <img loading="lazy" decoding="async" src={familyImg}
                    alt="Family Engagement"
                    className="w-full h-48 object-contain rounded-lg mt-auto"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                    Professional Development
                  </h3>
                  <div className="mb-4 space-y-2">
                    <a
                      href="https://teachingstrategies.com/product/professional-development-membership/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      PD for Teachers
                    </a>
                    <a
                      href="https://teachingstrategies.com/product/professional-development-coaching/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      PD for Coaches
                    </a>
                    <a
                      href="https://teachingstrategies.com/product/cda-training-online//"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      CDA Training
                    </a>
                    <a
                      href="https://teachingstrategies.com/science-of-reading-professional-development/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Early Literacy Certification
                    </a>
                    <a
                      href="https://teachingstrategies.com/product/professional-development/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      All Professional Development
                    </a>
                  </div>
                  <img loading="lazy" decoding="async" src={pdImg}
                    alt="Professional Development"
                    className="w-full h-48 object-cover rounded-lg mt-auto"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                    Classroom Materials
                  </h3>
                  <div className="mb-4 space-y-2">
                    <a
                      href="https://teachingstrategies.com/product/classroom-materials/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline block"
                    >
                      Classroom Materials Kits
                    </a>
                  </div>
                  <img loading="lazy" decoding="async" src={classroomImg}
                    alt="Classroom Materials"
                    className="w-full h-48 object-cover rounded-lg mt-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info/Stats Section (Blue Box) */}
          <div className="bg-blue-900 text-white rounded-3xl p-12 mb-16 text-center shadow-xl">
            <p className="text-xl mb-8 leading-relaxed">
              Serving 20 million children each year in more than 80 countries,
              Teaching Strategies’ award-winning early childhood education
              solutions set the standard for excellence around the world. Unlock
              your enrollment potential and develop future-ready learners with
              seamlessly integrated curriculum, assessment, and professional
              development.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left mt-12 bg-blue-800/50 p-8 rounded-2xl">
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                  The Only Connected Ecosystem in Early Childhood Education with
                  Proven Results:
                </h3>
                <p className="text-blue-100">
                  Connect curriculum, assessment, and professional development
                  to promote higher growth and teacher retention.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                  New Preschool Curriculum :
                </h3>
                <p className="text-blue-100">
                  We reimagined The Creative Curriculum for Preschool with
                  ALL-NEW resources and in-the-moment support to make it easier
                  to use than ever.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                  Boost Teacher Retention Rates and Child Outcomes :
                </h3>
                <p className="text-blue-100">
                  See how The Creative Curriculum and our connected ecosystem
                  helped improve teacher retention rates by 54% and academic
                  outcomes across domains...
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                  Individualize learning with one platform :
                </h3>
                <p className="text-blue-100">
                  through the leading early learning platform, our ecosystem
                  brings together essential content, tools, data, and support
                  aligned to research-based objectives, empowering teachers to
                  easily identify and respond to each child’s needs
                </p>
              </div>
            </div>
          </div>

          {/* Feature Highlights (Key Features) */}
          <div className="mb-16">
            <div className="flex justify-center mb-12">
              <video preload="metadata" autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-auto rounded-xl shadow-lg">
                <source src={butterflyVideo} type="video/mp4" />
              </video>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={wholeIcon}
                text="Whole-child curriculum connected to assessment to individualize learning"
              />
              <FeatureCard
                icon={dataIcon}
                text="Data and reporting to inform instruction and drive program efficacy"
              />
              <FeatureCard
                icon={incorporatesIcon}
                text="Incorporates all essentials for transformative family engagement"
              />
              <FeatureCard
                icon={intentionalIcon}
                text="Intentional support for every professional development need, from beginner to expert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductItem({
  title,
  link,
  img,
}: {
  title: string;
  link: string;
  img: string;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-700/30 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-40 overflow-hidden bg-gray-200">
        <img loading="lazy" decoding="async" src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
        >
          {title}
        </a>
      </div>
    </div>
  );
}

function FeatureCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-100 dark:border-gray-700 flex flex-col items-center">
      <img loading="lazy" decoding="async" src={icon}
        alt="Feature Icon"
        className="w-16 h-16 mb-4 object-contain"
      />
      <p className="text-gray-700 dark:text-gray-300 font-medium">{text}</p>
    </div>
  );
}
