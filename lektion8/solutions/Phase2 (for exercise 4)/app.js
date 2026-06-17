const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/notesDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
const noteRoutes = require('./routes/noteRoutes');
app.use('/', noteRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
