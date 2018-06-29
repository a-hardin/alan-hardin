import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, HashRouter } from "react-router-dom";
import Header from './Component/Header';
import About from './Component/About';
import Resume from './Component/Resume';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


const styles = {
    root: {
      flexGrow: 1,
    },
    main: {
      marginTop: "80px",
      paddingTop: "100px",
      height: '100%',
      minHeight: '200px',
      width: 'calc(100% - 24px)',
    }
  };

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <HashRouter>
        <Route
        render={({ location }) => (
          <div className={classes.root}>
              <Header />
              
              <div className={classes.main}>
                
                  <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                      
                      <Switch location={location}>
                        <Route exact path="/" component={About}></Route>
                        <Route path="/resume" component={Resume}></Route>
                        <Route path="/contact" component={Contact}></Route>
                      </Switch>
                      
                    </CSSTransition>
                  </TransitionGroup>
                
              </div>
              
              <Footer />
          </div>
        )}
        />
      </HashRouter>
    );
  }
}



App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
