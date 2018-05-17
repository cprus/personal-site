import React, { Component } from 'react';

export default () => {
    return(
        <div>
            <footer>
                <ul>
                    <li><a href="https://github.com/cprus" target="_blank"><img id="github" src="../../images/github.png" alt="Github Logo"/></a></li>
                    <li><a href="https://www.linkedin.com/in/collin-prusse/" target="_blank"><img id="linkedin" src="../../images/linkedin.png" alt="LinkedIn Logo"/></a></li>
                    <li><a href="https://twitter.com/Collinalllcars" target="_blank"><img id="twitter" src="../../images/twitter.png" alt="Twitter Logo"/></a></li>
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