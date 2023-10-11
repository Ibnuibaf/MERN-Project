const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const users = require("../models/users");
const generateToken = require("../utilities/generateToken");
          



module.exports = {
  postRegister: async (req, res, next) => {
    try {
      let { username, email, password, profile } = req.body;
      const userExist = await users.findOne({
        $or: [{ username: username }, { email: email }],
      });
      if (userExist) {
        res.send({ err: true, message: "User Already Exist" });
      } else {
        password = await bcrypt.hash(password, 10);
        let user
        if(profile){
          console.log("profile stored")
          user = await users.create({ username, email, password, profile });

        }else{
          console.log("profile NOTstored")
          user = await users.create({ username, email, password});
        }
        let token=generateToken(user._id,user.username,user.email,user.profile)
        res.send({user:token});
      }
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  },
  postLogin: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      console.log(username, password);
      const userDetails = await users.findOne({ username: username });
      const pass = userDetails.password;
      const isValid = await bcrypt.compare(password, pass);
      console.log(userDetails);
      if (isValid){
        const token = generateToken(userDetails._id,userDetails.username,userDetails.email, userDetails.profile)
        res.send({ success: true, message: "User Logged", token });
      }
      else res.send({ success: false, message: "Password is Wrong" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getUserData:async(req,res,next)=>{
    try {
      const userDetails=req.user
      console.log(req.user);
      res.status(200).json({username:userDetails.username,email:userDetails.email,profile:userDetails.profile})
    } catch (error) {
      console.log(error.message);
      next(error)
    }
  }
};
