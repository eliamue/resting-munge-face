import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, body, onChange, onSubmit }) => {
  return (
    <>
      <form 
        data-testid="controls-form"
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <label htmlFor="url">URL</label>
        <input
          aria-label="url-input"
          type="url"
          name="url"
          id="url"
          value={url}
          placeholder="https://"
          onChange={onChange}
        />

        <section className="route-types">
          <label htmlFor="GET">GET</label>
          <input
            aria-label="GET"
            type="radio"
            name="route"
            id="get"
            value="GET"
            onChange={onChange} 
          />
          <label htmlFor="PUT">PUT</label>
          <input 
            type="radio"
            name="route" 
            id="put"
            value="PUT"
            onChange={onChange} 
          />
          <label htmlFor="POST">POST</label>
          <input 
            type="radio"
            name="route" 
            id="post"
            value="POST"
            onChange={onChange} 
          />
          <label htmlFor="DELETE">DELETE</label>
          <input 
            type="radio"
            name="route" 
            id="delete"
            value="DELETE"
            onChange={onChange} 
          />
        </section>

        <button aria-label="submit-request" onClick={onSubmit}>Submit Request</button>
        
        <textarea
          aria-label="body"
          type="text"
          placeholder="JSON body"
          name="body"
          value={body}
          onChange={onChange}
        />
      </form>
    </>
  );
};

Controls.propTypes = {
  url: PropTypes.string,
  body: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Controls;
