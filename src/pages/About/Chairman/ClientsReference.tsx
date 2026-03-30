import { useEffect } from "react";
import {
  periodicals,
  books,
  databases,
  librarySupplies,
  libraryAutomation,
  educationalVideos,
} from "../../../data/ClientsReferenceData";
import {
  internationalStandards,
  restoration,
  managementArchives,
} from "../../../data/InternationalStandardsData";

const ClientsReference = () => {
  useEffect(() => {
    document.title = "Clients Reference";
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    {
      id: "periodicals",
      title: "Periodicals & Electronic Journals",
      data: periodicals,
    },
    { id: "books", title: "Books & References", data: books },
    { id: "databases", title: "Databases", data: databases },
    {
      id: "librarySupplies",
      title: "Library Supplies & Furniture",
      data: librarySupplies,
    },
    {
      id: "libraryAutomation",
      title: "Library Automation",
      data: libraryAutomation,
    },
    {
      id: "educationalVideos",
      title: "Educational databases",
      data: educationalVideos,
    },
    {
      id: "internationalStandards",
      title: "Digital Library of International Codes & Standards",
      data: internationalStandards,
    },
    { id: "restoration", title: "Restoration", data: restoration },
    {
      id: "managementArchives",
      title: "Management Archives Content (MAC)",
      data: managementArchives,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-24">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ACML References
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our valued clients across various sectors and industries.
          </p>
        </div>
      </div>

      {/* Navigation & Content */}
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 py-12">
          {/* Jump To Navigation */}
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              Jump to Category
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm font-medium transition-colors dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Data Tables */}
          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="h-8 w-1 bg-blue-600 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {cat.title}
                  </h2>
                  <span className="ml-4 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                    {cat.data.length} Clients
                  </span>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                          <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider w-3/5">
                            Client Name
                          </th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider w-1/5">
                            Date
                          </th>
                          <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider w-1/5">
                            Country
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {cat.data.map((client, index) => (
                          <tr
                            key={index}
                            className="hover:bg-blue-50/50 dark:hover:bg-gray-700/30 transition-colors"
                          >
                            <td className="px-6 py-4 text-gray-800 dark:text-gray-300 font-medium">
                              {client.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                              {client.year}
                            </td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                              {client.country}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsReference;
