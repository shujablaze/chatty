const converationController = require('../controllers/conversation.controller')
const {Router} = require('express')

const router = Router()

router
  .route('/')
  .get(converationController.getConversations)
  .post(converationController.createConversation)

router
  .route('/:id')
  .get(converationController.getOneConversation)
  
module.exports = router