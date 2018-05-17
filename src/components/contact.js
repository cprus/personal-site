import React, { Component } from 'react';
import Navigation from './navigation';
import Footer from './footer';

export default () => {
        return (
            <div className="contactbody">
            <Navigation />
            <div className="containerwidth contactform">
                <h2>Contact Me!</h2>

                <form action="mailto:collinprusse@mac.com" method="post" enctype="text/plain">
                Name:
                <input type="text" name="name"/><br/>
                E-mail:
                <input type="text" name="mail"/><br/>
                Comment:
                <input type="textarea" name="comment" size="50"/><br/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
                </form>
            </div>
            <Footer/>
            </div>
        );
    }

    