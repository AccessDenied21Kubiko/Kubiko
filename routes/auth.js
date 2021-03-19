const express = require('express');
const router = express.Router();
const User = require('../models/User')
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require('passport');
const passportConfig = require('./passport')

const signToken = (id) => {
    return JWT.sign({
        iss: 'Arkaraj', // issued by
        sub: id
    }, `${process.env.SECRET}`, { expiresIn: '1h' })
}



// Logout Account
router.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie('access_token')
    res.status(200).json({ msg: "Logged out", user: {}, success: true })
})

module.exports = router;