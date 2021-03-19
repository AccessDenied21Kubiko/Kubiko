const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({

    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quizMarks: { type: Number, required: true }

})

module.exports = mongoose.model('Result', ResultSchema)