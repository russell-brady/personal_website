import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

var img = require('../avatar.png');

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={ img }
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>
                            <hr/>

                            <p>Python | Java | Node.js | Express | MySQL | Android | Flask | Machine Learning | ARCore</p>

                            <div className="social-links">

                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/russell-brady-926751145/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github*/}
                                <a href="https://github.com/russell-brady" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;