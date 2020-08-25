import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Avatar, Button, Grid, Typography, CssBaseline } from '@material-ui/core';

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

export default function ChecklistSuccess(props) {
  const classes = useStyles();
  const name = props.user.attributes.name + ' ' + props.user.attributes.family_name

  const handleCancel = () => {
    console.log('Pressed cancel');
  };

  const handleSignIn = () => {
    console.log('Pressed entering now');
    props.onSuccess();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Covid-19 Screening Checklist
        </Typography>
        <h1>Congratulations {name}! You may enter into the to the space.</h1>
        <Grid container justify="space-between">
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignIn}
          >
            Entering Now
          </Button>
        </Grid>
      </div>
    </Container>
  );
}
