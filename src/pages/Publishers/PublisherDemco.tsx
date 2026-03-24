import { useEffect } from "react";
import { ExternalLink, PenTool, Layout } from "lucide-react";
import { Link } from "react-router-dom";

import demcoLogo from "../../assets/Photos/Publishers/Demco/Logo.webp";
import demcoBg from "../../assets/Photos/Publishers/Demco/Background.webp";

const BRAND = "#FDB813";
const DARK = "#7a5a00";

export default function PublisherDemco() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Demco";
  }, []);

  const categories = [
    "Archival",
    "Arts & Crafts",
    "Audio Visual",
    "Books",
    "Carpets",
    "Carts & Booktrucks",
    "Creative Play",
    "Educational Resources",
    "Facilities Management",
    "Decor",
    "Furniture",
    "Library Supplies",
    "Office Equipment",
    "Office Supplies",
    "Presentation",
    "Security",
    "Shelving",
    "Signage",
    "Upstart Promotions",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div
        className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl"
        style={{ backgroundColor: BRAND }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={demcoBg}
            alt="Demco background"
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
              <img loading="lazy" decoding="async" src={demcoLogo}
                alt="Demco Logo"
                className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-3xl bg-white p-4"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Demco
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
              Library Supplies, Furniture &amp; Learning Materials. Since 1905,
              serving the needs of America's libraries and schools.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://demco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                style={{ color: DARK }}
              >
                <ExternalLink size={20} className="mr-2" /> Visit Website
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-700 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Request Quote
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
                    style={{ backgroundColor: DARK }}
                  >
                    <Layout size={20} />
                  </div>
                  About Demco
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    For over a century, Demco has been serving the needs of
                    America's libraries and schools. With a broad product
                    offering of over 50,000 items including thousands of unique
                    or hard-to-find supplies, furniture, and equipment, Demco
                    offers more of what librarians need every day.
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Demco History: A Look at Today
                    </h3>
                    <p className="leading-relaxed">
                      Today the company has grown from four people in the
                      Library Department of the Democrat Printing Company in
                      1905 to over 250 coworkers in 2008, with offices in
                      Madison, Wisconsin. The catalog of products has grown from
                      twelve pages to over one thousand. The company added new
                      services, including a subscription service and a turnkey
                      space management service that includes both design and
                      supply for the many different kinds of libraries that
                      exist today.
                    </p>
                    <p className="leading-relaxed mt-4">
                      Demco can now help libraries create inviting environments
                      for the changing demands of library patrons. We can do
                      this because in response to requests, the company added
                      Demco Library Interiors in 2003, which offers librarians
                      and educators all the interior design help they need from
                      measurement to installation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      A Look at the Future
                    </h3>
                    <p className="leading-relaxed">
                      Clearly libraries are changing…but they have been changing
                      since they began. They are also staying very much the same
                      as they change. After all, libraries have been a primary
                      community resource in the U.S. since they were first
                      conceived as a way to promote and preserve democracy. But
                      change is always unpredictable. Demco is prepared and
                      looks with enthusiasm toward the many new roles the
                      company can play in helping libraries continue to respond
                      to their communities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      A Lasting Invitation
                    </h3>
                    <p className="leading-relaxed">
                      SELECTION, SATISFACTION, SERVICE - Experience the Best!
                      "Making it easier for librarians and educators" …now we
                      can call it a century-old tradition. We have the best
                      guarantee in the business. Your complete satisfaction with
                      Demco products is guaranteed. If you're not happy, return
                      it for replacement or full refund. No questions asked!
                      Orders of in-stock products ship the very next day. Just
                      call before noon CST. Save extra on large quantities by
                      contacting our Bids Department.
                    </p>
                    <p className="leading-relaxed mt-4">
                      In keeping with our tradition, we invite you to contact us
                      for whatever you need. One of us will personally answer
                      your call, take your order, answer your questions, or
                      solve your problem. Serving you is what we do best, and we
                      have a hundred years of practice at doing it better than
                      anyone else!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <PenTool className="mr-3" style={{ color: BRAND }} />
                  Demco Products
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-center cursor-default border border-transparent hover:border-yellow-300 transition-colors"
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {cat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl shadow-sm p-8 text-center text-white"
                style={{ backgroundColor: DARK }}
              >
                <h3 className="text-xl font-bold mb-4">Order Demco Products</h3>
                <p className="text-white/80 mb-6">
                  Serving libraries since 1905 with 50,000+ items including
                  supplies, furniture, and equipment.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  style={{ color: DARK }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Key Facts
                </h3>
                <ul className="space-y-4">
                  {[
                    "Serving Libraries Since 1905",
                    "50,000+ Product Items",
                    "250+ Team Members",
                    "Madison, WI Headquarters",
                    "Demco Library Interiors",
                    "Next-Day Shipping",
                    "Best-in-Business Guarantee",
                    "Design & Supply Services",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 text-sm"
                        style={{ backgroundColor: DARK }}
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
              <div
                className="rounded-xl p-6 border text-white"
                style={{ backgroundColor: DARK }}
              >
                <h3 className="text-lg font-bold mb-3">
                  Serving Libraries Since 1905
                </h3>
                <p className="text-sm text-white/80 italic">
                  A century-old tradition of making it easier for librarians and
                  educators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
