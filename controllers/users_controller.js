const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

// LOGIN / REGISTER

users.post('/register', (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser)
    res.redirect('/')
  })
})

users.get('/login', (req, res) => {
    res.render(
      'login.ejs',
      {
        tabTitle: 'login',
      })
  });

users.get('/register', (req, res) => {
    res.render(
      'register.ejs',
      {
        tabTitle: 'register',
      })
  });



module.exports = users
