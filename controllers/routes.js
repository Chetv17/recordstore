const express = require('express');
const router = express.Router();
const Record = require('../models/schema.js');

//// seed DATA

const seedRecords = require('../models/seed.js');

//              SEED DATABASE

router.get('/seed', (req, res) => {
    Record.create(seedRecords, (err, data)=>{
        res.redirect('/');
    })
});


//                  ROUTES

//                   INDEX

router.get('/', (req, res) => {
  Record.find({}, (err, allRecords) => {
    res.render(
      'index.ejs',
      {
        tabTitle: 'Homepage',
        records: allRecords
      })
    })
  });

//                   SHOW

router.get('/:id', (req, res) => {
  Record.find({}, (err, allRecords) => {
    res.render(
      'show.ejs',
      {
        tabTitle: 'Record Info',
        records: allRecords
      })
    })
  });
















module.exports = router;
