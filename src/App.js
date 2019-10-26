import React from 'react';
import Navigation from './Navigation/index';
import Form from './Form/index';
import Popup from './Popup-reset/index';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
        render()
        {
            return (
                <div className="App">
                    <section className="information-form">
                        <Navigation/>
                        <Form/>
                    </section>
                    <Popup />
                </div>
            );
        }
}

export default App;
