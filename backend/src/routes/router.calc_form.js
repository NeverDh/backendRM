const express = require("express");
const controller = require("../controllers/calculate_form.controller");
const middleware = require("../middlewares/calculate_form.middleware");
const auth = require("../middlewares/authorization.middleware");
const router = express.Router();

router.get("/calc",  middleware.validateCalcForm, auth.authorization, controller.calculateForm);

module.exports = router;