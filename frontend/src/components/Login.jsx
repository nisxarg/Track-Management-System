import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStateContext } from '../contexts/ContextProvider';
import { useRef,useState,useEffect } from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Login = ({ handleChange }) => {
    const userRef =useRef();
    const errRef =useRef();

    const [user,setUser]=useState('');
    const [pwd,setpwd] =useState('');
    const [errMsg,setErrMsg] =useState('');
    const [success,setSuccess] =useState('');

   
    


    const { currentColor } = useStateContext();
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: currentColor }
    const btnstyle = { margin: '8px 0' }

    // React.useEffect(() => {
    //     axios.get(`${baseURL}/1`).then((response) => {
    //       setPost(response.data);
    //     });
    //   }, []);
    
    //   function submitAction() {
    //     axios
    //       .post(baseURL, {
    //         title: "Hello World!",
    //         body: "This is a new post."
    //       })
    //       .then((response) => {
    //         setPost(response.data);
    //       });
    //   }

    const submitAction = () => {
        
         console.log(user);
        console.log(pwd);
    }
    
    return (
        <div className=" dark:bg-secondary-dark-bg bg-white text-white">

            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' value={user}  fullWidth required onChange={(e) => {
                    setUser(e.target.value);
                }}/>
                    <TextField label='Password' placeholder='Enter password' value={pwd}  fullWidth required onChange={(e)=>{
                        setpwd(e.target.value);
                    }} type='password' />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color={currentColor} variant="contained" onClick={submitAction} style={btnstyle} fullWidth>Sign in</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link href="#" onClick={() => handleChange("event", 1)} >
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login