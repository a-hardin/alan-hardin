
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Education from './Education';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };

class Resume extends React.Component {
    render() {
        return (
            <Grid container spacing={24} justify="center" alignItems="center" >
                <Grid item xs={3}>
                    <div>
                        This is my resume
                    </div>
                </Grid>
                <Education />
            </Grid>
        );
    }
}

Resume.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Resume);