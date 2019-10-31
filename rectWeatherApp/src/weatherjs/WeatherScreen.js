import React, { Component } from 'react'
import '../css/style.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CitySelect from './CitySelect.js';
import Details from './Details'

class WeatherScreen extends Component {

  constructor() {
    super();
  this.state = {
    cityn : '',
  }
}

  render() {
    return (
      <div>
        <header>
          Weather App
          </header>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={CitySelect} cityn={this.state.cityn} exact strict />
          <Route path="/details/:id" component={Details} cityn={this.state.cityn} exact strict/>
        </Switch>
      </BrowserRouter>
      <footer className="footer">
         Powered by openweathermap.org
        </footer>
      </div>
    );
  }
}

export default WeatherScreen;