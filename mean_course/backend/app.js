const express = require("express");
const bodyParser = require("body-parser");
const Post = require('./models/post');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mean_course').then(()=>{
  console.log("Connected to the DB");
}).catch(()=>{
  console.log("Connection failed");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title : req.body.title,
    content : req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    { id: "tdgg", title: "First", content: "From the server" },
    { id: "tddfdggg", title: "Second", content: "From the server" },
    { id: "gdgtdgg", title: "Third", content: "From the server" },
    { id: "jjtdgg", title: "Fourth", content: "From the server" },
  ];

  return res.status(200).json({
    message: "Posts fetched succesfully",
    posts: posts,
  });
});

module.exports = app;
