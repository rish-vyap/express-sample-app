const express = require("express");
const router = express.Router();
const Middleware = require("../middlewares");
const Controllers = require("../controllers");

router
    .post('/signup', [
            check('phoneNumber')
            .notEmpty()
            .withMessage('Phone number is required')
            .isMobilePhone()
            .withMessage('Invalid phone number format'),
    ], //   body('phone').isMobilePhone().withMessage('Invalid phone number format'),
    Middleware.authentication.verifyGuestToken,
    Controllers.UserController.signUp)

    .use("/login", Middleware.authentication.verifyToken);


module.exports = router;
