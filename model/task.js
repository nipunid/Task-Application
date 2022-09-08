const mongoose = require('mongoose');
const uuid = require('uuid');

const taskSchema = new mongoose.Schema({
    task_id: {
        type: String,
        default: uuid,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    duedate: {
        type: String,
        required: true 
    },
    asignee: {
        type: String,
        required: true
    },
    currentstate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("task", taskSchema);