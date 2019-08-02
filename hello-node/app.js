const express = require("express");
const app = express();
const courses = ["Angular", "React", "NodeJS", "Kubernetes", "Python"];
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Going Home by Express ?");
    // console.log(req);
});

app.get("/api/courses", (req, res) => {
    res.send(JSON.stringify(courses));
});

app.get("/api/courses/:id", (req, res) => {
    res.send(courses[req.params.id]);
});

app.post("/api/course", (req, res) => {
    const newCourse = req.body.coursename;
    console.log(req.body);
    courses.push(newCourse);

    res.send(newCourse);
});

app.delete("/api/course/:id", (req, res) => {
    const courseToDelete = courses.length > req.params.id;

    if (!courseToDelete) res.status(404).send("No such course!");
    else {
        const deleted = courses.splice(req.params.id, 1);
        res.send(deleted);
    }
});

app.listen(3000, () => console.log("Listening on 3000...."));
