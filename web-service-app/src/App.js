import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Records from "./components/records";
import AddRecord from "./components/addRecord";
import NavBar from "./components/navbar";
import PaginatedList from "./components/paginatedlist";
import LoginForm from "./components/loginform";
import Mongotest from "./components/mongotest";

class App extends Component {
    state = {};
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                {/* Register routes for Application Components */}
                <Switch>
                    <Route path="/records" component={Records} />
                    <Route path="/addrecord" component={AddRecord} />
                    <Route path="/paginated" component={PaginatedList} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/mongotest" component={Mongotest} />
                    <Route path="/" component={Records} />
                </Switch>
            </div>
        );
    }
}

export default App;
