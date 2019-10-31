import React, { Component } from 'react'
import '../css/style.css'
import axios from 'axios'
import { Link } from "react-router-dom";

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      temp: '',
      icon: ''

    }
  }

  componentDidMount() {
    let urlBegn = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let urlEnd = '&appid=a0f7ba0ee76b6a386368ff52d822812d';
    let ingUrlBegn = 'http://openweathermap.org/img/wn/';
    let imgUrlEnd = '@2x.png';
    let imgUrlErr = 'https://upload.wikimedia.org/wikipedia/commons/d/d5/No_sign.svg';
    let errWeather = 'No city found';

    axios.get(urlBegn + this.props.match.params.id + urlEnd)
      .then(res => {
        this.setState({
          weather: res["data"]["weather"][0]["description"],
          temp: res["data"]["main"]["temp"] - 273,
          icon: ingUrlBegn + res["data"]["weather"][0]["icon"] + imgUrlEnd
        })

      }).catch(this.setState({ weather: errWeather, temp: ' ', icon: imgUrlErr })
      )
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        
        <div className="innpart">
          <textfield>

            <p className="city" id="city">{this.props.match.params.id}</p>
            <p className="status" id="status">{this.state.weather}</p>
            <img src={this.state.icon} className="icon" id="icon" />
            <p className="temp" id="data">{this.state.temp}</p>
          </textfield>
        </div>
        <Link to="/" onClick={this.onClick} className="btnBack">  Search Different City  </Link>
      </div>
    );
  }
}

export default Details;