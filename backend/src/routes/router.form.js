const express = require("express");
const controller = require("../controllers/calculate_form.controllers");
const middleware = require("../middlewares/calculate_form.middleware");
const auth = require("../middlewares/authorization.middleware");
const router = express.Router();

router.get("/calc",  middleware.validateForm, auth.authorization, controller.calculateForm);

module.exports = router;