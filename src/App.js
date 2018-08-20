import React, {Component, Fragment} from 'react';
import {Transition} from 'react-spring';

import logo from './logo.svg';
import './App.css';
import {Toggle} from 'Utils';
import {Modal, Card} from 'Elements';
import User from './User';
import UserProvdier from './UserProvider';
import Drag from './Drag';
class App extends Component {
  render() {
    return (
      <UserProvdier>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Drag />
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>click me</button>
                <Transition
                  from={{opacity: 0, bg: '#ff5959', height: '0px'}}
                  enter={{opacity: 1, bg: '#4f9da6', height: '200px'}}
                  leave={{opacity: 0, bg: '#ff5959', height: '0px'}}
                >
                  {on && Header}
                </Transition>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvdier>
    );
  }
}

const Header = styles => (

  <Card style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: 'hidden',
      height: styles.height,
    }}>
    <h1>yo</h1>
    <h3>{styles.bg}</h3>
  </Card>
);
export default App;
