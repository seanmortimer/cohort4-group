import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Login from '../Login/Login'

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


export default function Confirmation(props) {
    const classes = useStyles();
    const [page, setPage] = useState(false)

    const handleLogin = () => {
        setPage(true)
    }

    const handlePages = () => {
        if (page === false) {
            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Please confirm your e-mail! A verification link as been sent.
                        </Typography>
                        <Button
                            // type="submit"
                            name="login"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </div>
                </Container>
            )
        }
        if (page === true) {
            return (
                <Login onChecklistSuccess={props.onChecklistSuccess} />
            )
        }
    }

    return (
        <div>
            {handlePages()}
        </div>
    )
}

    // Old return stuff
    // return (
        // <Container component="main" maxWidth="xs">
        //     <CssBaseline />
        //     <div className={classes.paper}>
        //         <Avatar className={classes.avatar}>
        //             <LockOutlinedIcon />
        //         </Avatar>
        //         <Typography component="h1" variant="h5">
        //             Please confirm your e-mail! A verification link as been sent.
        // </Typography>
        //         <Button
        //             // type="submit"
        //             name="login"
        //             fullWidth
        //             variant="contained"
        //             color="primary"
        //             className={classes.submit}
        //             onClick={handleLogin}
        //         >
        //             Login
        //         </Button>
        //     </div>
        // </Container>
//     );
// }
