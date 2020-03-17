import React from 'react';
// LIBRARIES
import cx from 'classnames';
// STYLES
import './styles.scss';

const Button = ({ 
  text, 
  variant, 
  disabled, 
  buttonClassName,
  ...others
}) => (
  <button
    type="button"
    className="theme-btn"
    variant={variant}
    disabled={disabled}
    className={cx('theme-btn', buttonClassName)}
    {...others}
    >
    {text}
  </button>
);


export default Button;
