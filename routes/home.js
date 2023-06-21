const express = require('express')
const router = express.Router()
const homeController = require('../controller/main.js')

router.get('/', 
homeController.renderMainPage
);

module.exports = router