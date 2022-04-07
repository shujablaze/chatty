const app = require('./app')
const { createServer } = require('http')
const { promisify } = require('util')
const { Server } = require('socket.io')
const mongoose = require('mongoose');
const env = require('dotenv').config()
const getCookie  = require('./utils/getCookie')
const User = require('./models/User')
const jwt = require('jsonwebtoken')

mongoose.connect('mongodb://localhost:27017/chatty')
.then(con=>{console.log("DB connected")});

const server = createServer(app)
const io = new Server(server,{
})

const joinRooms = require('./socket/joinRooms')

io.use(async (socket,next)=>{
    const token = getCookie('jwt',socket.request.headers.cookie)

    if(token === '') return next(new Error('Not logged in'))

    const verifyJwt = promisify(jwt.verify)
    const payload = await verifyJwt(token,process.env.JWT_SECRET)

    const {id} = payload
    const user = await User.findById(id)
    socket.userId = id
    if(!user) next(new Error('Not logged in'))
    
    if(user.hasChangedPasswordAfter(payload.iat)) return next(new Error('Not logged in'))

    next()
})
.on('connection',async (socket)=>{
    await joinRooms(io,socket)

    socket.on('client_mssg',({ convId,mssg })=>{
        socket.to(convId).emit('conv_message',mssg)
    })
})

const port = 8000

server.listen(port,'localhost',()=>console.log(`Server started at port ${port}`))
