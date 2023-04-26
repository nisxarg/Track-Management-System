import React, { useEffect, useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';


import { Cart, Chat, Notification, UserProfile } from '.';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (


  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = (props) => {


  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize, Username, trackactive } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const Navigate = useNavigate();

  const [Options, setOptions] = useState(0);
  const [toggle, settoggle] = useState(false);

  const handleSignInOptions = () => {
    setOptions(1);
    settoggle(!toggle);
  };

  const handleLogoutOptions = () => {
    setOptions(2);
    settoggle(!toggle);
  };

  const handleUserSignIn = () => {
    setOptions(0);
    Navigate("/SignInSignUp");

  };

  const handleOrganizerSignIn = () => {
    setOptions(0);
    Navigate("/SignInSignUp_O");
  };
  const handleLogOut = () => {
    localStorage.removeItem('token'); // remove the token from local storage
    setOptions(0);
    Navigate("/");
  }

  const user_name = Username;
  console.log("hi this is navabar ");
  console.log(props);
  
  return (
    <>
    
     {
      props.view===1 ?
      (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />

      </div>
     
      <div className="flex">

        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        {localStorage.getItem("token") ?
        (
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={handleLogoutOptions}
        >
          {
            <p>
            Hi, {user_name}
            </p>
          }
          
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        )
        :
        (
        <div
        className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
        onClick={handleSignInOptions}
      >
        <p>
        Sign in 
        </p>
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>   
        )
      }
       
        {toggle && (Options===2) && (
         
          <div className="absolute top-14 right-0 z-10 bg-white w-52 py-2 rounded-md shadow-md">
            <div
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={handleUserSignIn}
            >
              Edit Profile
            </div>
            

              <div
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogOut}
              >
                Logout
              </div>
            
          </div>
        )}
        {toggle && (Options===1) && (
          <div className="absolute top-14 right-0 z-10 bg-white w-52 py-2 rounded-md shadow-md">
            <div
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={handleUserSignIn}
            >
              Sign in as  User
            </div>
             
              <div
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={handleOrganizerSignIn}
              >
                Sign in as Organizer
              </div>
            
          </div>
        )}

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
    
      )
        :
      (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />

      </div>
     
      <div className="flex">

        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        {localStorage.getItem("token") ?
        (
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={handleLogoutOptions}
        >
          {
            <p>
            Hi, {user_name}
            </p>
          }
          
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        )
        :
        (
        <div
        className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
        onClick={handleSignInOptions}
      >
        <p>
        Register Team
        </p>
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>   
        )
      }
       
        {toggle && (Options===2) && (
         
          <div className="absolute top-14 right-0 z-10 bg-white w-52 py-2 rounded-md shadow-md">
            <div
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={handleUserSignIn}
            >
              Edit Profile
            </div>
            

              <div
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogOut}
              >
                Logout
              </div>
            
          </div>
        )}
        {toggle && (Options===1) && (
          <div className="absolute top-14 right-0 z-10 bg-white w-52 py-2 rounded-md shadow-md">
            <div
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={handleUserSignIn}
            >
              User Sign-In
            </div>
             
              <div
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={handleOrganizerSignIn}
              >
                Team Sign-In 
              </div>
            
          </div>
        )}

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
      )
    }
    </>
    
 
  );
};

export default Navbar;

Navbar.defaultProps = {
  view: 1,
}