import React from 'react';
import './../App.css';

const Navigation = () => (
    <section className="navigation-form">
        <a
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
            href="#"
            className="arrow arrow-down"
        >
            down
        </a>
    </section>
);

export default Navigation;