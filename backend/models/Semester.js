const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  code: String,
  name: String,
  credits: Number,
  topics: [String],
  links: {
    websites: String,
    youtube: String,
    books: String,
    notes: String,
    extra: String,
    cho: String,
  },
});

const semesterSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    tag: String,
    title: String,
    description: String,
    subjects: [subjectSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Semester", semesterSchema);
