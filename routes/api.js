const router = require("express").Router();
const Workout = require("../models/index.js");
const mongojs = require("mongojs");

// not sure if I need this??
// router.get("/exercise?", (req, res) => {
//   res.send({ type: "GET" });
// });

// create new workout in db
router.post("/workout", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get a specific workout in db
router.get("/workout/:id?", (req, res) => {
  Workout.findOne(
    {
      _id: mongojs.ObjectId(req.params.id),
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

// update a specific workout in db
router.put("/workout/:id", ({ body }, res) => {
  res.send({ type: "PUT" });
});

// get all workouts from db
router.get("/workouts/range", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// delete workout from db
router.delete("/workout/:id", ({ body }, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
