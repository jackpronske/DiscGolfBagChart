const db = require("../database");

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  db.getAllDiscs((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(data.rows);
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
