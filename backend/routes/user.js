const express=require("express");
const {handlePostUser,handleGetUser,handleLoginUser}=require('../controller/user');
const {handlePostUrl, handleUserUrls}=require('../controller/url');
const router=express.Router();

router.route("/signup").post(handlePostUser).get(handleGetUser);
router.route("/login").post(handleLoginUser);
router.route("/url").post(handlePostUrl);
router.route("/urls").post(handleUserUrls);

router.route("/users").post(handleGetUser)

module.exports=router