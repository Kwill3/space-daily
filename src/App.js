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
      <div id='page-container'>
        <div id='content-wrap'>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path='/space-daily/' exact component={Home} />
                <Route path='/space-daily/apod' render={()=> <Apod />} />
                <Route path='/space-daily/rover' component={Rover} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
          <div id='footer'>
            <hr className='footer-hr'/>
            <p className='footer-content'>
              Content sourced from <a href='https://api.nasa.gov/index.html' title='nasa_api'>NASA API</a>.
            
              Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
