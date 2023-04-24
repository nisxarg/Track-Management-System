import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';


const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Login = ({ handleChange }) => {
 

    const { currentColor } = useStateContext();
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: currentColor }
    const btnstyle = { margin: '20px 0' };
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');


    // route.post('/api/user_signup', controller.user_signup)
    // route.post('/api/user_login/:username', controller.user_login)
    // route.post('/api/organizer_signup', controller.organizer_signup)
    // route.post('/api/organizer_login/:username', controller.organizer_login)

    const submitAction = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/api/user_login/${user}`, { username: user, password: pwd });
            if (res.status === 200) {
                console.log('User is authenticated');
                const token = res.data.token; // assuming the token is returned in the response
                localStorage.setItem('token', token); // store the token in local storage
                // Redirect to the next page
            }
        } catch (err) {
            console.error(err);
            // Display error message to the user
        }
    };

    return (
        <div className=" dark:bg-secondary-dark-bg bg-white text-white">

            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' value={user} fullWidth required onChange={(e) => setUser(e.target.value)} />
                    <TextField label='Password' placeholder='Enter password' value={pwd} fullWidth required onChange={(e) => setPwd(e.target.value)} type='password' />
                    <FormControlLabel control={<Checkbox name='checkedB' color='primary' />} label='Remember me' />

                    <Button type='button' color='primary' variant='contained' onClick={submitAction} style={btnstyle} fullWidth>
                        Sign in
                    </Button>
                    <Typography>
                        <Link href='#'>Forgot password ?</Link>
                    </Typography>
                    <Typography>
                        Do you have an account ?
                        <Link href='#' onClick={() => handleChange('event', 1)}>
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login