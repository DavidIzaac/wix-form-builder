const express = require("express");
const router = express.Router();
const formsController = require("../controllers/forms.controller");


router.get("/", formsController.list);
router.get("/:id", formsController.listSubmissions);
router.post("/", formsController.create);
router.post("/submit", formsController.submit);

module.exports = router;