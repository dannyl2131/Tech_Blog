const router = require('express').Router();
//Need to add models
const withAuth = require('../utils/auth');

router.get('/', (req,res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    res.render('home', {
        helpers: {
            isLoginPage() {return document.location.pathname == '/login'},
            isTrue() {return true}
        }
    })
})

module.exports = router;