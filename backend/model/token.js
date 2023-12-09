const connection = require("../db");

function create(name, surveyId) {
  return new Promise((resolve, reject) => {
    let query = "INSERT INTO token (name, surveyId) VALUES (?,?)";

    connection.query(query, [name, surveyId], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function get(name) {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM `token` WHERE `name` = ?";
    
    connection.query(query, [name], function (err, results) {
      if (err) reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  create,
  get,
};
