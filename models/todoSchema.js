const mongoose = require('mongoose');

// todo schema
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    duedate: {
        type: Date,
        required: true
    },
}, {
    timestamps: true    // for created at and updated at
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;