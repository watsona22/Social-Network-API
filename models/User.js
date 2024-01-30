// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/] },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    // thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const User = model('user', userSchema);

// const handleError = (err) => console.error(err);

// User
//     .create({

//     })
//     .then(result => console.log('Created new document', result))
//     .catch(err => handleError(err));

module.exports = User;
