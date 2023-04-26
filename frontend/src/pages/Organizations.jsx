import React from "react";
import { Navbar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Resources = (props) => {
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
              Organization
            </p>
          </div>
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          >
            <p>
              <b>
                Overall Co-ordinator
                <br />
              </b>

              <br />
              <li>
                Prasenjit Majumder, DA-IICT Gandhinagar and TCG CREST, Kolkata,
                India
                <br />
              </li>
              <br />
              <p>
                <b>Overall Track Co-ordinators</b>
                <br />
                <br />
                <li>Kripabandhu Ghosh, IISER Kolkata, India</li>
                <br />
                <li>Thomas Mandl, Universitat Hildesheim, Germany</li>
                <br />
              </p>
              <p>
                <b>Conference Track Co-ordinator</b>
                <br />
                <br />
                <li>Debasis Ganguly, University of Glasgow, UK</li>
                <br />
              </p>
              <p>
                <b>Tutorial Co-ordinator</b>
                <br />
                <br />
                <li>Parth Gupta, Amazon</li>
                <br />
              </p>
              <p>
                <b>Industry Co-ordinator</b>
                <br />
                <br />
                <li>Bhaskar Mitra, Microsoft Research</li>
                <br />
              </p>
              <p>
                <b>Doctoral Consortium Co-ordinator</b>
                <br />
                <br />
                <li>Srijoni Majumdar, University of Leeds, UK</li>
                <br />
              </p>
              <p>
                <b>Organizing Co-ordinator</b>
                <br />
                <br />
                <li>Jyoti D Pawar, Goa University, India</li>
                <br />
              </p>
              <p>
                <b>Sponsorship Co-ordinator</b>
                <br />
                <br />
                <li>Pabitra Mitra, IIT Kharagpur, India</li>
                <br />
              </p>
              <p>
                <b>Publicity Co-ordinator</b>
                <br />
                <br />
                <li>Parth Mehta, Parmonic AI</li>
              </p>
            </p>
          </div>
          <div
            className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3"
            style={{
              backgroundColor: currentColor,
              height: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          ><p className="text-2xl text-white font-semibold mt-8">
          Program Committee for Doctoral Consortium
        </p></div>
        <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          >
            <p><li>Paul D Clough, University of Sheffield, UK</li>
  <br />
  <li>Rik Sarkar, University of Edinburgh, UK</li>
  <br />
  <li>Tanwi Mallick, Argonne National Laboratory, USA</li>
  <br />
  <li>Vishesh Aggarwal, Microsoft, Vancouver</li>
  <br />
  <li>Biswajit Paria - Google Research, USA</li>
  <br />
  <li>Shakti Papdeja, Amazon, India</li>
  <br />
  <li>Ananda Das, Synopsys, India</li>
  <br />
  <li>Vivek Gupta, Google, India, co-founder AlgoZenith, India</li>
  <br />
  <li>Ushashi Chaudhuri, University of Illinois Urbana-Champaign, USA</li>
  <br />
  <li>Debarshi Sanyal, IACS, India</li>
  <br />
  <li>Sanjay Ghosh, University of California, San Francisco</li>
  <br />
  <li>Debojyoti Paul, Amazon, India</li>
  <br />
  <li>Gurunath Reddy, Google Fellow, Phillips India</li>
  <br />
  <li>Shashaank Mattur Aswatha, Phillips India</li>
  <br />
  <li>Soumabha Bhowmick, Siemens, India</li>
  <br />
  <li>Abhinav Sharma, University of Leeds, UK</li>
  <br />
  <li>Rohit Verma, Intel India</li>
  <br />
  <li>Barsha Mitra, BITS Hyderabad</li>
  <br />
  <li>Soumyadeep Roy, Microsoft India</li>
  <br />
  <li>Abantika Pal, University of California, San Francisco</li>
  <br />
  <li>Subhrangshu Mandal, IIT Indore</li>
  <br />
  <li>Soumen Paul, IIT Kharagpur,</li></p>
            </div>
            <div
            className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3"
            style={{
              backgroundColor: currentColor,
              height: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          ><p className="text-2xl text-white font-semibold mt-8">
          Organizing Committee
        </p></div>
        <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
            style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}
          ><p>
          <li>Surupendu Gangopadhyay, DA-IICT, India (Convenor)</li>
          <br />
          <li>Ayan Bandyopadhyay, TCG CREST, India</li>
          <br />
          <li>Sandip Modha, LDRP, India</li>
          <br />
          <li>Saran Pandian, DA-IICT, India</li>
          <br />
          <li>Bhargav Dave, DA-IICT, India</li>
          <br />
          <li>Dreamy Pujara, DA-IICT, India</li>
          <br />
          <li>Aayushi Patel, DA-IICT, India</li>
          <br />
          <li>Misha Patel, DA-IICT, India</li>
          <br />
          <li>Mukesh Jha, DA-IICT, India</li>
        </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Resources;
