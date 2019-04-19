import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Apod from './components/Apod';
import ApodDateForm from './components/ApodDateForm';
import Rover from './components/Rover';
import Error from './components/Error';
import Header from './components/Header';
import Home from './components/Home';

const APOD_API_URL='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apodJson: {},
      apodPrev: '',
      currentDate: '',
    }
  }

  // Fetches daily APOD data
  // componentDidMount = async() => {
  //   const json = await fetch(APOD_API_URL).then(response => response.json());;
  //   this.setState({
  //     apodJson: json,
  //     currentDate: json.date
  //   })
  //   console.log(json);
  // }

  // Fetches new API data for APOD if a new date search is submitted
  handleChangeDate = e => {
    e.preventDefault();
    const newDate = e.target.elements.prevDate.value;
    this.setState({
      apodPrev: newDate
    }, async() => {
      const json = await fetch(`${APOD_API_URL}&date=${this.state.apodPrev}`).then(response => response.json());
      this.setState({
        apodJson: json
      })
      console.log(json);
    })      
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/apod' render={()=> 
              <div>
                <Apod handleApod={this.state.apodJson}/>
                <ApodDateForm changeDate={this.handleChangeDate} currDate={this.state.currentDate}/>
              </div>
              }
            />
            <Route path='/Rover' component={Rover} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
