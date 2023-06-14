const router = require('express').Router();
//Need to add models
const withAuth = require('../utils/auth');

router.get('/', (req,res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    console.log('login route hit')
});

module.exports = router;