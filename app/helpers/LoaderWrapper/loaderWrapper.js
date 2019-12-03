import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';

import './style.scss';

const LoaderWrapper = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="loader">
        <LoadingIndicator />
      </div>
    );
  }

  return children;
};

LoaderWrapper.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LoaderWrapper.defaultProps = {
  loading: false,
};

export default LoaderWrapper;
