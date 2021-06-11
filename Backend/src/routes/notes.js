const { Router } = require('express');

const router = Router();

const { getNotes, createNotes, getNote, updateNote, deleteNotes } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNotes);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNotes);

module.exports = router;