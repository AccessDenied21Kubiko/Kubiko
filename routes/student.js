const express = require('express');
const Course = require('../models/Course');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const router = express.Router();

// Get all courses for a pirticular student
router.get("/course", (req, res) => {

    res.send({ courses: req.user.courses });

})

router.post("/join", async (req, res) => {
    const { code } = req.body

    try {


        const course = await Course.findOne({ code })

        if (!course) {
            res.send({ msg: "Invalid Course code", msgError: true });
        }
        else {
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

                    course.save();

                    const user = await User.findById(req.user._id)

                    user.courses.push(course._id);
                    user.save();

                    res.send({ user });
                }

            }
        }

    } catch (err) {
        console.log(err)
        res.send({ msg: "Internal Error" })
    }

})

router.delete("/course/:courseId", async (req, res) => {

    const user = await User.findById(req.user._id)

    user.courses.filter(c => c != req.params.courseId)
    user.save()

    const course = await Course.findById(req.params.courseId)

    course.students.filter(s => s != req.user._id)
    course.save()

    res.send({ user })

})

// Show Quizzes in the Course room
router.get("/quiz/:courseId", async (req, res) => {

    // This will be an array
    const quizzes = await Quiz.find({ courseId: req.params.courseId })

    res.send({ quizzes })

})

// Students can write quizzes
router.post("/quiz/:quizId", async (req, res) => {

    const { option } = req.body;

    Quiz.findById({ _id: req.params.quizId }).populate('questions').exec((err, document) => {
        if (err)
            res.send({ msgError: true });
        else {
            // question is an array of questions
            const questions = document.questions;

            res.send({ questions })
        }
    })

});

module.exports = router;