const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dgbchart",
  password: "abccba",
  port: 5432,
});

pool.connect().then(() => {
  console.log("connected to postgres");
});

const getAllDiscs = (callback) => {
  pool.query("SELECT * FROM discs", (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getAllDiscs,
};
