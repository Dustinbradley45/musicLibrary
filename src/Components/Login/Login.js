import React, { Component } from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import Registration from "./Registration";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            registrationIsVisible: false,

        }
    };

    toggleRegister = (e) => {
        this.setState({
            registrationIsVisible: !this.state.registrationIsVisible
        });
    }


    render() {
        const { registrationIsVisible} = this.state;
        const { isLoggedIn } = this.props;
        const { toggleRegister } = this;
        return (
            <div>
                <LoginHeader
                    isLoggedIn={isLoggedIn}
                />
                {
                    registrationIsVisible === true ?
                        <Registration /> :
                          <LoginForm />
                }
              
            <div className="registerForm">
                    <button className="registrationToggle" onClick={toggleRegister}>Register</button>
            </div>
            </div>
        )
    }
}

export default Login;