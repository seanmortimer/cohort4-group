import React, { useState } from 'react';
import {
    Avatar, Button, CssBaseline, TextField, Grid, Box, Typography,
    Container, Link
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
// import { postData } from '../../business/fetch';
import { validateEmail, validatePass } from '../../business/helpers'
import { Auth } from 'aws-amplify'
import Confirmation from '../Confirmation/Confirmation'
import Login from '../Login/Login'

// const postUrl = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/store-data';

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
    },
    disclaimer: {
        textAlign: 'center'
    }
}));

export default function Register(props) {
    const classes = useStyles();


    const [userForm, setUserForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [errorMsg, setErrorMsg] = useState({
        message: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    })

    const [cogMsg, setCogMsg] = useState('') //Cognito validation messages
    // const [page, setPage] = useState(false);
    const [page, setPage] = useState(null);


    const handleForm = (e) => {
        const form = { ...userForm };
        form[e.target.name] = e.target.value;
        setUserForm(form);
    };

    const clearErrorState = () => {
        setCogMsg('')
    }

    const handleSubmit = async (e) => {
        clearErrorState()
        const { firstName, lastName, phone, email, password } = userForm;
        let username = email
        let phone_number = '+1' + phone

        try {
            const signUpResponse = await Auth.signUp({
                username,
                password,
                attributes: {
                    name: firstName,
                    family_name: lastName,
                    phone_number: phone_number,
                }
            });
            console.log(signUpResponse);
            setPage('success')
        } catch (error) {
            setCogMsg(error)
            console.log(cogMsg)
        }
    }

    const validateForm = async (e) => {
        const { firstName, lastName, ...form } = userForm;
        form.fullName = `${firstName} ${lastName}`;
        let msg = { message: '', firstName: '', lastName: '', email: '', phone: '', password: '' }
        let isValid = true

        if (!userForm.firstName) {
            msg.firstName = 'Please enter your first name'
            isValid = false
            setErrorMsg(msg)
            return
        }

        if (!userForm.lastName) {
            msg.lastName = 'Please enter your last name'
            isValid = false
            setErrorMsg(msg)
            return
        }

        if (!validateEmail(userForm.email)) {
            msg.email = 'Please enter an e-mail'
            isValid = false
            setErrorMsg(msg)
            return
        }

        if (!userForm.phone) {
            msg.phone = 'Please enter your phone number'
            isValid = false
            setErrorMsg(msg)
            return
        }

        if (!validatePass(userForm.password, 8)) {
            msg.password = 'Password must be at least 8 characters'
            isValid = false
            setErrorMsg(msg)
            return
        }

        if (isValid) {
            msg.isValid = true
            setErrorMsg(msg)
        }
    }

    const handleLoginPageSwitch = () => {
        setPage('login')
    }

    const handlePageChange = () => {
        if (page === null) {
            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <p>{cogMsg.message}</p>
                        <form
                            className={classes.form}
                            noValidate
                            onChange={handleForm}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        error={errorMsg.firstName ? true : false}
                                        helperText={errorMsg.firstName}
                                        onBlur={validateForm}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        error={errorMsg.lastName ? true : false}
                                        helperText={errorMsg.lastName}
                                        onBlur={validateForm}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        error={errorMsg.email ? true : false}
                                        helperText={errorMsg.email}
                                        onBlur={validateForm}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        autoComplete="phone"
                                        error={errorMsg.phone ? true : false}
                                        helperText={errorMsg.phone}
                                        onBlur={validateForm}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        error={errorMsg.password ? true : false}
                                        helperText={errorMsg.password}
                                        onBlur={validateForm}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.disclaimer}
                                        variant='subtitle2'
                                        color="textSecondary"
                                    >
                                        DISCLAIMER: All information gathered will be kept confidential
                                        and deleted after a 6 week period.
                                        </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                                disabled={!errorMsg.isValid}
                            >
                                Sign Up
            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button onClick={handleLoginPageSwitch}>
                                        Already have an account? Sign in
                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5} />
                </Container>
            )
        }
        if (page === 'success') {
            return (
                <Confirmation onChecklistSuccess={props.onChecklistSuccess} />
            )
        }
        if (page === 'login') {
            return (
                <Login onChecklistSuccess={props.onChecklistSuccess} />
            )
        }
    }

    return (
        <div>
            {handlePageChange()}
        </div>
    )
}
