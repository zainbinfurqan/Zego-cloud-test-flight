'use strict'

const mongooseUser = require('mongoose')
const roomSchema = new mongooseUser.Schema({
    roomId: {
        type: String
    },
    streamId: {
        type: String,
    },
    token: {
        type: String,
    },
    userId: {
        type: String,
    },
}, {
    timestamps: true
})

const Rooms = mongooseUser.model('room', roomSchema)
