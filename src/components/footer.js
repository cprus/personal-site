import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default () => {
    return(
        <div>
            <footer>
                <ul>
                    <li><a href="https://github.com/cprus" target="_blank"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/collin-prusse/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/Collinalllcars" target="_blank"><i className="fab fa-twitter"></i></a></li>
                </ul>
                <p className="footerp">Copyright&copy; 2018 Collin Prusse</p>
                <div className="footermade">
                <ul>
                    <li><p>Made with React</p></li>
                    <li><img id="react" src="../../images/react.png" alt="React Logo"/></li>
                </ul>
                </div>
            </footer>
        </div>
    )
}