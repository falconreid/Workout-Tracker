const router = require("express").Router();
const Workout = require("../models/index.js");
const mongojs = require("mongojs");

// not sure if I need this??
// router.get("/exercise?", (req, res) => {
//   res.send({ type: "GET" });
// });

// create new workout in db
router.post("/workout", (req, res) => {
  Workout.create({
    type: req.body,
    // exercises: [
    //   {
    //     type: req.body.type,
    //     name: req.body.name,
    //     duration: req.body.duration,
    //     weight: req.body.weight,
    //     reps: req.body.reps,
    //     sets: req.body.sets,
    //   },
    // ],
  })
    .then((exercises) => {
      res.json(exercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get a specific workout in db
router.get("/workout/?id=", (workout, res) => {
  Workout.findOne({
    _id: mongojs.ObjectId(workout.id),
  })
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update a specific workout in db
router.put("/workout/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, trim: true }
  )
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get all workouts from db
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
router.delete("/workout/:id", (req, res) => {
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
