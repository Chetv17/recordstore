// DEPENDENCIES //

const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

// REGISTER

// This youtube video helped me: https://www.youtube.com/watch?v=ILviQic0c8g

users.get('/register', (req, res) => {
    res.render(
      'register.ejs',
      {
        tabTitle: 'admin register',
      })
  });

users.post('/register', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser)
    res.redirect('/login')
  })
});

module.exports = users
