const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/names", (req, res) => {
  res.send("Telmo");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
