import React, {Component, Fragment} from 'react';
import {Transition} from 'react-spring';

import logo from './logo.svg';
import './App.css';
import {Toggle} from 'Utils';
import {Modal, Card} from 'Elements';
import User from './User';
import UserProvdier from './UserProvider';
class App extends Component {
  render() {
    return (
      <UserProvdier>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <section>
            <Toggle>
              {({on, toggle}) => (
                <Fragment>
                  <button onClick={toggle}>Login</button>
                  <Modal on={on} toggle={toggle}>
                    <User />
                  </Modal>
                </Fragment>
              )}
            </Toggle>
          </section>

          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>click me</button>
                <Transition
                  from={{opacity: 0}}
                  enter={{opacity: 1}}
                  leave={{opacity: 0}}
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

  <Card style={{...styles}}>
    <h1>yo</h1>
  </Card>
);
export default App;
