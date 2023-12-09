const { create } = require("../model/survey");
const { getPostData } = require("../utils");
const { getToken } = require("./token");
const _ = require("lodash");

async function createSurvey(req, res) {
  try {
    const body = await getPostData(req);

    const parseData = JSON.parse(body);

    validateRequestValue(parseData);

    const { name, phoneNumber, companyName, designation } = parseData;

    const surveyData = [name, phoneNumber, companyName, designation];

    const result = await create(surveyData);

    const token = await getToken(result?.insertId);

    res.writeHead(201, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        message: "success",
        token,
      })
    );
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: error.message,
      })
    );
  }
}

function validateRequestValue(requestData) {
  const surveyFormData = {
    companyName: String(),
    designation: String(),
    name: String(),
    phoneNumber: String(),
  };

  let isSameKey = _.isEqual(
    Object.keys(surveyFormData),
    Object.keys(requestData)
  );

  if (!isSameKey) {
    throw new Error("Invalid request data");
  }
}

module.exports = {
  createSurvey,
};
