const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  locationName: { type: String, required: true },
  description: String,
  country: String,
  state: String,
  city: String,
  tag: String,
}, { timestamps: true });  // <-- yahan add karo

module.exports = mongoose.model("Location", LocationSchema);
