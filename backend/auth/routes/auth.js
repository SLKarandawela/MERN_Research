const express = require ('express');
const router = express.Router();

const { studentregister, staffregister, studentlogin, stafflogin, forgotpassword, resetpassword, } = require('../controllers/auth');

router.route("/studentregister").post(studentregister);
router.route("/staffregister").post(staffregister);
router.route("/studentlogin").post(studentlogin);
router.route("/stafflogin").post(stafflogin);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;
