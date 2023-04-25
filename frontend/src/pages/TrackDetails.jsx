import React from 'react';
import { useState, useEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';

import { useLocation } from 'react-router-dom';
import axios from 'axios';
  
  
 
const TrackDetails = (props) => {
  const track = props.trackData;
    const { currentColor } = useStateContext();
  const [trackData, setTrackData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const year = queryParams.get('year');
  const name_code = queryParams.get('name_code');

  useEffect(() => {
    // Fetch track data from API using axios
    axios
      .get(`http://localhost:5000/api/track/?year=${year}&name_code=${name_code}`)
      .then((response) => setTrackData(response.data));
  }, []);


  console.log(trackData)
  return (
  <>
 
   <div>
<div
  className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
  style={{ backgroundColor: currentColor }}
>
  <p className="text-2xl text-white font-semibold mt-8">
  {track.title}
  </p>
</div>

<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
  <p>
    {/* Display the track data here */}
    {track.content.introduction.content}
  </p>
</div>
</div>

{/* TaskDescription */}
<div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {track.content.TaskDescription.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{track.content.TaskDescription.content}</p>
  </div>

  {/* corpus */}
  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {track.content.corpus.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{track.content.corpus.content}</p>
  </div>

  {/* registration */}
  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {track.content.registration.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{track.content.registration.content}</p>
  </div>

  {/* submission */}

  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {track.content.submission.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{track.content.submission.content}</p>
  </div>

  {/* evaluation */}

  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {track.content.evaluation.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{track.content.evaluation.content}</p>
  </div>



</>
  );
};

export default TrackDetails;