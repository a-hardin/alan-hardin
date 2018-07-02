
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };

class About extends React.Component {
    render() {
        return (
            <Grid container spacing={24} justify="center" alignItems="center" >
                <Grid item xs={3}>
                    <div className="wow bounceIn" >
                        I grow up living in the dallas fort worth area. I found interest early on in my life with computer. I first learned to code 
                        using a TI83 calculator from Math class. My first program was a guess my number game, right away I was hooked. I later in high school would go
                        on to build desktop applications with c++ and web sites with php, html, and css.
                        I also excelled in track, cross county, and soccer.
        I moved to Tyler, Texas to pursue a degree in Computer Science and play soccer for The University of Texas at Tyler. 
        While studying at the university I also started an internship at Land Management Brokerage. This started my career in the Energy Sector.
        I began working on Web Applications and Land Management, later I also became I leader in GIS/Mapping and System Automation. March of 2011 I got married.
        In 2014 I had my first child, and in October of 2018 I will have my second. 

        Some of my hobbies are soccer, running, IOT, gardening, aquaponics, and theology
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