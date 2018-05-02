import React, { Component } from 'react';
import Navigation from './navigation';

export default () => {
    const aboutMe = "I am a recent graduate of the Coding Dojo Full-Stack Web Developer program. I am proficient in React/Redux, MEAN, and Python with Django, and am an excellent communicator and problem solver with a knack for quickly learning new technologies and libraries. I'm currently seeking an opportunity where I can use creativity alongside my technical abilities to solve unique and interesting problems."


        return (
            <div>
            <Navigation />
            <div>
            <h1>About Collin</h1>
            <p>{aboutMe}</p>

            <p>View my Github</p>
            <p>View my LinkedIn</p>

            </div>
            </div>
        );
    };

    