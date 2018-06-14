import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
  };

class Footer extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Footer);