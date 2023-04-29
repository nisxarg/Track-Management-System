import React from "react";
import { Navbar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { links} from '../data/dummy'


const Resources = (props) => {

  const { currentColor,setsidebarData } = useStateContext();

  setsidebarData(links); 

  return (
    <div>
      <div className="md:static bg-main-bg dark:bg-main-dark-bg navbar w-full lg:static">
        <Navbar />
      </div>
      <div style={{ marginTop: "20px" }}>
        <div>
          <div
            className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3"
            style={{
              backgroundColor: currentColor,
              height: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p className="text-2xl text-white font-semibold mt-8">Resources</p>
          </div>
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          >
            <p>
              <b>
                FIRE
                <br />
              </b>
          
              <br />
              <li>
                FIRE Data
                <br />
              </li>
              <br />
              <b>
                EVALUATION FORUMS
                <br />
              </b>
              <br />
              <li>
                Text REtrieval Conference(TREC)
                <br />
              </li>
              <li>
                NTCIR workshops
                <br />
              </li>
              <li>
                CLEF (Cross-Language Evaluation Forum)
                <br />
              </li>
              <br />

              <b>
                LINGUISTIC RESOURCES
                <br />
              </b>
              <br />
              <li>
                FIRE Data
                <br />
              </li>
              <br />
              <b>
                EVALUATION FORUMS
                <br />
              </b>
              <br />
              <li>
                Bengali NLP Resources
                <br />
              </li>
              <li>
                Bengali Anandabazar Lexicon
                <br />
              </li>
              <li>
                Stemmer
                <br />
              </li>
              <li>
                Bengali Stopword List
                <br />
              </li>
              <li>
                Hindi Stopword List
                <br />
              </li>
              <li>
                Sample Query (in English)
                <br />
              </li>
              <li>
                Sample Document (in Bengali)
                <br />
              </li>
              <li>
                Hindi
                <br />
              </li>
              <li>bangla</li>
              <li>marathi</li>
              <li>tamil</li>
              <li>telugu</li>
              <li>punjabi</li>
              <li>malayalam</li>
              <br />
              <b>
                OTHER RESOURCES
                <br />
              </b>
              <br />
              <li>Ankur's English to Bengali dictionary</li>
              <li>Bangla Dictionary, language learning kit</li>
              <li>Bengali-English Thesaurus</li>
              <li>Bengali language</li>
              <li>Bengali (transliterated) English Dictionary</li>
              <li>Bengali wikisource (উইকিসংকলন)</li>
              <li>Hindi Wordnet</li>
              <li>Language Technologies Research Center (IIIT Hyderabad)</li>
              <li>Resource Center for Indian Language Technology Solutions</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
