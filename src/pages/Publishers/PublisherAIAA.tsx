import { useEffect } from "react";
import {
  Globe,
  Briefcase,
  Zap,
  Target,
  Shield,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import aiaaLogo from "../../assets/Photos/Publishers/AIAA/logo.webp";
import aiaa1 from "../../assets/Photos/Publishers/AIAA/AIAA-1.webp";
import aiaa2 from "../../assets/Photos/Publishers/AIAA/AIAA-2.webp";
import aiaaVideo from "../../assets/Videos/Publishers/AIAA/AIAA.mp4";

export default function PublisherAIAA() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AIAA";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video preload="metadata" autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover">
            <source src={aiaaVideo} type="video/mp4" />
          </video>
          {/* Brand-Aligned Video Overlay */}
          <div className="absolute inset-0 bg-[#2B4B77]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block bg-[#2B4B77] p-6 rounded-3xl m-1">
                <img loading="lazy" decoding="async" src={aiaaLogo}
                  alt="AIAA Logo"
                  className="h-24 md:h-32 object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              American Institute of Aeronautics and Astronautics (AIAA)
            </h1>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <a
                href="http://www.aiaa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 dark:text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-blue-600 text-white hover:brightness-110 border border-blue-600 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <Target className="mr-3" />
                  About AIAA
                </h2>
                <div className="mb-8">
                  <img loading="lazy" decoding="async" src={aiaa1}
                    className="w-full max-w-sm mx-auto mb-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 object-cover"
                    alt="AIAA About"
                  />
                </div>

                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    One Remarkable Fact Says It All:
                  </p>
                  <p>
                    Since 1963, members from a single professional society have
                    achieved virtually every milestone in modern American
                    flight. That society is the American Institute of
                    Aeronautics and Astronautics. With more than 35,000
                    individual members and 90 corporate members, AIAA is the
                    world’s largest technical society dedicated to the global
                    aerospace profession.
                  </p>
                  <p>
                    Created in 1963 by the merger of the two great aerospace
                    societies of the day, the American Rocket Society (founded
                    in 1930 as the American Interplanetary Society), and the
                    Institute of the Aerospace Sciences (established in 1933 as
                    the Institute of the Aeronautical Sciences), AIAA carries
                    forth a proud tradition of more than 75 years of aerospace
                    leadership.
                  </p>
                  <div className="bg-blue-600/10 dark:bg-blue-600/5 p-6 rounded-xl border-l-4 border-blue-600 mt-6">
                    <p className="mb-4">
                      This is the place for everything, from exploring our
                      history and purpose … to catching up on the latest news.
                    </p>
                    <p>
                      Recognizing excellence is one the most important
                      contributions we make.{" "}
                      <strong>Welcome to the heart of aerospace</strong>. With
                      35,000 members, AIAA is the world’s largest professional
                      society devoted to the progress of engineering and science
                      in aviation, space, and defense. Serving this elite
                      audience and its historic mission is our commitment and
                      our privilege. Now we invite you to learn more about AIAA
                      – and share in the vision and excitement of this inspiring
                      industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <Target className="mr-3" />
                  AIAA Mission
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 mt-6 items-center">
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      AIAA’s mission is to address the professional needs and
                      interests of the past, current, and future aerospace
                      workforce and to advance the state of aerospace science,
                      engineering, technology, operations, and policy to benefit
                      our global society.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img loading="lazy" decoding="async" src={aiaa2}
                      alt="AIAA Mission"
                      className="w-[287px] rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Did You Know Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <Zap className="mr-3" />
                  Did You Know?
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Shield className="mr-2 text-blue-600 w-5 h-5" />
                      AIAA is the leading Aerospace Publisher
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      AIAA has earned an international reputation as the
                      preeminent publisher of cutting-edge aerospace books and
                      journals, and the leading source of aerospace industry
                      archives, dating back to the early 1900s. Over the past
                      eight decades, AIAA and its predecessor organizations have
                      published over 300 books and about 300,000 technical
                      meeting papers. AIAA’s current publications include seven
                      technical journals, a magazine, three book series,
                      national and international standards documents, a growing
                      number of e-books and other electronic products, and a
                      full-service, interactive Web site. For the most
                      authoritative technical publications, look to AIAA.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Globe className="mr-2 text-blue-600 w-5 h-5" />
                      AIAA is the Wellspring for Information Exchange
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      AIAA organizes and hosts the aerospace industry’s most
                      important conferences and events, where aerospace
                      professionals exchange information, present findings,
                      network, and collaborate. Every year, AIAA organizes and
                      hosts some two dozen conferences on key aerospace topics.
                      Whether it’s science and engineering, exploration,
                      navigation, communication, or environmental applications,
                      AIAA brings the aerospace community together to bring the
                      world together.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Briefcase className="mr-2 text-blue-600 w-5 h-5" />
                      AIAA serves a diverse community
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      By addressing the needs of scientists, engineers and
                      allied professionals who conceive, design, develop, test,
                      construct, and operate air and space vehicles, plus their
                      associated systems and subsystems. Equally important, we
                      reach out to the educators who train the professionals, to
                      the researchers who continuously renew the technology, to
                      the managers who lead their efforts, and to the innovators
                      who generate and nurture new concepts. For all of these
                      professionals, AIAA offers a wealth of benefits. These
                      include resources for practitioners, such as access to
                      market and management information, links to related
                      societies and businesses, career information, and
                      provocative articles with relevant industry insights.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Zap className="mr-2 text-blue-600 w-5 h-5" />
                      AIAA is the Public Policy Voice of Aerospace
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      AIAA is the voice of the aerospace profession, giving its
                      members an effective say in policy decisions affecting
                      aerospace. Since 1972 AIAA has contributed technical
                      expertise to Congress and the executive branch, providing
                      accurate information to decision makers and highlighting
                      the crucial role aerospace plays in economic and national
                      security, and in our technological future.
                    </p>
                  </div>
                </div>
              </div>

              {/* History Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <Briefcase className="mr-3" />
                  Our History: Two Pioneering Traditions United
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mt-6">
                  <p>
                    For more than 70 years, AIAA has been the principal society
                    of the aerospace engineer and scientist. But we haven’t
                    always been AIAA, or even one organization.
                  </p>
                  <p>
                    In 1963, the two great aerospace societies of the day
                    merged. The American Rocket Society and the Institute of
                    Aerospace Science* joined to become AIAA. Both brought long
                    and eventful histories to the relationship – histories that
                    stretched back to 1930 and 1932 respectively, a time when
                    rocketry was the stuff of science fiction and the aviation
                    business was still in its infancy.
                  </p>
                  <p>
                    Each society left its distinct mark on AIAA. The merger
                    combined the imaginative, risk-taking, shoot-for-the-moon
                    outlook of Project Mercury-era rocket, missile, and space
                    professionals with the more established, well-recognized,
                    industry-building achievers of the aviation community. The
                    resulting synergy has benefited aerospace ever since.
                  </p>
                  <p>
                    Today, with more than 35,000 members, AIAA is the world's
                    largest professional society devoted to the progress of
                    engineering and science in aviation, space, and defense. The
                    Institute continues to be the principal voice, information
                    resource, and publisher for aerospace engineers, scientists,
                    managers, policymakers, students, and educators. AIAA is
                    also the go-to resource for stimulating professional
                    accomplishment and standards-driven excellence in all areas
                    of aerospace for prominent corporations and government
                    organizations worldwide.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-8 border-t dark:border-gray-700 pt-4">
                    * The two societies were originally the American
                    Interplanetary Society and the Institute of Aeronautical
                    Science.
                  </p>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="bg-blue-600/10 dark:bg-blue-600/5 rounded-2xl shadow-sm p-8 border border-blue-600/20 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-blue-600 mb-4">
                  Join the Worldwide Aerospace Community
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Partner with us to gain access to global aerospace standards,
                  research, and innovation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-black dark:bg-black text-white hover:bg-gray-700 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Target className="mr-2 text-blue-600" />
                  Key Domains
                </h3>
                <ul className="space-y-4">
                  {[
                    "Aerospace Publisher",
                    "Information Exchange",
                    "Diverse Community",
                    "Public Policy Voice",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-600/10 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-600/10 dark:bg-blue-600/5 rounded-xl p-6 border border-blue-600/20">
                <h3 className="text-lg font-bold text-gray-900 dark:text-blue-600 mb-3">
                  At AIAA
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  We shape the profession's position on regional and worldwide
                  issues, helping our members find continuing success in
                  aviation, space, and defense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
