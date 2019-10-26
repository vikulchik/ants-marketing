import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';

const Button = props => (
    <button
        onClick = {props.onClick}
        className={props.className}
        type={props.type}
    >
        {props.children}
    </button>
);

Button.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;