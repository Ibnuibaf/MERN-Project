const mongoose = require('mongoose');
require('dotenv').config();

const DBURL = process.env.DB_SERVER;

mongoose.connect(DBURL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error occurred while connecting to the database:", err.message);
  });

module.exports = mongoose;
