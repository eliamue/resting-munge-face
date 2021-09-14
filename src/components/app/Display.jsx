import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>GET</label>
        <input 
          type="radio"
          id="get"
          onChange={onChange}
        />

        <label>PUT</label>
        <input 
          type="radio"
          id="put"
          onChange={onChange}
        />

        <label>POST</label>
        <input 
          type="radio"
          id="post"
          onChange={onChange}
        />

        <label>DELETE</label>
        <input 
          type="radio"
          id="delete"
          onChange={onChange}
        />
        <button aria-label="submit-request">Submit</button>
      </form>
    </>
  );
};

Display.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Display;
