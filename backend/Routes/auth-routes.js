const express = require("express");
const { Login, Register, user } = require("../Controllers/auth-controllers");
const validate = require("../Middlewares/validate-middlewares");
const { registerSchema, LoginSchema } = require("../Validator/auth-validator");
const authMiddleware = require("../Middlewares/auth-middleware");

const router = express.Router();

router.route("/login").post(validate(LoginSchema), Login);

router.route("/register").post(validate(registerSchema), Register);

router.route("/user").get(authMiddleware, user);

module.exports = router;
