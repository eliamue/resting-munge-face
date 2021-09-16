import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onChange, onSubmit, url, body }) => {
  return (
    <>
      <form 
        onSubmit={onSubmit} 
        onChange={onChange} 
        data-testid="controls-form"
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

        <section className="request-types">
          <label htmlFor="GET">GET</label>
          <input 
            type="radio"
            name="request"
            id="get" 
            onChange={onChange} 
          />
          <label htmlFor="PUT">PUT</label>
          <input 
            type="radio"
            name="request" 
            id="put" 
            onChange={onChange} 
          />
          <label htmlFor="POST">POST</label>
          <input 
            type="radio"
            name="request" 
            id="post" 
            onChange={onChange} 
          />
          <label htmlFor="DELETE">DELETE</label>
          <input 
            type="radio"
            name="request" 
            id="delete" 
            onChange={onChange} 
          />
        </section>

        <button aria-label="submit-request">Submit Request</button>
        
        <input
          aria-label="json-body"
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
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Controls;
