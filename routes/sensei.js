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


module.exports = router;