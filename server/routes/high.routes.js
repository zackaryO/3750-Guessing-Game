const express = require("express");

const router = express.Router();

const {
  listAllScores,
  guess,
  deleteScore
} = require("../controllers/controllers.js");

router.get("/", listAllScores);
router.post("/", guess);
router.delete("/:id", deleteScore);

module.exports = router;
