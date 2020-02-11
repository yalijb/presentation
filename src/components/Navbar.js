import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
           <nav className='nav-bar'>    
                
                
                {this.props.scroll(<span href="#whoami">Who am i</span>, 'whoami')}
                {this.props.scroll(<span href="#worked">Worked Tecnologies</span>, 'worked')}
                <Link to={`${process.env.PUBLIC_URL}/contact/`}>Contact Me</Link>
                
           </nav>
        );
    }
}

export default Navbar;