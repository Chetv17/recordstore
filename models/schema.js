const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema ({
  name: String,
  artist: String,
  cover: String,
  backcover: String,
  addartwork: String,
  tracklist: [{
    title: String,
    author: String
  }],
  musicians: [{
    name: String,
    instrument: String
  }],
  year: String,
  label: String,
  copies: Number,
  genre: String,
  newArrival: Boolean

}, {timestamps: true});

// recordSchema.index({name: 'text', artist: 'text'});
// recordSchema.index({"$**" : 'text'});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
