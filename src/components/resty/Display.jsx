import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from '../../styles/Display.css';

const Display = (res) => {
  return (
    <div className={styles.Display}>
      <ReactJson src={res} />
    </div>
  );
};

Display.propTypes = {
  res: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Display;
