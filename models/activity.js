const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: { type: String, required: true, trim: true, index: { unique: true } },
  description: { type: String, required: true },
  date_created: { type: Date, required: true, default: Date.now },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
