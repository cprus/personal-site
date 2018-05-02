import React, { Component } from 'react';
import Navigation from './navigation';

class HomePage extends Component {
    render() {
        return (
            <div id="main-body">
                <Navigation />
                <h2>Full-Stack Web Developer</h2>
                <h5>Specializing in Front-end development with React and Redux</h5>
                <p>VIEW PORTFOLIO</p>
            </div>
        );
    }
}

export default HomePage;