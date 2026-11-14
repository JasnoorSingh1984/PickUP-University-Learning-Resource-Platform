const express = require("express");
const router = express.Router();
const { getSemesters, getSemesterById } = require("../controllers/semesterController");

router.get("/", getSemesters);
router.get("/:id", getSemesterById);

module.exports = router;
