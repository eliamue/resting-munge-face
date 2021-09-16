import React, { Component } from 'react';
import Controls from '../components/resty/Controls';
import Header from '../components/resty/Header';
import Display from '../components/resty/Display';
import { fetchAPI } from '../services/RESTservice';

export default class RESTContainer extends Component {
  state = {
    url: '',
    route: '',
    body: '',
    display: { Henlo: 'Go fetch!' },
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { url, route, body } = this.state;

    const res = await fetchAPI(url, route, body);
    this.setState({ display: res.data });
  };

  render() {
    const { url, body, route, display } = this.state;
    return (
      <div>
        <Header />
        <Controls
          url={url}
          route={route}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Display display={display} />
      </div>
    );
  }
}
