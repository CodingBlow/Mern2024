const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ServiceModel = mongoose.model("Service", serviceSchema);

module.exports = ServiceModel;
