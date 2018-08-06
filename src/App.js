import React, {Component, Fragment, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle} from 'Utils';
import {Modal} from 'Elements';//
import User from './User';
import {UserContext} from './UserContext';

class UserProvdier extends Component {
  state = {
    id: '123',
    name: 'Jacob',
    email: 'Jacob@test.com',
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvdier>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  {/* <h1>Still what's up</h1> */}
                  <User />
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvdier>
    );
  }
}

export default App;
