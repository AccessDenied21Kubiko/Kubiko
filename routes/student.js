const express = require('express');
const Course = require('../models/Course');
const router = express.Router();
const Users = require('../models/User')

// Get all courses for a pirticular student
router.get("/course", (req, res) => {

    res.send({ courses: req.user.courses });

})

router.post("/join", async (req, res) => {
    const { code } = req.body

    const course = await Course.findOne({ code })

    if (course.length == 0) {
        res.send({ msg: "Invalid Course code", msgError: true });
    } else {
        // check if the user is already there or not, if the user is the admin or not
        // console.log(course)

        if (course.students.includes(req.user._id)) {
            res.send({ msg: "User already a member", msgError: true });
        }
        else {

            course.students.push(req.user._id);

            course.save((err) => {
                if (err) {
                    res.send({ msg: "Some error occured", msgError: true });
                }
                else {
                    res.send({ course, msgError: false });
                }
            });

        }

    }

})

module.exports = router;