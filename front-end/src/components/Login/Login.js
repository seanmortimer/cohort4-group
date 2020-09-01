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
import { Auth } from 'aws-amplify'
import { validateEmail, validatePass } from '../../business/helpers'

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

export default function Login(props) {
  const classes = useStyles();
  const [cogMsg, setCogMsg] = useState('')

  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
  })

  const [errorMsg, setErrorMsg] = useState({
    message: '',
    email: '',
    password: '',
  })

  const handleForm = (e) => {
    e.preventDefault();
    const form = { ...userForm };
    form[e.target.name] = e.target.value;
    setUserForm(form);
  }

  // COGNITO STUFF
  // to do: make sure if user has not confirmed their e-mail, they cannot log in yet. 

  const clearErrorState = () => {
    setCogMsg('')
  }

  const handleSubmit = async (e) => {
    clearErrorState()
    e.preventDefault()

    if (!validateEmail(userForm.email)) {
      setErrorMsg({ message: 'Please enter a valid email address' })
    }
    else if (!validatePass(userForm.password, 8)) {
      setErrorMsg({ message: 'Password must be at least 8 characters' })
    }

    else {
      try {
        const user = await Auth.signIn(userForm.email, userForm.password)
        console.log(user)
        props.onChecklistSuccess(user);
      }
      catch (error) {
        // setCogMsg(error)
        console.log('Error signing in: ', error)
        if (error.code === "NotAuthorizedException")
          setErrorMsg({ message: error.message })
        // setErrorMsg({message: 'Please enter a valid e-mail and password'})
      }
    }
  }

  // OLD API STUFF
  // const handleSubmit = async (e) => {
  //   const url = `${props.url}/fetch-data`;
  //   const { email, password } = userForm;
  //   const test = { message: '', email: '', password: '' };
  //   let isValid = true;
  //   e.preventDefault();
  //   if (!userForm.email) {
  //     test.email = 'Please enter a valid Email';
  //     isValid = false;
  //   }
  //   if (!userForm.password) {
  //     test.password = 'Please enter a valid Password';
  //     isValid = false;
  //   }
  //   setErrorMsg(test);
  //   if (isValid) {
  //     let data = await fetch(`${url}?email=${email}&password=${password}`);
  //     data = await data.json();
  //   //   console.log('data', data[1]);
  //     if (data[1] === 400) {
  //       return setErrorMsg({ message: 'That Email/Password did not match anything in our system. Please enter a valid Email and Password.' });
  //     }
  //     if (data['email']){

  //     }
  //     console.log('data :>> ', data);
  //     props.onLoginSuccess(data);
  //     // console.log(props.onLoginSuccess)
  //   }
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {/* <p>{cogMsg.message}</p> */}
        <p>{errorMsg.message}</p>
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
              <p>DISCLAIMER: All information gathered will be kept confidential and deleted after a 6 week period.</p>
            </Grid>
          </Grid>
          <Button
            type="submit"
            name="loogin"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Login
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
