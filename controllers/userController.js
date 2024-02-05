const { User, Thought } = require('../models');

module.exports = {

    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.error({ message: err });
            return res.status(500).json(err);
        }
    },
    // get a user by id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            // .populate([
            //     { path: "thoughts", select: "-__v" },
            //     { path: "friends", select: "-__v" },
            // ]);
            console.log(user)
            !(user)
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body.userId },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // remove a user by id
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            await Thought.deleteMany(
                {
                    _id: { $in: user.thoughts },
                    _id: { $in: user.friends }
                });
            res.json({ message: 'User and associated thoughts are deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //add user friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Remove user friend. 
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: { friendId: req.params.userId } } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No friend with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
