const db = require("../database");

const express = require("express");
const app = express();

const port = 3000;

app.get("/discs", (req, res) => {
  db.getAllDiscs((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

app.post("/discs", (req, res) => {
  res.status(201).send("this is a post request");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
