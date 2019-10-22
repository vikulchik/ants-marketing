import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';

const Input = props => (
    <input
        type={props.type}
        placeholder={props.placeholder}
        className="input"
    />
);

Input.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Input;