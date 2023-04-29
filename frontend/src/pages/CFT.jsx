import React from "react";
import { Navbar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { links} from '../data/dummy'


const Data = (props) => {
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
            <p className="text-2xl text-white font-semibold mt-8">
              Call For Tracks
            </p>
          </div>
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          >
            <p>
            We invite proposals for offering evaluation tracks at FIRE 2023.<br /><br />
            FIRE 2023 is the 15th edition of the annual meeting of Forum for Information Retrieval Evaluation ( fire.irsi.res.in). Since its inception in 2008, FIRE has had a strong focus on shared tasks similar to those offered at Evaluation forums like TREC, CLEF, and NTCIR. The shared tasks focus on solving specific problems in the area information access and, more importantly help in generating evaluation datasets for the research community.
</p>
      
          </div>
          
        </div>
      </div>

      
    

    </div>
  );
};

export default Data;
  