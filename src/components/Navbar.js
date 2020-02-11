import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
           <nav className='nav-bar'>    
                
                
                {this.props.scroll(<a href="#whoami">Who am i</a>, 'whoami')}
                {this.props.scroll(<a href="#worked">Worked Tecnologies</a>, 'worked')}
                <Link to="/contact">Contact Me</Link>
                
           </nav>
        );
    }
}

export default Navbar;