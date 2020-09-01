import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Avatar, Grid } from '@material-ui/core';
import AdminDisplay from '../AdminDisplay/AdminDisplay';
import PageviewIcon from '@material-ui/icons/Pageview';
import { deleteData } from '../../business/fetch'

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

  const handleCurrentDaySubmit = async (e) => {
    let url = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/fetch-data'
    let data = await fetch(`${url}?Start_Date=${dateStamp}&End_Date=${dateStamp}`);
    data = await data.json();
    console.log(data)
    setQueryData(data.body)
  }

  const handleDelete = async (e) => {
    let url = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/fetch-data'
    let url2 = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/delete'
    
    var d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    if (month<10){
      month = `0${month}`
    }
  
    let day = d.getDate()
    let deletionStamp = `${year}-${month}-${day}`
    let data = await fetch(`${url}?Start_Date='2020-03-05'&End_Date=${deletionStamp}`);
    data = await data.json();
    setQueryData(data.body)
    console.log(queryData)

    await queryData.map((item) => {
      let stuff = deleteData(`${url2}?email=${item.email}&date=${item.date}`,{date:item.date, email:item.email});
    })
  }

  var d = new Date();
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  if (month<10){
    month = `0${month}`
  }

  let day = d.getDate()
  let dateStamp = `${year}-${month}-${day}`


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
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleCurrentDaySubmit}
        // disabled={!errorMsg.isValid}
        >
          {dateStamp} Space Users
            </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleDelete}
        // disabled={!errorMsg.isValid}
        >
          Delete
            </Button>
      </form>
      <ol>
        {queryData.map((item) => {
          // console.log(item)
          return <AdminDisplay item={item}
            key={item.key}
          // key={Object.keys(queryData)}
          />
        })}
      </ol>
    </div>
  );
}
