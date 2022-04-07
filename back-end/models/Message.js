const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required:[true,'Message must have a sender']
    },
    receiverId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    groupdId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Group'
    },
    conversationId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Conversation'
    },
    text:{
        type:String,
        required:[true,'Message must have a body']
    },
    isRead:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Message = mongoose.model("Message",messageSchema)

module.exports = Message