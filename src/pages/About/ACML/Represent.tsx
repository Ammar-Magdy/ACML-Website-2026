import { Globe, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import logoAIP from "../../../assets/Photos/About/ACML-Represents/American-Institute-of-Physics-(AIP)-&-APS.svg";
import logoAPI from "../../../assets/Photos/About/ACML-Represents/American-Petroleum-Institute-(API).svg";
import logoASCE from "../../../assets/Photos/About/ACML-Represents/American-Society-of-Civil-Engineers-(ASCE).svg";
import logoASME from "../../../assets/Photos/About/ACML-Represents/American-Society-Of-Mechanical-Engineers-(ASME).webp";
import logoASTM from "../../../assets/Photos/About/ACML-Represents/ASTM.svg";
import logoBentham from "../../../assets/Photos/About/ACML-Represents/Bentham-Science.webp";
import logoChemWatch from "../../../assets/Photos/About/ACML-Represents/ChemWatch.webp";
import logoCBD from "../../../assets/Photos/About/ACML-Represents/Conservation-by-Design.webp";
import logoEBSCO from "../../../assets/Photos/About/ACML-Represents/EBSCO.webp";
import logoEndNote from "../../../assets/Photos/About/ACML-Represents/End-Note.webp";
import logoGasMatters from "../../../assets/Photos/About/ACML-Represents/Gas-Matters.webp";
import logoGaylord from "../../../assets/Photos/About/ACML-Represents/Gaylord-Archival.webp";
import logoHannecke from "../../../assets/Photos/About/ACML-Represents/Hannecke.webp";
import logoIFLA from "../../../assets/Photos/About/ACML-Represents/Ifla.svg";
import logoAccuris from "../../../assets/Photos/About/ACML-Represents/Accuris.webp";
import logoInfoToday from "../../../assets/Photos/About/ACML-Represents/Information-Today.webp";
import logoISSN from "../../../assets/Photos/About/ACML-Represents/ISSN.webp";
import logoJanes from "../../../assets/Photos/About/ACML-Represents/Janes.svg";
import logoJaypee from "../../../assets/Photos/About/ACML-Represents/jaypee.webp";
import logoLexisNexis from "../../../assets/Photos/About/ACML-Represents/LexisNexis.webp";
import logoLibrarian from "../../../assets/Photos/About/ACML-Represents/Librarian.webp";
import logoLoC from "../../../assets/Photos/About/ACML-Represents/Library-of-Congress.svg";
import logoNeschen from "../../../assets/Photos/About/ACML-Represents/neschen.webp";
import logoPressReader from "../../../assets/Photos/About/ACML-Represents/pressreader.webp";
import logoSAE from "../../../assets/Photos/About/ACML-Represents/sae.svg";
import { useEffect } from "react";

export default function Represent() {
  useEffect(() => {
    document.title = "Represent";
  }, []);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const publishers = [
    {
      name: "Accuris",
      description:
        "A unique organization provides standards & specs from 450 organizations, the top 80 organizations, such as: ISO, ASTM, IEEE, BSI, DIN, JIS,….etc.",
      territory: "Egypt",
      url: "https://accuristech.com/",
      logo: logoAccuris,
    },
    {
      name: "American Institute of Physics (AIP) & APS",
      description:
        "The American Institute of Physics (AIP) is a membership corporation chartered in New York State in 1931 for the purpose of promoting the advancement and diffusion of the knowledge of physics and its application to human welfare.",
      territory: "Egypt, Sudan and Middle East",
      url: "https://www.aip.org/",
      logo: logoAIP,
      imgClass: "scale-150",
    },
    {
      name: "American Petroleum Institute (API)",
      description:
        "The American Petroleum Institute (API) is the only national trade association that represents all aspects of America's oil and natural gas industry. API nearly 400 corporate members, from the largest major oil company to the smallest of independents, come from all segments of the industry.",
      territory: "Egypt",
      url: "https://www.api.org/",
      logo: logoAPI,
      imgClass: "scale-150",
    },
    {
      name: "American Society of Civil Engineers (ASCE)",
      description:
        "Founded in 1852, the American Society of Civil Engineers (ASCE) represents more than 133,000 members of the civil engineering profession worldwide, and is America's oldest national engineering society. ASCE's vision is to position engineers as global leaders building a better quality of life.",
      territory: "Egypt",
      url: "https://www.asce.org/",
      logo: logoASCE,
    },
    {
      name: "American Society Of Mechanical Engineers (ASME)",
      description:
        "ASME is the American Society Of Mechanical Engineers the publisher who can provide you and respond to all your requests about all the publications in printed and electronic form, in the field of mechanical engineers.",
      territory: "Egypt, Sudan and Middle East",
      url: "https://www.asme.org/",
      logo: logoASME,
      imgClass: "scale-150",
    },
    {
      name: "ASTM",
      description:
        "Is one of the largest voluntary standards development organizations in the world-a trusted source for technical standards for materials, products, systems, and services. Known for their high technical quality and market relevancy, ASTM International standards have an important role in the information infrastructure that guides design, manufacturing and trade in the global economy.",
      territory: "Egypt",
      url: "https://www.astm.org/",
      logo: logoASTM,
    },
    {
      name: "Bentham Science",
      description:
        "A major STM journal publisher of 89 online and print journals, 200 plus open access journals, and related print/online book series, Bentham Science answers the informational needs of the pharmaceutical, biomedical and medical research community.",
      territory: "Egypt and Sudan",
      url: "https://www.eurekaselect.com/",
      logo: logoBentham,
      imgClass: "scale-150",
    },
    {
      name: "ChemWatch",
      description:
        "ChemWatch provides full chemical management systems for any user of chemicals. ChemWatch is the world's largest supplier of independently researched material safety data sheets (MSDS) and other related documents. ChemWatch is an ISO9000 quality certified company.",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "https://chemwatch.net/",
      logo: logoChemWatch,
    },
    {
      name: "Conservation by Design",
      description:
        "A company dedicated to the design and supply of high quality conservation storage and display products all grouped together under the banner of the Time care collection.",
      territory: "Egypt",
      url: "https://www.cxdinternational.com/",
      logo: logoCBD,
    },
    {
      name: "EBSCO",
      description:
        "The famous American publisher specialized in directories, abstracting and indexing services.",
      territory: "Egypt",
      url: "https://www.ebsco.com/",
      logo: logoEBSCO,
      imgClass: "scale-150",
    },
    {
      name: "End Note",
      description:
        "Millions of researchers, scholarly writers, students, and librarians use Endnote (patent pending) to search online bibliographic databases, organize their references, images and PDFs in any language, and create bibliographies and figure lists instantly.",
      territory: "Egypt, Sudan and Middle East",
      url: "https://endnote.com/",
      logo: logoEndNote,
      imgClass: "scale-150",
    },
    {
      name: "Gas-Matters",
      description:
        "Gas Matters is a publications, database and research business dedicated to delivering industry defining insight and expert analysis on the global natural gas and LNG industry.",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "https://legacy.gasstrategies.com/",
      logo: logoGasMatters,
    },
    {
      name: "Gaylord Archival",
      description:
        "A leading American company strives to offer products that assist you in serving your patrons and help you manage every aspect of your library, from Model C book Chargers to the latest in library automation. Gaylord is introducing 750 new products...",
      territory: "Egypt",
      url: "https://www.gaylord.com/",
      logo: logoGaylord,
    },
    {
      name: "Hannecke",
      description:
        "One of the largest international companies that specializes in library furniture, and all your library needs, from book stands, carousels, shelves,..etc., and all could be customized to your requirements.",
      territory: "Egypt",
      url: "https://www.hannecke.de/",
      logo: logoHannecke,
      imgClass: "scale-150",
    },
    {
      name: "IFLA",
      description:
        "A worldwide federation created to provide librarians around the world with a forum for exchanging ideas, promoting international co-operation, research and development in all fields of library activities.",
      territory: "Egypt",
      url: "https://www.ifla.org/",
      logo: logoIFLA,
    },

    {
      name: "Information Today",
      description: "For details of this publisher please visite this web site.",
      territory: "Egypt, Sudan",
      url: "https://www.infotoday.com/",
      logo: logoInfoToday,
    },
    {
      name: "ISSN",
      description:
        "The ISSN (International Standard Serial Number) is an eight-digit number which identifies periodical publications as such, including electronic serials.",
      territory: "Egypt",
      url: "https://www.issn.org/",
      logo: logoISSN,
    },
    {
      name: "Jane's",
      description:
        "Jane's Information Group is a world-leading provider of intelligence and analysis on national and international defence, security and risk developments. Jane's is an independent organisation with an unrivalled reputation for accuracy, authority and impartiality",
      territory: "Egypt",
      url: "https://www.janes.com/",
      logo: logoJanes,
    },
    {
      name: "Jaypee",
      description:
        "As one of the leading medical publishers Jaypee is committed to providing quality health science content to its readers. Jaypee publish all its books in English language and have translated many books in Arabic, Chinese, Portuguese, Italian, Spanish, Turkish etc...",
      territory: "Egypt",
      url: "https://jaypeebrothers.com/",
      logo: logoJaypee,
      imgClass: "scale-150",
    },
    {
      name: "LexisNexis",
      description:
        "LexisNexis Professional, the flagship European web research tool, is available with English, French & German interfaces. With a multitude of search and source options, this flexible product is ideal for the non-specialist end-user and the information professional alike.",
      territory: "Egypt",
      url: "https://www.lexisnexis.com/en-us/gateway.page",
      logo: logoLexisNexis,
      bgClass: "bg-gray-500 dark:bg-gray-800",
    },
    {
      name: "LIBRARIAN (Integrated Library Management System)",
      description:
        "Software is a complete Library Management Software capable to manage all the functionalities of library and dissemination of information at the right time to the right people. Suitable for small to big libraries including medical and legal libraries, colleges, schools, universities...",
      territory: "Egypt",
      url: "/publishers/librarian",
      logo: logoLibrarian,
    },
    {
      name: "Library of Congress",
      description:
        "Who does not know the Library of Congress, the American Governmental organization that generates a wealth of bibliographic and cataloging information.",
      territory: "Egypt, Sudan and Middle East",
      url: "https://www.loc.gov/",
      logo: logoLoC,
    },
    {
      name: "Neschen",
      description:
        "A German company, for over 50 years the name of filmolux has been synonymous with high quality book protection films, strengthening films, protection films, textile tape, marking tapes or book pockets for libraries.",
      territory: "Egypt",
      url: "https://www.neschen.de/en/",
      logo: logoNeschen,
    },
    {
      name: "NewspaperDirect (PressReader)",
      description:
        "NewspaperDirect is the world leader in digital newspaper distribution. Founded in 1999... The company offers this service PressDisplay™.",
      territory: "Egypt",
      url: "https://www.pressreader.com/",
      logo: logoPressReader,
      imgClass: "scale-150",
    },
    {
      name: "SAE",
      description:
        "is a global association of more than 128,000 engineers and related technical experts in the aerospace, automotive and commercial-vehicle industries. SAE International's core competencies are life-long learning and voluntary consensus standards development.",
      territory: "Egypt",
      url: "https://www.sae.org/",
      logo: logoSAE,
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ACML Represents
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Exclusive representation of leading international publishers and
            organizations
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-20 z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  const el = document.getElementById(letter);
                  if (el) {
                    const offset = 96 + 72; // fixed header + sticky alpha bar
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-600 hover:text-white transition-colors text-gray-600 dark:text-gray-400 font-medium text-sm"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {publishers.map((pub, index) => {
              const firstLetter = pub.name.charAt(0).toUpperCase();
              const isFirstOfLetter =
                index ===
                publishers.findIndex(
                  (p) => p.name.charAt(0).toUpperCase() === firstLetter,
                );
              const isInternal = pub.url.startsWith("/");
              return (
                <div
                  key={index}
                  id={isFirstOfLetter ? firstLetter : undefined}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 scroll-mt-48 md:scroll-mt-56"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div
                      className={`w-48 h-24 flex-shrink-0 rounded-lg flex items-center justify-center p-4 ${
                        "bgClass" in pub
                          ? (pub as any).bgClass
                          : "bg-white border border-gray-100 dark:border-gray-600"
                      }`}
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        src={pub.logo}
                        alt={`${pub.name} Logo`}
                        className={`max-w-full max-h-full object-contain ${
                          "imgClass" in pub ? (pub as any).imgClass : ""
                        }`}
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {isInternal ? (
                          <Link
                            to={pub.url}
                            className="hover:text-emerald-600 inline-flex items-center gap-2"
                          >
                            {pub.name}
                          </Link>
                        ) : (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-600 inline-flex items-center gap-2"
                          >
                            {pub.name}
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <Globe size={14} />
                        {pub.territory}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
