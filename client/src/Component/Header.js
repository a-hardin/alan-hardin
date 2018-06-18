import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Avatar }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
            <AppBar className={classNames(classes.appBar, {
                [classes.appBarShift]: this.props.open,
                [classes[`appBarShift-${this.props.anchor}`]]: this.props.open,
              })}>
                <Toolbar >
                    <Router>
                        <Link to="/" >
                            <Avatar
                                alt="Adelle Charles"
                                src="https://media.licdn.com/dms/image/C5603AQGSYNnMjMlTUQ/profile-displayphoto-shrink_200_200/0?e=1534377600&v=beta&t=FbpCmcC8QrB5Mkr20Rx05YnW5PYKQdHCNnx2UuY6OBQ"
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        </Link>
                    </Router>
                    
                    <Typography variant="title" color="inherit" align="center" className={classes.flex}>
                        Alan Hardin
                    </Typography>
                    <IconButton 
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(classes.menuButton, this.props.open && classes.hide)}>
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