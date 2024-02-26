const mongoose=require("mongoose")
const UrlSchema=new mongoose.Schema({
    urlid:{
        type:String,
        unique:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId
    },
    originalurl:{
        type:String
    },
    redirecturl:{
        type:String,
        unique:true
    },
    clicks:{
        type:Number
    }
})

module.exports=mongoose.model("url",UrlSchema);