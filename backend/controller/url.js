const user=require("../model/user");
const url=require("../model/url");
const shortid = require('shortid');

async function handlePostUrl(req,res){
    try {
        let sid=shortid.generate();
        const resUrl=await new url({urlid:sid,userid:req.body.userid,originalurl:req.body.url,redirecturl:`http://127.0.01:5000/${sid}`,clicks:0})
        await resUrl.save();
        let userInfo=await user.updateOne({_id:req.body.userid},{$push:{urlarray:{"_id":`${resUrl._id}`}}});
        console.log(userInfo)
        return res.send({msg:"created sucessfully"})
    } catch (error) {
        console.log("error",error);
        return res.send({msg:"error at server"})
        
    }
}

async function handleRedirectUrl(req,res){
    console.log("hello");
    return res.redirect("https://youtube.com")
}

async function handleUserUrls(req,res){
    const userUrldata=await url.find({userid:req.body.userid});
    console.log("data of user",userUrldata);
    return res.send({msg:"from user urls",data:userUrldata});
}
module.exports={handlePostUrl,handleRedirectUrl,handleUserUrls}