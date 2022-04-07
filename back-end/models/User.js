const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please provide username'],
        unique:true
    },
    email:{
        type:String,
        required:[true,'Please provide email'],
        unique:true,
        validate:[validator.isEmail,'Invalid Email']
    },
    password:{
        type:String,
        required:[true,'Please enter password'],
        minlength:8,
        select:false
    },
    passwordConfirm:{
        type:String,
        required:[true,'Please enter password'],
        validate:{
            validator:function(el){
                return this.password === el
            },
            message:'Passwords dont match'
        }
    },
    passwordModifiedAt:Date,
    isActive:{
        type:Boolean,
        default:true
    }
})

// HASHING PASSWORD
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12)
    this.passwordConfirm = undefined
    next();
})

// SETTING TIME AT WHICH PASSWORD WAS CHANGED AT
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();

    this.passwordModifiedAt = Date.now() - 5000
    next()
})

// TO ENSURE CHECK WHETHER PASSWORD WAS CHANGED AFTER JWT WAS ISSUED
userSchema.methods.hasChangedPasswordAfter = function(time){
    if(this.passwordModifiedAt){
        const timeStamp = this.passwordModifiedAt.getTime() / 1000
        return timeStamp > time
    }
    return false;
}

const User = mongoose.model('User',userSchema)

module.exports = User
