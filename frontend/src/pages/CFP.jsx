import React from "react";
import { Navbar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Data = (props) => {
  const { currentColor } = useStateContext();
  return (
    <div>
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full lg:static">
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
            <p className="text-2xl text-white font-semibold mt-8">Call for Papers</p>
          </div>
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          >
    <p>

<p>
  <b>FIRE 2023: 15th meeting of the Forum for Information Retrieval Evaluation</b><br />
  15th - 18th December 2023<br />
  Goa University, Panjim, India<br />
  Submission Deadline: 26th August 2023<br />
</p><br/>
<p>
The 15th meeting of the Forum for Information Retrieval Evaluation 2023 will be held at Goa University, Panjim, India. It will be an in-person conference. We are seeking submissions of high-quality and original papers. Submissions will be reviewed by experts on the basis of the originality of the work, the validity of the results, chosen methodology, writing quality, and the overall contribution to the field of IR/NLP. Authors are also encouraged to describe work in progress and late-breaking research results.
</p>
<br/>
<p>
<b>Topics of interest include, but are not limited to:</b>
</p>

  <li><b>Search and Ranking:</b> Research on core algorithmic topics in IR:</li>
    <ul>
      <li>Queries and query analysis (e.g., Query understanding, query reformulation, query representation, etc.)</li>
      <li>Retrieval models and ranking (e.g., Cross lingual IR with a particular focus on Indian languages, ranking algorithms, language models, retrieval algorithms, learning to rank, etc.)</li>
      <li>Efficiency and scalability (e.g., distributed search, search engine architecture, indexing, crawling, etc.)</li>
    </ul>
  <li><b>Domain Specific:</b> Research on domain specific IR:</li>
    <ul>
      <li>Applications in Social Media (e.g., Hate speech recognition, social network in search, etc.)</li>
      <li>Applications in Finance (e.g., Stock market prediction, other applications in finance)</li>
      <li>Applications in Legal (e.g., Patent discovery, verdict summarization, other applications in law)</li>
      <li>Applications in Health (e.g., Biomedical IR, medicine, genomics, other applications in health)</li>
      <li>Other applications and domains</li>
    </ul>
  <li><b>Recommendation Systems:</b></li>
  Recommendation algorithms (e.g., Content based filtering, collaborative filtering, etc.)
      <li><b>Document representation and analysis (e.g., Summarization, text representation, sentiment analysis, etc.)</b></li>
      <li><b>Knowledge acquisition (e.g., Information extraction, event extraction, etc.)</b></li>
      <li><b>Multimodal and Crossmodal IR/Recsys model</b>
        <ul>
          <li>Visual Question Answering</li>
          <li>Image search/recommendation</li>
          <li>Multimodal document summarization</li>
        </ul>
      </li>
  
  <li><b>Bridging the gap between AI and IR:</b>
    <ul>
      <li>Supervised/Weakly supervised deep neural networks</li>
      <li>Word Embedding Methodologies and its applications</li>
      <li>Question answering</li>
      <li>Conversational systems</li>
      <li>Machine Translation</li>
    </ul>
    </li>
  
  
</p>

          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Data;