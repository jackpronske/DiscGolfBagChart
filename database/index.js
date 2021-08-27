const { Pool } = require("pg");
const connection = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dgbchart",
  password: "abccba",
  port: 5432,
});

connection.connect().then(() => {
  console.log("connected to postgres");
});

const getAllDiscs = (callback) => {
  connection.query("SELECT * FROM discs", (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const addDisc = (disc, callback) => {};

module.exports = {
  getAllDiscs,
  addDisc,
};
