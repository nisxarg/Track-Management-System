import React, { useState } from 'react';
import { Navbar } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import axios from 'axios';




const DisplayTracks = () => {

  const { currentColor, setTrackNameMain, setTrackYearMain } = useStateContext();
  const track_list = JSON.parse(localStorage.getItem('track_list')); // Parse track_list as JSON data
  console.log(track_list);
  const [selectedYear, setSelectedYear] = useState(null);
  const navigate = useNavigate();
  const [openForm, setopenForm] = useState(false);

  const [trackName, setTrackName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  const handleTrackClick = (year, nameCode) => {
    localStorage.setItem("name_code", nameCode);
    localStorage.setItem("year", year);
    navigate(`/api/trackedit?year=${year}&name_code=${nameCode}`);
  }
  const handleAddTrack = () => {
    setopenForm(true);
  }
  const handleClose = () => {
    setopenForm(false);
  }

  const handleSave = async() => {
    setopenForm(false);
    console.log("saved successfully");
    
      const data = {
          username: localStorage.getItem('user'),
          track_name: trackName,
          start_date: startDate,
          end_date: endDate,
      };

      try {
          const res = await axios.post('http://localhost:5000/api/add_track', data);
          console.log(res.data);
        
      } catch (error) {        
              console.log(error);   
      }
  
  };

  return (
    <>
      <Navbar />
      {
        openForm ?
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-96 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Add New Track</h2>
              <div className="mb-4">
                <TextField
                  label="Track Name"
                  placeholder="Enter track name"
                  fullWidth
                  value={trackName}
                  onChange={(e) => setTrackName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Start date"
                  className="w-full"
                  style={{ outline: 'none !important', border: 'none' }}
                />
              </div>
              <div className="mb-4">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End date"
                className="w-full"
                style={{ outline: 'none !important', border: 'none' }}
              />
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          :
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
                    {track_list.filter((track) => track.track_year === selectedYear).map((track, index) => (
                      <li key={track.track_name} onClick={() => handleTrackClick(track.track_year, track.track_name)}
                        className="hover:text-blue-500 cursor-pointer">
                        {track.track_name}
                      </li>

                    ))}
                  </ul>
                )}
                {!selectedYear && (
                  <p>Select a year to view track list.</p>
                )}
              </div>
              <div className="flex justify-center my-3">
                {Array.from(new Set(track_list.map((track) => track.track_year))).map((year) => (
                  <button key={year} className="mx-2 rounded-full px-4 py-1 text-white font-semibold bg-gray-700 hover:bg-gray-800 focus:outline-none" onClick={() => handleYearSelection(year)}>
                    {year}
                  </button>
                ))}
                <button className="mx-2 rounded-full px-4 py-1 text-white font-semibold bg-gray-700 hover:bg-gray-800 focus:outline-none" onClick={() => handleAddTrack()}>
                  Add Track
                </button>
              </div>

            </div>
          </div>
      }
    </>
  );
};

export default DisplayTracks;
