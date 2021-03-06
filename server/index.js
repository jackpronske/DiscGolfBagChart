const db = require("../database");

const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

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
  res.status(201).send("post");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
