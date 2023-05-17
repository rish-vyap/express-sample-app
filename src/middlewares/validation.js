const { validationResult } = require('express-validator');
// Trusted domains for anti-phishing check
const trustedDomains = ["www.your-domain.com", "api.your-domain.com"];

// Custom validation middleware
function validateRequest(req, res, next) {
  // validate the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Check for environment variable
  if (!process.env.NODE_ENV) {
    return res.status(500).json({ error: "Environment variable not set" });
  }
  // Anti-phishing check
  const origin = req.headers.origin;
  if (!trustedDomains.includes(origin)) {
    return res.status(403).json({ error: "Invalid origin" });
  }

  // If everything's good, move on to next middleware or route handler
  next();
}