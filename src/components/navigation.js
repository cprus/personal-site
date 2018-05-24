import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';

export default (props) => {


    return (
        
        <div id="nav-bar">
            <div className="containerwidth navcontainer">
                
                <div id="logo">
                <Link to="/">
                    <img src="../../images/logo.png" alt="CP Logo"/>
                
                    <div id="name-logo">
                        <h2>Collin Prusse</h2>
                        <h4>Full-Stack Web Developer</h4>
                    </div>
                </Link>
                </div>
                <div className="menu">
                <ResponsiveMenu
                    menuOpenButton={<i className="fas fa-bars"></i>}
                    menuCloseButton={<i className="fas fa-times"></i>}
                    changeMenuOn="50rem"
                    largeMenuClassName="large-menu-classname"
                    smallMenuClassName="small-menu-classname"
                    menu={
                    <ul>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>
                    }
                 />
                    
                </div>
                 
            </div>
        </div>

    )
}