import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { putData } from '../../business/fetch'
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: 15,
        fontSize: 25
    },
    updateBtn: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function UserPage(props) {
    const classes = useStyles();
    const userData = props.userData['body'].fullName

    const [updateData, setUpdateData] = useState(false)

    const [userForm, setUserForm] = useState({
        email: '',
        password: '',
        phone: '',
    });
    const [errorMsg, setErrorMsg] = useState({
        message: '',
        email: '',
        password: '',
    });

    const onClickUpdateProfile = (e) => {
        setUpdateData(true)
    }
    const handleSignOut = async (e) => {
        let data = {
            email: props.userData['body']['body'].email,
            date: props.userData['body']['body'].date
        }
        const url = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/sign-out';
        await putData(url, data);

    }
    const handleForm = (e) => {
        e.preventDefault();
        const form = { ...userForm };
        form[e.target.name] = e.target.value;
        setUserForm(form);
        //onClickUpdateProfile
    }

    const handleSubmit = async (e) => {
        const url = `${props.url}/fetch-data`;
        const { email, password } = userForm;
        const test = { message: '', email: '', password: '', phone: '' };
        let isValid = true;
        e.preventDefault();
        if (!userForm.email) {
            test.email = 'Please enter a valid Email';
            isValid = false;
        }
        if (!userForm.password) {
            test.password = 'Please enter a valid Password';
            isValid = false;
        }
        if (!userForm.phone) {
            test.phone = 'Please enter a valid Phone';
            isValid = false;
        }
    

        setErrorMsg(test);
        if (isValid) {
            let data = await fetch(`${url}?email=${email}&password=${password}`);
            data = await data.json();
            //   console.log('data', data[1]);
            if (data[1] === 400) {
                return setErrorMsg({ message: 'That Email/Password did not match anything in our system. Please enter a valid Email and Password.' });
            }
            if (data['email']) {

            }
            console.log('data :>> ', data);
            props.onLoginSuccess(data);
            // console.log(props.onLoginSuccess)
        }
    }

    const handleUpdateProfile = (e) => {
        if (updateData == true) {
            return (
                <form className={classes.form} noValidate onChange={handleForm}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            error={!!errorMsg.email}
                            helperText={errorMsg.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="text"
                            id="password"
                            autoComplete="current-password"
                            error={!!errorMsg.password}
                            helperText={errorMsg.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="text"
                            id="phone"
                            autoComplete="current-phone"
                            error={!!errorMsg.phone}
                            helperText={errorMsg.phone}
                        />
                    </Grid>
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.updateBtn}
                        onClick={handleSubmit}
                    >
                        Save Profile
                    </Button>
                </Grid>
                </form>
            )
        }
        // const url = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/fetch-data';
        // let data = await getData(url, userForm.email, userForm.password)
        // console.log(userForm)
        // console.log(form)
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Welcome, {props.userName['body'].fullName}
                </Typography>
                <p>{errorMsg.message}</p>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSignOut}
                >
                    Sign Out
                    </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.updateBtn}
                    onClick={onClickUpdateProfile}
                >

                    Update Profile
                    </Button>
                {handleUpdateProfile()}
                <Grid container justify="flex-end">
                </Grid>
            </div>
            <Box mt={5} />
        </Container>
    );
}
