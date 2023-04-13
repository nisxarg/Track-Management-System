import React, {useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

const Signup = () => {
    const { currentColor } = useStateContext();
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: currentColor }
    // const marginTop = { marginTop: 5 }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        username: name,
        email: email,
        gender: gender,
        phone_no: phoneNumber,
        password: password,
        confirmPassword: confirmPassword,
        acceptedTerms: acceptedTerms,
      };
      try {
        const res = await axios.post('http://localhost:5000/api/user_signup', data);
        console.log(res.data);
        // Do something with the response, such as redirecting the user to the dashboard page
      } catch (error) {
        console.error(error);
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
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField fullWidth label="Email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormControl component="fieldset" style={{ marginTop: '16px' }}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }} value={gender} onChange={(e) => setGender(e.target.value)}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth label="Phone Number" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <TextField fullWidth label="Password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField fullWidth label="Confirm Password" placeholder="Confirm your password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {password !== confirmPassword && <Typography style={{ color: 'red' }}>Password and confirm password does not match</Typography>}
                        <FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
                        <Button type="submit" variant="contained" color="primary" disabled={disabledButton}>
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Signup;