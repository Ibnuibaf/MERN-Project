const  mongoose  = require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        default:'https://res.cloudinary.com/dshijvj8y/image/upload/v1697023211/il7weaukqebxrqbjhhfs.png'
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    diary:[{
        date:Date,
        title:String,
        content:String,
        markings:[String]
    }]
})

const users=mongoose.model('users',userSchema)

module.exports=users