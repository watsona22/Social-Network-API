// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/] },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
    // thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
},
    {
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    });

const User = model('user', userSchema);

module.exports = User;
