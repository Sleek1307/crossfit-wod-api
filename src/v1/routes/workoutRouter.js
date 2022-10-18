const express = require('express');
const router = express.Router();

const workoutController = require('../../controllers/workoutController.js')

router
    .get("/", workoutController.getAllWorkouts)

    .get("/:id", workoutController.getOneWorkout)

    .post('/', workoutController.createNewWorkout)

    .patch("/:id", workoutController.UpdateOneWorkout)

    .delete("/:id", workoutController.deleteOneWorkout)

module.exports = router;