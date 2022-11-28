const express = require('express');
const search = express.Router();
const Record = require('../models/schema.js');

//                  SEARCH
// This youtube video helped me: https://www.youtube.com/watch?v=OEdPH4fV7vY
// Although, his code looks much different, and he had a section in his schema which I discovered does nothing for me... yet somehow this still works?


search.post('/search', (req, res) =>{
  let searchTerm = req.body.searchTerm;
  Record.find( { $text: { $search: searchTerm, $diacriticSensitive: true }}, (err, findRecords) => {
    res.render(
      'search.ejs',
      {
        tabTitle: 'Search',
        records: findRecords,
        currentUser: req.session.currentUser
      })
    })
  });

// search.get('/search', (req, res) => {
//
//     res.render(
//       'search.ejs',
//       {
//         tabTitle: 'Search',
//
//         currentUser: req.session.currentUser
//       })
//
//   });



module.exports = search
