import React from 'react';
import Navigation from './Navigation';
import Form from './Form/index';
import './App.css';

class App extends React.Component {
    state = {
        activeStep: 1,
    };

    handleChangeStep = (activeStep) => {
        this.setState({
            activeStep
        })
    };

    render()  {
        return (
            <div className="app">
                <section className="information-form">
                    <Navigation onChangeStep={this.handleChangeStep} activeStep={this.state.activeStep} />
                    <Form onChangeStep={this.handleChangeStep} activeStep={this.state.activeStep} />
                </section>
            </div>
        );
    }
}

export default App;
