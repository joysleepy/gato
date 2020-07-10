import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = props => {
    return(
        <>
            <h3> UPS !!!</h3>
            <p>A wild 404</p>
            <p><Link to="/home">Take me Home</Link></p>
        </>
    );
}

export default NotFound;