const Student = require('../models/Student');
const Staff = require('../models/Staff');

const ErrorResponse = require('../utils/errorResponse');

exports.studentregister = async (req,res,next) => {
    // res.send("Stuent Register Route");
    const {studentid,studentfirstname,studentlastname,studentemail
        ,studentpersonalemail,contactnumber,degree,specialization,password } = req.body;
    try{
        const student = await Student.create({
            studentid,studentfirstname,studentlastname,studentemail,studentpersonalemail,contactnumber,degree,specialization,password
        });

        sendStudentToken(student, 201, res);
    }catch (error){
        next(error);
    }    
};

exports.staffregister = async (req,res,next) => {
    // res.send("Staff Register Route");
    const {staffid,stafffirstname,stafflastname,staffemail
        ,contactnumber,faculty,researcharea,password } = req.body;
    try{
        const staff = await Staff.create({
            staffid,stafffirstname,stafflastname,staffemail,contactnumber,faculty,researcharea,password
        });

        sendStaffToken(staff, 201, res);
    }catch (error){
        next(error);
    }    

};

exports.studentlogin = async (req,res,next) => {
    // res.send("Login Route");
    const {studentid, password} = req.body;

    if(!studentid || !password){
        return next(new ErrorResponse("Please provide a student ID and password", 400))
    }

    try {
        const student = await Student.findOne({studentid}).select("+password");

        if(!student){
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        const isMatch = await student.matchPasswords(password);

        if(!isMatch){
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        sendStudentToken(student, 200, res);

    } catch (error) {
        res.status(500).json({success:false, error:error.message});
    }
};

exports.stafflogin = async (req,res,next) => {
    // res.send("Login Route");
    const {staffid, password} = req.body;

    if(!staffid || !password){
        return next(new ErrorResponse("Please provide a staff ID and password", 400))
    }

    try {
        const staff = await Staff.findOne({staffid}).select("+password");

        if(!staff){
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        const isMatch = await staff.matchPasswords(password);

        if(!isMatch){
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        sendStaffToken(staff, 200, res);

    } catch (error) {
        res.status(500).json({success:false, error:error.message});
    }
};

exports.forgotpassword = (req,res,next) => {
    res.send("Forgot Password Route");
};

exports.resetpassword = (req,res,next) => {
    res.send("Reset Password Route");
};

const sendStudentToken = (student, statusCode, res) => {
    const token = student.getSignedToken();
    res.status(statusCode).json({success:true, token})
}

const sendStaffToken = (staff, statusCode, res) => {
    const token = staff.getSignedToken();
    res.status(statusCode).json({success:true, token})
}
