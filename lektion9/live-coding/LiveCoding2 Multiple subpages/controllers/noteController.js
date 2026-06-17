const Note = require('../models/noteModel');

// GET all notes (now renders a view)
exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();

  res.render('index', { notes }); // instead of res.send(); we include the index.ejs file
};

// CREATE note
exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  await Note.create({ title, content });
  res.redirect('/');
};

// Delete a note
exports.deleteNote = async (req, res) => {
  const id = req.params.id;

  await Note.findByIdAndDelete(id);

  res.redirect('/');
};

// Show note sub-page
exports.getNoteById = async (req, res) => {
  const id = req.params.id; // Gets the unique note

  const note = await Note.findById(id);

  res.render('note', { note });
}