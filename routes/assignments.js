const router = require('express').Router();
const middleware = require('../middleware/middle')
const assignmentController = require("../controller/assignmentController")

router.post("/upload",middleware.authraiseUser,assignmentController.saveAssignment)
router.get("/",middleware.authraiseAdmin,assignmentController.findAllAssignments)
router.post("/:id/accept",middleware.authraiseAdmin,assignmentController.acceptAssignment)
router.post("/:id/reject",middleware.authraiseAdmin,assignmentController.rejectAssignment)



module.exports = router