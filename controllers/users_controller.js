const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

// LOGIN / REGISTER

users.post('/register', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser)
    res.redirect('/login')
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






// users.post('/register', async (req, res) => {
//
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     User.create({
//       id: Date.now().toString(),
//       fullname: req.body.fullname,
//       email: req.body.email,
//       password: hashedPassword,
//     })
//     res.redirect('/login')
//   } catch (e) {
//     console.log(e);
//     res-redirect('/register')
//   }
// })
