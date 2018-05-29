import React, { Component } from 'react';

export default () => (
    <div className="portbody">
        <div className="containerwidth">
            <div className="portitems">
            <div className="port-item">
            <a href="https://expensify-app-react-28.herokuapp.com/" target="_blank">
            <img src="../../images/expensify.png" alt = "Expensify App"/>
            </a>
            <p>Responsive expenses tracking application using React and Redux for the front-end, and Firebase for back-end storage and login authentication.</p>
            </div>
            <div className="port-item">
            <a href="https://weather-app-collin-portfolio.herokuapp.com/" target="_blank">
            <img src="../../images/weather.jpg" alt = "Weather App"/>
            </a>
            <p>A simple weather search app using a weather API to view trends in the weather. Information is stored in Redux and a third-party library is used to graph out the data.</p>
            </div>
            <div className="port-item">
            <a href="https://redux-blog-collin-portfolio.herokuapp.com/" target="_blank">
            <img src="../../images/reduxblog.jpg" alt = "Redux Blog"/>
            </a>
            <p>Simple blog post application created in React that stores posts within the Redux store.</p>
            </div>
            <div className="port-item">
            <a href="https://indecisionapp-collin-portfolio.herokuapp.com/" target="_blank">
            <img src="../../images/indecision.jpg" alt = "Indecision App"/>
            </a>
            <p>A to-do type application that stores user input data in the React front-end store, and randomly selects a task to be completed.</p>
            </div>
            </div>
        </div>
    </div>
);