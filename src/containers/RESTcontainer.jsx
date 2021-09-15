import React, { Component } from 'react';
import Controls from '../components/resty/Controls';

export default class RESTContainer extends Component {
  state = {
    url: '',
    route: '',
    body: '',
    storage: [],
  };

  componentDidMount() {
    const pastRequests = JSON.parse(localStorage.getItem('storage'));
    if (pastRequests) {
      this.setState({ storage: pastRequests });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { url, route, storage, body } = this.state;
    this.fetch();

    this.setState((state) => ({
      storage: [
        ...state.storage,
        {
          url: { url },
          route: { route },
          storage: { storage },
          body: { body },
          key: `${url}+${route}`,
        },
      ],
    }));
  };

  render() {
    const { url, route, body, storage, onChange, onSubmit } = this.state;
    return (
      <div>
        <Controls 
          url={url} 
          route={route} 
          body={body} 
          storage={storage}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}
