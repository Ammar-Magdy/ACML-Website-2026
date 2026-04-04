import { Mail } from "lucide-react";

import LImage from "../../../assets/Photos/Services/Products/Librarian/Librarian.webp";
import engBroFrontImg from "../../../assets/Photos/Services/Products/Librarian/flyer front .webp";
import engBroBackImg from "../../../assets/Photos/Services/Products/Librarian/flayer front  1copy.webp";
import arBroFrontImg from "../../../assets/Photos/Services/Products/Librarian/brochour-front - Copy .webp";
import arBroBackImg from "../../../assets/Photos/Services/Products/Librarian/brochour-back .webp";

import engIntroPdf from "../../../assets/PDF/Services/Products/Librarian/INTRODUCTION-EN.pdf";
import arIntroPdf from "../../../assets/PDF/Services/Products/Librarian/INTRODUCTION-Ar.pdf";
import frIntroPdf from "../../../assets/PDF/Services/Products/Librarian/1-Introduction_Fre.pdf";
import libEngPdf from "../../../assets/PDF/Services/Products/Librarian/Librarian-E.pdf";
import libArPdf from "../../../assets/PDF/Services/Products/Librarian/Librarian-A.pdf";
import engPresPptx from "../../../assets/PDF/Services/Products/Librarian/Small-Presentation-EE.pptx";
import arPresPptx from "../../../assets/PDF/Services/Products/Librarian/PresentationLibA1.pptx";
import engCheckPdf from "../../../assets/PDF/Services/Products/Librarian/ChecklistE.pdf";
import arCheckPdf from "../../../assets/PDF/Services/Products/Librarian/ChecklistA.pdf";
import clientsPdf from "../../../assets/PDF/Services/Products/Librarian/Librarian-Client.pdf";
import featuresPdf from "../../../assets/PDF/Services/Products/Librarian/مزايا-وخصائص-تتوفر-في-نظام-المكتبي-عن-غيره-من-النظم.pdf";
import hwSwPdf from "../../../assets/PDF/Services/Products/Librarian/HW-&-SW -Aspects.pdf";
import engEvalPdf from "../../../assets/PDF/Services/Products/Librarian/Eval_ques_Eng.pdf";
import arEvalPdf from "../../../assets/PDF/Services/Products/Librarian/Eval-Ques-ara.pdf";
import phdPdf from "../../../assets/PDF/Services/Products/Librarian/رسالة-دكتوراة-المكتبى.pdf";
import { useEffect } from "react";

export default function Librarian() {
  useEffect(() => {
    document.title = "Librarian";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-900 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <div className="sm:p-6 rounded-2xl mb-6 w-full max-w-2xl mx-auto">
              <img loading="lazy" decoding="async" src={LImage}
                alt="Librarian System"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Librarian A </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@ACML-egypt.com"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Request Free Trial
              <Mail size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 py-12 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                {/* Introduction */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Introduction
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={`${engIntroPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        English introduction
                      </a>
                    </p>
                    <p>
                      <a
                        href={`${arIntroPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        Arabic Introduction
                      </a>
                    </p>
                    <p>
                      <a
                        href={`${frIntroPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        French Introduction
                      </a>
                    </p>
                  </div>
                </div>

                {/* Librarian A Modules */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Librarian A Modules
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={`${libEngPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        Librarian English
                      </a>
                    </p>
                    <p>
                      <a
                        href={`${libArPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        Librarian Arabic
                      </a>
                    </p>
                  </div>
                </div>

                {/* Presentation */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Presentation
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={engPresPptx}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        English Presentation
                      </a>
                    </p>
                    <p>
                      <a
                        href={arPresPptx}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Arabic Presentation
                      </a>
                    </p>
                  </div>
                </div>

                {/* Video Presentation */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Video Presentation
                  </h4>
                  <div className="space-y-1">
                    <div className="aspect-w-16 aspect-h-9 mt-4">
                      <iframe
                        width="854"
                        height="480"
                        src="https://www.youtube.com/embed/7VsiDFaEENc"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full rounded-lg shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Checklist
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={`${engCheckPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        English Checklist
                      </a>
                    </p>
                    <p>
                      <a
                        href={`${arCheckPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        Arabic Checklist
                      </a>
                    </p>
                  </div>
                </div>

                {/* Brochoure */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Brochoure
                  </h4>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300">
                    <p>
                      English Brochoure "
                      <a
                        href={engBroFrontImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Front
                      </a>
                      ,{" "}
                      <a
                        href={engBroBackImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Back
                      </a>
                      "
                    </p>
                    <p>
                      Arabic Brochoure "
                      <a
                        href={arBroFrontImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Front
                      </a>
                      ,{" "}
                      <a
                        href={arBroBackImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Back
                      </a>
                      "
                    </p>
                  </div>
                </div>
                {/* librarian Clients */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    librarian Clients
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={`${clientsPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        librarian Clients
                      </a>
                    </p>
                  </div>
                </div>

                {/* مزايا وخصائص */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    مزايا وخصائص تتوفر في نظام المكتبي عن غيره من النظم
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={`${featuresPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        مزايا وخصائص تتوفر في نظام المكتبي عن غيره من النظم
                      </a>
                    </p>
                  </div>
                </div>

                {/* HW, SW & Accessories */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    HW, SW & Accessories
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={`${hwSwPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        HW, SW & Accessories
                      </a>
                    </p>
                  </div>
                </div>

                {/* Evaluation Questionnaire */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Evaluation Questionnaire
                  </h4>
                  <div className="space-y-1">
                    <p>
                      <a
                        href={`${engEvalPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        English Evaluation Questionnaire
                      </a>
                    </p>
                    <p>
                      <a
                        href={`${arEvalPdf}#view=FitH`}
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="text-emerald-600 hover:underline"
                      >
                        Arabic Evaluation Questionnaire
                      </a>
                    </p>
                  </div>
                </div>

                {/* PH.D. degree on ILMS “LIBRARIAN A” */}
                <div className="mb-6 text-center">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    PH.D. degree on ILMS “LIBRARIAN A”
                  </h4>
                  <p>
                    <a
                      href={`${phdPdf}#view=FitH`}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="text-emerald-600 hover:underline"
                    >
                      PH.D. degree on ILMS “LIBRARIAN A”
                    </a>
                  </p>
                </div>

                {/* "رسالة دكتوراة عن نظام "المكتبى */}
                <div className="mb-6 text-center">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    "رسالة دكتوراة عن نظام "المكتبى
                  </h4>
                  <p>
                    <a
                      href={`${phdPdf}#view=FitH`}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="text-emerald-600 hover:underline"
                    >
                      رسالة دكتوراة عن النظام المكتبى
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Quick Links */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Quick Links
                </h3>
                <p className="text-gray-500 text-sm">
                  Select a section from the main content to view details or
                  download resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
