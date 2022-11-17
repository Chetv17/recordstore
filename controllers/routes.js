const express = require('express');
const router = express.Router();
const Record = require('../models/schema.js');





router.get('/', (req, res)=>{
  Record.find({}, (error, allRecords) => {
    res.render(
      'index.ejs',
      {
        records: allRecords
      })
    })
  });

















module.exports = router;
