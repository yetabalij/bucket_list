const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bucketListRoute = require("./routers/bucketlist");
require("dotenv").config();

//creating the app
const app = express();

//db connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected.");
  });

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routing middlwares
app.use("/api", bucketListRoute);

//making the app listining to a port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`the server is started at: ${port}`);
});
