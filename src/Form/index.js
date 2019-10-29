import React from 'react';
import BaseStep from './BaseStep';

class Form extends React.Component {
    render() {
        return(
            <>
                { this.props.activeStep === 1 && <BaseStep onChangeStep={this.props.onChangeStep} /> }
                { this.props.activeStep === 2 && <h2 onClick={() => this.handleChangeStep(1)}>Next Step</h2>}
            </>
        )
    }
}

export default Form;