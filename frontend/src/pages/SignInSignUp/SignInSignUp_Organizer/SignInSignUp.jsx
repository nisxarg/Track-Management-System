import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from './Login'
import Signup from './SignUp'
import { useStateContext } from '../../../contexts/ContextProvider';
import { Navbar } from '../../../components';

const SignInSignUp = () => {
  const { index,setIndex } = useStateContext();

  useEffect(() => {
    setIndex(0); // set the default tab to signIn (index 0)
    console.log("using useEffect");
    console.log(index);

 
  }, [])
  const handleChange=()=>{
    if(index===0)setIndex(1);
    else setIndex(0);
  }

  const paperStyle = { width: 340, margin: "20px auto" }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      
      <div className="dark:bg-secondary-dark-bg bg-white text-white">
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      </div>
    
    );
  }

  return (
    <>
   <Navbar/>
    <div className="dark:bg-secondary-dark-bg bg-white text-white">
      <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={index}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />

          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={index} index={0}>
          <Login handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={index} index={1}>
          <Signup />
        </TabPanel>
      </Paper>
    </div>
    </>
  )
}

export default SignInSignUp;
