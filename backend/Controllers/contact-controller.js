const ContactModels = require("../Models/contact-model");

const contact = async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;

    if (!name || !email || !message || !phone) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const newContact = new ContactModels({
      name,
      email,
      message,
      phone,
    });

    await newContact.save();

    res.status(201).json({ msg: "Message successfully sent!" });
  } catch (error) {
    console.error("Error saving contact message:", error.message);
    res.status(500).json({ msg: "Server error while sending message" });
  }
};

module.exports = { contact };
