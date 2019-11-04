import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Input = props => (
    <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        className="input"
        name={props.name}
        value={props.value}
    />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Input;