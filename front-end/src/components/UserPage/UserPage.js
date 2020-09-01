import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid, TextField, CssBaseline, Button, Avatar } from '@material-ui/core';
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
    const history = useHistory();
    const classes = useStyles();

    const name = props.userData['body']['body'].first_name + ' '
        + props.userData['body']['body'].last_name

    const [userForm, setUserForm] = useState({
        password: '',
        oldPassword: '',
        confirmPassword: '',
    });

    const [errorMsg, setErrorMsg] = useState({
        password: '',
        oldPassword: '',
        confirmPassword: '',
    });

    const [isChanging, setIsChanging] = useState(false);

    const [updateData, setUpdateData] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const onClickUpdateProfile = (e) => {
        setUpdateData(true)
    }

    const handleSignOut = async (e) => {
        let data = {
            email: props.userData['body']['body'].email,
            date: props.userData['body']['body'].date
        }
        // Adds the sign out time stamp
        const url = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/sign-out';
        const response = await putData(url, data);
        console.log(response)
        console.log('Pressed sign out')
        //To do - Redirect to login page
    }

    const handleForm = (e) => {
        e.preventDefault();
        const form = { ...userForm };
        form[e.target.name] = e.target.value;
        setUserForm(form);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsChanging(true);

        try { 
            const currentUser = await Auth.currentAuthenticatedUser();
            await Auth.changePassword(
                currentUser,
                userForm.oldPassword,
                userForm.password
            );
            setUpdateData(false)
            setSuccessMessage(true)
        } catch (error) {
            // onError(error);
            console.log(error)
            setIsChanging(false);
        }
        // const url = `${props.url}/fetch-data`;
        // const { email, password, phone } = userForm;
        // const msg = { email: '', password: '', phone: '' };
        // let isValid = true;
        
        // if (!userForm.email) {
        //     msg.email = 'Please enter a valid Email';
        //     isValid = false;
        // }
        // if (!userForm.password) {
        //     msg.password = 'Please enter a valid Password';
        //     isValid = false;
        // }
        // if (!userForm.phone) {
        //     msg.phone = 'Please enter a valid Phone';
        //     isValid = false;
        // }
    
        // setErrorMsg(msg);

        // if (isValid) {
        //     console.log('Pressed save profile')
        // }

        // if (isValid) {
        //     let data = await fetch(`${url}?email=${email}&password=${password}`);
        //     data = await data.json();
        //     if (data[1] === 400) {
        //         return setErrorMsg({ message: 'That Email/Password did not match anything in our system. Please enter a valid Email and Password.' });
        //     }
        //     console.log('data :>> ', data);
        //     props.onLoginSuccess(data);
        //     // console.log(props.onLoginSuccess)
        // }
    }

    const updatedMessageDisply = () => {
        if (successMessage === true){
            return ( 
                <p>Your Password has been updated successfully</p>
            )
        }
    }

    const handleUpdateProfile = (e) => {
        if (updateData === true) {
            return (
                <form className={classes.form} noValidate onChange={handleForm}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="oldPassword"
                            label="Old Password"
                            type="password"
                            name="oldPassword"
                            autoComplete="oldPassword"
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
                            label="New Password"
                            type="password"
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
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="confirm-Password"
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
                        Save Password
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
                    Welcome, {name}
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
                    Change Password
                    </Button>
                {handleUpdateProfile()}
                {updatedMessageDisply()}
                <Grid container justify="flex-end">
                </Grid>
            </div>
            <Box mt={5} />
        </Container>
    );
}
