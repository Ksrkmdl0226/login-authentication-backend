const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name field must be filled."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email field must be filled."],
      trim: true,
      unique: [true, "email already used."],
    },
    password: {
      type: String,
      required: [true, "Password field must be filled."],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "teachers",
    timestamps: true,
  }
);

module.exports = mongoose.model("TeacherData", teacherSchema);
