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
import {postData} from '../../business/fetch';
import { validateEmail, validatePass } from '../../business/helpers'

const postUrl = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/store-data';
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

  const handleForm = (e) => {
    const form = { ...userForm };
    form[e.target.name] = e.target.value;
    setUserForm(form);
  };


  const handleSubmit = async() => {
    const { firstName, lastName, ...form } = userForm;
    form.fullName = `${firstName} ${lastName}`;
    let test = { message: '', firstName: '', lastName: '', email: '', phone: '', password: '' }
    let isValid = true

    if (!userForm.firstName) {
      test.firstName = 'Please enter your first name'
      isValid = false
    }
    if (!userForm.lastName) {
      test.lastName = 'Please enter your last name'
      isValid = false
    }
    if (!validateEmail(userForm.email)) {
      console.log('validating email')
      console.log(validateEmail(userForm.email))
      test.email = 'Please enter an e-mail'
      isValid = false
    }
    if (!userForm.phone) {
      test.phone = 'Please enter your phone number'
      isValid = false
    }
    if (!validatePass(userForm.password, 8)) {
      test.password = 'Password must be at least 8 characters'
      isValid = false
    }
    setErrorMsg(test)
    if (isValid) {
      let data;
      data = await postData(postUrl, form);
      console.log(data['email']);
      props.onLoginSuccess(data);
    }
  };

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
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
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
  );
}
