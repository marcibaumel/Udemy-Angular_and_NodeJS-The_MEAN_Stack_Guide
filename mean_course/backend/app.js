const express = require("express");
const app = express();

app.use("/api/posts", (req, res, next) => {
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