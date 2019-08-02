import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    Web Service App
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-fill nav-pills">
                        <li className="nav-item">
                            <NavLink
                                strict
                                activeClassName="active"
                                className="nav-link"
                                to="/records"
                            >
                                Records
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                strict
                                activeClassName="active"
                                className="nav-link"
                                to="/paginated"
                            >
                                Paginated
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                strict
                                activeClassName="active"
                                className="nav-link"
                                to="/addrecord"
                            >
                                Add-Record
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                strict
                                activeClassName="active"
                                className="nav-link"
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                strict
                                activeClassName="active"
                                className="nav-link"
                                to="/mongotest"
                            >
                                Mongo Test
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
