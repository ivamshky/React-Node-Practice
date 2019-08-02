import React, { Component } from "react";

class CourseTable extends Component {
    state = {};

    render() {
        return (
            <table className="table m-2">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">author</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map(record => (
                        <tr key={record._id}>
                            <th>{record._id}</th>
                            <td>{record.name}</td>
                            <td>{record.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default CourseTable;
