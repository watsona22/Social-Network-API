const { Schema, model } = require('mongoose');
//https://mongoosejs.com/docs/2.7.x/docs/validation.html

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reaction: [reactionSchema]
});

const Thought = model('thought', thoughtSchema);


module.exports = Thought;
