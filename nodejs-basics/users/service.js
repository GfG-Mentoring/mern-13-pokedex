const User = require("./entity");
const { hashPassword } = require('../utils/passwordUtils');
const { default: mongoose } = require("mongoose");
const { NotFoundError, BadRequestError } = require("../utils/http_exceptions");
const logger = require("../utils/logger");
const { default: z } = require("zod");

const getUserByIdOrEmail = async (idOrEmail) => {
    let user;

    if(mongoose.Types.ObjectId.isValid(idOrEmail)){
        user = await User.findById(idOrEmail);
    }else{
        user = await User.findOne({email: idOrEmail});
    }

    if(!user){
        throw new NotFoundError("User not found");
    }

    return user;
}

const createUser = async (name, email, password) => {

    if(!name.trim() || !email.trim() || !password.trim()) {
        throw new BadRequestError("Name, email and password are required");
    }

    if(!z.string().min(3).safeParse(name).success) {
        throw new BadRequestError("Name must be at least 3 characters long");
    }
    
    if(!z.email().safeParse(email).success) {
        throw new BadRequestError("Invalid email format");
    }

    if(!z.string().min(8).safeParse(password).success) {
        throw new BadRequestError("Password must be at least 8 characters long");
    }

    try{
        const newUser = new User({ name, email, password: hashPassword(password)})
        await newUser.save();
        return newUser;
    }catch(err){
        logger.error(err);
        throw new BadRequestError(err.message);
    }
}


module.exports = {
    createUser,
    getUserByIdOrEmail,
}