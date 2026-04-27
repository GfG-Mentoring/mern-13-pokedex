const morgan = require("morgan");

const logRequest = morgan('dev')

module.exports = logRequest;