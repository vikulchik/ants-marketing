import React from 'react';
import BaseStep from './BaseStep';
import Title from '../Title';
import '../../App.css';

class Form extends React.Component {
    render() {
        return(
            <>
                { this.props.activeStep === 1 && <BaseStep onChangeStep={this.props.onChangeStep} /> }
                { this.props.activeStep === 2 && <div className="next-step" onClick={() => this.handleChangeStep(1)}>
                    <Title>Next Step</Title>
                </div>}
            </>
        )
    }
}

export default Form;