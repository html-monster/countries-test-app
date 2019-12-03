import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong, please try again!';

const ErrorWrapper = ({ error, errorMessage = DEFAULT_ERROR_MESSAGE, children }) => {
  if (error) {
    return (
      <div className="error-wrapper">
        <strong>{errorMessage}</strong>
      </div>
    );
  }

  return children;
};

ErrorWrapper.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ErrorWrapper.defaultProps = {
  error: false,
};

export default ErrorWrapper;
