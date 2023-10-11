const express = require("express");
const mongoose = require("mongoose");
const generateToken = require("../utilities/generateToken");
const users = require("../models/users");

module.exports = {
  postAdminLogin: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const isValid =
        process.env.ADMIN_USERNAME == username &&
        password == process.env.ADMIN_PASSWORD;
      if (isValid) {
        const token = generateToken(
          process.env.ADMIN_USERNAME,
          process.env.ADMIN_PASSWORD
        );
        res.send({ success: true, message: "Admin Logged", token });
      } else res.send({ success: false, message: "Password is Wrong" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getAdminData: (req, res, next) => {
    try {
      const adminDetails = req.admin;
      res.status(200).json({
        username: adminDetails.username,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  getUsersData:async(req,res,next)=>{
    try {
      const usersDetails=await users.find({},{password:0})
      console.log(usersDetails)
      res.send({usersDetails})
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  updateUser:async(req,res,next)=>{
    try {
      const {_id,username,email}=req.body
      const isUpdated=await users.updateOne({_id},{$set:{username,email}})
      console.log(req.body,isUpdated)
      const updatedUsers=await users.find({},{password:0})
      res.send({updatedUsers})
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  deleteUser:async(req,res,next)=>{
    try {
      const _id=req.query.id
      const isDeleted=await users.deleteOne({_id})
      console.log(req.body,isDeleted)
      const updatedUsers=await users.find({},{password:0})
      res.send({updatedUsers})
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
};
