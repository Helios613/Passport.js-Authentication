const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController= require('../controller/user_controller');

router.get('/profile', passport.checkAuthentication, usersController.profile);
router.get('/sign-in', usersController.signin);
router.get('/sign-up', usersController.signup);
router.post('/addUser', usersController.addUser);

router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in',
    }
    ),
usersController.createSession);


router.get('/sign-out', usersController.signout);

module.exports = router;