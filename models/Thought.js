const mongoose = require('mongoose');
//https://mongoosejs.com/docs/2.7.x/docs/validation.html
function validator(v) {
    return v.length <= 128;
};
function validator(v) {
    return v.length <= 280;
};

const reactionSchema = new mongoose.Schema.ObjectId({
    reactionBody: { type: String, required: true, validate: [validator, 'error'] },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, validate: [validator, 'error'] },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reaction: { enum: [reactionSchema] },
});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

Thought
    .create({

    })
    .then(result => console.log('Created new document', result))
    .catch(err => handleError(err));


module.exports = Thought;
