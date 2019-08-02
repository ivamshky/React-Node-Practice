const mongo = require("mongoose");
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

//Building Queries
async function createCourse(name, author) {
    const newCourse = new CourseModel({
        name: name,
        author: author
    });

    const result = await newCourse.save();
    console.log(result);
}

// createCourse("Angular", "Google");
// createCourse("GoLang", "Google");
// createCourse("Node", "Node");
// createCourse("React", "FB");

async function getAllCourses() {
    const courseList = await CourseModel.find();
    console.log(courseList);
}

async function getCourse(name) {
    const course = await CourseModel.find({ name: name });
    console.log("======================================");
    console.log(course);
}

getAllCourses();
getCourse("GoLang");
