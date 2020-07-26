import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function ChecklistSucces(props) {
  // const [index, setIndex] = useState(0);
  const name = props.user[0].fullName
  const classes = useStyles();

  const handleCancel = () => {
    console.log('Pressed cancel');
  };

  const handleSignIn = () => {
    console.log('Pressed sign in');
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
        <h1>Congratulations {name}! You may sign in to the space.</h1>
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
            Submit
          </Button>
        </Grid>
      </div>
    </Container>
  );
}
