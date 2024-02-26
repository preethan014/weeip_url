const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String
    },
    urlarray:[{
        type: mongoose.Schema.Types.ObjectId,
    }
    ]
},{timestamps:true})

module.exports=mongoose.model('user',UserSchema);