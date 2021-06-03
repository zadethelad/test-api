const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("API v1 root");
});

router.get("/status", function (req, res) {
  res.send("Green");
});

module.exports = router;
