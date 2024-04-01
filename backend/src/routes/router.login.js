const express = require("express");
const controller = require("../controllers/login.controller");
const middleware = require("../middlewares/login.middleware");
const router = express.Router();

router.get("/authorization",  middleware.validateLogin,  controller.authorization);

module.exports = router;