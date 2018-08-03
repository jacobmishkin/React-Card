import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';
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
              {on && <h1>test</h1>}
              <button onClick={toggle}>Show</button>
              <Portal>{on && <h2>ah yeah!! Portal!</h2>}</Portal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
