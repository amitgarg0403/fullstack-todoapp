const mongoose = require("mongoose")


// Defining Schema
const todoSchema = new mongoose.Schema({
    item: {type: String, required: true},
    completed: Boolean
});

// Creating Model
const Task = mongoose.model('task', todoSchema);

module.exports = Task;

