import React, { useEffect } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar } from '../components';


const Chat = () => {
  const { setActiveMenu, setchatopen} = useStateContext();

  useEffect(() => {

    setchatopen(true);
  }, []);

  return (
    <>
      <Navbar/>
      <div style={{ height: '100vh' }}>
        <PrettyChatWindow
          projectId="7868459d-8f00-40a4-8392-727597d8771b"
          username={localStorage.getItem('user')}
          secret="secret"
          style={{ height: '100%' }}
          iceBreaker=""
        />
      </div>
    </>
  );
};

export default Chat;
