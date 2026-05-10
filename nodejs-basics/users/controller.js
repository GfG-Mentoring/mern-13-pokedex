const {Router} = require('express');
const logger = require('../utils/logger');
const { NotFoundError, BadRequestError } = require('../utils/http_exceptions');
const { createUser } = require('./service');

const router = Router();

router.get("/", (req)=> {
    res.send(users);
})

// /users/:id
router.get("/:id", (req,res)=> {
    const {id} = req.params;
    logger.info(id);
    const user = users.find(user=> user.id === Number(id) );
    logger.debug(user);
    if(!user){
        throw new NotFoundError("User not found");
    }
    res.send(user); 
}); 


router.post("/", async (req,res)=> {
    const {name, email, password} = req.body;

    if(!name || name.trim() === "") {
        throw new BadRequestError("Name is required");
    }

    if(!email || email.trim() === "") {
        throw new BadRequestError("Email is required");
    }

    if(!password || password.trim() === "") {
        throw new BadRequestError("Password is required");
    }

    const newUser = await createUser(name, email, password);
    
    res.status(201).send({message: "User created successfully", id: newUser._id});
});

router.put("/:id", (req,res)=> {
    // find the user by id
    // if not found, return 404
    // if found, update the user
    // return the updated user
});

router.delete("/:id", (req,res)=> {});

module.exports = router;