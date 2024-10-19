const express = require("express");
const router = require("./Routes/auth-routes");
const contactRouter = require("./Routes/contact-route");
const connectDB = require("./Utils/db");
const errorMiddleware = require("./Middlewares/error-middleware");
const cors = require("cors");
const service = require("./Routes/service-routes");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cors());
app.use("/auth", router);
app.use("/api", contactRouter);
app.use("/api", service);

app.use(errorMiddleware);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to the database: ${error.message}`);
  });
