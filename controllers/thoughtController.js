const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
                .populate([{ path: "thoughts", strictPopulate: false }])
                .populate([{ path: "friends", strictPopulate: false }]);


            res.json(thoughts);
        } catch (err) {
            console.error({ message: err });
            return res.status(500).json(err);
        }
    },
    // get a thought by id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({
                _id: req.params.thoughtId
            });
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a thought by id
    async updateThought(req, res) {
        try {
            console.log('You are updating a thought');
            console.log(req.body);

            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body }, // Use $set to update specific fields
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thought);
            console.log(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // remove a thought by id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({ message: 'Thought and reaction deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
