const express = require("express");
const controller = require("../controllers/save_form.controller");
const middleware = require("../middlewares/save_form.middleware");
const auth = require("../middlewares/authorization.middleware");
const router = express.Router();

router.post("/save",  middleware.validateSaveForm, auth.authorization, controller.savedForm);
router.get("/get",  auth.authorization, controller.getSaveForm);

module.exports = router;