const winston = require("winston");

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${typeof message === "object" ? JSON.stringify(message) : message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
    ]
});

module.exports = logger;