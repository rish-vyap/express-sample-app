const express = require('express');
const router = express.Router();
const  middleware  = require('../middlewares');

router.get('/login', middleware.authentication.checkToken);


module.exports = router;
