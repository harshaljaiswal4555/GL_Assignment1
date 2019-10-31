import React from 'react';
import MovieScreen from './container/MovieScreen'
import MovieDetails from './container/MovieDetails'
import './App.css';
import thunk from 'redux-thunk'
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
        <Router>
        <Route path="/" component={MovieScreen} exact strict/>
        <Route path="/details/:id" component={MovieDetails} exact strict />
        </Router>
        </Provider>
  );
}


export default App;
