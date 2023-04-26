import React, { useState } from 'react';
import { Navbar } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';


const DisplayTracks = () => {

  const { currentColor, setTrackNameMain, setTrackYearMain } = useStateContext();
  const track_list = JSON.parse(localStorage.getItem('track_list')); // Parse track_list as JSON data
  console.log(track_list);
  const [selectedYear, setSelectedYear] = useState(null);
  const navigate = useNavigate();
  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  const handleTrackClick = (year, nameCode) => {
    localStorage.setItem("name_code", nameCode);
    localStorage.setItem("year", year);
    navigate(`/api/trackedit?year=${year}&name_code=${nameCode}`);
}

  return (
    <>
      <Navbar />
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4" style={{ height: "100vh" }}>
      <div className="mb-3 mr-3 ml-3">
        {/* Year selection */}
        <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="text-2xl text-white font-semibold mt-8">
            {selectedYear ? selectedYear : "Select a year"}
          </p>
        </div>
        {/* Track list */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
          {selectedYear && (
            <ul>
              {track_list.filter((track) => track.year === selectedYear).map((track, index) => (
                <li key={track.text} onClick={() => handleTrackClick(track.year, track.name_code)}
                className="hover:text-blue-500 cursor-pointer">
                    {track.name_code}
                </li>
               
              ))}
            </ul>
          )}
          {!selectedYear && (
            <p>Select a year to view track list.</p>
          )}
        </div>
        <div className="flex justify-center my-3">
          {Array.from(new Set(track_list.map((track) => track.year))).map((year) => (
            <button key={year} className="mx-2 rounded-full px-4 py-1 text-white font-semibold bg-gray-700 hover:bg-gray-800 focus:outline-none" onClick={() => handleYearSelection(year)}>
              {year}
            </button>
          ))}
        </div>
        
      </div>
      </div>
    </>
  );
};

export default DisplayTracks;
