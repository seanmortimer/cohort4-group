import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
        margin: 10,
        padding: 10,
        display: 'inline-block',
    }
}))

export default function AdminDisplay(props) {
    const classes = useStyles();
    let data = props.item

    return (
        <li className={classes.listItem}>
            Date: {data.date} <br></br>
            Login Time: {data.loginTime} <br></br>
            Logout Time: {data.logOutTime} <br></br>
            Email: {data.email} <br></br>
        </li>
    )
}