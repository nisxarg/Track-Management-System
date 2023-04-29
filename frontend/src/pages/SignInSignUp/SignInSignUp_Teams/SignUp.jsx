import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DatePicker from 'react-datepicker';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { useStateContext } from '../../../contexts/ContextProvider';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();

    const { currentColor, setIndex, TrackNameMain, TrackYearMain } = useStateContext();
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: currentColor }
    // const marginTop = { marginTop: 5 }

    const [team_name, setTeamName] = useState('');
    const [teammate_1, setTeammate1] = useState('');
    const [teammate_2, setTeammate2] = useState('');
    const [teammate_3, setTeammate3] = useState('');
    const [track_name, setTrackName] = useState(localStorage.getItem('name_code'));
    const [track_year, setTrackYear] = useState(localStorage.getItem('year'));
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [error, seterror] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            team_name: team_name,
            teammate_1: teammate_1,
            teammate_2: teammate_2,
            teammate_3: teammate_3,
            track_name: track_name,
            track_year: track_year,
            team_password: password
        };

        try {
            const res = await axios.post('http://localhost:5000/api/team_signup', data);
            console.log(res.data);
            seterror(false);
            setIndex(0);
            navigate('/SignInSignUp_T');

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

    const disabledButton = !acceptedTerms || password !== confirmPassword;


    return (
        <div className=" dark:bg-secondary-dark-bg bg-white text-white">
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Register your Team Here</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                        {error && <Typography variant='caption' gutterBottom style={{ color: 'red' }}> {ErrorMessage}</Typography>}
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Team Name" placeholder="Enter your team name" value={team_name} onChange={(e) => setTeamName(e.target.value)} />
                        <TextField fullWidth label="Teammate 1" placeholder="Enter teammate 1 name" value={teammate_1} onChange={(e) => setTeammate1(e.target.value)} />
                        <TextField fullWidth label="Teammate 2" placeholder="Enter teammate 2 name" value={teammate_2} onChange={(e) => setTeammate2(e.target.value)} />
                        <TextField fullWidth label="Teammate 3" placeholder="Enter teammate 3 name" value={teammate_3} onChange={(e) => setTeammate3(e.target.value)} />
                        <TextField fullWidth label="Track Name" placeholder="Enter the name of the track" value={track_name} style={{ marginTop: '5px' }} />
                        <TextField fullWidth label="Track Year" placeholder="Enter the year of the track" value={track_year} style={{ marginTop: '5px' }} />
                        <TextField fullWidth label="Password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField fullWidth label="Confirm Password" placeholder="Confirm your password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        {password !== confirmPassword && <Typography style={{ color: 'red' }}>Password and confirm password does not match</Typography>}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', width: '100%', marginBottom: '27px' }}>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="I accept all T&C."
                                checked={acceptedTerms}
                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                style={{ fontSize: '0.8rem' }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={disabledButton}
                                style={{ fontSize: '0.9rem', margin: 'auto', height: '40px', padding: '16px' }}
                            >
                                Sign-up
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Signup;
