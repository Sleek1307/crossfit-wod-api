const { v4: uuid } = require('uuid')
const workout = require('./../database/Workout');

module.exports = {
  getAllWorkouts: () => {
    
    const workouts = workout.getAllWorkouts();
    return workouts
  },

  getOneWorkout: (id) => {

    const workouts = workout.getOneWorkoutById(id)
    return workouts;
  },

  createNewWorkout: (newWorkOut) => {
    const workoutToInsert = {
      ...newWorkOut,
      id: uuid(),
      createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }

    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  },

  UpdateOneWorkout: (id, workoutToUpdate) => {

    const workoutToInsert = {
      ...workoutToUpdate,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }

    const updatedWorkout = workout.updateWorkout(id, workoutToInsert);
    return updatedWorkout;
  },

  deleteOneWorkout: (id) => {

    const deletedWorkout = workout.deleteWorkOut(id);
    return deletedWorkout;
  },
}