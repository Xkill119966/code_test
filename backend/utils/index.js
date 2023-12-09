function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
      
    } catch (error) {
      reject(error);
    }
  });
}

function generateToken() {
  let min = 100000;
  let max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getPostData,
  generateToken
};
