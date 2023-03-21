import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStateContext } from '../contexts/ContextProvider';

const Login=({handleChange})=>{
    const { currentColor} = useStateContext();
    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:currentColor}
    const btnstyle={margin:'8px 0'}
    return(
        <div className=" dark:bg-secondary-dark-bg bg-white text-white">

        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color={currentColor} variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}

export default Login