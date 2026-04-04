import { Book, Globe, ExternalLink} from "lucide-react";
import winnersPdf from "../../../assets/PDF/About/Chairman/ChairmanAccomplishments/winners-full-details-SSCAG.pdf";
import sscgformAr from "../../../assets/PDF/About/Chairman/ChairmanAccomplishments/sscg-form-2026-ar.docx";
import sscgformEn from "../../../assets/PDF/About/Chairman/ChairmanAccomplishments/sscg-form-2026-en.docx";
import { useEffect } from "react";

export default function ChairmanAccomplishments() {
  useEffect(() => {
    document.title = "Chairman Accomplishments";
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dr. Shawky Salem Accomplishments
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Professional Achievements, Grants, and Contributions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* SSCG Grant */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                IFLA (SSCG) Dr. Shawky Salem Conference Grant
              </h3>
              <div className="space-y-4">
                <p
                  className="text-gray-700 dark:text-gray-300 text-right"
                  dir="rtl"
                >
                  منحة مؤتمر د. شوقي سالم هي منحة سنوية مقدمة من د. شوقي سالم
                  والاتحاد الدولي لجمعيات ومؤسسات المكتبات (الإفلا) والهدف من
                  المنحة هو أن يستطيع أحد الخبراء في ...
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The Dr. Shawky Salem Conference Grant is an annual grant
                  established by Dr. Shawky Salem and the International
                  Federation of Library Associations (IFLA).
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`${winnersPdf}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                  >
                    Winners Full Details (SSCG) <ExternalLink size={14} />
                  </a>
                  <a
                    href={`${sscgformAr}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                  >
                    Application Form (Arabic) <ExternalLink size={14} />
                  </a>
                  <a
                    href={`${sscgformEn}#view=FitH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                  >
                    Application Form (English) <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://www.ifla.org/dr-shawky-salem-conference-grant-sscg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                  >
                    IFLA - Dr. Shawky Salem Conference Grant (English){" "}
                    <ExternalLink size={14} />
                  </a>
                
                </div>
              </div>
            </div>

            {/* Annual Scientific Research Award */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-emerald-500">
              <h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-right"
                dir="rtl"
              >
                جائزة دكتور شوقي سالم السنوية للبحث العلمي -أكاديمية البحث العلمي و التكنولوجيا
              </h3>
              <div
                className="text-gray-700 dark:text-gray-300 space-y-4 text-right"
                dir="rtl"
              >
                <p>
                  22 كانون الثاني (يناير) 2010 ... في هدف لدعم البحث العلمي
                  وأبحاثه فإن د.شوقي سالم قام بإعداد مسابقة للبحث العلمي ...
                  مشاء الله كل الشكر الى الدكتور شوقي سالم على تشجيعه للبحث
                  العلمي بمجال ...
                </p>
             
              </div>
            </div>

            

            {/* International Opportunities */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="text-blue-600" />
                International Recognition & Directories
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="http://mail.asis.org/pipermail/sigiii-l/2002-September/000042.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    [Sigiii-l] FW: Dr. Shawky Salem Conference Grant
                  </a>
                </li>
                <li>
                  <a
                    href="http://mail.asis.org/pipermail/sigiii-l/2002-September/000043.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    [Sigiii-l] FW: Guust van Wesemael Literacy Prize
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.hwwilson.com/foreigndists/foreign_alpha.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    International Distributors by Alphabetical Order
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    EGYPT ACML Integrated Information Solutions & Systems Dr.
                    Shawky Salem
                  </p>
                </li>
                <li>
                  <a
                    href="http://www.hwwilson.com/foreigndists/m_east_dists.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    Middle Eastern, European, African Distributors
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    aip.cz ... Dr. Shawky Salem - (Contact)
                    chairman@ACML-egypt.com...
                  </p>
                </li>
                <li>
                  <a
                    href="http://www.un.org/Depts/dhl/sflib/libmgnt/grants.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    Grants for libraries and librarians of the developing
                    countries
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Dr. Shawky Salem Training Grant for Arab Specialists in
                    Library and Information Sciences: the aim of this permanent,
                    annual grant is to enable an expert in ...
                  </p>
                </li>
                <li>
                  <a
                    href="http://www.ala.org/ala/irrt/irrtcommittees/irrtintlexc/internationalopportunities.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    ALA | International Opportunities and Funding Sources for
                    ...
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    IFLA - Dr. Shawky Salem Training Grant for Arab Specialists
                    in Library and Information Sciences The aim of this grant is
                    to enable an expert in library and ...
                  </p>
                </li>
                <li>
                  <a
                    href="http://www.ieee.org/products/onlinepubs/info/contactus_outside.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    IEEE Publications Online - Contact Us
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    35, Rue de Neuilly 92110 Clichy France... Egypt Acml
                    Integrated Information Solution & Systems (ACML) Attn: Dr.
                    Shawky Salem 102-b ...
                  </p>
                </li>
                <li>
                  <a
                    href="http://www.sla.org/caucus/kiie/kiie-funding.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    Special Libraries Association: International Information
                    Exchange ...
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Dr. Shawky Salem Training Grant for Arab Specialists in
                    Library and Information Sciences, Annual grant for a
                    national of an Arab country to be trained in an ...
                  </p>
                </li>
                <li>
                  <a
                    href="http://www.lis.uiuc.edu/~b-sloan/job.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    Beyond the Job
                  </a>
                  {/* Text implied but not explicitly in list item in HTML beyond title context */}
                </li>
                <li>
                  <a
                    href="http://ifla.queenslibrary.org/III/grants/salemgrant.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    Dr. Shawky Salem Conference Grant - Call for Applications
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Dr. Shawky Salem Conference Grant Call for Applications,
                    2003. The Dr. Shawky Salem Conference Grant is an annual
                    grant established ...
                  </p>
                </li>
                <li>
                  <a
                    href="http://www.ifla.org/VII/s26/annual/sp26-00.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    Section on Regional Activities: Asia and Oceania
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Members: Toru Koizumi (Japan) Mandana Sadigh-Behzadi (Iran)
                    Special Advisors: Dr Maria LaoSunthara (Thailand) Dr Shawky
                    Salem (Egypt) DEK Wijasuriya (Malaysia). ...
                  </p>
                </li>
              </ul>
            </div>

            {/* Publications & Academic References */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Book className="text-purple-600" />
                Publications & Academic References
              </h3>
              <ul className="space-y-6">
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ToC: Arab centre for medical literature
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Shawky Salem. Pages: 57 - 58
                  </p>
                  <a
                    href="http://portal.acm.org/toc.cfm?id=47040&type=issue&coll=portal&dl=ACM&CFID=11111111&CFTOKEN=2222222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    View ACM Portal
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ToC: Iraqi aggression to the library and information
                    infrastructure in Kuwait
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Shawky Salem. Pages: 425 - 440
                  </p>
                  <a
                    href="http://portal.acm.org/toc.cfm?id=159204&dl=portal&dl=ACM&type=issue&vol=J445&voltype=periodical&CFID=11111111&CFTOKEN=2222222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    View ACM Portal
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Spannungsfeld: internationaler Informationstransfer
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Outreach" Services des Information Resource Centers
                    Rosemarie Bittner, US Embassy Berlin. Die Alexandria
                    Bibliothek. Prof. Dr. Shawky Salem, Alexandria.
                  </p>
                  <a
                    href="http://ebib.oss.wroc.pl/konferencje/spannungsfeld.rtf"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    [RTF] Download
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Bibliothekare entdecken das Wissensmanagement und die ...
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Die zwei anwe- senden FID-Council Mitglieder (Ire- ne
                    Wormell und Shawky Salem vonüber waren offensichtlich eher
                    aus persönlichem Interesse gekom- men und ...
                  </p>
                  <a
                    href="http://www.ifla-deutschland.de/de/downloads/hobohm_boston_2001.pdf#view=FitH"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    [PDF] Download
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Library and Information Science: Parameters and Perspectives
                    ...
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    .. 10. Artificial intelligence (AI) and expert system (ES)
                    tools for development/Shawky Salem. 11. Multimedia
                    information and systems ...
                  </p>
                  <a
                    href="https://www.vedamsbooks.com/no12227.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    View Book
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    HLS der UB Tübingen - Bibliothekswesen, Information und ...
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    by Shawky Salem. - 2. print.. - Amsterdam : Elsevier, 1976.
                    - 708 S.; (engl.) ; ISBN 0-444-41475-4: Standort im
                    Historischen Lesesaal: bibl A 110 / 14 A 5972 a; ...
                  </p>
                  <a
                    href="http://opac.ub.uni-tuebingen.de/hls/bibl/biblA.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Uni-Tuebingen
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Slovenski bibliotekarski terminološki slovar
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clason. - 2nd print. / with Arabic supplement by Shawky
                    Salem. Amsterdan [etc.] : Elsevier, 1976. - 708 str. ISBN
                    0-444-41475-4. ...
                  </p>
                  <a
                    href="http://www2.arnes.si/%7Eljnuk4/btk-slo.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    View Dictionary
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Books written in Multiple languages
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    American, French, Spanish, Italian, Dutch, and German /
                    compiled by LY Chaballe,L. Masuy, and JP Vandenberghe ; with
                    an Arabic supplement by Shawky Salem. ...
                  </p>
                  <a
                    href="http://www.waikato.ac.nz/library/resources/lang/lang_mul.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    View Collection
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    June/July 2001 Inside ASIST
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    c) Dr. Shawky Salem, coordinator of the IFLA/FID
                    International Seminar at Bibliotheca Alexandrina (BA), and I
                    discussed the status of the seminar and the ...
                  </p>
                  <a
                    href="http://www.asis.org/Bulletin/Jan-02/inside.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    Inside ASIST
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Progetto di massima
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Salem, Shawky. GOAL network design for the Bibliotheca
                    Alexandrina. in: David I. Raitt. Online Information 91.
                    Proceedings ... Salem, Shawky. The ...
                  </p>
                  <a
                    href="http://www.beic.it/associazione/progettomassima50.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    View Project
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    resAnet Results Summary
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    French, Spanish, Italian, Dutch, and German / compiled and
                    arranged on an English alphabetical basis by WE Clason ;
                    with Arabic supplement by Shawky Salem. ...
                  </p>
                  <a
                    href="http://www.amicus.nlc-bnc.ca/wbin/resanet/resultsm/l=0/d=1/r=1/e=0/s=s/n=SK/h=10/t=3499639/u=Subject=Dictionaries,+Polyglot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm"
                  >
                    View Result
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
