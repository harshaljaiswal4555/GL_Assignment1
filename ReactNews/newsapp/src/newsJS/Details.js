import React, { Component } from 'react';
import '../cssfile/style.css'
import { Link } from 'react-router-dom';


class Details extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div >
                    <div className="box" >
                        <p>{this.props.title}</p>
                        <img className='images' src={this.props.image} alt=""></img>
                        <Link to={{ pathname: "/details/" + this.props.pageIndex, state: { news: this.props.news } }} className="button"> More Details </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details