const jwt =require('jsonwebtoken') 

const generateToken = (userId,username,email,profile) =>{
    const token = jwt.sign({userId,username,email,profile},process.env.JWT_SECRET,{
        expiresIn : '30d'
    })

    return token
}

module.exports = generateToken;