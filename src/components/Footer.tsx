import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/about/chairman/clients", label: "Client References" },
  ];

  const services = [
    { label: "Books & Periodicals", path: "/services#books-periodicals" },
    { label: "Electronic Journals", path: "/services#electronic-journals" },
    { label: "Library Automation", path: "/services/librarian" },
    { label: "Publishers", path: "/publishers" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* ... (previous columns remain unchanged) ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ACML</h3>
            <p className="text-sm leading-relaxed mb-4">
              Your gateway to the information age. Leading provider of library
              media, technology solutions, and digital content management.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-emerald-400 transition-colors text-left block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-emerald-400 transition-colors text-left block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>181-183 Ahmed Shawky Street – Roushdy – Alexandria - Egypt</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>(+20) 01005001289 / (+203) 5411741</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>info@acml-egypt.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} ACML 2I2S - ACML INTEGRATED
            INFORMATION SOLUTIONS & SYSTEMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
