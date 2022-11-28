// DEPENDENCIES //

const express = require('express');
const search = express.Router();
const Record = require('../models/schema.js');

// SEARCH

// This youtube video helped me: https://www.youtube.com/watch?v=OEdPH4fV7vY

search.post('/search', (req, res) =>{
  let searchTerm = req.body.searchTerm;
  Record.find( { $text: { $search: req.body.searchTerm, $diacriticSensitive: true }}, (err, findRecords) => {
    res.render(
      'search.ejs',
      {
        tabTitle: 'Search',
        records: findRecords,
        currentUser: req.session.currentUser
      })
    })
  });


module.exports = search
