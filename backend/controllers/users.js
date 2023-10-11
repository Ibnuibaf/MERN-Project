const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const users = require("../models/users");

module.exports = {
  postRegister: async (req, res, next) => {
    try {
      let { username, email, password } = req.body;
      const userExist = await users.findOne({
        $or: [{ username: username }, { email: email }],
      });
      if (userExist) {
        res.send({ err: true, message: "User Already Exist" });
      } else {
        password = await bcrypt.hash(password, 10);
        const user = await users.create({ username, email, password });
        res.send(user);
      }
    } catch (error) {
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
      if (isValid) res.send({ success: true, message: "User Logged",userDetails });
      else res.send({ success: false, message: "Password is Wrong" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
