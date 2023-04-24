import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

import { Link } from 'react-router-dom';
import TrackDetails from './TrackDetails';

const Home = (props) => {
    const currYear = props.year;
    const { currentColor } = useStateContext();
    const [homeData, setHomeData] = useState(null);

 
    useEffect(async() => {
      try {
        const response = await axios.get(`http://localhost:5000/api/${props.year}`)
        
        // console.log(response.data);
        setHomeData(response.data);
      } catch (error) {
        console.error(error);
      }
  }, []);


    if (!homeData) return <div>Loading...</div>;

    
    const mainContent = homeData.content;
    const welcomeContent = homeData.WelcomeContent;
    const keyNoteSpeakers = homeData.content.keyNoteSpeakers;
    const invitedSpeakers = homeData.content.invitedSpeakers;
    const tracks = homeData.content.tracks;
    const tutorials = homeData.content.tutorials;

    console.log(homeData)
    

    return (
      
      <div>
        
        
        <div style={{ marginTop: '20px' }}>
            <div>
                <div className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor }}>
                    <p className="text-2xl text-white font-semibold mt-8">
                        {welcomeContent.title}-{props.year}
                    </p>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
                    <p>{welcomeContent.content}</p>
                </div>
            </div>
        </div>
        {/* keyNoteSpeakers */}
        <div>
            <div className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor }}>
                <p className="text-2xl text-white font-semibold mt-8">
                    {keyNoteSpeakers.title}
                </p>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
        <ul>
          {keyNoteSpeakers.list.map((speaker, index) => (
            <li key={index}>
              <a href={speaker.link}>{speaker.text}</a>
            </li>
          ))}
        </ul>
      </div>
        </div>
    
    
    {/* invitedSpeakers */}
<div>
    <div className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor }}>
        <p className="text-2xl text-white font-semibold mt-8">
            {invitedSpeakers.title}
        </p>
    </div>
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
        <ul>
            {invitedSpeakers.list.map((speaker) => (
                <li key={speaker.text}>
                    <a href={speaker.link}>{speaker.text}</a>
                </li>
            ))}
        </ul>
    </div>
</div>

{/* tracks */}
<div>
    <div className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor }}>
        <p className="text-2xl text-white font-semibold mt-8">
            {tracks.title}
        </p>
    </div>
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
        <ul>
            {tracks.list.map((track) => (
                <li key={track.text}>
                    <Link
  to={{
    pathname: '/api/track',
    search: `?year=${props.year}&name_code=${track.text}`,
  }}
>
  {track.text}
</Link>
                </li>
            ))}
        </ul>
    </div>
</div>


{/* tutorials */}
<div>
    <div className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor }}>
        <p className="text-2xl text-white font-semibold mt-8">
            {tutorials.title}
        </p>
    </div>
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
        <ul>
            {tutorials.list.map((tutorial) => (
                <li key={tutorial.text}>
                    <a href={tutorial.link}>{tutorial.text}</a>
                </li>
            ))}
        </ul>
    </div>
</div>
</div>
    );
};

export default Home;
