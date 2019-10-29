import React from 'react';
import Navigation from './Navigation/index';
import Form from './Form/index';
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
                </div>
            );
        }
}

export default App;
