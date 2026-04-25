const express = require('express');

const userRouter = require('./users/controller');


const app = express();
app.use(express.json());


app.use('/users', userRouter);

app.listen(3000,()=> {
    console.log('Server is running on port 3000');
})