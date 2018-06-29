
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };

class Work extends React.Component {
    render() {
        return (
            <div>
                I grow up in the dallas fort worth area. I have been playing soccer since I was 4 years old. I also excelled in track and cross county.
Early on in my childhood I found a passion with computers and software development.
I moved to Tyler, Texas to pursue a degree in Computer Science and play soccer for The University of Texas at Tyler. 
While studying at the university I also started an internship at Land Management Brokerage. This started my career in the Energy Sector.
I began working on Web Applications and Land Management, later I also became I leader in GIS/Mapping and System Automation. March of 2011 I got married.
In 2014 I had my first child, and in October of 2018 I will have my second. 

Some of my hobbies are soccer, running, IOT, gardening, aquaponics, and theology
            </div>            
        );
    }
}

Work.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Work);