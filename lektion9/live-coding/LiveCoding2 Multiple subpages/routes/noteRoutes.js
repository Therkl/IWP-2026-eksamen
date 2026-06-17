const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const validateNote = require('../middlewares/validateNote');

router.get('/', noteController.getAllNotes);
router.post('/add', validateNote, noteController.createNote); // Adding validation logic (exercise 4 in Lecture 8)
router.post('/delete/:id', noteController.deleteNote); // For deleting a post (added in this phase)

// Adding link for note sub-page
router.get('/note/:id', noteController.getNoteById);

module.exports = router;