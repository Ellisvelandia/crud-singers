const mongoose = require("mongoose");

const singerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  web: { type: String, required: true },
  description: { type: String, required: true },
  Genre: { type: String, required: true },
});

module.exports = new mongoose.model("singers", singerSchema);
