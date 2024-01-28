const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/] },
    thoughts: { enum: thought_id },
    friends: { enum: user_id },
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User
    .create({

    })
    .then(result => console.log('Created new document', result))
    .catch(err => handleError(err));

module.exports = User;
