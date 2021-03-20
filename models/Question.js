const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({

    question: { type: String, min: 3, max: 50, required: true },
    marks: { type: Number, required: true, default: 1 },
    option1: { type: String, min: 3, max: 50, required: true },
    option2: { type: String, min: 3, max: 50, required: true },
    option3: { type: String, min: 3, max: 50, required: true },
    option4: { type: String, min: 3, max: 50, required: true },
    answer: { type: String, min: 3, max: 50, required: true },

})

module.exports = mongoose.model('Question', QuestionSchema)