const { Schema, model, Types } = require('mongoose');
//https://mongoosejs.com/docs/2.7.x/docs/validation.html

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reaction: [reactionSchema],
},
    {
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    });
// Create a virtual property `reactionCount` that gets the length of the thoughts's reaction array field on query
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reaction.length;
    });

// Initialize our User model
const Thought = model('thought', thoughtSchema);


module.exports = Thought;
