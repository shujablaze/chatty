const Conversation = require('../models/Conversation')

const joinRooms =  async (io,socket) => {
    const  userId  = socket.userId

    const conversations = await Conversation.find({members:userId}).select('_id')
    conversations.forEach(conv => socket.join(conv.id))
}

module.exports = joinRooms