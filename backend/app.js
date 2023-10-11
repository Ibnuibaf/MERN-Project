const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");



const app = express();

const DBURL = process.env.DB_SERVER;

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error(
      "Error occurred while connecting to the database:",
      err.message
    );
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", userRouter);
app.use("/admin", adminRouter);


app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500
  const message=err.message || 'Internal Server Error'
  return res.status(statusCode).json({success:false,statusCode,message})
})

app.listen(3333, () => {
  console.log("Connected to PORT: 3333");
});
