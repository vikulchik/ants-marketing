import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Title = props => (
    <h1 className="main-title">{props.children}</h1>
);

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;