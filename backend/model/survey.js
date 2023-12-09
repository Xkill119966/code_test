const connection = require("../db");

function create(data) {
  return new Promise((resolve, reject) => {
    let query =
      "INSERT INTO survey (name, phoneNumber, companyName, designation) VALUES (?,?,?,?)";

    connection.query(query, data, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  create,
};
