import React from 'react';
import  Navbar  from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { homePageData1 } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';
import { Track } from '../data/dummy';

const TrackDetails = () => {
  const { currentColor } = useStateContext();
  const { trackName } = useParams();

  const trackData = Track.content[trackName];

  
  return (
  <>
  <Navbar showOnlyOrgSignIn={true} />
   <div>
<div
  className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
  style={{ backgroundColor: currentColor }}
>
  <p className="text-2xl text-white font-semibold mt-8">
  {Track.content.introduction.title}
  </p>
</div>

<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
  <p>
    {/* Display the track data here */}
    {Track.content.introduction.content}
  </p>
</div>
</div>

{/* TaskDescription */}
<div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.TaskDescription.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.TaskDescription.content}</p>
  </div>

  {/* corpus */}
  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.corpus.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.corpus.content}</p>
  </div>

  {/* registration */}
  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.registration.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.registration.content}</p>
  </div>

  {/* submission */}

  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.submission.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.submission.content}</p>
  </div>

  {/* evaluation */}

  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.evaluation.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.evaluation.content}</p>
  </div>


{/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
  <p>
  The growth of social media platforms such as twitter, facebook for communication between people has led to creation of huge user generated data
      </p>
</div>

<div>
<div
  className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
  style={{ backgroundColor: currentColor }}
>
  <p className="text-2xl text-white font-semibold mt-8">
  Task Description - {trackName}
  </p>
</div>

<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
  <p>
  There are various challenges in anaphora resolution on these type of texts. One of the main challeges is that facebook (FB) posts and tweets are generally very short, thus often lack sufficient context to determine an antecedent of an anaphor without the aid of background or world knowledge. 
      </p>
</div>
</div> */}
</>
  );
};

export default TrackDetails;