import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <h1><Link to="/">Yalianny Gonzalez </Link></h1>
                <img src='https://res.cloudinary.com/yalibj/image/upload/v1581282293/portafolio/yo_z6n3c0.jpg' height='150px' alt='yalianny gonzalez'>
                </img>
            </div>
        );
    }
}

export default Logo;