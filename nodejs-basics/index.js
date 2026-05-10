require('dotenv').config();


const express = require('express');

const logRequest = require('./middleware/logRequest');
const globalErrorHandler = require('./utils/request_error_handler');

const authRouter = require('./auth/controller');
const userRouter = require('./users/controller');
const { verifyAuthMiddleware } = require('./middleware/verifyAuth');
const { connectToDb } = require('./db');


const app = express();

app.use(logRequest);

app.use(express.json());

app.use('/users',verifyAuthMiddleware,userRouter);

app.use('/auth', authRouter);


app.use(globalErrorHandler);

app.listen(3000,()=> {
    console.log('Server is running on port 3000');
    connectToDb();
})