import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="notfound">
        <div className="containerwidth">
        <h4>Page Not Found!</h4>
        <Link to="/">Return Home</Link>
        </div>
    </div>
);

export default NotFoundPage;