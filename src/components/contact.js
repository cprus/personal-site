import React, { Component } from 'react';
import Navigation from './navigation';
import Footer from './footer';

export default () => {
        return (
            <div className="contactbody">
            <Navigation />
            <div className="containerwidth contactform">
                <h2>Contact Me!</h2>

                <p>Please feel free to contact me with any questions about my work or any possible employment opportunities. The best way to get a hold of me is to send me a message on LinkedIn. You can find my profile <a href="https://www.linkedin.com/in/collin-prusse/" target="_blank"><span id="span">here.</span></a></p>

            </div>
            <Footer/>
            </div>
        );
    }

    