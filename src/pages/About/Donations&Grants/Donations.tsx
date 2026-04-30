import React from "react";
import { Gift, Search } from "lucide-react";

const donationsData = [
  {
    organization: "Alexandria University - Faculty of Commerce",
    subject: "Computers",
    type: ["1. Computer Model HP", "2. (10) Computer Screens (2010)"],
    value: ["5,000", "5,000"],
  },
  {
    organization: "Al Hossein University Hospital",
    subject: "Micromedex Drug Reax",
    type: ["Donate Al-Hossein Hospital Drug Reax Product (2009)"],
    value: ["6,000"],
  },
  {
    organization: "Alexandria University - Faculty of Medicine",
    subject: "Micromedex PDR System",
    type: [
      "Donate Faculty of Medicine Alexandria University PDR Product CD-ROM (2009)",
    ],
    value: ["6,000"],
  },
  {
    organization: "Ministry of Higher Education",
    subject: "EUL CONSORTIA for Digital Library (ICTP Conference)",
    type: [
      "Donate for Conference of Ministry of Higher Education & Scientific Research (2007)",
    ],
    value: ["50,000"],
  },
  {
    organization: "Alexandria University - Faculty of Education",
    subject: "Wilson",
    type: ["Education Full Text (Till 2005)"],
    value: ["$5,800"],
  },
  {
    organization: "Alexandria University - Faculty of Education",
    subject: "Education Resources Information Center (ERIC)",
    type: ["Full Collection of Microfiche (Till 2000)"],
    value: ["$23,400"],
  },
  {
    organization:
      "Agriculture Research Center- Central Laboratory For Food & Feed (CLFF)",
    subject: "ACML-ASLIB knowledge Series",
    type: ["5 Books (January 2006)"],
    value: ["150"],
  },
  {
    organization:
      "Agriculture Research Center- Central Laboratory For Food & Feed (CLFF)",
    subject: "Acml-Egypt Series",
    type: ["12 Books (January 2006)"],
    value: ["620"],
  },
  {
    organization: "Arab Beirut University",
    subject: "Wilson",
    type: ["Social Sciences Full Text (May 2005)"],
    value: ["28,800"],
  },
  {
    organization: "Arab Beirut University",
    subject: "Wilson",
    type: ["General Sciences Full Text (May 2005)"],
    value: ["31,800"],
  },
  {
    organization: "Arab Beirut University",
    subject: "Wilson",
    type: ["Library Literature Full Text (May 2005)"],
    value: ["28,200"],
  },
  {
    organization: "Arab Beirut University",
    subject: "Wilson",
    type: ["Business Full Text (May 2005)"],
    value: ["25,800"],
  },
  {
    organization: "Arab Beirut University",
    subject: "Wilson",
    type: ["Education Full Text (May 2005)"],
    value: ["25,800"],
  },
  {
    organization: "Arab Beirut University",
    subject: "Bowker",
    type: ["Audio - Video Directory"],
    value: ["Free Copy"],
  },
  {
    organization: "Arab Beirut University",
    subject: "CD's",
    type: ["ART Full Text (October 2004)"],
    value: ["$6,250"],
  },
  {
    organization: "Alexandria University - Central Scientific Library",
    subject: "Horizon",
    type: ["Software Package & training"],
    value: ["1,000,000.00"],
  },
  {
    organization: "Alexandria Library",
    subject: "Horizon",
    type: ["Software Package & training"],
    value: ["3,968,824.00"],
  },
  {
    organization: "Alexandria University - Faculty of Fine Arts",
    subject: "Horizon (50% Value)",
    type: ["Software Package"],
    value: ["160,432.00"],
  },
  {
    organization: "Faculty of Cairo - Research Center and Information Services",
    subject: "Databases",
    type: ["CD-ROM"],
    value: ["$15,300.00"],
  },
  {
    organization: "Alexandria University - Faculty of Agriculture",
    subject: "4 Agriculture databases",
    type: ["CD-ROM"],
    value: ["73,900.00"],
  },
  {
    organization: "Alexandria University - Faculty of Arts",
    subject: "Databases",
    type: ["CD-ROM"],
    value: ["62,800.00"],
  },
  {
    organization: "Alexandria University - Faculty of Pharmacy",
    subject: "Current Content Database",
    type: ["CD-ROM"],
    value: ["46,200.00"],
  },
  {
    organization: "AL Azhar University - Central Library",
    subject: "Education Database (Full Text)",
    type: ["Online Database"],
    value: ["45,000.00"],
  },
  {
    organization: "Alexandria University - Faculty of Fine Arts",
    subject: "Arts Databases (Full Text)",
    type: ["CD-ROM"],
    value: ["44,800.00"],
  },
  {
    organization: "University of Banha - Faculty of Education",
    subject: "Education Databases (31 CD)",
    type: ["CD-ROM"],
    value: ["$12,500.00"],
  },
  {
    organization: "University of Menoufia",
    subject: "Social Science Full Text",
    type: ["CD-ROM"],
    value: ["38,000.00"],
  },
  {
    organization: "University of Menoufia - Faculty of Education",
    subject: "ERIC on CD-ROM",
    type: ["CD-ROM"],
    value: ["25,800.00"],
  },
  {
    organization: "Assiut University - Central Library",
    subject: "Ulrich, Subject Heading, Who's Who in America",
    type: ["References"],
    value: ["8,700.00"],
  },
  {
    organization: "Alexandria University - Central Scientific Library",
    subject: "International Guide for Periodicals & for Books",
    type: ["References"],
    value: ["7,500.00"],
  },
  {
    organization: "Al-Zahraa University Hospital",
    subject: "JCS & BJS",
    type: ["CD-ROM"],
    value: ["5,000.00"],
  },
  {
    organization: "University of Banha",
    subject: "International Guide for Periodicals",
    type: ["References"],
    value: ["3,500.00"],
  },
  {
    organization: "University of Menoufia - Faculty of Arts (LIS Dept)",
    subject: 'Subject Headings "23 rd Edition -5 Volume"',
    type: [
      "Anglo-American Cataloguing Rules",
      'Sears List Of Subject Headings "16 Edition"',
      "References",
    ],
    value: ["2,600.00", "925.00", "500.00"],
  },
  {
    organization: "University of Helwan",
    subject: "DR. Shawky Salem Private Library",
    type: ["Books , Journals , Databases"],
    value: ["E.P 300.00"],
  },
  {
    organization: "University of Helwan",
    subject: "Books",
    type: ["Books"],
    value: ["E.P. 26,204.00"],
  },
  {
    organization: "University of Al-Azhar",
    subject: "CD's",
    type: ["Databases"],
    value: ["45,000.00"],
  },
  {
    organization: "University of Cairo and Center for Information Research",
    subject: "CD's",
    type: ["Databases"],
    value: ["$15,300.00"],
  },
  {
    organization: "University of Cairo - Faculty of Arts - Department of Library and Information Science",
    subject: "Hardware & Software",
    type: ["Computers & Software (Librarian A & Mac)"],
    value: ["$30,000.00"],
  },
  {
    organization: "University of Alexandria - Faculty of Arts - Department of Library and Information Science",
    subject: "Hardware & Software",
    type: ["Computers & Software (Librarian A & Mac)"],
    value: ["$30,000.00"],
  },
  {
    organization: "University of Menoufia - Faculty of Arts - Department of Library and Information Science",
    subject: "Hardware & Software",
    type: ["Computers & Software (Librarian A & Mac)"],
    value: ["$30,000.00"],
  },
];


