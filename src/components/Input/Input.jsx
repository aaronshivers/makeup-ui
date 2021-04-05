import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  onChange,
  label,
  id,
}) => (
  <>
    <label htmlFor={id}>
      {label}
    </label>
    <input id={id} onChange={onChange} />
  </>
);

Input.defaultProps = {
  onChange: null,
  label: '',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default Input;
