import React from 'react';
import { useState, useEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';

import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components';
import { Links2 } from '../data/dummy'


const Leaderboard = (props) => {

    const track = props.trackData;
    const { currentColor, setsidebarData, Navbarview, setNavbarview } = useStateContext();
    setsidebarData(Links2);
    const [trackData, setTrackData] = useState(null);
    const location = useLocation();



    const [leaderboardData, setLeaderboardData] = useState([]);
    // const year = localStorage.getItem('year');
    // const name_code = localStorage.getItem('name_code');
    // useEffect(async () => {
    //     const year = localStorage.getItem('year');
    //     const name_code = localStorage.getItem('name_code');
    //     setNavbarview(0);
    //     try {
    //         const encodedNameCode = name_code.replace(/ /g, '_');
    //         const main_data = await axios.get(` http://localhost:5000/api/leaderboard/?track_year=${year}&track_name=${name_code}`)
    //             .then((response) => setLeaderboardData(response.data))
    //             .catch(err => console.log(err));
    //         console.log("leaderboardData ", main_data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, []);

    useEffect(async () => {
        const year = localStorage.getItem('year');
        const name_code = localStorage.getItem('name_code');

        // console.log(year);
        // console.log(name_code);
        setNavbarview(0);
        try {
            const encodedNameCode = name_code.replace(/ /g, '_');

            const response = await axios.get(`http://localhost:5000/api/leaderboard/?track_name=${encodedNameCode}&track_year=${year}`);

            console.log(response.data);
            setLeaderboardData(response.data);
            console.log(leaderboardData)
        } catch (error) {
            console.error(error);
        }
    }, []);

    if (!trackData) return <div>this is leaderboard</div>
    console.log("i am calling data")
    console.log(trackData)
    return (
        <>
            <Navbar />
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
}

export default Leaderboard;