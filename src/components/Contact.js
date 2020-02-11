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
                        <span>Bitbucket repository:</span>
                        <br/>                
                        <span>Upwork profile:</span>
                    </div>

                    <div style={{textAlign:'right'}}>
                        <span>Venezolana </span>
                        <br/> 
                        <span>25</span>
                        <br/>   
                        <a href="mailto: yangonz1512@gmail.com">yangonz1512@gmail.com</a>
                        <br/>    
                        <span>bitbucket</span>
                        <br/>      
                        <span>upwork</span>
                    </div>
                
                
                </div>

            </div>
         
        );
    }
}

export default Contact;