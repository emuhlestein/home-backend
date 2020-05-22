const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(process.cwd(), "views", "root.html"));
  console.log(process.cwd());
});

module.exports = router;
