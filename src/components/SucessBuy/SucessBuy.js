import React from 'react';
import PropTypes from 'prop-types';

const SucessBuy = ({ handleBackPage, text }) => (
  <div className="alert alert-success alert-dismissible mt-3 fade show" role="alert">
    <strong>{text}</strong>
    <button
      type="button"
      className="close"
      onClick={handleBackPage}
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

SucessBuy.defaultProps = {
  handleBackPage: () => {},
  text: '',
};

SucessBuy.propTypes = {
  handleBackPage: PropTypes.func,
  text: PropTypes.string,
};

export default SucessBuy;
