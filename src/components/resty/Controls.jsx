import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Controls.css';

const Controls = ({ url, body, handleChange, handleSubmit }) => {
  return (
    <>
      <form 
        data-testid="controls-form"
        onSubmit={handleSubmit}
        className={styles.Controls}
      >
        <input
          aria-label="url"
          type="url"
          name="url"
          id="url"
          value={url}
          placeholder="https://"
          onChange={handleChange}
          className={styles.url}
        />

        <section>
          <label htmlFor="GET">GET</label>
          <input
            aria-label="GET"
            type="radio"
            name="route"
            id="get"
            value="GET"
            onChange={handleChange}
            className={styles.routesa}
          />
          <label htmlFor="PUT">PUT</label>
          <input 
            type="radio"
            name="route" 
            id="put"
            value="PUT"
            onChange={handleChange}
            className={styles.routes}
          />
          <label htmlFor="POST">POST</label>
          <input 
            type="radio"
            name="route" 
            id="post"
            value="POST"
            onChange={handleChange}
            className={styles.routes}
          />
          <label htmlFor="DELETE">DELETE</label>
          <input 
            type="radio"
            name="route" 
            id="delete"
            value="DELETE"
            onChange={handleChange}
            className={styles.routes}
          />
          <button aria-label="submit-request">Submit Request</button>
        </section>

        
        <textarea
          aria-label="body"
          type="text"
          placeholder="JSON body"
          name="body"
          value={body}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

Controls.propTypes = {
  url: PropTypes.string,
  body: PropTypes.string,
  route: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Controls;
