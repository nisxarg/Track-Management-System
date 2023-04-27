import React from 'react';
import { useState, useEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';

import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components';
import {Links2} from '../data/dummy'


const TrackDetails = (props) => {
  const track = props.trackData;
  const { currentColor, setsidebarData, Navbarview, setNavbarview } = useStateContext();
  const [trackData, setTrackData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const year = localStorage.getItem('year');
  const name_code = localStorage.getItem('name_code');
  const [leaderboardData, setLeaderboardData] = useState(null);

  useEffect(async () => {
    
    setNavbarview(0);
    try {
      const response = await axios.get(`http://localhost:5000/api/track/?year=${year}&name_code=${name_code}`);
      setTrackData(response.data);
      setsidebarData(Links2);
      

    }
    catch (error) {
      console.error(error);
    }
    return (() => {
      console.log("returnd fron usefffect");
    }

    )

  }, []);


  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const encodedNameCode = name_code.replace(/ /g, '_');
        localStorage.setItem('year', year);
        localStorage.setItem('name_code', name_code);
        const response = await axios.get(`http://localhost:5000/api/leaderboard/?track_name=${encodedNameCode}&track_year=${year}`);
        setLeaderboardData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLeaderboardData();
  }, []);


  if (!trackData) return <div>Loading...</div>
  console.log("i am calling data")
  console.log(trackData)
  return (
    <>
      {console.log("this is navbar for trackDetails")

      }

      <Navbar />
      <div>
        <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          <p className="text-2xl text-white font-semibold mt-8">
            {trackData.content.introduction.title}
          </p>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <p>
            {/* Display the track data here */}
            {trackData.content.introduction.content}
          </p>
        </div>
      </div>

      {/* TaskDescription */}
      <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <p className="text-2xl text-white font-semibold mt-8">
          {trackData.content.TaskDescription.title}
        </p>
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <p>{trackData.content.TaskDescription.content}</p>
      </div>

      {/* corpus */}
      <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <p className="text-2xl text-white font-semibold mt-8">
          {trackData.content.corpus.title}
        </p>
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <p>{trackData.content.corpus.content}</p>
      </div>

      {/* registration */}
      <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <p className="text-2xl text-white font-semibold mt-8">
          {trackData.content.registration.title}
        </p>
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <p>{trackData.content.registration.content}</p>
      </div>

      {/* submission */}

      <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <p className="text-2xl text-white font-semibold mt-8">
          {trackData.content.submission.title}
        </p>
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <p>{trackData.content.submission.content}</p>
      </div>

      {/* evaluation */}

      <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <p className="text-2xl text-white font-semibold mt-8">
          {trackData.content.evaluation.title}
        </p>
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <p>{trackData.content.evaluation.content}</p>
      </div>
      <div>
        <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="text-2xl text-white font-semibold mt-8">
            Leaderboard
          </p>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
          {leaderboardData && (
            <>


              <table>
                <thead>
                  <tr>
                    <th>Serial Number</th>
                    <th>Team Name</th>
                    <th>Team Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((item, index) => (
                    <tr key={item.team_name}>
                      <td>
                        <div className="colored-box">{index + 1}</div>
                      </td>
                      <td>{item.team_name}</td>
                      <td>
                        <div className="colored-box">{item.team_score}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>

      </div>



    </>
  );
};

export default TrackDetails;