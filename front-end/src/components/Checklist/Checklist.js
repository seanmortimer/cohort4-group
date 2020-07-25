import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { List, ListItem } from '@material-ui/core';

// TODO: Add stepper component to show progress

const checklist = [
  {
    question: 'Are you experiencing any of the following symptoms:',
    list: [
      'Fever',
      'Cough',
      'Shortness of Breath or Difficulty Breathing',
      'Sore Throat',
      'Chills',
      'Painful swallowing',
      'Runny Nose or Nasal Congestion',
    ],
  },
  {
    question: 'Are you experiencing any of the following symptoms:',
    list: [
      'Feeling unwell / Fatigued',
      'Nausea / Vomiting / Diarrhea',
      'Unexplained loss of appetite',
      'Loss of sense of taste or smell',
      'Muscle/ Joint aches',
      'Headache',
      'Conjunctivitis (commonly known as pink eye)',
    ],
  },
  {
    question: 'Have you travelled outside of Canada in the last 14 days?',
  },
  {
    question: 'Have you had close unprotected* contact (face-to-face contact within 2 meters/6 feet) in the last 14 days with someone who is ill**?',
  },
  {
    question: 'In the past 14 days, did you return from travel outside of Canada, or did you have close contact with someone who is confirmed as having COVID-19?',
  },
  {
    question: 'Have you or anyone in your household been in close unprotected* contact in the last 14 days with someone who is being investigated or confirmed to be a case of COVID-19?',
  },
];

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

export default function Checklist(props) {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const handleNo = () => {
    if (index < checklist.length - 1) {
      setIndex(index + 1);
    } else {
      props.onSuccess();
    }
  };

  const handleList = () => {
    // console.log('handle it');
    let count = 0;
    if (!checklist[index].list) {
      return null;
    }
    const listItems = checklist[index].list.map(
      (item) =>
        <ListItem key={count++}>·{item}</ListItem>,
    );

    return <List>{listItems}</List>;
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
        <h1>{checklist[index].question}</h1>
        <form className={classes.form} noValidate>
          {handleList(0)}
          <Grid container justify="space-between">
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Yes
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleNo}
            >
              No
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
