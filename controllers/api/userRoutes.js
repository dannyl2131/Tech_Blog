const router = require('express').Router();
//import models (user in particular)

router.post('/login', (req, res) => {
    console.log("login POST route hit");
})

router.post('/logout', (req, res) => {
    console.log("logout route hit");
})

module.exports = router;