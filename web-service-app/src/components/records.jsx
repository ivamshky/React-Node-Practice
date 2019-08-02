import React, { Component } from "react";
import axios from "axios";

class Records extends Component {
    state = {
        records: []
    };

    async componentDidMount() {
        //URL
        const getURL = "https://prashantranjan.com/api/services.php";
        await axios
            .get(getURL)
            .then(response => {
                const records = response.data;
                this.setState({ records });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <h1>Fetching Records</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">age</th>
                                <th scope="col">address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.records.slice(-100, -50).map(record => (
                                <tr key={record.id}>
                                    <th>{record.id}</th>
                                    <td>{record.name}</td>
                                    <td>{record.age}</td>
                                    <td>{record.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default Records;
