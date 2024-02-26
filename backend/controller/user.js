const user=require("../model/user");
const url=require("../model/url");

async function handleLoginUser(req,res){
    const {username,password}=req.body;

    const data=await user.findOne({username:username});
    if(data){
        if(data.password==password){
            return res.status(200).send({msg:"valid user",userdata:data})
        }
        return res.send({msg:"password wrong"})
    }
    return res.send({msg:"account not found"})

}
async function handleGetUser(req,res){
    const data=await user.findOne();
    console.log(data);
   return  res.send({msg:"success",data:data})
}

async function handlePostUser(req,res){
    try {
        console.log(req.body);
        const {username,email,password}=req.body;
        const checkUser=await user.findOne({username:username});
        if(checkUser){
           return res.status(200).send({msg:"user already exist"})
        }
        const userdata=await new user(req.body);
        console.log(userdata);
        userdata.save();
       return res.status(201).send({msg:"successfully created",data:userdata});
    } catch (error) {
        console.log("error",error);
       return  res.status(500).send({msg:"error at server side"});
    }
    
}


module.exports={handlePostUser,handleGetUser,handleLoginUser}