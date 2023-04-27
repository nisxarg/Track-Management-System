import React, { useRef } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '../components';
import {Navbar} from '../components';
import {Links2} from '../data/dummy'


const Submit = () => {
    const { currentColor,setsidebarData,setNavbarview } = useStateContext();
    const fileInputRef = useRef();
  
    const handleUpload = () => {
      const file = fileInputRef.current.files[0];
      // handle file upload here
    };
  
    const handleDownload = () => {
      // handle file download here
    };
    setsidebarData(Links2);

   
  return (
    <>
<Navbar/>

      

      <div
        className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3"
        style={{
          backgroundColor: currentColor,
          height: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p className="text-2xl text-white font-semibold mt-8">Upload</p>
      </div>

      <div
        className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
        style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}
      >
        
        <input type="file" ref={fileInputRef} />
        <Button color="white" bgColor={currentColor} text="Upload" borderRadius="8px" onClick={handleUpload} />
    
      </div>

      <div
        className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3"
        style={{
          backgroundColor: currentColor,
          height: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p className="text-2xl text-white font-semibold mt-8">Download</p>
      </div>

      <div
        className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify"
        style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}
      >    
        <Button color="white" bgColor={currentColor} text="Download" borderRadius="8px" onClick={handleDownload} />
      </div>
    </>
  );
};

export default Submit;