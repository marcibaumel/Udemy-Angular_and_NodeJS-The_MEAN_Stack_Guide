const express = require("express");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const postController = require('../controller/post');


const router = express.Router();


router.post(
  "",
  checkAuth,
  extractFile,
  postController.createPost
);


router.put(
  "/:id",
  checkAuth,
  extractFile,
  postController.updatePost
);

router.get("/:id", postController.findPostById );

router.get("", postController.getPosts);

router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;
