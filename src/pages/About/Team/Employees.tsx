import { Mail, Briefcase, Monitor } from 'lucide-react';
import { useEffect } from "react";

export default function Employees() {
  useEffect(() => {
    document.title = "Employees";
  }, []);

  const sectors = [
    { name: "Accounting Sector", email: "accounting@acml-egypt.com" },
    { name: "Chairman Office Sector", email: "admin@acml-egypt.com" },
    { name: "Databases Sector", email: "databases@acml-egypt.com" },
    { name: "Standards Sector", email: "standards@acml-egypt.com" },
    { name: "Electronic Periodicals Sector", email: "periodical@acml-egypt.com" },
    { name: "Electronic Bookshop Sector", email: "info@acml-egypt.com" },
    { name: "Supplies Sector", email: "supplies@acml-egypt.com" },
    { name: "Library Automation Sector", email: "automation@acml-egypt.com" }
  ];

 

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ACML Employees</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Dedicated teams across various sectors
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">ACML Employees</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="text-blue-500" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{sector.name}</h3>
                  <a href={`mailto:${sector.email}`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    {sector.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
