const express=require("express")
const app=express()
const cors=require("cors")
const user=require('./model/user')
const bodyparser=require("body-parser")
const UserRouter=require('./routes/user');
const UrlRouter=require('./routes/url');

const mongoose=require("mongoose")
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())
app.use(express.urlencoded({extended:false}))

app.use('/',UrlRouter);
app.use('/api',UserRouter);

mongoose.connect("mongodb://127.0.0.1:27017/weeip").then(()=>{
    console.log("mongodb connected successfully");
}).catch((err)=>{
    console.log("error at data base",err);
})

app.listen(5000,()=>{
    console.log("port is running on 5000");
})