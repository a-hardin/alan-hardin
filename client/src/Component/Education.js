
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid }from '@material-ui/core';
require('../img/ut-tyler.jpeg');

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Education extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={3}>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="src/img/ut-tyler.jpeg"
                    title="The University of Texas as Tyler"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Bachelor of Computer Science
                        </Typography>
                        <Button size="small" color="primary" href="http://www.uttyler.edu/">
                            The University of Texas as Tyler
                        </Button>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>
            
        );
    }
  
}

Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);