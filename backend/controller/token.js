const { create, get } = require("../model/token");
const _ = require("lodash");
const { generateToken } = require("../utils");

async function getToken(surveyId) {
  try {
    let isExistToken = true;
    let token;
    do {
      token = generateToken();
      const tokenFromDb = await get(token);
      tokenFromDb.length ? (isExistToken = true) : (isExistToken = false);
    } while (isExistToken);

    await create(token, surveyId);
    return token;
  } catch (error) {
    throw new Error("token generate is failed");
  }
}

module.exports = {
  getToken,
};
