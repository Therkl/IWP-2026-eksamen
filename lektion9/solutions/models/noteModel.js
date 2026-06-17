const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String // This was added
});

module.exports = mongoose.model('Note', noteSchema);