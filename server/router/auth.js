const router = require("express").Router();
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({ username, password: hashedPassword });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username } = req.body;

    const user = await UserModel.findOne({ username });

    const passwordControl = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (user && passwordControl) {
      const { password, ...others } = user._doc;
      return res.json(others);
    } else {
      return res.json("Username or password not macth");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
