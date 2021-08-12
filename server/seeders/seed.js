const db = require("../config/connection");
const User = require("../models/User.js");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log("Data seeded...");
    process.exit(0);
  } catch (error) {
    console.log("Error message:", error.message);
  }
});
