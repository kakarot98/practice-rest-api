const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

//Gets all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Posts a post
router.post("/", async (req, res) => {
  console.log(req.body);
  //res.json({body: req.body})
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//Get specific post
router.get("/:postId", async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.postId);
    console.log(req.params.postId);
    res.json(specificPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete a specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.params.title } }
    );
    res.json(updatePost)
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
