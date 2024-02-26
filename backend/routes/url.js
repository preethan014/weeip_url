const express=require("express");
const router=express.Router();
const {handleRedirectUrl}=require('../controller/url');

router.route("/:id").get(handleRedirectUrl);



module.exports=router
