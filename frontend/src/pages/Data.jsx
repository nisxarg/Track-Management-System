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
            <p className="text-2xl text-white font-semibold mt-8">
              Data
            </p>
          </div>
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          >
            <p>
  Please apply for access to the FIRE Information-Retrieval Text Research Collection.<br /><br />
  We request you to read, complete, sign and mail, or email, us the organisational-access form. The mailing address is mentioned in the form. Organisations may use the individual form to manage access rights internally and these individual-access forms need not be sent to us.<br /><br />
  NOTE: We link only the new/updated test collections each year. Use the previous year's sets where test collections are missing in this matrix.
</p>
      
          </div>
          
        </div>
      </div>

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
              2012
            </p>
          </div>
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          >
            <table>
  <tr>
    <th>AD HOC</th>
    <th></th>
  </tr>
  <tr>
    <td>Assamese</td>
    <td>Queries</td>
  </tr>
  <tr>
    <td>Bengali</td>
    <td>Corpus †</td>
  </tr>
  <tr>
    <td>English</td>
    <td>Queries</td>
  </tr>
  <tr>
    <td>Gujarati</td>
    <td>Queries</td>
  </tr>
  <tr>
    <td>Hindi</td>
    <td>Queries</td>
  </tr>
  <tr>
    <td></td>
    <td>Results</td>
  </tr>
  <tr>
    <td></td>
    <td>Runs</td>
  </tr>
  
</table>

<table>
  <tr>
    <th></th>
  </tr>
  <tr>
    <td>Corpus</td>
    <td></td>
  </tr>
</table>
      
          </div>
          
        </div>

    </div>
  );
};

export default Data;
