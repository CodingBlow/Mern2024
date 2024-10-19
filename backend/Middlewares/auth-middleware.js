const jwt = require("jsonwebtoken");
const User = require("../Models/auth-models");


const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized, TOKEN Not Provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  //   console.log(jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log(isVerified);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized, TOKEN Not Provided" });
  }
};

module.exports = authMiddleware;
