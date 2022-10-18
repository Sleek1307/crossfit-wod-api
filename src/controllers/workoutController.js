const workoutService = require('../services/workoutService.js');

module.exports = {
  getAllWorkouts: (req, res) => {
    const workouts = workoutService.getAllWorkouts()
    res.send({ status: 'OK', data: workouts });
  },

  getOneWorkout: (req, res) => {

    if (
      !req.params.id
    ) {
      return
    }

    const workout = workoutService.getOneWorkout(req.params.id);

    if (!workout.error) {
      res.status(201).send({ status: 'OK', data: workout });
    } else {
      res.status(404).send({ status: 'FAILED', error: workout.error })
    }
  },

  createNewWorkout: (req, res) => {

    const { body } = req;

    if (
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercises ||
      !body.trainerTips
    ) {
      return;
    };

    const newWorkOut = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkOut);
    
    if (!createdWorkout.error) {
      res.status(201).send({ status: 'OK', data: createdWorkout });
    } else {
      res.status(404).send({ status: 'FAILED', error: createdWorkout.error })
    }
  },

  UpdateOneWorkout: (req, res) => {

    const { body, params } = req;

    const workoutToUpdate = {
      ...body.data
    }

    const updatedWorkout = workoutService.UpdateOneWorkout(params.id, workoutToUpdate);
    if (!updatedWorkout.error) {
      res.status(201).send({ status: 'OK', data: updatedWorkout });
    } else {
      res.status(404).send({ status: 'FAILED', error: updatedWorkout.error })
    }
  },

  deleteOneWorkout: (req, res) => {

    const { id } = req.params;

    const deletedWorkout = workoutService.deleteOneWorkout(id);

    if (!deletedWorkout.error) {
      res.status(201).send({ status: 'OK', data: deletedWorkout.msg });
    } else {
      res.status(404).send({ status: 'FAILED', error: deletedWorkout.error })
    }
  },
}
