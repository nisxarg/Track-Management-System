
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
          title: "Keynote Speakers ",
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
          title: "Invited Speakers ",
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
          title: "Tracks",
          List: [{
            text: "First track",
            link: "#",
          },
          {
            text: "Second track",
            link: "#",
          },
          {
            text: "Third track",
            link: "#",
          },

          ]
        },
        tutorials: {
          title: "Tutorials for this year 2023",
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
          title: "Key Note speakers ",
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
          title: "Invited speakers",
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
          title: "Tracks ",
          List: [{
            text: "first track",
            link: "#",
          },
          {
            text: "Second track",
            link: "#",
          },
          {
            text: "Third track",
            link: "#",
          },

          ]
        },
        tutorials: {
          title: "Tutorials ",
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

export const Track ={
  name_code: "1",
  sidebar: [ {
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
  }],
  importantDates:{
    title:"important Dates",
    dates:[
    {
      date:"22/5/2021",
      event:"this is the event to be held during this day"
    },
    {
      date:"22/5/2021",
      event:"this is the event to be held during this day"
    },
  ],
},
  content:{
    introduction:{
      title:"Introduction ",
      content:" The growth of social media platforms such as twitter, facebook for communication between people has led to creation of huge user generated data. This is now leading to development of new challenges and perspectives in the language technologies research. Automatic processing of such texts requires us to develop new methodologies. Thus there is great need to develop various automatic systems such as information extraction, information retrieval, machine translation and other higher Natural Language Processing (NLP) applications such as Anaphora resolution, co-reference resolution which can be applied on these social media text.This is the 2nd edition of the track. The first edition was held in the FIRE 2020. In the last edition the focus was on the resolution of Anaphora alone. In this edition of the track the focus will be on identifying other discourse elements such as connectives along with anaphora. Also, the coreference chain identification. Natural Language Processing (NLP) technologies are advancing very fast and today we find Conversational AI applications such as chatbots are used across various industries for customer interactions, in training employees.This is now leading to development of new challenges and perspectives in the language technologies research. Thus, there is great need to develop robust conversational AI systems. And for a conversational AI systems development we need Anaphora resolution, co-reference resolution.The objectives of SocAnaRes-IL are:Creation of benchmark data for Anaphora Resolution in Indian language text from various Social media text such as Facebook, Twitter, Chat conversations etc.Encourage researchers to develop novel systems for Anaphora Resolution.Providing opportunity to researchers to have comparison of differenttechniques."
    },
    TaskDescription:{
        title:"Task Description",
        content : "There are various challenges in anaphora resolution on these type of texts. One of the main challeges is that facebook (FB) posts and tweets are generally very short, thus often lack sufficient context to determine an antecedent of an anaphor without the aid of background or world knowledge. Especially in the resolution of third person pronominals “he/they” (woh, ve, vo) in atleast 20% of the cases the antecedent is not mentioned in the current tweet or FB post, it is either in posts which was already said a day before or it is understood with world knowledge.Example Tweet:HI: “@vijayrk modi sarkar ke baad garibi kam hui hai, bank wale ab usko bhi loandena shuru kiya ha”(“@vijayrk after Modi government poverty has reduced, now banks are giving loans to them”)Here in this tweet “usko” is the third person pronoun, and here it referring to poor people. The antecedent for this pronoun can be identified only if we have world knowledge.In comparison with English, Indian Languages have more dialectal variations. These dialects are mainly influenced by different regions and communities. And thus we have different styles of writing. Some of the main issues in handling of social media texts such as tweets are i) Spelling errors ii) Abbreviated new language vocabulary such as “b4u” for “before you” iii) use of symbols such as emoticons/emojis iv) use of meta tags and hash tags v) Code mixing. We need to preprocess the data to normalize the abbreviated vocabulary by providing expansions.The task is to identify Anaphor and its antecedent in a given text. The text is a tweet."
        
    },
    corpus: {
       title : "Training Corpus",
       content : "Training data is released.For more details on training data such as data format please click here .Please register your Team following the procedure given in registration section and make request for data. The data will be mailed to the team contact person"
    },
    registration: {
      title : "Registration",
      content : "Registration is now open !!!Please register by sending email to sobha@au-kbc.org with subject line `Registration for SocAnaRes-IL 2022` with the following details:`Team Leader Name:``Team Affiliation (Proper full Address of the Organization):``Team Contact Person name:` and `Email ID:``Languages for which participating:``Team Members Names:`(PS: Maximum of 4 members will be allowed in a team)"
    },
    submission : {
      title : "Submission Format",
      content : "  The participants have to submit their test runs in the format as given in training data.Note: There should be no changes/alterations in the format of the test run submission file.Each team can submit maximum of 3 test runs for each language."

    },
    evaluation:{
      title :" We plan to use the standard evaluation metrics of Precision, Recall and F-measure. More details will be provided later.",
      content:" We plan to use the standard evaluation metrics of Precision, Recall and F-measure. More details will be provided later."
    }


  }
}
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

export const Links2=[
  {
    title: 'Home',
    links: [
      {
        name: 'Home',

      },
      {
        name: 'TrackDetails',

      },
      {
        name: 'Leaderboard',

      },
      {
        name: 'Submit',

      },
    ],
  },
]
// export const homePageData = [
//   {
//     year: 2023,
//     "content": {
//       welcomeContent: "This is the welcome content for the home page of 2023",
//       keyNoteSpeakers: {
//         title: "speakers for this year 2023",
//         speakerList: [{
//           text: "first Speaker",
//           link: "#",
//         },
//         {
//           text: "Second: Speaker",
//           link: "#",
//         },
//         {
//           text: "Third: Speaker",
//           link: "#",
//         },

//         ]
//       },
//       invitedSpeakers: {
//         title: "speakers for this year 2023",
//         speakerList: [{
//           text: "first Speaker",
//           link: "#",
//         },
//         {
//           text: "Second: Speaker",
//           link: "#",
//         },
//         {
//           text: "Third: Speaker",
//           link: "#",
//         },

//         ]
//       },
//       tracks: {
//         title: "tracks for this year 2023",
//         trackList: [{
//           text: "first track",
//           link: "#",
//         },
//         {
//           text: "Second: track",
//           link: "#",
//         },
//         {
//           text: "Third: track",
//           link: "#",
//         },

//         ]
//       },
//       tutorials: {
//         title: "tutorials for this year 2023",
//         trackList: [{
//           text: "first turorial",
//           link: "#",
//         },
//         {
//           text: "Second: turorial",
//           link: "#",
//         },
//         {
//           text: "Third: turorial",
//           link: "#",
//         },

//         ]
//       },


//     },
//     year: 2022,
//     "content": {
//       welcomeContent: "This is the welcome content for the home page of 2022",
//       keyNoteSpeakers: {
//         title: "speakers for this year 2022",
//         speakerList: [{
//           text: "first Speaker",
//           link: "#",
//         },
//         {
//           text: "Second: Speaker",
//           link: "#",
//         },
//         {
//           text: "Third: Speaker",
//           link: "#",
//         },

//         ]
//       },
//       invitedSpeakers: {
//         title: "speakers for this year 2022",
//         speakerList: [{
//           text: "first Speaker",
//           link: "#",
//         },
//         {
//           text: "Second: Speaker",
//           link: "#",
//         },
//         {
//           text: "Third: Speaker",
//           link: "#",
//         },

//         ]
//       },
//       tracks: {
//         title: "tracks for this year 2022",
//         trackList: [{
//           text: "first track",
//           link: "#",
//         },
//         {
//           text: "Second: track",
//           link: "#",
//         },
//         {
//           text: "Third: track",
//           link: "#",
//         },

//         ]
//       },
//       tutorials: {
//         title: "tutorials for this year 2022",
//         trackList: [{
//           text: "first turorial",
//           link: "#",
//         },
//         {
//           text: "Second: turorial",
//           link: "#",
//         },
//         {
//           text: "Third: turorial",
//           link: "#",
//         },

//         ]
//       },


//     },

//   },

// ]
