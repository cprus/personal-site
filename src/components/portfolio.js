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
            <img src="../../images/weather.jpg" alt = "Weather App"/>
            <p>A simple weather search app using a weather API to view trends in the weather. Information is stored in Redux and a third-party library is used to graph out the data.</p>
            </div>
            <div className="port-item">
            <img src="../../images/reduxblog.jpg" alt = "Redux Blog"/>
            <p>Simple blog post application created in React that stores posts within the Redux store.</p>
            </div>
            <div className="port-item">
            <img src="../../images/indecision.jpg" alt = "Indecision App"/>
            <p>A to-do type application that stores user input data in the React front-end store, and randomly selects a task to be completed.</p>
            </div>
            </div>
        </div>
    </div>
);