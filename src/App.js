import React, { Component } from 'react';
import logo from './logo.svg';
import Timer from './Timer'
import './App.css';

class App extends Component {

  render() {
    var date2 = new Date("March 21, 2017 01:15:00:526");
    console.log(date2.getMilliseconds());
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Timer start = {new Date(2017, 8, 26, 0, 0, 0,0)}/>




      </div>
    );
  }
}

export default App;
