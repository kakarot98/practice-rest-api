const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

require("dotenv/config");

const app = express();
app.use(bodyParser.json())


//connecting to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true,
  useCreateIndex:true }, () =>
  console.log("connected to database")
);

//importing routes
const postRoute = require('./routes/posts')
app.use('/posts', postRoute)


//routes
app.get("/", (req, res) => {
  res.send("message from default path");
});


//mongoUser
//mmmDDD
//connecting to database


//listens to server
app.listen(3000);
