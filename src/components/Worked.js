import React, { Component } from 'react';
import Article from "./Article";

class Worked extends Component {
    constructor(){
        super();
        this.state = {
            articles : {
                '0':'I am confident using languages and templates to build responsive web pages, so as like HTML, CSS, javascript and pug.js',
                '1':'By develop my skills in web programming I have been attracted by the MERN methodology, so I have been learned Javascripts frameworks as like React.js and Node.js. I expect keep learning and grow as an engineer by learning other languages and frameworks.',
                '2':'By develop my skills in web programming I have been attracted by the MERN methodology, so I have been learned Javascripts frameworks as like React.js and Node.js. I expect keep learning and grow as an engeneer by learning other languages and frameworks.',
                // '2':''
            },
            images: [
                'https://res.cloudinary.com/yalibj/image/upload/v1581297884/portafolio/html_d2wlcc.png',
                'https://res.cloudinary.com/yalibj/image/upload/v1581297511/portafolio/css_zkjywk.png',
                'https://res.cloudinary.com/yalibj/image/upload/v1581297511/portafolio/javascript_ieqwha.png',
                'https://res.cloudinary.com/yalibj/image/upload/v1581297511/portafolio/react_f4xnhj.png',
                'https://res.cloudinary.com/yalibj/image/upload/v1581298553/portafolio/mysql_p7idsl.png',
                'https://res.cloudinary.com/yalibj/image/upload/v1581298553/portafolio/node_h9a8lp.png',
                'https://res.cloudinary.com/yalibj/image/upload/v1581298553/portafolio/mongo_papfk8.png'
            ]            
        }
    }

    render() {
        return (
                <section id='worked' className='title' > 
                <div className='bar'>
                    <h2>worked tecnologies</h2>
                    <div className='bar-img'>
                       {              
                        this.state.images.map((image,i) => {
                            return(<img key={i} src={image} height='50px'></img>)    
                        })
                       }
                      
                    </div>
                </div>
                <div className='articles'> 
                    <Article info={this.state.articles[0]} images={[this.state.images[0],this.state.images[1],this.state.images[2]]}/>
                    <Article info={this.state.articles[1]} images={[this.state.images[3],this.state.images[5]]}/>
                    <Article info={this.state.articles[2]} images={[this.state.images[4],this.state.images[6]]}/>
                    
                   
                </div>
                </section>
            
        );
    }
}

export default Worked;