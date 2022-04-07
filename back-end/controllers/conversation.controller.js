const User = require('../models/User')
const Conversation = require('../models/Conversation')

exports.createConversation = async (req,res,next) => {
    try{
        const partyA = req.userId
        const partyB = req.body.id
        const user = await User.findById(partyB)

        if(!user) return next(new Error('Invalid User'))

        if(partyA === partyB) return next(new Error('Duplicate members'))

        let conversation = await Conversation.findOne({members:{$all:[partyA,partyB]}})
        
        if(!conversation){
            conversation = await Conversation.create({members:[partyA,partyB]})
        }

        res.status(201).json({
            status : 'ok',
            data : conversation
        })

    }catch(err){
        next(err)
    }
}

exports.getConversations = async (req,res,next) => {
    try{
        const conversations = await Conversation.find({members:req.userId}).populate('members')
        
        res.status(200).json({
            status : 'ok',
            data : conversations
        })
    }catch(err){
        next(err)
    }
}

exports.getOneConversation = async (req,res,next) => {
    try{
        const { id } = req.params

        const conversation = await Conversation.findById(id).populate('messages').populate('members')
        
        if(!conversation) return next('Conversation not joined')

        res.status(200).json({
            status : 'ok',
            data : conversation
        })

    }catch(err){
        next(err)
    }
}