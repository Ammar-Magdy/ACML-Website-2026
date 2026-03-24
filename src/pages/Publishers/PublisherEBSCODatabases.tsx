import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ExternalLink, ArrowLeft } from "lucide-react";
import { ebscoDatabases } from "../../data/ebscoDatabases";
import { useEffect } from "react";

const PublisherEBSCODatabases = () => {
  useEffect(() => {
    document.title = "EBSCO Databases";
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredDatabases = ebscoDatabases.filter((db) =>
    db.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
            EBSCO Databases
          </h1>
        </div>
      </div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Hero Section */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-12">
            <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-20 px-4">
              <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                  EBSCO Databases
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                  Comprehensive research databases for academic, medical,
                  government, and corporate institutions.
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search databases..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Database Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDatabases.map((db, index) => (
              <motion.a
                key={index}
                href={db.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4">
                  {db.name}
                </h3>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium mt-auto">
                  <span className="mr-2">Access Database</span>
                  <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          {filteredDatabases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No databases found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublisherEBSCODatabases;
