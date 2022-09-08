'use strict'

const authRoute = require('express').Router()

const authController = require('../controller/auth')

authRoute.route('/loginregister/')
    .post(authController.loginRegistration)

authRoute.route('/getcallingtokenbyroomid/')
    .post(authController.zegoGetTokenByRoomIdForJoinCalling)

authRoute.route('/createctokenforcalling/')
    .post(authController.zegoGenerateTokenForCreateCalling)

module.exports = authRoute