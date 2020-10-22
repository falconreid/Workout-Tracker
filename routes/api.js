const router = require("express").Router();
const Workout = require("../models/activity.js");

// not sure if I need this??
router.get("/exercise", (req, res) => {
  res.send({ type: "GET" });
});

// create new workout in db
router.post("/workout", ({ body }, res) => {
  res.send({ type: "POST" });
});

// get a specific workout in db
router.get("/workout/:id", ({ body }, res) => {
  res.send({ type: "PUT" });
});

// update a specific workout in db
router.put("/workout/:id", ({ body }, res) => {
  res.send({ type: "PUT" });
});

// get all workouts from db
router.get("/workout", (req, res) => {
  res.send({ type: "GET ALL" });
});

// delete workout from db
router.delete("/workout/:id", ({ body }, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
