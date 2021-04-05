import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  primary = false,
  onClick,
  backgroundColor = '#D1D5DB',
  color = '#1F2937',
}) => {
  const buttonStyles = {
    fontWeight: 700,
    padding: '10px 20px',
    border: 0,
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    backgroundColor: primary ? '#eb2525' : backgroundColor,
    color: primary ? '#F3F4F6' : color,
  };

  return (
    <button type="button" onClick={onClick} style={buttonStyles}>
      { children }
    </button>
  );
};

Button.defaultProps = {
  primary: '',
  onClick: null,
  backgroundColor: '',
  color: '',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
