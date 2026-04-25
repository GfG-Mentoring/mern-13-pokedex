const {Router} = require('express');

const router = Router();

const users = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Doe"},
    {id: 3, name: "John Smith"},
];


router.get("/", (req,res)=> {
    res.send(users);
})

// /users/:id
router.get("/:id", (req,res)=> {

    const {id} = req.params;
    const user = users.find(user=> user.id === Number(id) );
    if(!user){
        res.status(404).send(`User with id ${id} not found`);
        return;
    }
    res.send(user);
});

router.post("/", (req,res)=> {
    console.log(req.body);
    const {name} = req.body;

    if(!name || name.trim() === "") {
        res.status(400).send("Name is required");
        return;
    }

    const newUser = {
        id: users.length + 1,
        name: name.trim(),
    }

    users.push(newUser);
    res.status(201).send(newUser);
});

router.put("/:id", (req,res)=> {
    // find the user by id
    // if not found, return 404
    // if found, update the user
    // return the updated user
});

router.delete("/:id", (req,res)=> {});

module.exports = router;