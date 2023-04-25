import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import  Navbar  from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { homePageData1 } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';
import { Track } from '../data/dummy'; // comment this
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
  const { currentColor } = useStateContext();
  const { trackName } = useParams();

  console.log("Track : " ,Track)
  // const [Track,setTrack] = useState({}); // uncomment this
  const trackData = Track.content[trackName]; // Comment this

  // uncomment this
  // useEffect(() => {
  //   axios.get('https://localhost:5000/api/track?year=2021&track=track1')
  //     .then(response => setTrack(response.data))
  //     .catch(error => console.log(error));
  // },[]);

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
      content : {
        TaskDescription : {
          title : des.title,
          content : des.content
        },
        corpus : {
          title : cors.title,
          content : cors.content
        },
        evaluation : {
          title : eva.title,
          content : eva.content
        },
        introduction : {
          title : intro.title,
          content : intro.content
        },
        registration : {
          title : regs.title,
          content : regs.content
        },
        submission : {
          title : sub.title,
          content : sub.content
        }
      }
    }
    console.log("track_data : ",track_data)
    // uncomment this
    // try {
    //   const res = await axios.put('https://example.com/api/description',track_data);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
    setOpen(false);
  }

  return (
  <>
  {/* Edit part start */}
  <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit track details
      </Button>
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
          <Divider />
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


{/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
  <p>
  The growth of social media platforms such as twitter, facebook for communication between people has led to creation of huge user generated data
      </p>
</div>

<div>
<div
  className="rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
  style={{ backgroundColor: currentColor }}
>
  <p className="text-2xl text-white font-semibold mt-8">
  Task Description - {trackName}
  </p>
</div>

<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify">
  <p>
  There are various challenges in anaphora resolution on these type of texts. One of the main challeges is that facebook (FB) posts and tweets are generally very short, thus often lack sufficient context to determine an antecedent of an anaphor without the aid of background or world knowledge. 
      </p>
</div>
</div> */}
</>
  );
};

export default TrackDetails;