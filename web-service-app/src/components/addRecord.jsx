import React, { Component } from "react";
import axios from "axios";

class AddRecord extends Component {
    state = {
        record: { name: "", age: "", address: "" }
    };

    handleSubmitForm = event => {
        event.preventDefault();
        const postUrl = "https://prashantranjan.com/api/add-data.php";
        axios
            .post(postUrl, this.state.record)
            .then(res => console.log("Submitted!", res.data.message))
            .catch(err => console.log("Error Occured", err));
    };

    handleChangeInput = event => {
        // console.log("change in submission", event.currentTarget.id);
        let { record } = this.state;
        record[event.currentTarget.id] = event.currentTarget.value;

        // console.log(record);
    };

    render() {
        return (
            <div className="container">
                <h1>Add Record</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input
                            type="text"
                            className="form-control"
                            id="age"
                            placeholder="Age"
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label for="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default AddRecord;
