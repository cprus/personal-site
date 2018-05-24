import React, { Component } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Portfolio from './portfolio';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div id="main-body">
                    <h2>Full-Stack Web Developer</h2>
                    <h5>Specializing in responsive Front-End development with React and Redux</h5>
                    <div className="maincolor">
                        <AnchorLink href='#port'>
                        <p>VIEW PORTFOLIO</p>
                        <i className="fas fa-angle-down"></i>
                        </AnchorLink>
                    </div>
                </div>
                <div id="port">
                <Portfolio />
                </div>
                
                <Footer />
            </div>
        );
    }
}

export default HomePage;