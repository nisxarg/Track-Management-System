import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button'

export const Logo1 = [
  { img: "image1", link: "#" },

];
export const Logo2 = [
  { img: "image2", link: "#" },

];
export const Logo3 = [
  { img: "image2", link: "#" },

];
export const Logo4 = [
  { img: "image2", link: "#" },

];

export const Icons = [
  { name: "logo-facebook", link: "#" },
  { name: "logo-twitter", link: "#" },
  { name: "logo-github", link: "#" },
  { name: "logo-linkedin", link: "#" },
  { name: "logo-instagram", link: "#" },
];

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={Logo1} title="Logo1" />
      <Item Links={Logo2} title="Logo2" />
      <Item Links={Logo3} title="Logo3" />
      <Item Links={Logo4} title="Logo4" />
    </div>
  );
};
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};


const Footer = () => {
  const { currentColor } = useStateContext();

  return (
    <footer className=" dark:bg-secondary-dark-bg bg-white text-white shadow-inner ...">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="dark:text-gray-200 text-gray-700 text-center m-20" >Sponsors</span>
        </h1>
        <div>
          <input
            type="text"
            placeholder="Search Here"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-nonel border border-solid " style={{ borderColor: currentColor }}
          />


          <Button
            color="white"
            bgColor={currentColor}
            text="Search"
            borderRadius="10px"
          />

        </div>
      </div>
      <div
        className='shadow-inner ...'
        style={{ backgroundColor: currentColor }}
      >
        <ItemsContainer />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white-400 text-sm pb-8"

        >
          <span>© 2023 Appy. All rights reserved by Pranav.</span>
          <span>Terms · Privacy Policy</span>
          <SocialIcons Icons={Icons} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;