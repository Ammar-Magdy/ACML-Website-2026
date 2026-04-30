import { useEffect, useState } from "react";
import { ExternalLink, Globe, Database, Search, Layers } from "lucide-react";

import ebscoLogo from "../../assets/Photos/Publishers/EBSCO/Logo.webp";
import ebscoBg from "../../assets/Photos/Publishers/EBSCO/Background.webp";

const databases = [
  {
    name: "Academic Search Alumni Edition",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=167",
  },
  {
    name: "Academic Search Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=633",
  },
  {
    name: "Academic Search Elite",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=3",
  },
  {
    name: "Academic Search Premier",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=1",
  },
  {
    name: "AgeLine",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=23",
  },
  {
    name: "AGRICOLA",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=24",
  },
  {
    name: "Alt HealthWatch",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=25",
  },
  {
    name: "AMED",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=26",
  },
  {
    name: "American Bibliography of Slavic & Eastern European Studies",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=27",
  },
  {
    name: "Applied Science & Technology Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=29",
  },
  {
    name: "Art Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=30",
  },
  {
    name: "Art Index Retrospective",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=31",
  },
  {
    name: "ATLA Religion Database",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=32",
  },
  {
    name: "ATLA Religion Database with ATLASerials",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=33",
  },
  {
    name: "Auto Repair Reference Center",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=35",
  },
  {
    name: "Avery Index to Architectural Periodicals",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=36",
  },
  {
    name: "BasicBIOSIS",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=37",
  },
  {
    name: "Bibliography of Native North Americans",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=402",
  },
  {
    name: "Biography Collection Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=705",
  },
  {
    name: "Biological Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=39",
  },
  {
    name: "Biological & Agricultural Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=40",
  },
  {
    name: "Blackwell Encyclopedia of Management Library",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=676",
  },
  {
    name: "Book Index with Reviews",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=46",
  },
  {
    name: "Book Review Digest",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=47",
  },
  {
    name: "British Nursing Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=48",
  },
  {
    name: "Business Source Alumni Edition",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=168",
  },
  {
    name: "Business Source Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=399",
  },
  {
    name: "Business Source Elite",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=4",
  },
  {
    name: "Business Source Premier",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=2",
  },
  {
    name: "CAB Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=49",
  },
  {
    name: "CAB Abstracts Archive",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=640",
  },
  {
    name: "Canadian Literary Centre",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=50",
  },
  {
    name: "Canadian Reference Centre",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=51",
  },
  {
    name: "Catholic Periodical and Literature Index Online",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=52",
  },
  {
    name: "Child Development & Adolescent Studies",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=169",
  },
  {
    name: "The CINAHL Database",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=53",
  },
  {
    name: "CINAHL with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=170",
  },
  {
    name: "CINAHL Plus",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=171",
  },
  {
    name: "CINAHL Plus with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=172",
  },
  {
    name: "Cochrane Collection",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=54",
  },
  {
    name: "Coin Career Databases",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=679",
  },
  {
    name: "Coin Career Library",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=680",
  },
  {
    name: "Coin Career Community",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=681",
  },
  {
    name: "Columbia Granger's Poetry Database",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=55",
  },
  {
    name: "Communication & Mass Media Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=56",
  },
  {
    name: "Computer Science Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=60",
  },
  {
    name: "Computer Source",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=62",
  },
  {
    name: "Computers & Applied Sciences Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=635",
  },
  {
    name: "Consumer Health Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=541",
  },
  {
    name: "Current Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=67",
  },
  {
    name: "Current Biography Illustrated",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=68",
  },
  {
    name: "DynaMed",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=192",
  },
  {
    name: "EconLit",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=57",
  },
  {
    name: "EconLit with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=638",
  },
  {
    name: "Economía y Negocios",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=498",
  },
  {
    name: "Education Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=59",
  },
  {
    name: "Education Research Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=639",
  },
  {
    name: "Education Research Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=636",
  },
  {
    name: "Environment Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=623",
  },
  {
    name: "Environment Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=61",
  },
  {
    name: "ERIC",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=63",
  },
  {
    name: "Essay and General Literature Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=65",
  },
  {
    name: "Family & Society Studies Worldwide",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=70",
  },
  {
    name: "Film & Television Literature Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=627",
  },
  {
    name: "Film & Television Literature Index with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=628",
  },
  {
    name: "Fuente Academica",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=71",
  },
  {
    name: "GalleryWatch CRS Reports",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=774",
  },
  {
    name: "Garden, Landscape & Horticulture Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=173",
  },
  {
    name: "Gender Studies Database",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=72",
  },
  {
    name: "General Science Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=73",
  },
  {
    name: "GeoRef",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=75",
  },
  {
    name: "GIDEON",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=552",
  },
  {
    name: "Global Health",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=78",
  },
  {
    name: "Health Library",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=81",
  },
  {
    name: "Health Source: Consumer Edition",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=82",
  },
  {
    name: "Health Source: Nursing/Academic Edition",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=83",
  },
  {
    name: "History Reference Center",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=84",
  },
  {
    name: "History Reference Online Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=810",
  },
  {
    name: "History Reference Online Elite",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=812",
  },
  {
    name: "History Reference Online Premier",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=811",
  },
  {
    name: "Hospitality & Tourism Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=85",
  },
  {
    name: "Hospitality & Tourism Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=418",
  },
  {
    name: "Humanities Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=86",
  },
  {
    name: "Humanities International Complete",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=87",
  },
  {
    name: "Humanities International Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=174",
  },
  {
    name: "ICON Global Intelligence",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=88",
  },
  {
    name: "Index Islamicus",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=637",
  },
  {
    name: "Index to Jewish Periodicals",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=89",
  },
  {
    name: "Index to Legal Periodicals & Books",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=90",
  },
  {
    name: "Information Science & Technology Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=91",
  },
  {
    name: "Inspec",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=92",
  },
  {
    name: "Inspec Archive - Science Abstracts 1898-1968",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=419",
  },
  {
    name: "Insurance Periodicals Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=175",
  },
  {
    name: "International Bibliography of Theatre & Dance",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=176",
  },
  {
    name: "International Bibliography of Theatre & Dance with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=177",
  },
  {
    name: "International Pharmaceutical Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=93",
  },
  {
    name: "International Political Science Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=94",
  },
  {
    name: "International Security & Counter-Terrorism Reference Center",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=401",
  },
  {
    name: "Internet & Personal Computing Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=95",
  },
  {
    name: "Kiplinger Finance & Forecasts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=96",
  },
  {
    name: "The Left Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=178",
  },
  {
    name: "Legal Collection",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=97",
  },
  {
    name: "LGBT Life",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=76",
  },
  {
    name: "LGBT Life with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=77",
  },
  {
    name: "Library, Information Science & Technology Abstracts (LISTA)",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=513",
  },
  {
    name: "Library, Information Science & Technology Abstracts with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=584",
  },
  {
    name: "Library Literature & Information Science",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=98",
  },
  {
    name: "LIBROS EN VENTA en América Latina y España",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=99",
  },
  {
    name: "Literary Reference Center",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=548",
  },
  {
    name: "MagillOnHistory",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=420",
  },
  {
    name: "MagillOnLiterature Plus",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=100",
  },
  {
    name: "MedicLatina",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=106",
  },
  {
    name: "MEDLINE",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=107",
  },
  {
    name: "MEDLINE with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=614",
  },
  {
    name: "Mental Measurements Yearbook",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=108",
  },
  {
    name: "Middle Eastern & Central Asian Studies",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=109",
  },
  {
    name: "MLA International Bibliography",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=112",
  },
  {
    name: "The Music Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=179",
  },
  {
    name: "The Nation Digital Archive",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=113",
  },
  {
    name: "The National Review Archive",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=543",
  },
  {
    name: "Natural & Alternative Treatments",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=114",
  },
  {
    name: "The New Republic Archive",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=403",
  },
  {
    name: "New Testament Abstracts Online",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=180",
  },
  {
    name: "Newspaper Source",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=115",
  },
  {
    name: "NoveList",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=16",
  },
  {
    name: "NTIS",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=117",
  },
  {
    name: "Old Testament Abstracts Online",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=121",
  },
  {
    name: "PEP Archive",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=166",
  },
  {
    name: "Points of View Reference Center",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=770",
  },
  {
    name: "Pregnancy & Birthing Center of Excellence",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=551",
  },
  {
    name: "Professional Development Collection",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=123",
  },
  {
    name: "PsycARTICLES",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=124",
  },
  {
    name: "PsycBOOKS",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=125",
  },
  {
    name: "PsycCRITIQUES",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=181",
  },
  {
    name: "PsycEXTRA",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=126",
  },
  {
    name: "Psychology & Behavioral Sciences Collection",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=127",
  },
  {
    name: "PsycINFO",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=128",
  },
  {
    name: "Readers' Guide Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=129",
  },
  {
    name: "Regional Business News",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=130",
  },
  {
    name: "Religion & Philosophy Collection",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=131",
  },
  {
    name: "RILM Abstracts of Music Literature",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=132",
  },
  {
    name: "RIPM Retrospective Index to Music Periodicals",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=182",
  },
  {
    name: "Risk Management Reference Center",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=613",
  },
  {
    name: "The Scientific & Medical ART Imagebase",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=546",
  },
  {
    name: "Scientific American Archive Online",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=135",
  },
  {
    name: "Short Story Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=136",
  },
  {
    name: "Social Sciences Abstracts",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=137",
  },
  {
    name: "SocINDEX",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=138",
  },
  {
    name: "SocINDEX with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=139",
  },
  {
    name: "SPIN",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=140",
  },
  {
    name: "SPORTDiscus",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=141",
  },
  {
    name: "SPORTDiscus with Full Text",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=585",
  },
  {
    name: "The Serials Directory",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=142",
  },
  {
    name: "Tests in Print",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=813",
  },
  {
    name: "Textile Technology Index",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=143",
  },
  {
    name: "TOC Premier",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=144",
  },
  {
    name: "Vente et Gestion",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=400",
  },
  {
    name: "Vocational & Career Collection",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=147",
  },
  {
    name: "Wildlife & Ecology Studies Worldwide",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=183",
  },
  {
    name: "Wilson Biographies Illustrated",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=148",
  },
  {
    name: "World History Collection",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=150",
  },
  {
    name: "Women's Studies International",
    url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=320",
  },
];

