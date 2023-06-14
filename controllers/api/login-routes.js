const router = require('express').Router();
const { application } = require('express');
const {User, Post} = require('../../../models');

router.get('/', (req,res) => {
    res.render('home');
})