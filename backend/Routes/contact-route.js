const express = require("express");
const { contact } = require("../Controllers/contact-controller");

const router = express.Router();

router.route("/contact").post(contact);

module.exports = router;
