import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PaginatedList extends Component {
    state = {
        records: [],
        currentPage: 1,
        itemsPerPage: 50,
        pages: [],
        showPages: []
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

    paginatedClick = event => {
        let { currentPage } = this.state;
        if (event.currentTarget.id === "next") currentPage++;
        else if (event.currentTarget.id === "prev")
            currentPage = Math.max(1, currentPage - 1);
        else currentPage = event.currentTarget.id;
        this.setState({
            currentPage
        });
    };
    render() {
        const { records, currentPage, itemsPerPage } = this.state;
        const idxOfLastRec = currentPage * itemsPerPage;
        const idxOfFirstRec = idxOfLastRec - itemsPerPage;
        const currentRecords = records.slice(idxOfFirstRec, idxOfLastRec);
        let pages = [];
        for (let i = 1; i < Math.ceil(records.length / itemsPerPage); i++) {
            pages.push(i);
        }
        //this.state.showPages = pages.slice(0, 4);
        const next = ">>";
        const prev = "<<";
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
                            {currentRecords.map(record => (
                                <tr key={record.id}>
                                    <th>{record.id}</th>
                                    <td>{record.name}</td>
                                    <td>{record.age}</td>
                                    <td>{record.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <ul id="page-numbers" className="pagination">
                        <li id="prev" className="page-item">
                            {" "}
                            <Link
                                className="page-link"
                                onClick={this.paginatedClick}
                                to="#"
                                id="prev"
                            >
                                {prev}
                            </Link>
                        </li>
                        {pages.map(n => (
                            <li
                                key={n}
                                className={
                                    n === parseInt(this.state.currentPage)
                                        ? "page-item active"
                                        : "page-item"
                                }
                            >
                                <Link
                                    className="page-link"
                                    onClick={this.paginatedClick}
                                    id={n}
                                    to="#"
                                >
                                    {n}
                                </Link>
                            </li>
                        ))}
                        <li id="prev" className="page-item">
                            {" "}
                            <Link
                                className="page-link"
                                onClick={this.paginatedClick}
                                to="#"
                                id="next"
                            >
                                {next}
                            </Link>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default PaginatedList;
