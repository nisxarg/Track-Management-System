import React from 'react';
import { useState, useEffect } from 'react';

import { useStateContext } from '../../contexts/ContextProvider';

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
import Box from '@mui/material/Box';
import { Navbar } from '../../components';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const TrackDetails_Organizer = () => {
  const [Track, setTrack] = useState(null); // uncomment this

  const { currentColor, TrackNameMain, TrackYearMain, setOptions } = useStateContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const year = queryParams.get('year');
  const name_code = queryParams.get('name_code');
  const Navigate = useNavigate();
  const { setTrackNameMain, setTrackYearMain } = useStateContext();
  
  useEffect(() => {

    setTrackYearMain(year);
    axios
      .get(`https://track-management.onrender.com/api/track/?year=${year}&name_code=${name_code}`)
      .then((response) => setTrack(response.data))
      .catch(err => console.log(err));

  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const data = new FormData(e.currentTarget);
    const track_data = {
      name_code: Track.name_code,
      year: Track.year,
      tag: Track.tag,
      sidebar: Track.sidebar,
      importantDates: Track.importantDates,
      content: {
        introduction: {
          title: Track.content.introduction.title,
          content: data.get('Introduction')
        },
        TaskDescription: {
          title: Track.content.TaskDescription.title,
          content: data.get('Task description')
        },
        corpus: {
          title: Track.content.corpus.title,
          content: data.get('corpus')
        },
        registration: {
          title: Track.content.registration.title,
          content: data.get('Registration')
        },
        submission: {
          title: Track.content.submission.title,
          content: data.get('Submission')
        },
        evaluation: {
          title: Track.content.evaluation.title,
          content: data.get('evaluation')
        }
      }

    }
    // navigate(`/api/trackedit?year=${year}&name_code=${nameCode}`);
    console.log("track_data : ", track_data)
    setOpen(false);
    // uncomment this
    try {
      console.log(localStorage.getItem("year"));
      console.log(localStorage.getItem("name_code"));
      const res = await axios.post('https://track-management.onrender.com/api/update_track', track_data);

      window.history.back();
    } catch (err) {
      console.log(err);
    }


  }

  // if (!Track) return <div>Loading...</div>
  // console.log("i am calling data")
  // console.log(Track)
  return (
    <>
      {Track === null ? "Loading..." :

        <>
          {/* Edit part start */}
          <Navbar />
          <div>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              style={{ marginLeft: '12px' }}
              classes={{ hover: 'hover-style' }}
              type='button'
            >
              Edit track details
            </Button>

            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <form onSubmit={handleSubmit}>
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
                    <Button autoFocus type='submit' color="inherit" onClick={handleSubmit}>
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
                      name="Introduction"
                      multiline
                      rows={4}
                      variant="filled"
                      defaultValue={Track.content.introduction.content}

                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <TextField
                      id="filled-multiline-static"
                      label="Task description"
                      name="Task description"
                      multiline
                      fullWidth
                      rows={4}
                      variant="filled"
                      defaultValue={Track.content.TaskDescription.content}

                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <TextField
                      id="filled-multiline-static"
                      fullWidth
                      label="corpus"
                      name="corpus"
                      multiline
                      rows={4}
                      defaultValue={Track.content.corpus.content}
                      variant="filled"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <TextField
                      id="filled-multiline-static"
                      fullWidth
                      label="Registration"
                      name="Registration"
                      multiline
                      rows={4}
                      defaultValue={Track.content.registration.content}
                      variant="filled"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <TextField
                      id="filled-multiline-static"
                      fullWidth
                      label="Submission"
                      name="Submission"
                      multiline
                      rows={4}
                      defaultValue={Track.content.submission.content}
                      variant="filled"

                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      id="filled-multiline-static"
                      fullWidth
                      label="evaluation"
                      name="evaluation"
                      multiline
                      rows={4}
                      defaultValue={Track.content.evaluation.content}
                      variant="filled"

                    />
                  </ListItem>
                </List>
              </form>
            </Dialog>
          </div>
          {/* Edit part end */}
          <div>
            <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

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
          <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <p className="text-2xl text-white font-semibold mt-8">
              {Track.content.TaskDescription.title}
            </p>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <p>{Track.content.TaskDescription.content}</p>
          </div>

          {/* corpus */}
          <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <p className="text-2xl text-white font-semibold mt-8">
              {Track.content.corpus.title}
            </p>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <p>{Track.content.corpus.content}</p>
          </div>

          {/* registration */}
          <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <p className="text-2xl text-white font-semibold mt-8">
              {Track.content.registration.title}
            </p>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <p>{Track.content.registration.content}</p>
          </div>

          {/* submission */}
          <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <p className="text-2xl text-white font-semibold mt-8">
              {Track.content.submission.title}
            </p>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <p>{Track.content.submission.content}</p>
          </div>

          {/* evaluation */}

          <div className="rounded-t-2xl md:flex pb-8 pt-0 pr-4 pl-4 mt-3 mr-3 ml-3" style={{ backgroundColor: currentColor, height: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <p className="text-2xl text-white font-semibold mt-8">
              {Track.content.evaluation.title}
            </p>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex mb-3 mr-3 ml-3 text-justify" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <p>{Track.content.evaluation.content}</p>
          </div>
        </>
      }
    </>

  );
};

export default TrackDetails_Organizer;