'use strict'

const authRoute = require('express').Router()

const authController = require('../controller/auth')

authRoute.route('/loginregister/')
    .post(authController.signUpByUserName)

authRoute.route('/getcallingtokenbyroomid/')
    .get(authController.signUpByUserName)

authRoute.route('/createctokenforcalling/')
    .post(authController.signUpByUserName)

module.exports = authRoute