const jwt = require("jsonwebtoken");

const SECRET = "@#%^(*!^#(*&^(!@*#@";

function createToken(userId) {
  const token = jwt.sign({ id: userId }, SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });

  return token;
}


const userId = "some-user-id"; // Replace with user id
const token = createToken(userId);

console.log(token);
