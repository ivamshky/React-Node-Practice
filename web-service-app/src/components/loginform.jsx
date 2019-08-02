import React, { Component } from "react";
import FormInput from "./forminput";
import Joi from "@hapi/joi";

class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {},
        disable: true // For submit button
    };

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    validate = input => {
        let { account, errors, disable } = this.state;
        //Normal Validation Method
        /* if (account.username.trim() === "")
            errors.username = "Username Required";
        else delete errors.username;

        if (account.password.trim() === "")
            errors.password = "Password Required";
        else delete errors.password; */

        //Joi validation
        const results = Joi.validate(this.state.account, this.schema, {
            abortEarly: false
        });

        if (results.error) {
            //console.log(results.error.details, input.id);
            results.error.details.map(
                err => (errors[err.context.key] = err.message)
            );
            disable = true;
        } else {
            delete errors[input.id];
            if (Object.entries(errors).length === 0) disable = false;
        }

        this.setState({
            errors,
            disable
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.account);

        //Validating
        this.validate(event.currentTarget);
    };

    handleChange = event => {
        let { account } = this.state;
        account[event.currentTarget.id] = event.currentTarget.value;
        this.setState({
            account
        });
        this.validate(event.currentTarget);
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        key="username"
                        id="username"
                        label="Username"
                        type="text"
                        value={this.state.account.username}
                        handleChange={this.handleChange}
                        error={this.state.errors.username}
                    />
                    <FormInput
                        key="password"
                        id="password"
                        label="Password"
                        type="password"
                        value={this.state.account.password}
                        handleChange={this.handleChange}
                        error={this.state.errors.password}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={this.state.disable}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
