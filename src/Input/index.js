import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';

const Input = props => (
    <input
        type={props.type}
        className="input"
    />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Input;