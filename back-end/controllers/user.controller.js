const User = require('../models/User')

exports.searchUser = async (req,res,next) => {
    try{
        const escapedString = req.query.q.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        const regex = new RegExp(escapedString,'i');
        const result = await User.find({username:regex}).select('_id username')
        
        res.status(200).json({
            status : 'ok',
            data : result
        })

    }catch(err){
        next(err)
    }
}

exports.getUser = async (req,res,next) => {
    try{
        const {id} = req.params
        const data = await User.findById(id)

        res.status(200).json({
            status : 'ok',
            data 
        })

    }catch(err){
        next(err)
    }
}
