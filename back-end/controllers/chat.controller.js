const Message = require('../models/Message')

exports.createMessage = async (req,res,next) =>{
    try{
        const { text,conversationId } = req.body
        const senderId = req.userId

        const newMessage = await Message.create({senderId,text,conversationId})
        
        res.status(201).json({
            status : 'ok',
            data : newMessage
        })

    }catch(err){
        next(err)
    }
}
