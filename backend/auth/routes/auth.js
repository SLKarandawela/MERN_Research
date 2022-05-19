const express = require ('express');
const router = express.Router();

const { studentregister, staffregister, studentlogin, stafflogin, studentforgotpassword, staffforgotpassword, resetpassword, } = require('../controllers/auth');

router.route("/studentregister").post(studentregister);
router.route("/staffregister").post(staffregister);
router.route("/studentlogin").post(studentlogin);
router.route("/stafflogin").post(stafflogin);
router.route("/studentforgotpassword").post(studentforgotpassword);
router.route("/staffforgotpassword").post(staffforgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;
