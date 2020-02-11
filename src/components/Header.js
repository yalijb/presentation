import React, { Component } from 'react';
import Logo from './Logo'
import Navbar from "./Navbar";

class Header extends Component {
    render() {
        return (
            <section className='header'>
               
                <Logo/>
                
                <Navbar scroll={this.props.scroll}/>

                {this.props.scroll(
                        <span className='down-arrow' href='#worked'  >
                            <img src='https://res.cloudinary.com/yalibj/image/upload/v1581264304/portafolio/double-down_myk9s8.png' height='50px' alt='down arrow'></img>
                        </span>
                , 'worked')}
                    
            </section>
        );
    }
}
// onClick={()=>{this.scrollTo()}}
export default Header;