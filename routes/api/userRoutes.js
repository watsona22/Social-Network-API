const router = require('express').Router();
const {
    getSingleUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
//POST to add a new friend to a user's friend list
//DELETE to remove a friend from a user's friend list

