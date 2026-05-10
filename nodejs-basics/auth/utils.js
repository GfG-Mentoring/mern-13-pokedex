const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');
const { UnauthorizedError } = require('../utils/http_exceptions');

async function generateAccessToken(payload) {
    if(!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not set");
    }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}


async function verifyAccessToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        logger.error(err);
        throw new UnauthorizedError("User is unauthorized. Please login to continue.");
    }
}


module.exports = {
    generateAccessToken,
    verifyAccessToken
}