const Note = require('../models/noteModel');

exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();

  let html = `
    <h1>Notes App</h1>

    <form method="POST" action="/add">
      <input name="title" placeholder="Title" required />
      <input name="content" placeholder="Content" required />
      <button type="submit">Add Note</button>
    </form>

    <h2>All Notes</h2>
    <ul>
  `;

  notes.forEach(note => {
    html += `<li><strong>${note.title}</strong>: ${note.content}</li>`;
  });

  html += '</ul>';

  res.send(html);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  await Note.create({ title, content });
  res.redirect('/');
};