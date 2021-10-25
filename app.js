require("dotenv").config();
const express = require("express");
const app = express();
const uploadRoute = require("./src/routes/uploadRoute");
app.use(express.json());
app.use(uploadRoute);
app.get("*", (req, res) => {
  res.send("<h1>Welcome to image upload Test</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}...`);
});
