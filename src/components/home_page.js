import React, { Component } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Portfolio from './portfolio';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div id="main-body">
                <h2>Full-Stack Web Developer</h2>
                <h5>Specializing in Front-end development with React and Redux</h5>
                <p>VIEW PORTFOLIO</p>
                <img id="arrow" src="../../images/arrow.png" alt="Arrow"/>
                </div>
                <Portfolio />
                <Footer />
            </div>
        );
    }
}

export default HomePage;