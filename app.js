const express = require('express');
const app = express()

const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const auth = require('./routes/auth');

mongoose.connect(`mongodb://localhost/QuizHack`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    console.log('Successfully connected to Database!!');
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())

// app.use('/movies', movies)
app.use('/user', auth)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Working' })
})

app.listen(port, () => {
    console.log(`Listening on port ${port} 🚀`)
})