import React, { Component } from "react";
import FormInput from "./forminput";
import axios from "axios";

class Courseform extends Component {
    state = {
        course: {
            name: "",
            author: ""
        }
    };

    /* createCourse = event => {
        event.preventDefault();
        const postUrl = "http://localhost:4000/api/course";
        axios
            .post(postUrl, this.state.course)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    handleChange = event => {
        let { course } = this.state;
        course[event.currentTarget.id] = event.currentTarget.value;
        this.setState({
            course
        });
    }; */

    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.createCourse}>
                    <FormInput
                        key="name"
                        id="name"
                        label="Name"
                        type="text"
                        handleChange={this.props.handleChange}
                    />
                    <FormInput
                        key="author"
                        id="author"
                        label="Author"
                        type="text"
                        handleChange={this.props.handleChange}
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Courseform;
