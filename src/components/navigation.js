import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div id="nav-bar">
            <div id="name-logo">
            <h2>Collin Prusse</h2>
            <h4>Full-Stack Web Developer</h4>
            </div>


            <ul>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </div>

    )
}