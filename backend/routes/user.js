const express = require('express');
const {  postRegister, postLogin, getUserData } = require('../controllers/users');
const { authProtect } = require('../middleware/middlewares');
const router = express.Router();

router.post('/register',postRegister);
router.post('/login',postLogin)
router.post('/fetch/user-data',authProtect,getUserData)

module.exports = router;
