import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle, Portal, Modal} from './Utils'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Card</h1>
        </header>
        <Toggle>
          {({on, toggle}) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
