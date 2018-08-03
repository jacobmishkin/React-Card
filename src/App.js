import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleRenderProps from './ToggleRenderProps';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Card</h1>
        </header>
        <ToggleRenderProps>
          <h1>My cover is blown</h1>
        </ToggleRenderProps>

      </div>
    );
  }
}

export default App;
