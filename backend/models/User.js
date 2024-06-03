const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: [{
        type: String,
        //required: true
        default: "PublicUser"
    }],
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('User', userSchema);
