const { Router } = require('express')
const converationController = require('../controllers/conversation.controller')
const chatController = require('../controllers/chat.controller')
 

const router = Router()

router
    .route('/text')
    .post(chatController.createMessage)


module.exports = router