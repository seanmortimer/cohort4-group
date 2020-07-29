import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Checklist from '../Checklist/Checklist';
import ChecklistSuccess from '../ChecklistSuccess/ChecklistSuccess';
import { secondaryListItems } from './listItems';
import { postData } from '../../business/fetch';
import UserPage from '../UserPage/UserPage';

const api = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        TMtDW
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);

  const [page, setPage] = useState(null);
  // const [page, setPage] = useState(<Login url={api} onLoginSuccess={handleLoginSuccess} />);

  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSpaceSignIn = async (user) => {
    const url = `${api}/sign-in`;
    const data = { email: user.body.email };
    // console.log('spacesignin email :>> ', data);
    // console.log('lets sign in');
    // const user = {user: "a user goes here"}
    const response = await postData(url, data);

    // Local Storage
    localStorage.setItem('email', user.body.email);
    localStorage.setItem('password', user.body.password);
    // console.log();
    setPage(<UserPage userData={response} userName={user} />);
    // console.log('response :>> ', response);
    // console.log('response :>> ', user);
  };

  const handleChecklistSuccess = (user) => {
    // console.log('currentUser line 154 :>> ', currentUser);
    // console.log('user line 155 :>> ', user);
    setPage(<ChecklistSuccess user={user} onSuccess={() => handleSpaceSignIn(user)} />);
  };

  const handleLoginSuccess = (user) => {
    // console.log('logged in user :>> ', user);
    setCurrentUser(user);
    setPage(<Checklist onSuccess={() => handleChecklistSuccess(user)} />);
  };

  // console.log('currentUser from dash :>> ', currentUser);
  if (!page) setPage(<Login url={api} onLoginSuccess={handleLoginSuccess} />);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Teamwork Makes the Dream Work || {currentUser ? currentUser['body'].fullName : 'No user logged in'}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* <ListItem button> */}
          <ListItem
            button
            onClick={() => setPage(
              <Register onLoginSuccess={handleLoginSuccess} />,
            )}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>

          {/* <ListItem button> */}
          <ListItem
            button
            onClick={() => setPage(
              <Login
                onLoginSuccess={handleLoginSuccess}
                url={api}
              />,
            )}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          {/* <ListItem button> */}
          <ListItem
            button
            onClick={() => setPage(
              <Checklist onSuccess={handleChecklistSuccess} />,
            )}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Checklist" />
          </ListItem>
          <ListItem
            button
            onClick={() => setPage(
              <UserPage />,
            )}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="User Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Null also" />
          </ListItem>
        </List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {page}
        {/* <Checklist /> */}
        <Copyright />
      </main>
    </div>
  );
}
