import React, {Component} from 'react';

// Styles
import './styles.scss';
import '../../styles.scss';

// Components
import InputDefault from '../../components/Inputs';
import Button from '../../components/Buttons';

// Utils
import keys from '../../utils/keys';
import ValidationUtil from '../../utils/validation';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDetails: {
                email: { val: '', isValid: false },
                password: { val: '', isValid: false }
            },
            inputType: {
                password: 'password'
            },
            isLoginButtonClicked: false,
            shouldPasswordVisible: false
        };
    }

    handleInputChange(key, value, validationType, minLength, maxLength) {
        const currentState = { ...this.state };
        
        if(ValidationUtil.isValidValue(value)) {
            value = ValidationUtil.isExceedingMaxLength(value, maxLength);
            value = ValidationUtil.getValidatedValue(value, validationType)
        }

        currentState.loginDetails[key] = {
            val: value,
            isValid: ValidationUtil.isValidInput(value, validationType, minLength)
        };
    
        this.setState(currentState);
    }

    signin() {
        const currentState = { ...this.state }
        if(!currentState.isLoginButtonClicked) {
            this.setState({isLoginButtonClicked: true});
        }

        history.push("/tabs");
    }

    handleOnShowPasswordClick() {
        const currentState = { ...this.state }
        currentState.shouldPasswordVisible = !currentState.shouldPasswordVisible;
        console.log("Current state", currentState.shouldPasswordVisible);
        
        this.setState(currentState);
    }

    render() {
        const {state, props} = this;

        return (
            <div className="container login-container login-signup">
                <div className="main">
                    <h2>Sign In</h2>
                    <InputDefault 
                        className="input-size" 
                        type="text" 
                        hasLabel 
                        label="Email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        value = {state.loginDetails.email.val || ''}
                        errorMsg={state.isLoginButtonClicked && !state.loginDetails.email.isValid ? 'Please enter a valid email' : ''}
                        onChange={({ target } ) => {
                            this.handleInputChange(keys.inputFieldKeys.EMAIL, target.value, keys.validationKeys.EMAIL, 1, 100)
                        }}
                    />

                    <InputDefault 
                        className="input-size" 
                        type={state.shouldPasswordVisible ? "text" : "password"}
                        hasLabel
                        hasShowPasswordIcon
                        label="Password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        value = {state.loginDetails.password.val || ''}
                        errorMsg={state.isLoginButtonClicked && !state.loginDetails.password.isValid ? 'Please enter a valid password' : ''}
                        onChange={({ target } ) => {
                            this.handleInputChange(keys.inputFieldKeys.PASSWORD, target.value, keys.validationKeys.ALPHA_SPACE, 1, 100)
                        }}
                        onShowPasswordClick={ () => {
                            this.handleOnShowPasswordClick();
                        }}
                    />

                    <Button 
                        buttonClassName = "w-50 mr2 btn-signin"
                        secondary="true"
                        medium="true"
                        text="Signin"
                        onClick={() => this.signin()}
                    />
                    <p onClick={() => {history.push('/signup')}}>New member? <u>Signup</u></p>
                </div>
            </div>
        )
    };
}

const mapStateToProps = ({ }) => ({ 

});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)