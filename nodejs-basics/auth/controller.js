const {Router} = require('express');
const {hashPassword, verifyPassword} = require('../utils/passwordUtils');
const { getUserByIdOrEmail, createUser } = require('../users/service');
const { BadRequestError, NotFoundError } = require('../utils/http_exceptions');
const { default: z } = require('zod');
const logger = require('../utils/logger');
const { generateAccessToken } = require('./utils');
const router = Router();


// signup api
router.post("/signup", async (req,res)=> {
    const {name, email, password} = req.body; 
    
    // validation
    if(!name.trim() || !email.trim() || !password.trim()) {
        throw new BadRequestError("Name, email and password are required");
    }

    if(!z.email().safeParse(email).success) {
        throw new BadRequestError("Invalid email format");
    }

    // strong password validation should go here. 

    // check if user already exists
    const user = await getUserByIdOrEmail(email);
    if(user) {
        throw new BadRequestError("User already exists with this email. Please use a different email or sign in.");
    }

    // hash password
    await createUser(name, email, password);
    res.status(201).send({message: "Signup successful. Please sign in to continue."});

});

// signin api
router.get("/signin", async (req,res)=> {
    const encodedString = req.headers.authorization;

    logger.debug(encodedString);

    const decodedString = Buffer.from(encodedString, 'base64').toString('utf-8');

    logger.debug(decodedString);

    const [email, password] = decodedString.split(':');

    // validation starts here
    if(!email.trim() || !password.trim()) {
        throw new BadRequestError("Email and password are required");
    }

    if(!z.email().safeParse(email).success) {
        throw new BadRequestError("Invalid email format");
    }

    const user = await getUserByIdOrEmail(email);
    
    if(!user) {
        throw new NotFoundError("User not found. Please sign up to continue.");
    }

    if(!await verifyPassword(password, user.password)) {
        throw new BadRequestError("Invalid password. Please try again.");
    }
    const accessToken = await generateAccessToken({id:user.id});
    res.status(200).send({message: "Signin successful. Welcome back, " + user.name + "!", accessToken});

}); 


module.exports = router;