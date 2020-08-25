import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Avatar, CssBaseline, List, ListItem } from '@material-ui/core';

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
  }
}));

export default function ChecklistFail(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sorry, you cannot enter the space. Please stay at home and call 811 health link and refer to these resources:
        </Typography>
        <List>
          <ListItem>
            <a href='https://www.alberta.ca/covid-19-testing-in-alberta.aspx?utm_source=google&utm_medium=sem&utm_campaign=Covid19&utm_term=testing&utm_content=GoA-v6&gclid=Cj0KCQjw7ZL6BRCmARIsAH6XFDIEcAx-oY6eoRVO3Bqid_RALNAnP4B5Q7i8rCS8Sq51Q0mkY-LsHccaArQwEALw_wcB'
            >Covid-19 Testing</a>
          </ListItem>
          <ListItem>
            <a href='https://www.alberta.ca/lookup/COVID-19-personal-risk-severity-assessment.aspx'
            >Risk Severity Assessment</a>
          </ListItem>
        </List>
      </div>
    </Container>
  );
}
