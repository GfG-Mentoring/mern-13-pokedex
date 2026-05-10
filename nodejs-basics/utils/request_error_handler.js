const logger = require("./logger");

const globalErrorHandler = (err,req, res, next) => {
    logger.error(err.stack); 

    res.status(err.statusCode || 500).send({
        message: err.message,
    });
}


module.exports = globalErrorHandler;