import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';

const Input = props => (
    <input
        onChange={props.onChange}
        type={props.type}
        className="input"
        name={props.name}
        value={props.value}
    />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Input;