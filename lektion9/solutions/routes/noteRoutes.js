const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const validateNote = require('../middlewares/validateNote');

router.get('/', noteController.getAllNotes);
router.get('/note/:id', noteController.getNoteById); // For going to individual "sub-pages" for each note
router.get('/note/edit/:id', noteController.getEditNote); // For editing individual notes
router.post('/add', validateNote, noteController.createNote); // Adding validation logic (exercise 4 in Lecture 8)
router.post('/delete/:id', noteController.deleteNote); // For deleting a post (added in this phase)
router.post('/note/edit/:id', noteController.updateNote); // Updating the note

module.exports = router;