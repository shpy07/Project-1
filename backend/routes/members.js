const { Router } = require("express");
const JWT_SECRET = 123333
const router = Router();
const jwt = require("jsonwebtoken");
const { Members } = require("../db/db");

router.post('/signup', async (req, res) => {
    const {username, password , role, id } = req.body;

    await Members.create({
        username: username,
        password: password,
        role: role,
        id: id
    })

    res.json({
        message: 'Member created successfully',
        role:  role
    })
});

router.post('/signin', async (req, res) => {

    const {username, password} = req.body;
    console.log(JWT_SECRET);

    const user = await Members.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect login credentials"
        })
    }
});


module.exports = router;
