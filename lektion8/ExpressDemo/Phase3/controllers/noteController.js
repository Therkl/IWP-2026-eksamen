const Note = require('../models/noteModel');

// GET all notes (now renders a view)
exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();

  res.render('index', { notes }); // instead of res.send(); we include the index.ejs file
};

// CREATE note (unchanged logic)
exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  await Note.create({ title, content });
  res.redirect('/');
};