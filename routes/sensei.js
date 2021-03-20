const express = require('express');
const Course = require('../models/Course');
const User = require('../models/User');
const router = express.Router();

// creates Course room
router.post("/course", async (req, res) => {

    const { name } = req.body

    const courseModel = {
        name,
        creator: [req.user._id]
    }

    const course = await (await Course.create(courseModel)).save();
    res.send({ course })

})


router.get("/course", async (req, res) => {

    // this will return a array
    const course = await Course.find({ creator: req.user._id })
    res.send({ course });

})

// Gets all student in the course
router.get("/students/", async (req, res) => {

    const courseModel = await Course.find({ creator: req.user._id })

    const [course] = courseModel.map(c => c.students)
    // course is an array of student _ids

    // res.send({ course });
    res.send({ students: course });
})

router.delete("/dismantle/:courseId", async (req, res) => {

    await Course.findByIdAndDelete(courseId)
    res.send({ msg: "Deleted the course", status: true })

})

module.exports = router;