const express = require('express');
const router = express.Router();
const Records = require('../models/schema.js');





router.get('/', (req, res)=>{
	res.send('hi');
})
















module.exports = router;
