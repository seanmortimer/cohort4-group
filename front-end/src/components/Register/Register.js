import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { postData } from '../../business/fetch';
import { validateEmail, validatePass } from '../../business/helpers'
import { Auth } from 'aws-amplify'
import Confirmation from '../Confirmation/Confirmation'

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
    const [page, setPage] = useState(false);

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
            setPage(true)
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
            console.log(validateEmail(userForm.email))
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

    const handlePageChange = () => {
        //If false, shows register fields, if true, moves to Checklist
        if (page === false) {
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
                                    <p>DISCLAIMER: All information gathered will be kept confidential and deleted after a 6 week period.</p>
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
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5} />
                </Container>
            )
        }
        if (page === true) {
            return (
                <Confirmation onChecklistSuccess={props.onChecklistSuccess} />
            )
        }
    }

    return (
        <div>
            {handlePageChange()}
        </div>
    )
}


// Old return stuff

    // const handleSubmit = async() => {
    //   const { firstName, lastName, ...form } = userForm;
    //   form.fullName = `${firstName} ${lastName}`;
    //   let test = { message: '', firstName: '', lastName: '', email: '', phone: '', password: '' }
    //   let isValid = true

    //   if (!userForm.firstName) {
    //     test.firstName = 'Please enter your first name'
    //     isValid = false
    //   }
    //   if (!userForm.lastName) {
    //     test.lastName = 'Please enter your last name'
    //     isValid = false
    //   }
    //   if (!validateEmail(userForm.email)) {
    //     console.log('validating email')
    //     console.log(validateEmail(userForm.email))
    //     test.email = 'Please enter an e-mail'
    //     isValid = false
    //   }
    //   if (!userForm.phone) {
    //     test.phone = 'Please enter your phone number'
    //     isValid = false
    //   }
    //   if (!validatePass(userForm.password, 8)) {
    //     test.password = 'Password must be at least 8 characters'
    //     isValid = false
    //   }
    //   setErrorMsg(test)
    //   if (isValid) {
    //     let data;
    //     data = await postData(postUrl, form);
    //     console.log(data['email']);
    //     props.onLoginSuccess(data);
    //   }
    // };

    // return (
        // <Container component="main" maxWidth="xs">
        //   <CssBaseline />
        //   <div className={classes.paper}>
        //     <Avatar className={classes.avatar}>
        //       <LockOutlinedIcon />
        //     </Avatar>
        //     <Typography component="h1" variant="h5">
        //       Sign up
        //     </Typography>
        //     <p>{cogMsg.message}</p>
        //     <form
        //       className={classes.form}
        //       noValidate
        //       onChange={handleForm}
        //     >
        //       <Grid container spacing={2}>
        //         <Grid item xs={12} sm={6}>
        //           <TextField
        //             autoComplete="fname"
        //             name="firstName"
        //             variant="outlined"
        //             required
        //             fullWidth
        //             id="firstName"
        //             label="First Name"
        //             autoFocus
        //             error={errorMsg.firstName ? true : false}
        //             helperText={errorMsg.firstName}
        //           />
        //         </Grid>
        //         <Grid item xs={12} sm={6}>
        //           <TextField
        //             variant="outlined"
        //             required
        //             fullWidth
        //             id="lastName"
        //             label="Last Name"
        //             name="lastName"
        //             autoComplete="lname"
        //             error={errorMsg.lastName ? true : false}
        //             helperText={errorMsg.lastName}
        //           />
        //         </Grid>
        //         <Grid item xs={12}>
        //           <TextField
        //             variant="outlined"
        //             required
        //             fullWidth
        //             id="email"
        //             label="Email Address"
        //             name="email"
        //             autoComplete="email"
        //             error={errorMsg.email ? true : false}
        //             helperText={errorMsg.email}
        //           />
        //         </Grid>
        //         <Grid item xs={12}>
        //           <TextField
        //             variant="outlined"
        //             required
        //             fullWidth
        //             id="phone"
        //             label="Phone Number"
        //             name="phone"
        //             autoComplete="phone"
        //             error={errorMsg.phone ? true : false}
        //             helperText={errorMsg.phone}
        //           />
        //         </Grid>
        //         <Grid item xs={12}>
        //           <TextField
        //             variant="outlined"
        //             required
        //             fullWidth
        //             name="password"
        //             label="Password"
        //             type="password"
        //             id="password"
        //             autoComplete="current-password"
        //             error={errorMsg.password ? true : false}
        //             helperText={errorMsg.password}
        //           />
        //         </Grid>
        //         <Grid item xs={12}>
        //           <FormControlLabel
        //             control={<Checkbox value="allowExtraEmails" color="primary" />}
        //             label="I want to receive inspiration, marketing promotions and updates via email."
        //           />
        //         </Grid>
        //       </Grid>
        //       <Button
        //         type="button"
        //         fullWidth
        //         variant="contained"
        //         color="primary"
        //         className={classes.submit}
        //         onClick={handleSubmit}
        //       >
        //         Sign Up
        //       </Button>
        //       <Grid container justify="flex-end">
        //         <Grid item>
        //           <Link href="#" variant="body2">
        //             Already have an account? Sign in
        //           </Link>
        //         </Grid>
        //       </Grid>
        //     </form>
        //   </div>
        //   <Box mt={5} />
        // </Container>
    // );
// }
