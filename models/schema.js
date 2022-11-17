const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema ({
  name: {type: String, required: true},
  color: {type: String, required: true},
  readyToEat: Boolean
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
