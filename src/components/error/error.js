import React from 'react';
import styles from './error.module.css';

function Error({ message }) {
  return <div className={styles.error}>{message}</div>;
}

Error.defaultProps = {
  message: 'Something went wrong...',
};

Error.propTypes = {};

export default Error;
