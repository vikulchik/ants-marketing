import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/index';
import Button from "../Button";
import './../App.css';

const Popup = props => (
    <section className="popup-reset">
    	<Title>Вы точно хотите очистить поля?</Title>
        <div className="buttons">
            <Button className="form__reset" type="button">Reset All</Button>
            <Button className="form__continue" type="button">Cancel</Button>
        </div>
    </section>
);

export default Popup;