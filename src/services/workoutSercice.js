const { v4: uuid } = require("uuid");

const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  const allWorkout = Workout.getAllWorkouts();
  return allWorkout;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = (newWorkout) => {
  const workoutInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("fr-FR", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("fr-FR", { timeZone: "UTC" }),
  };

  const createdWorkout = Workout.createNewWorkout(workoutInsert);
  return createdWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
