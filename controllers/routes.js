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



router.get('/', (req, res) => {
  // Record.find({}, (err, allRecords) => {
    res.render(
      'index.ejs',)
    //   {
    //     records: allRecords
    //   })
    // })
  });

















module.exports = router;
