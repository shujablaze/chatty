const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

/*PRIVATE MODULES*/
const userRouter = require('./routes/user.route')
const conversationRouter = require('./routes/conversation.route')
const chatRouter = require('./routes/chat.route')
const { checkLoginStatus } = require('./controllers/auth.controller')

app.use(cors({origin:'http://localhost:3000',credentials:true}))
app.use(cookieParser())


// Parse req body to json 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(checkLoginStatus)

app.use('/user',userRouter)
app.use('/conversation',conversationRouter)
app.use('/chat',chatRouter)

module.exports = app