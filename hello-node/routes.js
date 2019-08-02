const mongo = require("mongoose");
const express = require("express");
const router = express.Router();

const connStr =
    "mongodb+srv://jshivam:Shivam123@cluster0-vm-w4e9u.mongodb.net/train?retryWrites=true&w=majority";
//--------------------------------------------------DatabaseName = train

mongo
    .connect(connStr, { useNewUrlParser: true })
    .then(() => console.log("Connected!"))
    .catch(err => console.error(err));

// Create Schema
const courseSchema = new mongo.Schema({
    name: String,
    author: String
});

//Require a mongo model / Class to write queries on it.
const CourseModel = mongo.model("Course", courseSchema);

/*
Creating Routes with express
*/
router.get("/courses", (req, res) => {
    console.log("List of Records......");
    CourseModel.find().exec((err, courses) => {
        if (err) console.error(err);
        else res.json(courses);
    });
});

router.get("/course/:name", (req, res) => {
    console.log("Fetching ", req.params.name);
    CourseModel.find({ name: req.params.name }).exec((err, course) => {
        if (err) console.error(err);
        else res.json(course);
    });
});

router.post("/course", (req, res) => {
    console.log("Adding ", req.body);
    let newCourse = new CourseModel();
    newCourse.name = req.body.name;
    newCourse.author = req.body.author;

    newCourse.save((err, course) => {
        if (err) console.error(err);
        else res.json(course);
    });
});

module.exports = router;
