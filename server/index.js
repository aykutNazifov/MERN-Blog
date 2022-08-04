require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./router/auth.js");
const postRouter = require("./router/post.js");

const port = process.env.PORT || 8000;
const mongo_url = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected."))
  .catch(() => console.log("Error"));

app.get("/", (req, res) => {
  res.json({ name: "Test" });
});

app.use("/auth", authRouter);
app.use("/post", postRouter);

app.listen(port, () => {
  console.log(`App started at port ${port} test`);
});
