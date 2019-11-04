import React from 'react';
import Title from '../Title';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';
import Popup from '../Popup-reset';
import validator from '../../services/validator';
import '../../App.css';

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
];

const state = [
    {
        title: 'Maharashtra',
        value: 'maharashtra'
    },
    {
        title: 'Alabama',
        value: 'alabama'
    },
    {
        title: 'Alaska',
        value: 'alaska',
    },
    {
        title: 'Colorado',
        value: 'colorado'
    },
];

const city = [
    {
        title: 'Pune',
        value: 'pune'
    },
    {
        title: 'London',
        value: 'london'
    },
    {
        title: 'Glasgow',
        value: 'glasgow',
    },
    {
        title: 'Liverpool',
        value: 'liverpool'
    },
];

const defaultValues = {
    username: '',
    lastname: '',
    email: '',
    userId: '',
    countries: countries[0].value,
    state: state[0].value,
    city: city[0].value,
    phone: '',
    referenceCode: '',
    errors: {}
};

class BaseStep extends React.Component {
    state = {
        modal: false,
        errors: {},
        ...defaultValues,
    };

    setError = (prop, text) => {
        this.setState({
            errors: {
                ...this.state.errors,
                [prop]: text,
            }
        })
    };

    validateName = (evt) => {
        if (validator.validateMinValue(evt.target.value.length, 2)) {
            this.setError('name', 'Should be more than 2');
            return;
        }

        if (validator.validateMaxValue(evt.target.value.length, 50)) {
            this.setError('name', 'Should be less than 50');
            return;
        }

        if (!validator.validateOnlyEnglishLetter(evt.target.value)) {
            this.setError('name', 'Should be only english letter');
            return;
        }

        this.setError('name', null);
    };

    validateLastName = (evt) => {
        if (validator.validateMinValue(evt.target.value.length, 2)) {
            this.setError('lastname', 'Should be more than 2');
            return;
        }

        if (validator.validateMaxValue(evt.target.value.length, 50)) {
            this.setError('lastname', 'Should be less than 50');
            return;
        }

        if (!validator.validateOnlyEnglishLetter(evt.target.value)) {
            this.setError('lastname', 'Should be only english letter');
            return;
        }

        this.setError('lastname', null);
    };

    validateEmail = (evt) => {
        if (!evt.target.value) {
            this.setError('email', 'Email is required field');
            return;
        }
        if (!validator.validateEmail(evt.target.value)) {
            this.setError('email', 'Should be valid email');
            return;
        }

        if (validator.validateMaxValue(evt.target.value.length, 255)) {
            this.setError('email', 'Should be less than 255');
            return;
        }

        this.setError('email', null);
    }

    validateUserId = (evt) => {
        if (!evt.target.value) {
            this.setError('userId', 'userId is required field');
            return;
        }

        if (validator.validateMinValue(evt.target.value.length, 5)) {
            this.setError('userId', 'Should be more than 5');
            return;
        }

        if (validator.validateMaxValue(evt.target.value.length, 30)) {
            this.setError('userId', 'userId be less than 255');
            return;
        }

        if (!validator.validateOnlyEnglishLetterOrSpace(evt.target.value)) {
            this.setError('userId', 'Should be only english letter or space');
            return;
        }

        this.setError('userId', null);
    }

    validatePhone = (evt) => {
        if (!evt.target.value) {
            this.setError('phone', 'phone is required field');
            return;
        }

        if (!validator.validatePhoneNumber(evt.target.value)) {
            this.setError('phone', 'use only valid ukrainian phone numbers');
            return;
        }

        this.setError('phone', null);
    }

    validateReferenceCode = (evt) => {
        if (evt.target.value.length !== 10) {
            this.setError('referenceCode', 'reference code should have 10 letters');
            return;
        }

        if (!validator.validateEnglishLettersOrNumbers(evt.target.value)) {
            this.setError('referenceCode', 'Should be only english letter or numbers');
            return;
        }

        this.setError('referenceCode', null);
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleFocus = (e) => {
        this.setState({
            currentField: e.target.name,
        })
    };

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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.onChangeStep(2);
    };

    resetAll = () => {
        this.setState({
            ...defaultValues
        })
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
                            onBlur={this.validateName}
                            name="username"
                            type="text"
                            required
                            value={this.state.username}
                        />
                        <Label>
                            First Name
                        </Label>
                        <span className="error-text">{this.state.errors.name}</span>
                        {this.state.errors.name ? <span className="error">with failed icon</span> : <span className="true">with passed icon</span>}
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            onBlur={this.validateLastName}
                            name="lastname"
                            type="text"
                            required
                            value={this.state.lastname}
                        />
                        <Label>Last Name</Label>
                        <span className="error-text">{this.state.errors.lastname}</span>
                        {this.state.errors.lastname ? <span className="error">with failed icon</span> : <span className="true">with passed icon</span>}
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            onBlur={this.validateEmail}
                            name="email"
                            type="email"
                            required
                            value={this.state.email}
                        />
                        <Label>Email ID</Label>
                        <span className="error-text">{this.state.errors.email}</span>
                        {this.state.errors.email ? <span className="error">with failed icon</span> : <span className="true">with passed icon</span>}
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            onBlur={this.validateUserId}
                            name="userId"
                            type="text"
                            required
                            value={this.state.userId}
                        />
                        <Label>Your User ID</Label>
                        <span className="error-text">{this.state.errors.userId}</span>
                        {this.state.errors.userId ? <span className="error">with failed icon</span> : <span className="true">with passed icon</span>}
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
                            <select onChange={this.handleInput} name="state" className="form__countries form__places" value={this.state.state}>
                                { state.map(country => (
                                    <option key={country.value} value={country.value}>{country.title}</option>
                                ))}
                            </select>
                            <Label>State</Label>
                        </div>
                        <div className="form__changing-city">
                            <select onChange={this.handleInput} name="city" className="form__countries form__places" value={this.state.city}>
                                { city.map(country => (
                                    <option key={country.value} value={country.value}>{country.title}</option>
                                ))}
                            </select>
                            <Label>City</Label>
                        </div>
                    </div>
                    <div className="form__section">
                        <Input
                            name="phone"
                            onBlur={this.validatePhone}
                            onChange={this.handleInput}
                            type="tel"
                            required
                            value={this.state.phone}
                        />
                        <Label>Phone Number</Label>
                        <span className="error-text">{this.state.errors.phone}</span>
                        {this.state.errors.phone ? <span className="error">with failed icon</span> : <span className="true">with passed icon</span>}
                    </div>
                    <div className="form__section">
                        <Input
                            onChange={this.handleInput}
                            onBlur={this.validateReferenceCode}
                            name="referenceCode"
                            type="text"
                            value={this.state.referenceCode}
                        />

                        <span className="error-text">{this.state.errors.referenceCode}</span>
                        {this.state.errors.referenceCode ? <span className="error">with failed icon</span> : <span className="true">with passed icon</span>}
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