import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Grid, Avatar, Button }from '@material-ui/core';

const styles = ({
    appBar: {
      position: 'absolute',
      color: 'default',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    ul: {
        listStyleType: 'none'
    },
    li: {
        float: 'left',
        height: '100%',
        display: 'block'
    }
  });

class Header extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <AppBar className={classes.appBar}>
                <Toolbar >
                    <Grid container spacing={24} alignItems="center" >
                        <Grid item xs={3}>
                            <Grid container spacing={8} justify="flex-start" alignItems="center">
                                <Grid item xs={3}>

                                        <NavLink to="/" >
                                            <Avatar
                                                alt="Adelle Charles"
                                                src="https://media.licdn.com/dms/image/C5603AQGSYNnMjMlTUQ/profile-displayphoto-shrink_200_200/0?e=1534377600&v=beta&t=FbpCmcC8QrB5Mkr20Rx05YnW5PYKQdHCNnx2UuY6OBQ"
                                                className={classNames(classes.avatar, classes.bigAvatar)}
                                            />
                                        </NavLink>

                                </Grid>
                        
                                <Grid item xs={4}>
                                    <Typography variant="title" color="inherit" align="left" className={classes.flex}>
                                        Alan Hardin
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            
                            <Grid container spacing={24} justify="center" alignItems="center">
                                
                                <Grid item xs={2}>
                                    <Button component={NavLink} to="/">
                                        About
                                    </Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button component={NavLink} to="/resume">
                                        Resume
                                    </Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button component={NavLink} to="/contact">
                                        Contact
                                    </Button>
                                </Grid>
                                
                            </Grid>
                            
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
                    
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Header);