const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const validateNote = require('../middlewares/validateNote'); // This part was added

router.get('/', noteController.getAllNotes);
router.post('/add', validateNote, noteController.createNote); // Note the *order* of the validation

module.exports = router;