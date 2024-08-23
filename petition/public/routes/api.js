const express = require("express");
const router = express.Router();
const indexApi = require("./apiroutes/indexapi");

router.use("/index", indexApi);

router.get("/", (req, res) => {
  res.send("in api route");
});

module.exports = router;