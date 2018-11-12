import React from 'react';
import PropTypes from 'prop-types';

const Snackbar = props => (
  <div className={`snackbar ${props.isVisible ? 'show' : '' }`}>{props.message}</div>
);

Snackbar.defaultProps = {
  isVisible: false,
};

Snackbar.propTypes = {
  isVisible: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default Snackbar;