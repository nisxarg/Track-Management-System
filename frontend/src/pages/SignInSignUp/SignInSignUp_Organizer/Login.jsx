import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = ({ handleChange }) => {
    const navigate = useNavigate();
    const { setUsername } = useStateContext();

    const { currentColor } = useStateContext();
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: currentColor }
    const btnstyle = { margin: '20px 0' };
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, seterror] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState();


    // route.post('/api/user_signup', controller.user_signup)
    // route.post('/api/user_login/:username', controller.user_login)
    // route.post('/api/organizer_signup', controller.organizer_signup)
    // route.post('/api/organizer_login/:username', controller.organizer_login)

    const submitAction = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/api/organizer_login`, { username: user, password: pwd });
            if (res.status === 200) {
                setUsername(user);
                console.log('User is authenticated');
                const token = res.data.token; // assuming the token is returned in the response
                localStorage.setItem('token', token); // store the token in local storage
                // navigate('/home'); // navigate to next page
                navigate('/api/track_org?year=2022&name_code=track_2022_2')
            }
        } catch (error) {

            if (error.response.data.message) {
                seterror(true);
                setErrorMessage(error.response.data.message);
                console.log(error.response.data.message);
            }
            else {
                console.error(error);
            }
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
                        {error && <Typography variant='caption' gutterBottom style={{ color: 'red' }}> {ErrorMessage}</Typography>}
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