export default function PublisherEbsco() {
  useEffect(() => {
    document.title = "EBSCO Information Services";
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredDatabases = databases.filter((db) =>
    db.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] mb-12 overflow-hidden shadow-2xl bg-[#0F172A]">
        {/* Background Image instead of Video */}
        <div className="absolute inset-0 w-full h-full">
          <img loading="lazy" decoding="async" src={ebscoBg}
            alt="EBSCO Background"
            className="w-full h-full object-cover"
          />
          {/* Brand-Aligned Overlay */}
          <div className="absolute inset-0 bg-[#0082CA]/85 mix-blend-multiply"></div>

          {/* Subtle Corporate Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-start">
          <div className="container mx-auto px-4 text-left">
            <div className="flex justify-start mb-8">
              <div className="flex items-center justify-center inline-block">
                <img loading="lazy" decoding="async" src={ebscoLogo}
                  alt="EBSCO Logo"
                  className="h-24 md:h-32 object-contain rounded-2xl"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              EBSCO Information Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8 font-medium">
              A worldwide leader in providing information access and management
              solutions through print and electronic journal subscription
              services and research databases.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <a
                href="http://www.ebscohost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@acml-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Globe size={20} />
                  </div>
                  About EBSCO
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    EBSCO Information Services is a worldwide leader in
                    providing information access and management solutions
                    through print and electronic journal subscription services,
                    research database development and production, online access
                    to more than 100 databases and thousands of e-journals, and
                    e-commerce book procurement. EBSCO has served the library
                    and business communities for more than 60 years.
                  </p>
                  <p>
                    EBSCO Information Services' parent company, EBSCO Industries
                    Inc., is a diversified, financially stable company with
                    manufacturing and sales offices around the world. EBSCO's
                    International Headquarters in Birmingham, Ala., U.S.A.
                    provides support for all EBSCO operations.
                  </p>

                  <div className="border-l-4 border-blue-500 pl-6 py-2 mt-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      EBSCO Publishing
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Unmatched content, usability and service make EBSCOhost®
                      databases the most-used, for-fee, online information
                      resources for tens of thousands of institutions worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Databases Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0">
                      <Database size={20} />
                    </div>
                    Bibliographic &amp; Full Text Databases
                  </h2>
                  <div className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 whitespace-nowrap">
                    {filteredDatabases.length} databases
                  </div>
                </div>

                {/* Search Input */}
                <div className="mb-6 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search databases..."
                    className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredDatabases.length > 0 ? (
                    filteredDatabases.map((db, index) => (
                      <a
                        key={index}
                        href={db.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all group"
                      >
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors mr-3">
                          <ExternalLink size={14} />
                        </div>
                        <span className="text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium text-sm">
                          {db.name}
                        </span>
                      </a>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12 px-4 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                      <Search className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        No databases found
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        No databases found matching "{searchTerm}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 text-center border-t border-gray-100 dark:border-gray-700 pt-6">
                  <a
                    href="http://ejournals.ebsco.com/info/ejsTitles.asp?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    View Electronic Journals List
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center">
                  <Layers className="mr-2 text-blue-500" size={20} />
                  EBSCO at a Glance
                </h3>

                <div className="space-y-5 text-sm text-gray-600 dark:text-gray-300">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Company Profile
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Founded over 60 years ago</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Headquartered in Birmingham, Alabama, USA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Subsidiary of EBSCO Industries Inc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Global offices and operations worldwide</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Services
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Electronic journal subscriptions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Research database development & production</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Online access to 100+ databases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Thousands of e-journals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>E-commerce book procurement</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      EBSCOhost®
                    </h4>
                    <p className="leading-relaxed">
                      The most-used, for-fee, online information resource for
                      tens of thousands of institutions worldwide. Unmatched
                      content, usability and service.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href="http://www.ebscohost.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      Visit EBSCO Website
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
