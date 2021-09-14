import React, { Component } from 'react';

export default class RESTContainer extends Component {
  state = {};

  handleChange = (event) => {
    this.setState(event.target.value);
  };

  handleSubmit = (event) => {
    this.setState(event.target.value);
  };

  render() {
    return <div></div>;
  }
}
