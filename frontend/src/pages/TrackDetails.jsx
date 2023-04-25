import React from 'react';
import { useState, useEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';

import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

  
 
const TrackDetails = () => {
  const [Track,setTrack] = useState({content:{
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


  }}); // uncomment this
  
  const { currentColor } = useStateContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const year = queryParams.get('year');
  const name_code = queryParams.get('name_code');
 
  useEffect( async () => {
    axios
    .get(`http://localhost:5000/api/track/?year=${year}&name_code=${name_code}`)
    .then((response) => setTrack(response.data))
    .catch(err => console.log(err));
    console.log("Track : ", Track)
}, []);

  const [des,setDes] = useState({title : Track.content.TaskDescription.title,content:Track.content.TaskDescription.content});
  const [cors,setCors] = useState({title : Track.content.corpus.title,content:Track.content.corpus.content});
  const [eva,setEva] = useState({title : Track.content.evaluation.title,content:Track.content.evaluation.content});
  const [intro,setIntro] = useState({title : Track.content.introduction.title,content:Track.content.introduction.content});
  const [regs,setRegs] = useState({title : Track.content.registration.title,content:Track.content.registration.content});
  const [sub,setSub] = useState({title : Track.content.submission.title,content:Track.content.submission.content});

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = async () => {
    const track_data = {
        name_code:Track.name_code,
        year:Track.year,
        tag:Track.tag,
        sidebar:Track.sidebar,
        importantDates:Track.importantDates,
        content : {
            introduction : {
                title : intro.title,
                content : intro.content
            },
            TaskDescription : {
            title : des.title,
            content : des.content
            },
            corpus : {
            title : cors.title,
            content : cors.content
            },
            registration : {
            title : regs.title,
            content : regs.content
            },
            submission : {
            title : sub.title,
            content : sub.content
            },
            evaluation : {
                title : eva.title,
                content : eva.content
            }
        }
    }
    console.log("track_data : ",track_data)
    // uncomment this
    try {
      const res = await axios.post('http://localhost:5000/api/update_track',track_data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  }

  if (!Track) return <div>Loading...</div>
  console.log("i am calling data")
  console.log(Track)
  return (
  <>
  {/* Edit part start */}
  <div>
    {localStorage.getItem('role')==='ORG' ? <Button variant="outlined" onClick={handleClickOpen}>
        Edit track details
      </Button>  : ""}
      
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
          <TextField
            id="filled-multiline-static"
            fullWidth
            label="Introduction"
            multiline
            rows={4}
            defaultValue={intro.content}
            variant="filled"
            onChange={(e) => setIntro({title:intro.title,content:e.target.value})}
          />
          </ListItem>
          <Divider/>
          <ListItem>
            <TextField
              id="filled-multiline-static"
              label="Task description"
              multiline
              fullWidth
              rows={4}
              defaultValue={des.content}
              variant="filled"
              onChange={(e) => setDes({title:des.title,content:e.target.value})}
            />
          </ListItem>
          <Divider />
          <ListItem>
          <TextField
            id="filled-multiline-static"
            fullWidth
            label="corpus"
            multiline
            rows={4}
            defaultValue={cors.content}
            variant="filled"
            onChange={(e) => setCors({title:cors.title,content:e.target.value})}
          />
          </ListItem>
          <Divider />
          <ListItem>
          <TextField
            id="filled-multiline-static"
            fullWidth
            label="Registration"
            multiline
            rows={4}
            defaultValue={regs.content}
            variant="filled"
            onChange={(e) => setRegs({title:regs.title,content:e.target.value})}
          />
          </ListItem>
          <Divider />
          <ListItem>
          <TextField
            id="filled-multiline-static"
            fullWidth
            label="Submission"
            multiline
            rows={4}
            defaultValue={sub.content}
            variant="filled"
            onChange={(e) => setSub({title:sub.title,content:e.target.value})}

          />
          </ListItem>
          <ListItem>
          <TextField
            id="filled-multiline-static"
            fullWidth
            label="evaluation"
            multiline
            rows={4}
            defaultValue={eva.content}
            variant="filled"
            onChange={(e) => setEva({title:eva.title,content:e.target.value})}

          />
          </ListItem>
        </List>
      </Dialog>
    </div>
  {/* Edit part end */}
   <div>
<div
  className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
  style={{ backgroundColor: currentColor }}
>
  <p className="text-2xl text-white font-semibold mt-8">
  {Track.content.introduction.title}
  </p>
</div>

<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
  <p>
    {/* Display the track data here */}
    {Track.content.introduction.content}
  </p>
</div>
</div>

{/* TaskDescription */}
<div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.TaskDescription.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.TaskDescription.content}</p>
  </div>

  {/* corpus */}
  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.corpus.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.corpus.content}</p>
  </div>

  {/* registration */}
  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.registration.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.registration.content}</p>
  </div>

  {/* submission */}

  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.submission.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.submission.content}</p>
  </div>

  {/* evaluation */}

  <div
    className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
    style={{ backgroundColor: currentColor }}
  >
    <p className="text-2xl text-white font-semibold mt-8">
      {Track.content.evaluation.title}
    </p>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
    <p>{Track.content.evaluation.content}</p>
  </div>



</>
  );
};

export default TrackDetails;