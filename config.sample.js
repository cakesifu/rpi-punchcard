module.exports = {
  webapp: {
    port: 8080,
  },

  schedule: {
    water: {
      pin: 18,
      state: 1,
      intervals: ["7:50:00 - 7:50:30", "20:00:00 - 20:00:30"],
      name: "Water pump",
    },

    lights: {
      pin: 11,
      state: 0,
      intervals: ["8:00:00 - 20:00:00"],
      name: "Lighting",
    }
  }
};
