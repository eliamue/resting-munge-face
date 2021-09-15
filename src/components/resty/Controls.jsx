import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onChange, onSubmit, url, body }) => {
  return (
    <>
      <form onSubmit={onSubmit} data-testid="controls-form">
        <label htmlFor="url">URL</label>
        <input
          type="url"
          id="url"
          value={url}
          placeholder="https://"
          onChange={onChange}
        />
        <label>GET</label>
        <input type="radio" id="get" onChange={onChange} />

        <label>PUT</label>
        <input type="radio" id="put" onChange={onChange} />

        <label>POST</label>
        <input type="radio" id="post" onChange={onChange} />

        <label>DELETE</label>
        <input type="radio" id="delete" onChange={onChange} />
        <button aria-label="submit-request">Submit Request</button>
        <textarea
          placeholder="Request JSON"
          value={body}
          onChange={onChange}
        ></textarea>
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
