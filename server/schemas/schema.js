const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const userSchema = mongoose.model("UserList", usersSchema)

module.exports = {userSchema}