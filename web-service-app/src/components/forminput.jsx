import React, { Component } from "react";

class FormInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    className="form-control col-3"
                    value={this.props.value}
                    type={this.props.type}
                    name={this.props.id}
                    id={this.props.id}
                    onChange={this.props.handleChange}
                />
                {this.props.error && (
                    <div className="alert alert-danger col-3">
                        {this.props.error}
                    </div>
                )}
            </div>
        );
    }
}

export default FormInput;
