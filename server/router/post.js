const router = require("express").Router();
const PostModel = require("../models/Post");

router.post("/", async (req, res) => {
  try {
    const newPost = new PostModel(req.body);

    const post = await newPost.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get("/", async (req, res) => {
  const catName = req.query.cat;
  const user = req.query.user;

  try {
    let posts;

    if (catName) {
      posts = await PostModel.find({
        categories: {
          $in: [catName],
        },
      });
    } else if (user) {
      posts = await PostModel.find({ user });
    } else {
      posts = await PostModel.find();
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  try {
    const post = await PostModel.findById(id);

    if (!post) return res.status(401).json("Post not found!");

    if (user !== post.user)
      return res.status(401).json("You can delete only your posts!");

    await post.delete();
    res.status(200).json("Your post is deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  try {
    const post = await PostModel.findById(id);

    if (!post) return res.status(401).json("Post not found!");

    if (user !== post.user)
      return res.status(401).json("You can update only your posts!");

    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
