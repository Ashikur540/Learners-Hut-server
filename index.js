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
app.get("/courses/category/:id", (req, res) => {

    const c_id = req.params.id;
    console.log(c_id);


    if (c_id === "08") {
        res.send(coursesData);
    }

    const cat_coursesData = coursesData.filter(courses => courses.category_id === c_id);
    console.log(cat_coursesData);
    res.send(cat_coursesData);
})

app.listen(port, () => {
    console.log("server running on port ", port);
})