import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];
export const homePageData1 = {
  "data": [
    {
      year: 2023,
      img: "url of the image ",
      welcomeContent:{
        title:"Welcome to FIRE 2023",
        content:"The 14th meeting of Forum for Information Retrieval Evaluation {props.year} will be held at Kolkata,India. Started in 2008 with the aim of building a South Asian counterpart for TREC, CLEF and NTCIR, FIRE has since evolved continuously to meet the new challenges in multilingual information access. It has expanded to include new domains like plagiarism detection, legal information access, mixed script information retrieval and spoken document retrieval to name a few.Continuing the trend started in 2015, the FIRE will consist of a peer-reviewed conference track along with evaluation tasks. We invite full and short papers from information retrieval, natural language processing, and related domains. Please re`fer to the call for papers or submission guidelines for more information.",

      } ,
      content: {
      
        keyNoteSpeakers: {
          title: "speakers for this year 2023",
          List: [{
            text: "first Speaker",
            link: "#"
          },
          {
            text: "Second: Speaker",
            link: "#",
          },
          {
            text: "Third: Speaker",
            link: "#",
          },

          ]
        },
        invitedSpeakers: {
          title: "speakers for this year 2023",
          List: [{
            text: "first Speaker",
            link: "#",
          },
          {
            text: "Second: Speaker",
            link: "#",
          },
          {
            text: "Third: Speaker",
            link: "#",
          },

          ]
        },
        tracks: {
          title: "traks for this year 2023",
          List: [{
            text: "first track",
            link: "#",
          },
          {
            text: "Second: track",
            link: "#",
          },
          {
            text: "Third: track",
            link: "#",
          },

          ]
        },
        tutorials: {
          title: "tutorials for this year 2023",
          List: [{
            text: "first turorial",
            link: "#",
          },
          {
            text: "Second: turorial",
            link: "#",
          },
          {
            text: "Third: turorial",
            link: "#",
          },

          ]
        },
      },
    },
    {
      year: 2022,
      img: "url of the image ",
      welcomeContent:{
        title:"Welcome to FIRE 2022",
        content:"this is any text none of use   will be held at Kolkata,India. Started in 2008 with the aim of building a South Asian counterpart for TREC, CLEF and NTCIR, FIRE has since evolved continuously to meet the new challenges in multilingual information access. It has expanded to include new domains like plagiarism detection, legal information access, mixed script information retrieval and spoken document retrieval to name a few.Continuing the trend started in 2015, the FIRE will consist of a peer-reviewed conference track along with evaluation tasks. We invite full and short papers from information retrieval, natural language processing, and related domains. Please re`fer to the call for papers or submission guidelines for more information.",

      } ,
      content: {
      
        keyNoteSpeakers: {
          title: "speakers for this year 2022",
          List: [{
            text: "first Speaker",
            link: "#"
          },
          {
            text: "Second: Speaker",
            link: "#",
          },
          {
            text: "Third: Speaker",
            link: "#",
          },

          ]
        },
        invitedSpeakers: {
          title: "speakers for this year 2023",
          List: [{
            text: "first Speaker",
            link: "#",
          },
          {
            text: "Second: Speaker",
            link: "#",
          },
          {
            text: "Third: Speaker",
            link: "#",
          },

          ]
        },
        tracks: {
          title: "traks for this year 2023",
          List: [{
            text: "first track",
            link: "#",
          },
          {
            text: "Second: track",
            link: "#",
          },
          {
            text: "Third: track",
            link: "#",
          },

          ]
        },
        tutorials: {
          title: "tutorials for this year 2023",
          List: [{
            text: "first turorial",
            link: "#",
          },
          {
            text: "Second: turorial",
            link: "#",
          },
          {
            text: "Third: turorial",
            link: "#",
          },

          ]
        },
      },
    },

  ]
}


export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);


export const links = [
  {
    title: 'Home',
    links: [
      {
        name: 'Home',

      },
      {
        name: 'Call for Papers',

      },
      {
        name: 'Call for Tracks',

      },
      {
        name: 'Organizations',

      },
    ],
  },
  {
    title: 'Archives',
    links: [
      {
        name: 'Data',

      },
      {
        name: 'Resources',

      },
      {
        name: 'Past Precedings',

      },
    ],

  },

  {
    title: 'FIRE ',
    links: [
      {
        name: '2022',

      },
      {
        name: '2021',

      },
      {
        name: '2020',

      },
      {
        name: '2019',

      },
      {
        name: '2018',

      },
      {
        name: '2017',

      },
      {
        name: '2016',

      },
      {
        name: '2015',

      },
      {
        name: '2014',

      },
      {
        name: '2013',

      },
      {
        name: '2012',

      },
      {
        name: '2011',

      },
      {
        name: '2010',

      },
    ],
  },


];

export const homePageData = [
  {
    year: 2023,
    "content": {
      welcomeContent: "This is the welcome content for the home page of 2023",
      keyNoteSpeakers: {
        title: "speakers for this year 2023",
        speakerList: [{
          text: "first Speaker",
          link: "#",
        },
        {
          text: "Second: Speaker",
          link: "#",
        },
        {
          text: "Third: Speaker",
          link: "#",
        },

        ]
      },
      invitedSpeakers: {
        title: "speakers for this year 2023",
        speakerList: [{
          text: "first Speaker",
          link: "#",
        },
        {
          text: "Second: Speaker",
          link: "#",
        },
        {
          text: "Third: Speaker",
          link: "#",
        },

        ]
      },
      traks: {
        title: "traks for this year 2023",
        trackList: [{
          text: "first track",
          link: "#",
        },
        {
          text: "Second: track",
          link: "#",
        },
        {
          text: "Third: track",
          link: "#",
        },

        ]
      },
      tutorials: {
        title: "tutorials for this year 2023",
        trackList: [{
          text: "first turorial",
          link: "#",
        },
        {
          text: "Second: turorial",
          link: "#",
        },
        {
          text: "Third: turorial",
          link: "#",
        },

        ]
      },


    },
    year: 2022,
    "content": {
      welcomeContent: "This is the welcome content for the home page of 2022",
      keyNoteSpeakers: {
        title: "speakers for this year 2022",
        speakerList: [{
          text: "first Speaker",
          link: "#",
        },
        {
          text: "Second: Speaker",
          link: "#",
        },
        {
          text: "Third: Speaker",
          link: "#",
        },

        ]
      },
      invitedSpeakers: {
        title: "speakers for this year 2022",
        speakerList: [{
          text: "first Speaker",
          link: "#",
        },
        {
          text: "Second: Speaker",
          link: "#",
        },
        {
          text: "Third: Speaker",
          link: "#",
        },

        ]
      },
      traks: {
        title: "traks for this year 2022",
        trackList: [{
          text: "first track",
          link: "#",
        },
        {
          text: "Second: track",
          link: "#",
        },
        {
          text: "Third: track",
          link: "#",
        },

        ]
      },
      tutorials: {
        title: "tutorials for this year 2022",
        trackList: [{
          text: "first turorial",
          link: "#",
        },
        {
          text: "Second: turorial",
          link: "#",
        },
        {
          text: "Third: turorial",
          link: "#",
        },

        ]
      },


    },

  },

]
