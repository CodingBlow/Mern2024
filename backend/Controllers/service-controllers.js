const ServiceModel = require("../Models/service-models");

const service = async (req, res) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      msg: "Server error while fetching services",
      error: error.message,
    });
  }
};

module.exports = service;
