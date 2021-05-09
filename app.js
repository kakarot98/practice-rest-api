const express = require("express");
const mongoose = require("mongoose");

require("dotenv/config");

const app = express();


//importing routes
const postRoute = require('./routes/posts')
app.use('/posts', postRoute)


//routes
app.get("/", (req, res) => {
  res.send("message from default path");
});

app.get("/posts", (req, res) => {
  res.send("message not from default path");
});

//mongoUser
//mmmDDD
//connecting to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to database")
);

//listens to server
app.listen(3000);
