const router = require('express').Router();
const { getThoughts, getThoughtById, createThought, deleteThought } = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById).delete(deleteThought);

module.exports = router;
