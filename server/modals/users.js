'use strict'

const mongooseUser = require('mongoose')
const userSchema = new mongooseUser.Schema({
    name: {
        type: String
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

const Users = mongooseUser.model('user', userSchema)
