const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const SECRET_KEY = "your-secret-key"; // Remember to store key securely

// Middleware for checking the token
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "No token provided." });
  }
  
  // Decrypts the token
  const decryptedToken = crypto.privateDecrypt(SECRET_KEY, Buffer.from(token, "base64")).toString("utf8");
  
  // Verifies the token
  jwt.verify(decryptedToken, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: "Failed to authenticate token." });
    }
    
    // If everything is good, save the decoded user id to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}
  
module.exports ={verifyToken} ;
  