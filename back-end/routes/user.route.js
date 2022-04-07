const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')
const {Router} = require('express')

const router = Router()

router
  .route('/signup')
  .post(authController.signUp)

router
  .route('/login')
  .post(authController.login)

router
  .route('/search')
  .get(userController.searchUser)

router
  .route('/profile/:id')
  .get(userController.getUser)

module.exports = router