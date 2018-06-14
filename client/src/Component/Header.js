import React from "react";
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
  });

class Header extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Router>
                        <Link to="/" exact >
                            <Avatar
                                alt="Adelle Charles"
                                src="https://media.licdn.com/dms/image/C5603AQGSYNnMjMlTUQ/profile-displayphoto-shrink_200_200/0?e=1534377600&v=beta&t=FbpCmcC8QrB5Mkr20Rx05YnW5PYKQdHCNnx2UuY6OBQ"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Link>
                    </Router>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Alan Hardin
                    </Typography>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
                    
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Header);