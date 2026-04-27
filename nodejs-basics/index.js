const express = require('express');

const userRouter = require('./users/controller');
const logRequest = require('./middleware/logRequest');
const globalErrorHandler = require('./utils/request_error_handler');


const app = express();

app.use(express.json());
app.use(logRequest);


app.use('/users', userRouter);

app.use(globalErrorHandler);

app.listen(3000,()=> {
    console.log('Server is running on port 3000');
})