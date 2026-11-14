const Semester = require("../models/Semester");
const semestersData = require("../data/semestersData");
const { isDbConnected } = require("../config/db");

// @desc Get all semesters overview
// @route GET /api/semesters
const getSemesters = async (req, res) => {
  try {
    if (isDbConnected()) {
      // Ensure semester 7 and 8 are never present in DB
      await Semester.deleteMany({ slug: { $in: ["semester-7", "semester-8"] } });

      let semesters = await Semester.find({
        slug: { $nin: ["semester-7", "semester-8"] },
      });
      if (semesters.length === 0) {
        // Seed DB if empty
        semesters = await Semester.insertMany(semestersData);
      }
      return res.json({ success: true, semesters });
    } else {
      return res.json({ success: true, semesters: semestersData });
    }
  } catch (error) {
    console.error("GetSemesters error:", error);
    return res.json({ success: true, semesters: semestersData });
  }
};

// @desc Get single semester by ID or Slug
// @route GET /api/semesters/:id
const getSemesterById = async (req, res) => {
  try {
    const { id } = req.params;

    // Disallow 7 and 8
    if (id === "7" || id === "8" || id === "semester-7" || id === "semester-8") {
      return res.status(404).json({ success: false, message: "Semester not found" });
    }

    let semester = null;

    if (isDbConnected()) {
      semester = await Semester.findOne({
        slug: { $nin: ["semester-7", "semester-8"] },
        $or: [{ slug: id }, { slug: `semester-${id}` }, { number: `Semester ${id}` }],
      });
    }

    if (!semester) {
      semester = semestersData.find(
        (s) =>
          s.slug !== "semester-7" &&
          s.slug !== "semester-8" &&
          (s.id === id ||
            s.slug === id ||
            s.slug === `semester-${id}` ||
            s.number.toLowerCase() === `semester ${id}`.toLowerCase())
      );
    }

    if (!semester) {
      return res.status(404).json({ success: false, message: "Semester not found" });
    }

    return res.json({ success: true, semester });
  } catch (error) {
    console.error("GetSemesterById error:", error);
    return res.status(500).json({ success: false, message: "Server error fetching semester details" });
  }
};

module.exports = { getSemesters, getSemesterById };
