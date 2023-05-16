const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const SECRET_KEY = "your-secret-key"; // Remember to store key securely



// Middleware function for checking role(RBAC controls)
function checkRole(role) {
  return function (req, res, next) {
    const user = users.find(user => user.id === req.userId);

    if (user && user.role === role) {
      next(); // Continue to the next middleware function
    } else {
      res.status(403).json({ message: 'Forbidden: You do not have the required role' });
    }
  };
}


// Middleware for checking the token
function verifyToken(req, res, next) { 
  // api-access-key is also a mandate to prevent backflow of data
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
  