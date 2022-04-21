const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");

const userRoutes = require("../server/routes/UserRoutes");

require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://interntest:intern123@cluster0.mvg17.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("error connecting database");
    console.log(err);
  });

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log("listening on port 5000");
});
