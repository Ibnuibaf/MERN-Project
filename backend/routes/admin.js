const express = require('express');
const { authAdminProtect } = require('../middleware/middlewares');
const { getAdminData, postAdminLogin, getUsersData, updateUser, deleteUser } = require('../controllers/admin');
const router = express.Router();

router.post('/',postAdminLogin)
router.post('/fetch/admin-data',authAdminProtect,getAdminData)
router.get('/users',getUsersData)
router.patch('/update-user',updateUser)
router.delete('/user-delete',deleteUser)

module.exports = router;
