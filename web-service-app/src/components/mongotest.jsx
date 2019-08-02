import React, { Component } from "react";
import axios from "axios";
import Courseform from "./createcourse";
import CourseTable from "./courseTable";

class Mongotest extends Component {
    state = {
        courses: [],
        newCourse: { name: "", author: "" }
    };

    componentDidMount() {
        const fetchUrl = "http://localhost:4000/api/courses/";
        axios.get(fetchUrl).then(response => {
            console.log(response.data);
            const newCourses = response.data;
            this.setState({ courses: newCourses });
        });
    }

    createCourse = event => {
        event.preventDefault();
        const postUrl = "http://localhost:4000/api/course";
        const { courses } = this.state;
        axios
            .post(postUrl, this.state.newCourse)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    return res.data;
                }
            })
            .then(data => {
                courses.push(data);
                this.setState({
                    courses
                });
            })
            .catch(err => console.error(err));
    };

    handleChange = event => {
        // console.log("ONCHANGE");

        let { newCourse } = this.state;
        newCourse[event.currentTarget.id] = event.currentTarget.value;
        //courses[courses.length] = course;
        this.setState({
            newCourse
        });
    };

    render() {
        return (
            <div className="container">
                <h1>MONGO TEST CRUD</h1>
                <h2>Create Course</h2>
                <div className="row">
                    <Courseform
                        createCourse={this.createCourse}
                        handleChange={this.handleChange}
                    />
                </div>
                <CourseTable courses={this.state.courses} />
            </div>
        );
    }
}

export default Mongotest;
