import React, { Component } from "react";

// Styles
import './styles.scss';

// Components
import InputDefault from '../../components/Inputs';
import Button from '../../components/Buttons';

// Utils
import keys from '../../utils/keys';
import ValidationUtil from '../../utils/validation';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupDetails: {
                username: { val: '', isValid: false },
                phoneNumber: {val: '', isValid: false},
                email: { val: '', isValid: false },
                password: { val: '', isValid: false },
                reEnterPassword: { val: '', isValid: false },
            },
            isSignupButtonClicked: false
        };
    }

    handleInputChange(key, value, validationType, minLength, maxLength) {
        const currentState = { ...this.state };
        
        if(ValidationUtil.isValidValue(value)) {
            value = ValidationUtil.isExceedingMaxLength(value, maxLength);
            value = ValidationUtil.getValidatedValue(value, validationType)
        }

        currentState.signupDetails[key] = {
            val: value,
            isValid: ValidationUtil.isValidInput(value, validationType, minLength)
        };
    
        this.setState(currentState);
    }

    signup() {
        const currentState = { ...this.state };
        if(!currentState.isSignupButtonClicked) {
            this.setState({isSignupButtonClicked: true});
        }
        console.log("Signup clicked");
    }

    handleOnShowPasswordClick() {
        const currentState = { ...this.state }
        currentState.shouldPasswordVisible = !currentState.shouldPasswordVisible;
        this.setState(currentState);
    }

    render() {
        const { state, props } = this;

        return (
            <div className="container signup-container login-signup">
                <div className="main">
                    <h2>Sign up</h2>
                    <InputDefault 
                        className="input-size" 
                        type="text" 
                        hasLabel 
                        label="Username"
                        placeholder="Enter Username"
                        autoComplete="off"
                        value = {state.signupDetails.username.val || ''}
                        required
                        errorMsg={state.isSignupButtonClicked && !state.signupDetails.username.isValid ? 'Please enter valid username' : ''}
                        onChange={({ target } ) => {
                            this.handleInputChange(keys.inputFieldKeys.USERNAME, target.value, keys.validationKeys.ALPHA_SPACE, 1, 100)
                        }}
                    />

                    <InputDefault 
                        className="input-size" 
                        type="text" 
                        hasLabel 
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        autoComplete="off"
                        value = {state.signupDetails.phoneNumber.val || ''}
                        required
                        errorMsg={state.isSignupButtonClicked && !state.signupDetails.phoneNumber.isValid ? 'Please enter a valid phone number' : ''}
                        onChange={({ target } ) => {
                            this.handleInputChange(keys.inputFieldKeys.PHONE_NUMBER, target.value, keys.validationKeys.DIGITS, 1, 10)
                        }}
                    />      
                    
                    <InputDefault 
                        className="input-size" 
                        type="text" 
                        hasLabel 
                        label="Email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        value = {state.signupDetails.email.val || ''}
                        required
                        errorMsg={state.isSignupButtonClicked && !state.signupDetails.email.isValid ? 'Please enter a valid email' : ''}
                        onChange={({ target } ) => {
                            this.handleInputChange(keys.inputFieldKeys.EMAIL, target.value, keys.validationKeys.EMAIL, 1, 100)
                        }}
                    />

                    <div className="password_section">
                        <InputDefault 
                            className="input-size" 
                            type="password" 
                            hasLabel 
                            label="Password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            value = {state.signupDetails.password.val || ''}
                            required
                            errorMsg={state.isSignupButtonClicked && !state.signupDetails.password.isValid ? 'Please enter a valid password' : ''}
                            onChange={({ target } ) => {
                                this.handleInputChange(keys.inputFieldKeys.PASSWORD, target.value, keys.validationKeys.PASSWORD, 1, 100)
                            }}
                        />
                    </div>

                    <div className="cfm_pass">
                        <InputDefault 
                            className="input-size" 
                            type="password" 
                            hasLabel 
                            hasShowPasswordIcon
                            label="Confirm Password"
                            placeholder="Re-Enter Password"
                            autoComplete="off"
                            value = {state.signupDetails.reEnterPassword.val || ''}
                            required
                            errorMsg={state.isSignupButtonClicked && !state.signupDetails.reEnterPassword.isValid ? 'Please confirm password' : ''}
                            onChange={({ target } ) => {
                                this.handleInputChange(keys.inputFieldKeys.RE_ENTER_PASSWORD, target.value, keys.validationKeys.PASSWORD, 1, 100)
                            }}
                            onShowPasswordClick={ () => {
                                this.handleOnShowPasswordClick();
                            }}
                        />
                    </div>

                    <Button 
                        buttonClassName = "w-50 mr2"
                        secondary="true"
                        medium="true"
                        text="Signup"
                        onClick={() => this.signup()}
                    />
                    <p onClick={() => {history.push('/login')}}> Already a member? <u>Signin</u></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);