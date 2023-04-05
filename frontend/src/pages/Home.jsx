import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { homePageData1 } from '../data/dummy'

const Home = (props) => {
  const currYear = props.year
  const { currentColor } = useStateContext();
  let content
  let a = homePageData1.data.map((value) => {
    // console.log(value.year)
    if (value.year == currYear) {
      content = value.content

    }
    console.log(content)
  })

  console.log(content)
  return (
    <div>
      <div
        className=" rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
        style={{ backgroundColor: currentColor }}
      >      <p className="text-2xl text-white font-semibold mt-8">  Welcome to Fire {props.year}</p>
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex  mb-3 mr-3 ml-3 text-justify " >
        <p>The 14th meeting of Forum for Information Retrieval Evaluation {props.year} will be held at Kolkata,India. Started in 2008 with the aim of building a South Asian counterpart for TREC, CLEF and NTCIR, FIRE has since evolved continuously to meet the new challenges in multilingual information access. It has expanded to include new domains like plagiarism detection, legal information access, mixed script information retrieval and spoken document retrieval to name a few.

          Continuing the trend started in 2015, the FIRE will consist of a peer-reviewed conference track along with evaluation tasks. We invite full and short papers from information retrieval, natural language processing, and related domains. Please refer to the call for papers or submission guidelines for more information.</p>


      </div>
    </div>

  )
}

export default Home


