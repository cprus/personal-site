import React, { Component } from 'react';
import Navigation from './navigation';
import Footer from './footer';

export default () => {
    const aboutMe = "I am a recent graduate of the Coding Dojo Full-Stack Web Developer program. I am proficient in React/Redux, MEAN, and Python with Django, and am an excellent communicator and problem solver with a knack for quickly learning new technologies and libraries. I'm currently seeking an opportunity where I can use creativity alongside my technical abilities to solve unique and interesting problems."


        return (
            <div className="aboutbody">
            <Navigation />
                <div className="containerwidth aboutcontainer">
                    
                    <div className="myface">
                        <img src="../../images/myface.jpg" alt="My Photo"/>
                    </div>
                    <div className="aboutinfo">
                    <h1>About Collin</h1>
                    <p>{aboutMe}</p>

                    <a href="https://github.com/cprus" target="_blank">View My Github</a>
                    <a href="https://www.linkedin.com/in/collin-prusse/" target="_blank">View My LinkedIn</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };

    