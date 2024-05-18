const authController = require('../controller/authController')
const router = require('express').Router()

router.post(`/auth/register`, authController.register)
router.post(`/auth/login`, authController.login)
router.get(`/auth/logout`, authController.logout)

module.exports = router