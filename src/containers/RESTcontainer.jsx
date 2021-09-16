import React, { Component } from 'react';
import Controls from '../components/resty/Controls';
import Header from '../components/resty/Header';

export default class RESTContainer extends Component {
  state = {
    url: '',
    route: '',
    body: '',
  };

  componentDidMount() {
    const pastRequests = JSON.parse(localStorage.getItem('storage'));
    if(pastRequests) {
      this.setState({ storage: pastRequests });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.name]: event.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { url, route, body } = this.state;
    if(route === 'GET') {
      await fetch(`${url}`, {
        route
      });
    } else {
      await fetch(`${url}`, {
        route,
        body: JSON.stringify(body)
      });
    }
  };

  render() {
    const { url, body, onChange, onSubmit } = this.state;
    return (
      <div>
        <Header />
        <Controls 
          url={url} 
          body={body} 
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}
