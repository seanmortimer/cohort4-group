import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography, Button, Avatar, Grid} from '@material-ui/core';
import AdminDisplay from '../AdminDisplay/AdminDisplay';
import PageviewIcon from '@material-ui/icons/Pageview';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'grid',
//     justifyContent: 'center',
//     marginTop: 64
//     // flexWrap: 'wrap',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   header: {
//     textAlign: 'center'
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//     display: 'grid'
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const useStyles = makeStyles((theme) => ({
  container: {
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
    display: 'grid',
    justifyContent: 'center',
    textAlign: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AdminDash() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [queryData, setQueryData] = useState([])

  const handleForm = (e) => {
    setStartDate(document.getElementById('start_date').value)
    setEndDate(document.getElementById('end_date').value)
  }

  const handleSubmit = async (e) => {
    let url = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/fetch-data'
    let data = await fetch(`${url}?Start_Date=${startDate}&End_Date=${endDate}`);
    data = await data.json();
    setQueryData(data.body)
  }

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar}>
        <PageviewIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
          Hello, Admin
      </Typography>
      <form className={classes.form} noValidate onChange={handleForm}>
      <Grid container spacing={2}>
            <Grid item xs={12}>
        <TextField
          id="start_date"
          label="Select start date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
            />
          </Grid>
          <Grid item xs={12}>
        <TextField
          id="end_date"
          label="Select end date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
            />
          </Grid>
        </Grid>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        // disabled={!errorMsg.isValid}
        >
          Start Query
            </Button>
      </form>
      <ol>
        {queryData.map((item) => {
          console.log(item)
          return <AdminDisplay item={item}
            key={item.key}
            // key={Object.keys(queryData)}
          />
        })}
      </ol>
    </div>
  );
}
