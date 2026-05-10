const mongoose = require('mongoose');

const logger = require('../utils/logger');


function getMongoUri() {
    const mongoUri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.dzfap.mongodb.net/${process.env.MONGO_DATABASE}`
    return mongoUri;
}


async function connectToDb() {
    try {
        await mongoose.connect(getMongoUri());
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error('Error connecting to MongoDB', error);
    }
}


module.exports = {
    connectToDb
}