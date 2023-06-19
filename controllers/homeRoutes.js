const router = require('express').Router();
//Need to add models
const withAuth = require('../utils/auth');

router.get('/', (req,res) => {
    res.render('home', {isMainPage: true, loggedin: req.session.loggedin});
})

router.get('/login', (req, res) => {
    if(req.session.loggedin){
        res.render('home', {isMainPage: true, loggedin: req.session.loggedin});
    } else{
    res.render('home', {isLoginPage: true})
    }
})

module.exports = router;