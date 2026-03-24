import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Printer,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const emailBody = `Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone || "N/A"}
    Organization: ${formData.organization || "N/A"}
    Message:${formData.message}`;

    const mailtoUrl = `mailto:info@acml-egypt.com?subject=${encodeURIComponent(
      formData.subject || "Contact form submission",
    )}&body=${encodeURIComponent(emailBody)}`;

    // Simulate slight delay so the loading UI spins cleanly
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.location.href = mailtoUrl;

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: "",
    });

    // Auto-clear success message after 5 seconds
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  interface ContactDetail {
    text: string;
    link?: string;
  }

  interface ContactItem {
    icon: any;
    title: string;
    details: ContactDetail[];
    link?: string;
  }

  const contactInfo: ContactItem[] = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        { text: "ACML Integrated Information Solutions & Systems" },
        { text: "Alexandria, Egypt" },
      ],
      link: "https://maps.app.goo.gl/W5haNwtnD66WmyA16",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        { text: "General Information:" },
        { text: "(+203) 5411741", link: "tel:+2035411741" },
        { text: "OR" },
        { text: "(+203) 5411109", link: "tel:+2035411109" },
      ],
      link: "tel:+2035411741",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        { text: "info@acml-egypt.com", link: "mailto:info@acml-egypt.com" },
        { text: "We respond within 24 hours" },
      ],
      link: "mailto:info@acml-egypt.com",
    },
    {
      icon: Printer,
      title: "Fax",
      details: [
        {
          text: "When faxing an inquiry, please include a fax cover sheet with the subject and to the attention of the Chairman Office.",
        },
        { text: "Our fax number is +203 541 1742." },
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        { text: "Sunday - Thursday: 9:30 AM - 5:30 PM" },
        { text: "Friday - Saturday: Closed" },
      ],
    },
  ];

  const subjects = [
    "Library Management Systems (LIBRARIAN)",
    "Management Archives Content (MAC)",
    "Digital Databases & Electronic Journals",
    "Books & Periodicals",
    "Library Furniture & Supplies",
    "Other",
    "Standards & Specifications (Publishers)",
    "ICT Consultancy & Strategic Planning",
    "Partnership Opportunities",
    "General Inquiry",
  ];

  return (
    <div className="pt-20">
      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Have questions about our services? Need assistance with your
              library and information centers solutions? Our team is here to
              help you find the right solutions for your institution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                {/* Wrap the icon in a link if provided (mostly for Visit Us/Email) */}
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-block transition-transform group-hover:scale-110"
                  >
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon
                        size={28}
                        className="text-emerald-600 dark:text-emerald-400"
                      />
                    </div>
                  </a>
                ) : (
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <info.icon
                      size={28}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                )}

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                    >
                      {info.title}
                    </a>
                  ) : (
                    <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {info.title}
                    </span>
                  )}
                </h3>

                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 text-sm"
                    >
                      {detail.link ? (
                        <a
                          href={detail.link}
                          className="hover:text-emerald-600 dark:hover:text-emerald-400 underline decoration-emerald-500/30 hover:decoration-emerald-500 transition-colors"
                        >
                          {detail.text}
                        </a>
                      ) : (
                        detail.text
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and our team will respond to your
                  inquiry as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Modern Status Message */}
                {status === "success" && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 flex items-start animate-fade-in-up">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-900">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-emerald-700 text-sm mt-1">
                        Thank you for reaching out. Your default email client
                        should now be open with your message details ready to
                        send.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="+20 123 456 7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your Institution"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center min-w-[200px] justify-center ${
                      status === "submitting"
                        ? "opacity-75 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Visit Our Showroom
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Experience our full range of products and services at our
                  Alexandria location
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img
                  loading="lazy"
                  decoding="async"
                  src={`${import.meta.env.BASE_URL}001.webp`}
                  alt="ACML Store Location"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    ACML Integrated Information Solutions & Systems (ACML 2I2S)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Visit us to explore our comprehensive collection of books,
                    databases, library and information centers solutions
                    solutions, and meet with our expert team to discuss your
                    specific needs.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Please contact us to schedule an appointment for a
                    personalized consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
