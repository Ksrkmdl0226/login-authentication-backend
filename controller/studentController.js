const StudentData = require("../model/studentsModel");

const studentController = {
  getStudentsList: async (req, res) => {
    try {
      let data = await StudentData.find({});
      res.status(200).json({ length: data.length, data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getStudentDetails: async (req, res) => {
    try {
      let data = await StudentData.findById({ _id: req.params.id });
      res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  addStudent: async (req, res) => {
    try {
      const { name, subject, dateOfBirth, marks } = req.body;
      let extStudent = await StudentData.findOne({
        name: name,
        subject: subject,
      });
      console.log(extStudent);
      if (!extStudent) {
        let data = await StudentData.create({
          name,
          subject,
          dateOfBirth,
          marks,
        });
        console.log("data", data);
        return res
          .status(200)
          .json({ message: "Students Details Added successfully", data });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  updateStudent: async (req, res) => {
    try {
      const { name, subject, dateOfBirth, marks } = req.body;
      let extStudent = await StudentData.findById({ _id: req.params.id });
      if (!extStudent)
        return res.status(400).json({ message: "Student Doesn't exists" });
      let data = await StudentData.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name,
          subject,
          dateOfBirth,
          marks,
        }
      );
      let newData = await StudentData.findOne({ _id: extStudent?._id });
      return res
        .status(200)
        .json({ message: "Updated Successfully.", data: newData });
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

// let randomMarks = () => {
//   return Math.floor(Math.random() * 90 + 10);
// };
// if (extStudent) {
//   let updatedData = await StudentData.findByIdAndUpdate(
//     { _id: extStudent?._id.toString() },
//     { marks: parseInt(extStudent?.marks) + parseInt(marks) }
//   );
// console.log("random", randomMarks());
// let updatedData = extStudent?.map(async (val, index) => {
//   console.log("item", val?._id);
// });
// return res.status(200).json({
//   message: "Student Existing Details Updated, New Details Added.",
//   updatedData,
// });
// if (updatedData) {
//   let data = await StudentData.create({ name, subject, marks });
//   return res.status(200).json({
//     message: "Student Existing Details Updated, New Details Added.", data
//   });
// }
// } else {
// }
