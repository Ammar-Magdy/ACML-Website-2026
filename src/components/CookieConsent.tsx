import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("acml_cookie_consent");
    if (!consent) {
      setShouldRender(true);
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("acml_cookie_consent", "true");
    closeBanner();
  };

  const handleDecline = () => {
    localStorage.setItem("acml_cookie_consent", "false");
    closeBanner();
  };

  const closeBanner = () => {
    setIsVisible(false);
    // Wait for animation to finish before removing from DOM
    setTimeout(() => setShouldRender(false), 400);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ease-in-out ${
        isVisible
          ? "bg-black/40 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 max-w-md w-full p-6 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isVisible
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full mb-4 text-emerald-600 dark:text-emerald-400">
            <Cookie size={32} />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Cookie Consent
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            We prioritize your privacy. We use cookies to improve your
            experience and analyze website traffic.
          </p>

          <div className="flex flex-col-reverse sm:flex-row gap-3 w-full">
            <button
              onClick={handleDecline}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
