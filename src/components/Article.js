import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <div className='article'>
                {
                    this.props.images.map((image,i) => {
                        return(<img key={i} src={image} height='35px' alt={`logo tecnology ${i}`}></img>)
                                
                    })
                }
               
                <p>
                    {this.props.info}
                </p> 
            </div>
        );
    }
}

export default Article;