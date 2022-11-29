// DEPENDENCIES //

const express = require('express');
const search = express.Router();
const Record = require('../models/schema.js');

// SEARCH

// This youtube video helped me: https://www.youtube.com/watch?v=OEdPH4fV7vY

search.get('/search', (req, res)=>{
    console.log(req.query.search)
    Record.find({ name: {$regex: req.query.search, $options : 'i'}}, (err, foundRecord)=>{

      res.render('search.ejs',
      {
        tabTitle: 'Search',
        records: foundRecord,
        currentUser: req.session.currentUser
      })
    })
  });

module.exports = search
