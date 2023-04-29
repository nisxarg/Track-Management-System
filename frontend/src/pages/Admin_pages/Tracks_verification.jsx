import React,{ useState, useEffect } from "react";
import axios from 'axios';
import { Navbar} from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';




const TracksTable = () => {

  const [TrackData, setTrackData] = useState([]);

  useEffect(async () => {
    
    try {
        const response = await axios.get(`http://localhost:5000/api/admin_page`)
  
        // console.log(response.data);
        setTrackData(response.data);
    } catch (error) {
        console.error(error);
    }
  }, []);


  const { currentColor } = useStateContext();

  const handleVerifyIt = async (track) => {
    
    const data = {
      start_date: track.start_date,
      track_year: track.track_year,
        track_name: track.track_name,
        username: track.organizer_name,
    };

    try {
        const res = await axios.post('http://localhost:5000/api/verify_track', data);
        console.log(res.data);
        
    } catch (error) {
        
            console.error(error);
         
    }
};


  return (
    <>
    <Navbar/>
    
      <div
    style={{
      height: "100vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
   <div style={{ textAlign: "center", marginBottom: "  55px",paddingTop:'10px' }}>
    <h1>Verify the Track</h1>
  </div>
    <table
      style={{
        width: "85%",
        borderCollapse: "collapse",
      }}
    >
      {/* inline styles for the table */}
      <thead>
        <tr>
          <th style={{ textAlign: "left", backgroundColor: currentColor, border: "1px solid black", padding: "8px" }}>
            Track Year
          </th>
          <th style={{ textAlign: "left", backgroundColor: currentColor, border: "1px solid black", padding: "8px" }}>
            Start Date
          </th>
          <th style={{ textAlign: "left", backgroundColor: currentColor, border: "1px solid black", padding: "8px" }}>
            Track Name
          </th>
          <th style={{ textAlign: "left", backgroundColor: currentColor, border: "1px solid black", padding: "8px" }}>
            Organizer Name
          </th>
          <th style={{ textAlign: "left", backgroundColor: currentColor, border: "1px solid black", padding: "8px" }}>
            Verify It
          </th>
        </tr>
      </thead>
      <tbody>
        {TrackData.map((track) => (
          <tr key={track.track_name} style={{ border: "1px solid black", backgroundColor: "white", color: "black" }}>
          <td style={{ border: "1px solid black", padding: "8px", backgroundColor: "white", color: "black" }}>{new Date(track.start_date).toLocaleDateString('en-GB')}</td>
          <td style={{ border: "1px solid black", padding: "8px", backgroundColor: "white", color: "black" }}>{track.track_year}</td>
          <td style={{ border: "1px solid black", padding: "8px", backgroundColor: "white", color: "black" }}>{track.track_name}</td>
          <td style={{ border: "1px solid black", padding: "8px", backgroundColor: "white", color: "black" }}>{track.username}</td>
          <td style={{ border: "1px solid black", padding: "8px", backgroundColor: "white", color: "black" }}>
            <button onClick={() => handleVerifyIt(track)}>Verify It</button>
          </td>
        </tr>
        
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default TracksTable;
