const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

module.exports = {
  getAllWorkouts: (req, res) => {
    return DB.workouts;
  },

  getOneWorkoutById: (id) => {

    const index = DB.workouts.findIndex((workout) => workout.id == id);

    if (index === -1) {
      return { error: 'El workout que estas solicitando no existe' }
    }

    return DB.workouts[index];

  },

  createNewWorkout: (newWorkout) => {
    const isAlReadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1

    if (isAlReadyAdded) {
      return { error: 'El workout que deseas crear ya existe' };
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB)
    return newWorkout;
  },

  updateWorkout: (id, updatedWorkout) => {

    const index = DB.workouts.findIndex((workout) => workout.id === id)

    if (index === -1) {
      return { error: 'El workout no existe' };
    }

    let workoutToUpdate = DB.workouts[index];

    workoutToUpdate = {
      ...workoutToUpdate,
      ...updatedWorkout
    }

    DB.workouts[index] = workoutToUpdate;

    saveToDatabase(DB);
    return workoutToUpdate;

  },
  deleteWorkOut: (id) => {

    const index = DB.workouts.findIndex((workout) => workout.id === id)

    if (index == -1) {
      return { error: 'El workout no existe' }
    }

    DB.workouts.splice(index, 1);

    console.log(DB.workouts)

    saveToDatabase(DB)
    return { msg: 'Workout eliminado con exito' }

  }
}