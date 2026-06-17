const Note = require('../models/noteModel');

// GET all notes (now renders a view)
exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();

  res.render('index', { notes }); // instead of res.send(); we include the index.ejs file
};

// CREATE note
exports.createNote = async (req, res) => {
  const { title, content, category } = req.body; // Added category
  await Note.create({ title, content, category }); // Added category
  res.redirect('/');
};

// Delete a note
exports.deleteNote = async (req, res) => {
  const id = req.params.id;

  await Note.findByIdAndDelete(id);

  res.redirect('/');
};

exports.getNoteById = async (req, res) => {
  const id = req.params.id;

  const note = await Note.findById(id);

  if (!note) {
    return res.send("Note not found");
  }

  res.render('note', { note });
};

exports.getEditNote = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return res.send("Note not found");
  }

  res.render('edit', { note });
};

exports.updateNote = async (req, res) => {
  const { title, content } = req.body;

  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content
  });

  res.redirect('/');
};