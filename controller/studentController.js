const StudentData = require("../model/studentsModel");

const studentController = {
  getStudentsList: async (req, res) => {
    try {
      // res.json({msg : "get all"})
      let data = await StudentData.find({});
      res.status(200).json({ length: data.length, data});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getStudentDetails: async (req, res) => {
    try {
      let data = await StudentData.findById({ _id: req.params.id});
      res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  addStudent: async (req, res) => {
    try {
      const { name, subject, marks } = req.body;
      // res.json({msg : req.body})
      let extStudent = await StudentData.findOne({ name });
      if (extStudent)
        return res
          .status(400)
          .json({ message: "Student Details Already Exists." });
      let data = await StudentData.create({ name, subject, marks });
      res
        .status(200)
        .json({ message: "Students Details Added successfully", data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  updateStudent: async (req, res) => {
    try {
      const { name, subject, marks } = req.body;
      let extStudent = await StudentData.findById({ _id: req.params.id });
      if (!extStudent)
        return res.status(400).json({ message: "Student Doesn't exists" });
      let data = await StudentData.findByIdAndUpdate(
        { _id: req.params.id },
        { name, subject, marks }
      );
      return res.status(200).json({ message: "Updated Successfully.", data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteStudent: async (req, res) => {
    try {
      let extStudent = await StudentData.findById({ _id: req.params.id });
      if (!extStudent)
        return res.status(400).json({ message: "Student Doesn't exists" });
      let data = await StudentData.findByIdAndDelete({ _id: req.params.id });
      return res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = studentController;
