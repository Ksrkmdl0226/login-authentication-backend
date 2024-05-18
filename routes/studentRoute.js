const studentController = require('../controller/studentController')
const router = require('express').Router()

router.get(`/auth/getStudents`, studentController.getStudentsList)
router.get(`/auth/getStudentDetails/:id`, studentController.getStudentDetails)
router.post(`/auth/addStudent`, studentController.addStudent)
router.patch(`/auth/updateStudent/:id`, studentController.updateStudent)
router.delete(`/auth/deleteStudent/:id`, studentController.deleteStudent)

module.exports = router


