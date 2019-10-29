import React from 'react';
import Title from '../Title';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';
import Popup from '../Popup-reset';
import '../App.css';

const countries = [
    {
        title: 'India',
        value: 'india'
    },
    {
        title: 'USA',
        value: 'usa'
    },
    {
        title: 'Great Britain',
        value: 'great-britain',
    },
    {
        title: 'Germany',
        value: 'germany'
    },
]

const defaultValues = {
    username: '',
    lastname: '',
    email: '',
    userId: '',
    countries: countries[0].value,
    phone: '',
    referenceCode: '',
}

class BaseStep extends React.Component {
    state = {
        modal: false,
        activeStep: 1,
        ...defaultValues,
    };


    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleFocus = (e) => {
        this.setState({
            currentField: e.target.name,
        })
    }

    handleReset = () => {
        this.setState({
            modal: true,
        })
    };

    handleConfirm = () => {
        this.resetAll();
        this.setState({
            modal: false,
        })
    };

    handleCancel = () => {
        this.setState({
            modal: false,
        });
    };

    resetAll = () => {
        this.setState({
            ...defaultValues
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.onChangeStep(2);
    };

    render() {
        return(
            <form
                method="post"
                className="form"
                onFocus={this.handleFocus}
            >
                <Title>Basic Details</Title>
                <div className="form__content">
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            name="username"
                            type="text"
                            required
                            value={this.state.username}
                        />
                        <Label>
                            First Name
                        </Label>
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            name="lastname"
                            type="text"
                            required
                            value={this.state.lastname}
                        />
                        <Label>Last Name</Label>
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            name="email"
                            type="email"
                            required
                            value={this.state.email}
                        />
                        <Label>Email ID</Label>
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            name="userId"
                            type="text"
                            required
                            value={this.state.userId}
                        />
                        <Label>Your User ID</Label>
                    </div>
                    <div className="form__section">
                        <select onChange={this.handleInput} name="countries" className="form__countries" value={this.state.countries}>
                            { countries.map(country => (
                                <option key={country.value} value={country.value}>{country.title}</option>
                            ))}
                        </select>
                        <Label>Country</Label>
                    </div>
                    <div className="form__section form__section--city">
                        <div className="form__changing-city">
                            <select className="form__countries form__places">
                                <option selected value="maharashtra">Maharashtra</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="maharashtra">Maharashtra</option>
                            </select>
                            <Label>State</Label>
                        </div>
                        <div className="form__changing-city">
                            <select className="form__countries form__places">
                                <option selected value="pune">Pune</option>
                                <option value="pune">Pune</option>
                                <option value="pune">Pune</option>
                                <option value="pune">Pune</option>
                            </select>
                            <Label>City</Label>
                        </div>
                    </div>
                    <div className="form__section">
                        <Input
                            name="phone"
                            onChange={this.handleInput}
                            type="tel"
                            required
                            value={this.state.phone}
                        />
                        <Label>Phone Number</Label>
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            name="referenceCode"
                            type="text"
                            placeholder="Reference Code"
                            value={this.state.referenceCode}
                        />
                    </div>
                </div>
                <div className="form__buttons">
                    <Button onClick={this.handleReset} className="form__reset" type="button">Reset All</Button>
                    <Button onClick={this.handleSubmit} className="form__continue" type="submit">Continue</Button>
                </div>

                {
                    this.state.modal && <Popup onConfirm={this.handleConfirm} onCancel={this.handleCancel} />
                }
            </form>
        )
    }
}

export default BaseStep;