import { useEffect } from "react";

export default function Donations() {
  useEffect(() => {
    document.title = "Donations";
  }, []);

  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredDonations = donationsData.filter(
    (item) =>
      item.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="text-emerald-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ACML Donations
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            A comprehensive record of donations and contributions made by ACML
            to various institutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8 flex justify-end">
              <div className="relative w-full md:w-64">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search donations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-100">
                    <tr>
                      <th className="py-4 px-6 text-left font-semibold">
                        Organization
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Subject
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Type
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {filteredDonations.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">
                          {item.organization}
                        </td>
                        <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                          {item.subject}
                        </td>
                        <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                          {Array.isArray(item.type) ? (
                            <ul className="list-disc pl-4 space-y-1">
                              {item.type.map((t, i) => (
                                <li key={i}>{t}</li>
                              ))}
                            </ul>
                          ) : (
                            item.type
                          )}
                        </td>
                        <td className="py-4 px-6 text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">
                          {Array.isArray(item.value) ? (
                            <ul className="list-none space-y-1">
                              {item.value.map((v, i) => (
                                <li key={i}>{v}</li>
                              ))}
                            </ul>
                          ) : (
                            item.value
                          )}
                        </td>
                      </tr>
                    ))}
                    {filteredDonations.length === 0 && (
                      <tr>
                        <td
                          colSpan={4}
                          className="py-8 text-center text-gray-500 dark:text-gray-400"
                        >
                          No donations found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              * Values are in Egyptian Pounds (L.E) unless specified otherwise.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
