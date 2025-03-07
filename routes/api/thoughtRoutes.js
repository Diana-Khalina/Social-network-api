const router = require('express').Router();
const { 
  getThoughts, 
  getThoughtById, 
  createThought, 
  updateThought, 
  deleteThought, 
  addReaction, 
  removeReaction 
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// Add & Remove Reactions
router.post('/:thoughtId/reactions', addReaction);
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
