const express = require("express");
const router = express.Router();
const v1 = require("./v1");

router.use("/v1", v1);

router.get("/", function (req, res) {
  res.send("API root.\nAvalible versions: v1");
});

module.exports = router;
