import React from 'react';
import BaseStep from './BaseStep';

class Form extends React.Component {
    state = {
        activeStep: 1,
    };

    handleChangeStep = (activeStep) => {
        this.setState({
            activeStep
        })
    }

    render() {
        return(
            <>
                { this.state.activeStep === 1 && <BaseStep onChangeStep={this.handleChangeStep}  /> }
                { this.state.activeStep === 2 && <h2 onClick={() => this.handleChangeStep(1)}>Next Step</h2>}
            </>
        )
    }
}

export default Form;