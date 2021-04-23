const express = require('express')
const router = express.Router()

const controller = require('../controller/userController')

const verifyJwt = require('../jwt/verifyJwt')

//CRUD OPERATIONS ROUTES
router.post('/', verifyJwt, controller.post)
router.get('/', verifyJwt, controller.get)

//AUTH ROUTES
router.post('/login', controller.login)
router.get('/logout', controller.logout)

module.exports = router