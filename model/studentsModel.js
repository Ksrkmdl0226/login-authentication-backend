const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: [true, "Student name must be filled."],
      trim: true,
      unique: false,
    },
    subject: {
      type: String,
      requied: [true, "subject name must be filled."],
      trim: true,
    },
    dateOfBirth : {
      type : String,
      requied: [true, "Date of Birth must be filled."],
      trim: true,
    },
    marks: {
      type: String,
      requied: [true, "marks must be filled."],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "students",
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentData", studentSchema);
