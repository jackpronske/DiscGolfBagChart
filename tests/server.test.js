const axios = require("axios");

test("Server should return an object with a data property that is an Array", () => {
  axios("http://localhost:3000/discs").then((results) => {
    expect(Array.isArray(results.data)).toBe(true);
  });
});
