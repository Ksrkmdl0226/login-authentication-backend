const TeacherData = require("../model/teacherModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createAccessToken } = require("../util/token");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // password encryption
      const encPass = await bcrypt.hash(password, 10); // hash(pass,salt)
      // creating new user in db
      const newUser = await TeacherData.create({
        name,
        email,
        password: encPass,
      });
      return res.status(200).json({
        msg: "Teacher Details Registered Successfully",
        user: newUser,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
      console.log("error");
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // validation uset email
      let extUser = await TeacherData.findOne({ email });
      if (!extUser)
        return res
          .status(400)
          .json({ message: "Email Doesn't exists." });
      // password compare
      const passMatch = await bcrypt.compare(password, extUser?.password);
      if (!passMatch)
        return res.status(400).json({ message: "Password Doesn't match" });

      const accessToken = createAccessToken({ id: extUser._id });
      return res
        .status(200)
        .json({ token: accessToken, message: "logged In Successfully." });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = authController;
