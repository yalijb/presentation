import React, { Component } from 'react';
import Logo from './Logo'
class Contact extends Component {
    render() {
        return (
            <div className='App'>
                <Logo/>
                <h3 >Information</h3>
                <div className='contact'>
                    <div style={{textAlign:'left'}}>
                        <span>Nationality: </span>
                        <br/>
                        <span>Age:</span>
                        <br/>
                        <span>Email:</span>
                        <br/>              
                        <span>Github repository:</span>
                        <br/>                
                        <span>Upwork profile:</span>
                    </div>

                    <div style={{textAlign:'right'}} className='right'>
                        <span>Venezolana </span>
                        <br/> 
                        <span>25</span>
                        <br/>   
                        <span><a href="mailto: yangonz1512@gmail.com">yangonz1512@gmail.com</a></span>
                        <br/>    
                        <span><a href='https://github.com/yalijb/presentation.git' target='_blank'  rel='noopener noreferrer'>https://github.com/yalijb/presentation.git</a></span>
                        <br/>      
                        <span><a href='https://www.upwork.com/o/profiles/users/~018a85df105f94c323/' target='_blank'  rel='noopener noreferrer'>https://www.upwork.com/o/profiles/users/~018a85df105f94c323/</a></span>
                    </div>
                
                
                </div>

            </div>
         
        );
    }
}

export default Contact;