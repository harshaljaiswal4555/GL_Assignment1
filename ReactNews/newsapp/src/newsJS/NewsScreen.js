import React, { Component } from 'react'
import '../cssfile/style.css'
import { BrowserRouter , Route, Switch,  Link } from "react-router-dom";
import NewsBox from './NewsBox';
import News from './News'

class NewsScreen extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={News} exact strict/>
          <Route path="/details/:id" component={NewsBox} exact strict/>
        </Switch>
      </BrowserRouter>
    );
  }


}

export default NewsScreen;