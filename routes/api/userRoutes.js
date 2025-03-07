const router = require('express').Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/userController'); // Import addFriend here

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);
module.exports = router;
