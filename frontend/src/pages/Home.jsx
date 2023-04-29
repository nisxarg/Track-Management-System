import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

import { Link, useNavigate } from 'react-router-dom';
import { Navbar} from '../components';
import { links } from '../data/dummy';


const Home = (props) => {
    const currYear = props.year;
    const { currentColor, activeMenu, setsidebarData, setTrackNameMain, setTrackYearMain } = useStateContext();

    const [homeData, setHomeData] = useState(null);
    const navigate = useNavigate();

    const handleTrackClick = (year, nameCode) => {
        localStorage.setItem('year',year);
        localStorage.setItem('name_code',nameCode);

        navigate(`/TrackDetails`);
    }

    useEffect(async () => {
        setsidebarData(links);
        
        try {
            const response = await axios.get(`http://localhost:5000/api/year/${props.year}`)

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


    return (

        <div>

            <div className="md:static bg-main-bg dark:bg-main-dark-bg navbar w-full lg:static">
                <Navbar />
            </div>
            <div style={{ marginTop: '20px' }}>
                <div>
                    <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p className="text-2xl text-white font-semibold mt-8">
                            {welcomeContent.title}-{props.year}
                        </p>
                    </div>
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
                        <p>{welcomeContent.content}</p>
                    </div>
                </div>
            </div>
            {/* keyNoteSpeakers */}
            <div>
                <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p className="text-2xl text-white font-semibold mt-8">
                        {keyNoteSpeakers.title}
                    </p>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
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
                <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p className="text-2xl text-white font-semibold mt-8">
                        {invitedSpeakers.title}
                    </p>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
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
                <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p className="text-2xl text-white font-semibold mt-8">
                        {tracks.title}
                    </p>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <ul>
                        {tracks.list.map((track) => {
                            
                            return (
                                <li key={track.text} onClick={() => handleTrackClick(props.year, track.text)}
                                className="hover:text-blue-500 cursor-pointer">
                                    {track.text}
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>


            {/* tutorials */}
            <div>
                <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p className="text-2xl text-white font-semibold mt-8">
                        {tutorials.title}
                    </p>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
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
