import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Button from "../Button";
import '../../App.css';
import Navigation from "../Navigation";

const Popup = props => (
    <section className="popup-reset">
    	<Title>Вы точно хотите очистить поля?</Title>
        <div className="buttons">
            <Button onClick={props.onConfirm} className="form__reset" type="button">Reset All</Button>
            <Button onClick={props.onCancel} className="form__continue" type="button">Cancel</Button>
        </div>
    </section>
);

Popup.propTypes = {
    onClick: PropTypes.func,
};

export default Popup;