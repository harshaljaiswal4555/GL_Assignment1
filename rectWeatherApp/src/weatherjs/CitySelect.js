import React, { Component } from 'react'
import '../css/style.css'
//import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


class CitySelect extends Component {

  constructor() {
    super();
    
    this.onSubmit = this.onSubmit.bind(this);
  }

 
  onSubmit(e) {
    
    e.preventDefault();
    var title = this.title;
    console.log(title.value);
    
    this.props.history.push('/details/'+title.value)
 
}
  render() {
    return (
      <div>
        <div className="heading">
          <p>What location are you looking for?</p>
        </div>
        <div>
          <textfield>
            <input type="text" className="user" ref={(c) => this.title = c} name="title"  />
            <input type="button" className="btn" value="search city" onClick={this.onSubmit}/>
           </textfield>
        </div>
     
      </div>
    );
  }


}


export default CitySelect;