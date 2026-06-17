const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/notesDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Define schema + model (keep it here for now!)
const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model('Note', noteSchema);

// HOME - show form + notes
app.get('/', async (req, res) => {
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
    html += `<li><strong>${note.title}</strong>: ${note.content}
    
              <form method="POST" action="/delete/${note._id}" style="display:inline;">
              <button type="submit">Delete</button>
              </form>
            
            </li>`;
  });

  html += '</ul>';

  res.send(html);
});

// ADD NOTE
app.post('/add', async (req, res) => {
  const { title, content } = req.body;

  await Note.create({ title, content });

  res.redirect('/');
});

// DELETE NOTE (using HTTP POST)
app.post('/delete/:id', async (req, res) => {
  const id = req.params.id;

  await Note.findByIdAndDelete(id);

  res.redirect('/');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

