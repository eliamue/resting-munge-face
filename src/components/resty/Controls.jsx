import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, body, onChange, onSubmit }) => {
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
        />

        <section className="route-types">
          <label htmlFor="GET">GET</label>
          <input 
            type="radio"
            name="route"
            id="get" 
            onChange={onChange} 
          />
          <label htmlFor="PUT">PUT</label>
          <input 
            type="radio"
            name="route" 
            id="put" 
            onChange={onChange} 
          />
          <label htmlFor="POST">POST</label>
          <input 
            type="radio"
            name="route" 
            id="post" 
            onChange={onChange} 
          />
          <label htmlFor="DELETE">DELETE</label>
          <input 
            type="radio"
            name="route" 
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
        />
      </form>
    </>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  url: PropTypes.string,
  body: PropTypes.string,
};

export default Controls;
