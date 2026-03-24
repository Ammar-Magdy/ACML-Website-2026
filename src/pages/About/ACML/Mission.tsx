
import { Target, Shield, Globe, CheckCircle } from "lucide-react";
import OrgChartEn from "../../../assets/Photos/About/Acml-Mission/Organization -en.bmp";
import OrgChartAr from "../../../assets/Photos/About/Acml-Mission/Organization chart_ar.bmp";


import { useEffect } from "react";



export default function Mission() {
  useEffect(() => {
    document.title = "Mission";
  }, []);

  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero / Header Section - Styled for impact but keeping text exact */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h4 className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-center">
            ACML is an Egyptian Joint-Stock Company with an Egyptian - Arab
            capital, established in Alexandria - Egypt on early 1995.
          </h4>
        </div>
      </div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 py-12">
          {/* Top Section with Float Layout for Org Chart - maintaining structure but adding responsive flex/grid */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-12 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8" />
                  ACML Mission
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  ACML is an Egyptian Share Holders Corporation with Egyptian /
                  Arabian Capital. Our aims is to:
                  <br />
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Promote high standards of provision and delivery of library and information services.",
                    "Encourage widespread understanding of the value of good library & information services.",
                    "Represent the interests of our Publishers and Vendors throughout Egypt and Arab World.",
                    "Satisfy our clients in Egypt and the Arab World in fields of information industry resources.",
                    "Developing the information infrastructure in Egypt, and strength the role of libraries and information centers in its community.",
                    "Provide the digital library for academia, government, military & corporations.",
                    "Provide integrated library management system to cover small, medium and large size libraries.",
                    "Help libraries information infra-structure sector in Egypt by donating funds to build small projects to catch up with information era.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 mt-2.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Placeholder: Organization chart.bmp - Kept as requested */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img loading="lazy" decoding="async" src={OrgChartEn}
                  alt="Organization Chart English"
                  className="rounded-lg shadow-sm w-full max-w-[298px] h-auto border-2 border-gray-200 dark:border-gray-700"
                />

                <img loading="lazy" decoding="async" src={OrgChartAr}
                  alt="Organization Chart Arabic"
                  className="rounded-lg shadow-sm w-full max-w-[298px] h-auto mt-4 border-2 border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>

            <div className="mt-12 border-t border-gray-100 dark:border-gray-700 pt-12">
              <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8" />
                ACML Core values
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                In pursuing these aims ACML embraces the following core values:
              </p>
              <div className="grid md:grid-cols-1 gap-4">
                {[
                  "The endorsement of the principles of freedom of access to information. ideas and works of imagination and freedom of expression embodied in Article 19 of the Universal Declaration of Human Rights .",
                  "The belief that people, communities and organizations need universal and equitable access to information, ideas and works of imagination for their social, educational, cultural, democratic and economic well-being.",
                  "The conviction that delivery of high quality library and information services helps guarantee that access .",
                  "The commitment to enable all Members of organizations in Egypt to engage in electronic era and digital libraries developments.",
                  "The updating information and resources of interdisciplinary activities related to library and information sciences.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-800 dark:text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code of Conduct Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-12 border border-blue-50 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />

            <h4 className="text-xl font-bold text-center mb-12 uppercase tracking-widest text-blue-600 dark:text-blue-400 border-b pb-4">
              ACML CODE OF CONDUCT &amp; ETHICS (ACCE)
            </h4>

            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Introduction
                </h2>
                <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  <li>
                    ACML takes seriously its commitment to ensuring that the
                    decisions it makes today are also the right decisions for
                    tomorrow. This commitment is at the heart of how ACML does
                    business. As a result, ACML is requiring its partners (In
                    Egypt , Arab Countries, &amp; Worldwide) to adhere to the
                    fundamental principles contained in the ACML "Code of
                    Conduct &amp; Ethics"(ACCE) when conducting business on
                    behalf of ACML.
                  </li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                  <p className="font-bold mb-2 text-gray-900 dark:text-white text-lg">
                    We thank you for your role and support.
                  </p>
                  <p className="font-bold italic text-blue-800 dark:text-blue-300">
                    Professor Shawky M. A. Salem
                  </p>
                  <p className="font-bold italic text-blue-600 dark:text-blue-400">
                    ACML CEO
                  </p>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 italic text-gray-900 dark:text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-emerald-500" />
                    Our Vision
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>
                      To be The Source for Critical Information and Insight that
                      powers growth and value for our customers.
                    </li>
                  </ul>
                </section>

                <section className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-500" />
                    Our Mission
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>
                      Translating the value of ACML global information,
                      expertise and knowledge to enable customer success and
                      create customer delight on a daily basis.
                    </li>
                  </ul>
                </section>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Our Values
                </h2>
                <p className="underline font-bold mb-6 text-gray-700 dark:text-gray-300">
                  In conducting business, our core values guide our actions:
                </p>
                <p>&nbsp;</p>

                <div className="grid gap-6">
                  {[
                    {
                      title: "TEAMWORK",
                      content:
                        "We promote and support a diverse yet unified team. We work together to meet common goals while striving to achieve excellence in all we do, team and individual professional success.",
                    },
                    {
                      title: "RESPECT",
                      content:
                        "We honor the rights and beliefs of our fellow colleagues, our customers, our shareowners, our partners and our community. We treat everyone with the highest degree of dignity, equality and trust.",
                    },
                    {
                      title: "ACCOUNTABILITY",
                      content:
                        "We identify and accept our individual and team responsibilities. We make clear our commitments and meet them. We take responsibility for our performance in all of our decisions and actions.",
                    },
                    {
                      title: "INTEGRITY",
                      content:
                        "We employ the highest ethical standards, demonstrating honesty and fairness in every action that we take - recognizing there is no right way to do a wrong thing.",
                    },
                    {
                      title: "INNOVATION",
                      content:
                        "We look for opportunities to leverage our skills, technology and each other to deliver new value in new ways. We are creative and entrepreneurial in bringing value to our customers, colleagues, shareholders, partners and community. We anticipate change and welcome the opportunities that arise as a result.",
                    },
                  ].map((val, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-600"
                    >
                      <strong className="text-emerald-700 dark:text-emerald-400 block mb-2 text-lg">
                        {val.title}
                      </strong>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {val.content}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold my-4 italic text-gray-900 dark:text-white">
                  Expectations of Business Conduct &amp; Ethics
                </h2>
                <ul className="list-disc pl-5 mb-8 text-gray-700 dark:text-gray-300">
                  <li>
                    All ACML channel partners are expected to act in conformity
                    with the spirit of the principles set forth in ACML’s
                    Vision, Mission and Values. In addition, all ACML partners
                    must operate in full compliance with the laws, rules and
                    regulations that govern their work. This includes, but is
                    not limited to, the workplace standards and business
                    practices that are listed below. For purposes of this
                    document, “ACML” refers to ACML S.A.E. and ACML affiliate:
                    2i2s (Integrated Information Solutions &amp; Systems)'
                  </li>
                </ul>

                <div className="space-y-8">
                  {[
                    {
                      title: "Confidential Information",
                      content:
                        "Partners are responsible for safeguarding ACML 2i2s confidential information, including technical and commercial information relating to ACML products, as well as information regarding the affairs and business of ACML 2i2s. This information may only be used for legitimate business purposes to advance the interests of ACML and be shared within the partner company on a need to know basis. The personal use of ACML confidential information is prohibited.",
                    },
                    {
                      title: "Intellectual Property",
                      content:
                        "ACML 2i2s intellectual property rights, including its copyrights and trademarks, are to be respected. The transfer of technology and know-how is to be done in a manner that protects these rights.",
                    },
                    {
                      title: "Conflicts of Interest",
                      content:
                        "Partners must avoid any situation where its interests (financial or otherwise) conflict with the duties that it owes to ACML. A conflict may arise when the partner company employees or is partially or fully controlled by an ACML employees or his or her family member. Additionally, a conflict may arise when partner company, its employees and their family members receive improper benefits through partner company’s relationship with ACML. At no point may you allow other activities to conflict with acting in the best interests of ACML.",
                    },
                    {
                      title: "Gifts and Gratuities",
                      content:
                        "The offering and acceptance of kickbacks, bribes and other illegal payments subverts the very essence of competition. This includes gratuities to individuals with the purpose of obtaining or retaining business or unduly influencing a business decision. These activities will not be tolerated. Any channel partner that acts in contravention of this principle risks immediate termination of all existing and future ACML business.",
                    },
                    {
                      title: "Trade Practices",
                      content:
                        "Partners are responsible for understanding that ACML products they distribute may contain technical data that is controlled by Egypt. export control laws and the laws of other jurisdictions. All export activity must therefore be in compliance with all applicable laws that may impose registration, reporting, licensing or other related requirements.",
                    },
                  ].map((section, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl"
                    >
                      <p className="font-bold mb-3 text-emerald-800 dark:text-emerald-400 text-lg border-b border-gray-200 dark:border-gray-600 pb-2 inline-block">
                        {section.title}
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>{section.content}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-xl border border-blue-100 dark:border-blue-800">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                  Questions or Concerns
                </h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>
                      ACML asks that its partners and their employees report any
                      questionable behavior or other concerns. Reports may be
                      made by contacting:
                    </strong>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    (1){" "}
                    <a
                      href="mailto:chairman@ACML-egypt.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm"
                    >
                      chairman@ACML-egypt.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    (2){" "}
                    <span className="font-semibold">
                      the ACML CEO at +201005001289
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    (3) <span className="font-semibold">the ACML HQ</span>{" "}
                    <u>
                      <a
                        href="mailto:info@ACML-egypt.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm"
                      >
                        info@ACML-egypt.com
                      </a>
                    </u>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                    (4){" "}
                    <span className="font-semibold">
                      the ACML Code of Conduct Hotline.Reports to the ACML Code
                      of Conduct Hotline can be made by visiting{" "}
                    </span>
                    <a
                      href="http://www.ACML-egypt.com/"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      www.ACML-egypt.com
                    </a>{" "}
                    <strong>
                      A list of country-specific telephone numbers can be found
                      on the same webpage.
                    </strong>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <p className="my-8">&nbsp;</p>

          {/* Shareholders Section */}
          <div className="mb-16">
            <h4 className="italic font-bold text-xl mb-8 text-center text-gray-700 dark:text-gray-300 position-relative">
              <span className="bg-gray-50 dark:bg-gray-900 px-4 z-10 relative">
                The following companies support and have shares in ACML-Egypt:
              </span>
              <div className="absolute top-1/2 left-0 w-full  bg-gray-200 dark:bg-gray-700 -z-0"></div>
            </h4>

            <div className="space-y-4 max-w-4xl mx-auto">
              <details className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
                <summary className="p-5 cursor-pointer font-bold text-emerald-800 dark:text-emerald-400 text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span className="underline">
                    Arabian Advanced Systems-Saudi Arabia NASEEJ
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                  <blockquote className="text-gray-700 dark:text-gray-300 border-l-4 border-emerald-500 pl-4 py-1">
                    <strong>AAS</strong> is a founder in ACML-Egypt. It is a
                    Saudi company working in sophisticated information
                    technology, CD-ROM industry, library automation
                    packages......AAS is considered as one of the distinguished
                    and leading companies in information technology in Saudi
                    Arabia......... The headquarters are in Riyadh - Saudi
                    Arabia.
                  </blockquote>
                </div>
              </details>

              <details className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
                <summary className="p-5 cursor-pointer font-bold text-emerald-800 dark:text-emerald-400 text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span className="underline">
                    Mediterranean Publishers Services-Egypt
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                  <blockquote className="text-gray-700 dark:text-gray-300 border-l-4 border-emerald-500 pl-4 py-1 mb-4">
                    <strong>MPS</strong> is a main shareholder in ACML-Egypt,
                    and it is one of the most famous Egyptian companies working
                    in publishing, marketing and distribution of culture media
                    in all forms.....MPS is an agent in Egypt to most of the
                    international publishers..... The headquarters of MPS is in
                    Cairo - Egypt.
                  </blockquote>
                </div>
              </details>

              <details className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
                <summary className="p-5 cursor-pointer font-bold text-emerald-800 dark:text-emerald-400 text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span className="underline">
                    Arabian Company for Enterprises-Egypt
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                  <blockquote className="text-gray-700 dark:text-gray-300 border-l-4 border-emerald-500 pl-4 py-1">
                    <strong>ACE</strong> is a main shareholder in ACML-Egypt.
                    Its activities cover technical and sophisticated projects in
                    developed areas....ACE has one of the largest manufactories
                    in paper industry in Egypt, many projects in agriculture,
                    Domestic services, and contracting ...etc..... The
                    headquarters of ACE is in Cairo- Egypt.
                  </blockquote>
                </div>
              </details>

              <details className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
                <summary className="p-5 cursor-pointer font-bold text-emerald-800 dark:text-emerald-400 text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span className="underline">THAIBA-USA</span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                  <blockquote className="text-gray-700 dark:text-gray-300 border-l-4 border-emerald-500 pl-4 py-1">
                    <strong>THAIBA</strong> is an American company and a
                    shareholder in ACML-Egypt. It is considered as a convey of
                    the American technology to ACML-Egypt. THAIBA provides
                    ACML-Egypt by new developments in information industry in
                    USA, facilitates and helps in all requirements for
                    ACML-Egypt in the United States. THAIBA is joining
                    ACML-Egypt in several international projects to provide the
                    basic tools of library and information work in the Arab
                    region. The headquarters of THAIBA is in New Jersey - USA.
                  </blockquote>
                </div>
              </details>

          

              <details className="group border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
                <summary className="p-5 cursor-pointer font-bold text-emerald-800 dark:text-emerald-400 text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span className="underline">
                    International Publishers Representatives and Associates
                    -Canada
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-gray-700 dark:text-gray-300 border-l-4 border-emerald-500 pl-4 py-1">
                    <strong> IPRA</strong> This new leading company will
                    represent the Arab publishers and some foreign Publishers In
                    north America (covering: Canada, USA &amp; Mexico). It aims
                    to market its products to the Arab immigrants and foreign
                    organizations interested in the Arab and Islamic literature.
                    On the other hand it represents ACML-Egypt in Canada and
                    will be the leverage for importing any products from Canada
                    to the Egyptian &amp; Arabian markets. The headquarters of
                    IPRA is in Quebec - Canada.
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-emerald-900 text-white rounded-3xl p-10 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <h4 className="text-3xl font-bold mb-8 flex items-center gap-3 relative z-10">
              <Target className="w-10 h-10 text-emerald-300" />
              Objectives
            </h4>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
              <ul className="list-disc pl-5 space-y-4 text-emerald-50 text-lg leading-relaxed">
                <li>
                  The endorsement of the principles of freedom of access to
                  information, ideas and works of imagination and freedom of
                  expression embodied in Article 19 of the Universal Declaration
                  of Human Rights .
                </li>
                <li>
                  To establish a leading company deals in all forms of
                  literature and media..
                </li>
                <li>
                  To provide Arab information databases on internet.
                </li>
                <li>
                  To provide technical consultation in the field of library
                  automation, also arabizing E-Content tools..
                </li>
                <li>
                  To provide the new concept " turn key library " to the
                  Egyptian market.
                </li>
                <li>
                  To proceed with training programs in the field of libraries,
                  and information services.
                </li>
                <li>
                  To represent the International vendors in Electronic Databases
                  (on-line) in Egypt.
                </li>
              </ul>
              <ul className="list-disc pl-5 space-y-4 text-emerald-50 text-lg leading-relaxed">
                <li>
                  To establish a developed electronic publishing house, to
                  publish books, reports, studies……..etc..
                </li>
                <li>
                  To Import &amp; Export related products in knowledge specially
                  for Science and Technology &amp; Medicine (STM).
                </li>
                <li>
                  To sell and distribute (whole sales and retails) through
                  specialized outlets deal with Arab and foreign books,
                  publications, newspapers and magazines.
                </li>
                <li>
                  To produce and distribute: books, references, reports, studies
                  and scientific journals.
                </li>
                <li>
                  To provide technical and professional consultancy processes in
                  the fields of building and organizing libraries, library
                  automation, as well as record management and developed
                  information systems.
                </li>
                <li>
                  To prepare exhibitions, workshops, seminars and conferences in
                  LIS fields.
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-emerald-700/50 font-medium text-emerald-200 italic relative z-10 bg-emerald-800/50 p-6 rounded-xl">
              ACML -Egypt is allowed to participate with other companies,
              organizations, and associations, which deal with similar
              activities and can help in achieving its goals in Egypt, the Arab
              countries and foreign countries. ACML -Egypt is allowed to
              amalgamate, buy, or annexed to other organizations according to
              the Egyptian law and its executing statues for companies in Egypt.
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
