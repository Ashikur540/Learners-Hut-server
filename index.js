const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

// data
const categoryData = require("./Data/categoryData.json");
const coursesData = require("./Data/Courses.json");


app.get("/", (req, res) => {
    res.send("Api is running...")
})

app.get("/courses/category/", (req, res) => {
    res.send(categoryData)
})
app.get("/courses", (req, res) => {
    res.send(coursesData)
})

app.get("/courses/category/:id", (req, res) => {

    const c_id = req.params.id;
    // console.log(c_id);


    if (c_id === "07") {
        res.send(coursesData);
    }

    const cat_coursesData = coursesData.filter(courses => courses.category_id === c_id);
    // console.log(cat_coursesData);
    res.send(cat_coursesData);
})

app.get("/courses/:id", (req, res) => {

    const c_id = req.params.id;
    // console.log(c_id);


    const courseData = coursesData.find(courses => courses._id === c_id);
    // console.log(courseData);
    res.send(courseData);
})
app.get("/courses/:id/checkout", (req, res) => {

    const c_id = req.params.id;
    console.log(c_id);


    const courseData = coursesData.find(courses => courses._id === c_id);
    // console.log(courseData);
    res.send(courseData);
})


app.get("/courses/category/:c_id/:id", (req, res) => {

    const { c_id, id } = req.params;
    // console.log(c_id, id);
    // filter cat
    const cat_coursesData = coursesData.filter(courses => courses.category_id === c_id);
    // console.log("cat courses:", cat_coursesData);
    // show that cat specific course data
    const courseData = cat_coursesData.find(course => course._id === id);
    // console.log("course", courseData);
    res.send(courseData);
})


app.listen(port, () => {
    console.log("server running on port ", port);
})