
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        paddingTop: 30,
        minWidth: 500,
    },
    middle: {
      paddingTop: 25,
    },
    bottom: {
      paddingTop: 15,
    },
  };

class About extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <Grid container spacing={24} justify="center" alignItems="center" >
                <Grid item xs={3}>
                    <div className="wow fadeInUp" data-wow-offset="50" data-wow-delay="0.5s">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="display3" component="h1" align="center">
                                    Alan Hardin
                                </Typography>
                                <Typography variant="title" align="center" className={classes.middle} color="textSecondary">
                                    Software Developer | GIS | Land Management
                                </Typography>
                                <Typography component="p" align="center" className={classes.bottom}>
                                    817-727-2143 | alan.e.hardin@gmail.com | www.alan-hardin.com
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>   
                </Grid>
            </Grid>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(About);