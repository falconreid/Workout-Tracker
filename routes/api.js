const router = require("express").Router();
const Workout = require("../models/index.js");
const mongojs = require("mongojs");

// create new workout in db
router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((exercises) => {
      res.json(exercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get workouts from db
router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update a specific workout in db
router.put("/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get all workouts from db (limit to last 7)
router.get("/workouts/range", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  }).limit(7);
});

// delete workout from db
router.delete("/workouts/:id", (req, res) => {
  Workout.remove(
    {
      _id: mongojs.ObjectID(req.params.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;
