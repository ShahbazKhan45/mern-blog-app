const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        required: true,
        validate(value) {
            if (value.length === 0) throw new Error("This is required field");
        }
    },
    comment: {
        type: String,
        required: true,
        validate(value) {
            if (value.length === 0) throw new Error("This is required field");
        }
    }
})

// Todo All valdiation in Schema

const Comments = mongoose.model("Comments", CommentSchema);

module.exports = Comments;