const DB = require("./db.json");

const getRecordWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (!record) {
      throw { status: 400, message: `Can't find workout id '${workoutId}'` };
    }
    return record;
  } catch (error) {
    throw { status: error?.message || 500, message: error?.message || error };
  }
};

module.exports = { getRecordWorkout };
