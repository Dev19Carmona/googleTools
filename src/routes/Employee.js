const express = require("express");
const router = express.Router();
const { employee, employee_Update, employee_Create } = require("../controllers/Employee.js");

router.get("/", employee);
router.post("/create", employee_Create);
router.put("/update", employee_Update);

module.exports = router;