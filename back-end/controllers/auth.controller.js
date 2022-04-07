const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {promisify} = require('util')

const signToken = (payload) => {
    token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRY
    })
    return token
}

const cookieOptions = {
    maxAge : 60 * 60 * 1000 * 24,
    httpOnly : true,
    secure : true
}

exports.signUp = async (req,res,next) => {
    try{
    const {username,email,password,passwordConfirm} = req.body

    const user = await User.create({username,email,password,passwordConfirm})
    
    const token = signToken({id:user._id})

    res.cookie('jwt',token,cookieOptions)
    
    res.status(201).json({
        status : 'ok',
        data : user
    })
}catch(err){console.log(err)}
}

exports.login = async (req,res,next) => {
    const {email,password} = req.body
    const user = await User.findOne({email}).select('+password')

    if(!user || !await bcrypt.compare(password,user.password)){
        next(new Error('UserName or Password incorrect'))
        return
    }

    const token = signToken({id:user._id})

    res.cookie('jwt',token,cookieOptions)
    delete user.password
    res.status(200).json({
        status : 'ok',
        data : user
    })
}

const changepassword = async (req,res,next) => {
    const userId = res.locals
    const {oldPassword,password,passwordConfirm} = req.body

    const user = await User.findById(userId).select('+password')

    if(!user || !await bcrypt.compare(oldPassword,user.password)){
        next(new Error('Incorrect Password'))
        return
    }

    user.password = password
    user.passwordConfirm = passwordConfirm

    await user.save()

    const token = signToken({id:user._id})

    res.cookie('jwt',token,cookieOptions)

    res.status(200).json({
        status : 'ok',
        data : user
    })
}

exports.checkLoginStatus = async (req,res,next) => {
    if(!req.cookies.jwt) return next()

    const verifyJwt = promisify(jwt.verify)
    const payload = await verifyJwt(req.cookies.jwt,process.env.JWT_SECRET)

    const {id} = payload
    const user = await User.findById(id)
    
    if(!user) next()
    
    if(user.hasChangedPasswordAfter(payload.iat)) return next()

    // Logging IN
    req.loggedIn = true
    req.userId = id

    next()
}

exports.protectedRoute = async (req,res,next) => {
    if(!res.cookies.jwt) return next(new Error('Not logged in'))

    const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET)

    const user = await User.findById(decoded.id)

    if(!user) return next(new Error('Not logged in'))

    if(user.hasChangedPasswordAfter(decoded.iat)) return next(new Error('Not logged in'))
    //Allowing access
    return next()
}

exports.logout = async (req,res,next) => {
    res.cookie('jwt',"",{maxAge:5000})
    res.status('200').json({
        status : 'ok',
        data : {
            message : 'logged out successfully'
        }
    })
}