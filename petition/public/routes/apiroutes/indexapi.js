const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    await User.create({
      nameuser: req.body.nameuser,
      email: req.body.email,
      comment: req.body.comment,
    });
    res.json({ msg: `User ${req.body.nameuser} created succesfully` });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;