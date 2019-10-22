import React from 'react';
import Title from '../Title/index';
import Label from '../Label/index';
import Input from '../Input/index';
import './../App.css';

const Form = () => (
    <form
        method="post"
        className="form"
    >
        <Title>Basic Details</Title>
        <div className="form__content">
            <div className="form__section">
                <Input
                    type="text"
                    id="firstName"
                    required
                />
                <Label htmlFor="firstName">
                    First Name
                </Label>
            </div>
            <div className="form__section">
                <Input
                    type="text"
                    required
                />
                <Label>Last Name</Label>
            </div>
            <div className="form__section">
                <Input
                    type="email"
                    required
                />
                <Label>Email ID</Label>
            </div>
            <div className="form__section">
                <Input
                    type="email"
                    required
                />
                <Label>Your User ID</Label>
            </div>
            <div className="form__section">
                <Input
                    type="tel"
                    required
                />
                <Label>Phone Number</Label>
            </div>
            <div className="form__section">
                <Input
                    type="tel"
                    placeholder="Reference Code"
                />
            </div>
        </div>
        <div className="form__buttons">
            <button className="form__reset" type="reset">Reset All</button>
            <button className="form__continue" type="submit">Continue</button>
        </div>
    </form>
);

export default Form;