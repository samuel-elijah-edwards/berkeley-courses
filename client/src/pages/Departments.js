import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Departments() {
  const departmentNames = [
    "Aerospace Engineering (AERO ENG)",
    "Aerospace Studies (AEROSPC)",
    "African American Studies (AFRICAM)",
    "Agricultural and Resource Economics (A,RESEC)",
    "American Studies (AMERSTD)",
    "Ancient Greek and Roman Studies (AGRS)",
    "Ancient History and Mediterranean Archaeology (AHMA)",
    "Anthropology (ANTHRO)",
    "Applied Science and Technology (AST)",
    "Arabic (ARABIC)",
    "Architecture (ARCH)",
    "Armenian (ARMENI)",
    "Art, History of (HISTART)",
    "Art Practice (ART)",
    "Arts and Humanities (HUM)",
    "Asian American and Asian Diaspora Studies (ASAMST)",
    "Asian Studies (ASIANST)",
    "Astronomy (ASTRON)",
    "Bengali (BANGLA)",
    "Bioengineering (BIO ENG)",
    "Biology (BIOLOGY)",
    "Biophysics (BIOPHY)",
    "Bosnian, Croatian, Serbian (BOSCRSR)",
    "Buddhist Studies (BUDDSTD)",
    "Bulgarian (BULGARI)",
    "Burmese (BURMESE)",
    "Business Administration, Evening/Weekend Masters (EWMBA)",
    "Business Administration, Executive Master (XMBA)",
    "Business Administration, Master (MBA)",
    "Business Administration, PhD (PHDBA)",
    "Business Administration, Undergraduate (UGBA)",
    "CalTeach (EDSTEM)",
    "Catalan (CATALAN)",
    "Celtic Studies (CELTIC)",
    "Chemical & Biomolecular Engineering (CHM ENG)",
    "Chemistry (CHEM)",
    "Chicana/o and Latina/o Studies (CHICANO)",
    "Chinese (CHINESE)",
    "City and Regional Planning (CY PLAN)",
    "Civil and Environmental Engineering (CIV ENG)",
    "Classics (CLASSIC)",
    "Cognitive Science (COG SCI)",
    "College Writing Programs (COLWRIT)",
    "Comparative Biochemistry (COMPBIO)",
    "Comparative Literature (COM LIT)",
    "Computational Biology (CMPBIO)",
    "Computational Precision Health (CPH)",
    "Computer Science (COMPSCI)",
    "Creative Writing (CRWRIT)",
    "Critical Theory Graduate Group (CRIT TH)",
    "Cuneiform (CUNEIF)",
    "Czech (CZECH)",
    "Danish (DANISH)",
    "Data Science (DATASCI)",
    "Data Science, Undergraduate (DATA)",
    "Demography (DEMOG)",
    "Design Innovation (DES INV)",
    "Development Engineering (DEV ENG)",
    "Development Practice (DEVP)",
    "Development Studies (DEV STD)",
    "Digital Humanities (DIGHUM)",
    "Dutch (DUTCH)",
    "Earth and Planetary Science (EPS)",
    "East Asian Languages and Cultures (EA LANG)",
    "Economics (ECON)",
    "Education (EDUC)",
    "Egyptian (EGYPT)",
    "Electrical Engineering and Computer Sciences (EECS)",
    "Electrical Engineering (EL ENG)",
    "Energy and Resources Group (ENE,RES)",
    "Engineering (ENGIN)",
    "English (ENGLISH)",
    "Environmental Design (ENV DES)",
    "Environmental Economics and Policy (ENVECON)",
    "Environmental Science, Policy, and Management (ESPM)",
    "Environmental Sciences (ENV SCI)",
    "Ethnic Studies (ETH STD)",
    "European Studies (EUST)",
    "Fall Program for First Semester (X)",
    "Filipino (FILIPN)",
    "Film and Media (FILM)",
    "Financial Engineering (MFE)",
    "Finnish (FINNISH)",
    "Folklore (FOLKLOR)",
    "French (FRENCH)",
    "Gender and Women's Studies (GWS)",
    "Geography (GEOG)",
    "German (GERMAN)",
    "Global Metropolitan Studies (GMS)",
    "Global Poverty and Practice (GPP)",
    "Global Studies (GLOBAL)",
    "Graduate Student Professional Development Program (GSPDP)",
    "Greek (GREEK)",
    "Health and Medical Sciences (HMEDSCI)",
    "Hebrew (HEBREW)",
    "Hindi (HINDI)",
    "History (HISTORY)",
    "Hungarian (HUNGARI)",
    "Icelandic (ICELAND)",
    "Indonesian (INDONES)",
    "Industrial Engineering and Operations Research (IND ENG)",
    "Information and Cybersecurity (CYBER)",
    "Information (INFO)",
    "Integrative Biology (INTEGBI)",
    "Interdisciplinary Studies Field Major (ISF)",
    "International and Area Studies (IAS)",
    "Iranian (IRANIAN)",
    "Italian Studies (ITALIAN)",
    "Japanese (JAPAN)",
    "Jewish Studies (JEWISH)",
    "Journalism (JOURN)",
    "Khmer (KHMER)",
    "Korean (KOREAN)",
    "Landscape Architecture (LD ARCH)",
    "Language Proficiency Program (LAN PRO)",
    "Latin American Studies (LATAMST)",
    "Latin (LATIN)",
    "Law (LAW)",
    "Legal Studies (LEGALST)",
    "Lesbian Gay Bisexual Transgender Studies (LGBT)",
    "Letters and Science (L&S)",
    "Linguistics (LINGUIS)",
    "Materials Science and Engineering (MAT SCI)",
    "Mathematics and Physical Sciences (MPS)",
    "Mathematics (MATH)",
    "Mechanical Engineering (MEC ENG)",
    "Media Studies (MEDIAST)",
    "Medieval Studies (MED ST)",
    "Middle Eastern Languages and Cultures (MELC)",
    "Middle Eastern Studies (M E STU)",
    "Military Affairs (MIL AFF)",
    "Military Science (MIL SCI)",
    "Molecular and Cell Biology (MCELLBI)",
    "Mongolian (MONGOLN)",
    "Music (MUSIC)",
    "Nanoscale Science and Engineering (NSE)",
    "Native American Studies (NATAMST)",
    "Natural Resources (NAT RES)",
    "Naval Science (NAV SCI)",
    "Neuroscience (NEUROSC)",
    "New Media (NWMEDIA)",
    "Norwegian (NORWEGN)",
    "Nuclear Engineering (NUC ENG)",
    "Nutritional Sciences and Toxicology (NUSCTX)",
    "Optometry (OPTOM)",
    "Peace and Conflict Studies (PACS)",
    "Persian (PERSIAN)",
    "Philosophy (PHILOS)",
    "Physical Education (PHYS ED)",
    "Physics (PHYSICS)",
    "Plant and Microbial Biology (PLANTBI)",
    "Polish (POLISH)",
    "Political Economy (POLECON)",
    "Political Science (POL SCI)",
    "Portuguese (PORTUG)",
    "Psychology (PSYCH)",
    "Public Affairs (PUB AFF)",
    "Public Health (PB HLTH)",
    "Public Policy (PUB POL)",
    "Punjabi (PUNJABI)",
    "Real Estate Development and Design (RDEV)",
    "Rhetoric (RHETOR)",
    "Russian (RUSSIAN)",
    "Sanskrit (SANSKR)",
    "Scandinavian (SCANDIN)",
    "Science and Mathematics Education (SCMATHE)",
    "Science and Technology Studies (STS)",
    "Semitics (SEMITIC)",
    "Slavic Languages and Literatures (SLAVIC)",
    "Social Welfare (SOC WEL)",
    "Sociology (SOCIOL)",
    "South and Southeast Asian Studies (SSEASN)",
    "South Asian Studies (SASIAN)",
    "Southeast Asian Studies (SEASIAN)",
    "Spanish (SPANISH)",
    "Statistics (STAT)",
    "Study of Religion (STRELIG)",
    "Swedish (SWEDISH)",
    "Tamil (TAMIL)",
    "Telugu (TELUGU)",
    "Thai (THAI)",
    "Theater, Dance, and Performance Studies (THEATER)",
    "Tibetan (TIBETAN)",
    "Turkish (TURKISH)",
    "Ukrainian (UKRAINI)",
    "Undergraduate Interdisciplinary Studies (UGIS)",
    "Urdu (URDU)",
    "Vietnamese (VIETNMS)",
    "Vision Science (VIS SCI)",
    "Visual Studies (VIS STD)",
    "Yiddish (YIDDISH)",
  ];

  const regex = /\(([A-Z\s&,]+)\)/;

  // Organize department names by their first letter
  const departmentByLetter = departmentNames.reduce((acc, departmentName) => {
    const firstLetter = departmentName[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(departmentName);
    return acc;
  }, {});

  return (
    <Layout>
      <div>
        <h2 className="mx-2 mb-2 text-3xl">List of Departments</h2>
        {Object.keys(departmentByLetter).map((letter) => (
          <div key={letter}>
            <h3 className="mx-4 mb-2 text-2xl bold">{letter}</h3>
            <ul>
              {departmentByLetter[letter].map((departmentName, index) => (
                <li key={index} className="mx-6 mb-1">
                  {/* Use only the department code for the link */}
                  <Link
                    to={`/departments/${RegExp(regex)
                      .exec(departmentName)[1]
                      .replace(" ", "_")}`}
                    className="hover:underline"
                  >
                    {departmentName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Departments;
