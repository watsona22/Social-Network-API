const router = require('express').Router();
const {
    getSingleThought,
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

//POST to create a reaction stored in a single thought's reactions array field
//DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
