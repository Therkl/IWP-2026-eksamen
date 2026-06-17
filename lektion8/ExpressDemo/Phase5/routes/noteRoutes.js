const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.getAllNotes);
router.post('/add', noteController.createNote);
router.post('/delete/:id', noteController.deleteNote); // For deleting a post (added in this phase)

module.exports = router;