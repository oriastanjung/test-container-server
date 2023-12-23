// server.js

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/saveFormData", (req, res) => {
  const formData = req.body;
  const dataString = JSON.stringify(formData);

  // Save data to public folder
  const filePath = "public/attendanceData.txt";

  fs.writeFile(filePath, dataString, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    res.status(200).send("File saved successfully");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
