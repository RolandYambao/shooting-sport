// import logo from './logo.svg';
// import './App.css';
// import { render } from '@testing-library/react';
import React, { Component } from 'react'
// import Shooting from './Shooting';
import Pets from './Pets';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Shooting /> */}
        <Pets />
      </div>
    )
  }
}

export default App;
