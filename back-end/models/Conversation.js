const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    members:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:'User'
    },
    isBlocked:{
        type:Boolean,
        default:false
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
    timestamps:true
})

conversationSchema.virtual('messages',{
    ref : 'Message',
    localField : '_id',
    foreignField : 'conversationId'
})

const Conversation = mongoose.model('Conversation',conversationSchema)

module.exports = Conversation