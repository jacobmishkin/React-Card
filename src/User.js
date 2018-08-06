import React, {Component} from 'react';
import {UserContext} from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>user Info</h1>
            <h2>{context.user.name}</h2>
            <h3>{context.user.email}</h3>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
