import React, { Component } from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';


const drawerWidth = 240;

const styles = {
    root: {
      flexGrow: 1,
    },
    appFrame: {
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    appBar: {
      position: 'absolute',
      transition: transitions.create(['margin', 'width'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitions.create(['margin', 'width'], {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen,
      }),
    },
    'appBarShift-left': {
      marginLeft: drawerWidth,
    },
    'appBarShift-right': {
      marginRight: drawerWidth,
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
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: palette.background.default,
      padding: spacing.unit * 3,
      transition: transitions.create('margin', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
    },
    'content-left': {
      marginLeft: -drawerWidth,
    },
    'content-right': {
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: transitions.create('margin', {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen,
      }),
    },
    'contentShift-left': {
      marginLeft: 0,
    },
    'contentShift-right': {
      marginRight: 0,
    },
  };

class App extends Component {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    console.log(styles.root);
    console.log(this.state);
    
    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          // paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List></List>
        <Divider />
        <List></List>
      </Drawer>
    );

    let before = null;
    let after = drawer;

    return (
      
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <div className="App">
            <Header />
            {before}
              <main
                  className={classNames(classes.content, classes[`content-${anchor}`], {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open,
                  })}
              >
                  <div className={classes.drawerHeader} />
                  <Typography>{'You think water moves fast? You should see ice.'}</Typography>
              </main>
            {after}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
