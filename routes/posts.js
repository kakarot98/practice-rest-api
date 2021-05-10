const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  //res.json({body: req.body})
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
      const savedPost = await post.save()
      res.json(savedPost)
  } catch (error) {
      res.json({message:error})
  }

});

module.exports = router;
