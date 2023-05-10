const mongoose = require("mongoose");

const { Schema } = mongoose;

const locationSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
