const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", (_, res) => {
  res.status(200).json({ status: "success", data: {} });
});

app.post("/callback", (req, res) => {
  const data = req.body;
  res.status(200).json({ status: "success", data });
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
