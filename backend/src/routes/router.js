const express = require("express");
const controller = require("../controllers/index");
const middleware = require("../middlewares/index");
const core = require("../core/index");
const router = express.Router();

router.get("/get", core.authorization, middleware.validateGetAdministrators, controller.get);
router.get("/get/:id", core.authorization, middleware.validateGetAdministrators, controller.getByID);
router.post("/create", core.authorization, middleware.validateCreateAdministrator, core.verifyUsername, controller.create);
router.put("/update/:id", core.authorization, middleware.validateUpdateAdministrator, controller.update);
router.delete("/delete/:id", core.authorization, middleware.validateDeleteAdministrator, controller.exclude);

module.exports = router;