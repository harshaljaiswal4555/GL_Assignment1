import React, {Component} from 'react';
import '../style/Movies.css'
import {Link} from 'react-router-dom';

class Details extends Component {

    render() {
    
        return (
            <div>
            <div >
                <p>{this.props.title}</p> 
                <img className='images' src={("https://image.tmdb.org/t/p/w500"+this.props.image) || "https://www.cornellstore.com/b2c/img/no_image_available.jpeg" } ></img> 
                <br/> 
                <Link to={{pathname:"/details/"+this.props.id}} className="button">View Details</Link>     
            </div> 
            </div>
              
        )
    }
}

export default Details;