// DEPENDENCIES //

const express = require('express');
const sessions = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

// LOGIN

// This youtube video helped me: https://www.youtube.com/watch?v=ILviQic0c8g

sessions.get('/login', (req, res) => {
  res.render('login.ejs',
  {
    tabTitle: 'admin login',
    currentUser: req.session.currentUser
  })
});

sessions.post('/login', (req, res) => {

  User.findOne({ username: req.body.email }, (err, foundUser) => {

    if (err) {
      console.log(err)
      res.send('oops the db had a problem')
    } else if (!foundUser) {

      res.send('<a  href="/">Sorry, no user found </a>')
    } else {

      if (bcrypt.compareSync(req.body.password, foundUser.password)) {

        req.session.currentUser = foundUser

        res.redirect('/')
      } else {

        res.send('<a href="/"> password does not match </a>')
      }
    }
  })
});

sessions.delete('/login', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
