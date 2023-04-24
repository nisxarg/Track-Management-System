import React, { useEffect, useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Link, useNavigate } from "react-router-dom";


import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

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

const Navbar = (showOnlyOrgSignIn) => {


  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

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

  const [signInOptions, setSignInOptions] = useState(false);

  const handleSignInOptions = () => {
    setSignInOptions(!signInOptions);
  };

  const handleUserSignIn = () => {
    setSignInOptions(!signInOptions);
    Navigate("/SignInSignUp");

  };

  const handleOrganizerSignIn = () => {
    setSignInOptions(!signInOptions);
    Navigate("/SignInSignUp_O");
  };


  return (

    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />

      </div>

      <div className="flex">

        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={handleSignInOptions}
        >
          <p>
            Sign in
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {signInOptions && (
          <div className="absolute top-14 right-0 z-10 bg-white w-52 py-2 rounded-md shadow-md">
            <div
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={handleUserSignIn}
            >
              Sign in as  User
            </div>
            {showOnlyOrgSignIn && (
              <div
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={handleOrganizerSignIn}
              >
                Sign in as Organizer
              </div>
            )}
          </div>
        )}

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;


