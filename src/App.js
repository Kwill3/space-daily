import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Apod from './components/Apod';
import Rover from './components/Rover';
import Error from './components/Error';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/apod' render={()=> <Apod />} />
            <Route path='/rover' component={Rover} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
