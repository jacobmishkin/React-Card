import React, { Component } from 'react'
import {UserContext} from './UserContext';

export default class UserProvdier extends Component {
  state = {
    id: '123',
    name: 'Jacob',
    email: 'Jacob@test.com',
  };

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
