import React from 'react';
import './../App.css';

const Navigation = (props) => (
    <section className="navigation-form">
        <a
            onClick={() => props.onChangeStep(1)}
            href="#"
            className="arrow arrow-up"
        >
            up
        </a>
        <div className="animation-block">
            <span className="animation-block__element">elem</span>
            <span className="animation-block__element">elem</span>
            <span className="animation-block__element active-element">elem</span>
            <span className="animation-block__element">elem</span>
        </div>
        <a
            onClick={() => props.onChangeStep(2)}
            href="#"
            className="arrow arrow-down"
        >
            down
        </a>
    </section>
);

export default Navigation;