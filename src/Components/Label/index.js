import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Label = props => (
    <label className="label">{props.children}</label>
);

Label.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Label;