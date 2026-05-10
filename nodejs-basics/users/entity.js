const { default: mongoose } = require("mongoose");
const zod = require('zod');
const { hashPassword } = require("../utils/passwordUtils");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate: {
            validator: (email) => {
                return zod.email().parse(email);
            },
            message: 'Invalid email address'
        },
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
 timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;