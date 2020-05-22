const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(["New", "Done", "Committed", "Approved"]);
});

module.exports = router;
