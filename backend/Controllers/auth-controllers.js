const User = require("../Models/auth-models");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }
    const token = user.generateToken();
    res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ msg: "Server error" });
  }
};

const Register = async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (!username || !email || !password || !phone) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
      phone,
    });

    await newUser.save();
    const token = newUser.generateToken();
    res.status(201).json({ msg: "User registered successfully", token: token });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(500).json({ msg: "Server error during registration" });
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Login, Register, user };
