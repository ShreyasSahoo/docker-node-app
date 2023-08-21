const { homeController } = require('../controller/homeController')
const homeRouter = require('express').Router()
homeRouter.route('/')
    .get(homeController)

module.exports = { homeRouter }