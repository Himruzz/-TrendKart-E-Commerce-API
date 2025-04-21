const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Automatically handled by Mongoose
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true }, // For storing image URL
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Category", categorySchema);
