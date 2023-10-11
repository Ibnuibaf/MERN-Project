const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../models/users");
const mongoose = require("mongoose");

const authProtect = async (req, res, next) => {
  let token = req.body.token;
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await users.findById(decoded.userId);
      console.log(req.user);

      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorised, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized. no token");
  }
};

const authAdminProtect = async (req, res, next) => {
  let token = req.body.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = { username: process.env.ADMIN_USERNAME };
      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorised, invalid token");
    }
  }
};

module.exports = {
  authProtect,
  authAdminProtect,
};
