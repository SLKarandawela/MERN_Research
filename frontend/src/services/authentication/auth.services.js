import axios from 'axios'
const host = "http://localhost:5000/api/auth";


// sign up
const signUp = (studentid,studentfirstname,studentlastname, studentemail,studentpersonalemail,contactnumber,degree,specialization,role,password) => {
    return axios
    .post(host + "/studentregister",{
        studentid,
        studentfirstname,
        studentlastname,
        studentemail,
        studentpersonalemail,
        contactnumber,
        degree,
        specialization,
        role,
        password
    })
    .then((res) => {
        
        return res.data
    });
};


//sign in
const login = (studentid,password ) => {
    
    return axios
    .post(host + "/studentlogin",{
        studentid,
        password
    })
    .then((res) => {
        console.log(res)
        if(res.data.token){
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        

        

        return res.data
    });
}

// logout
const logout = () => {
    localStorage.removeItem("user");
}

// get logged user
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

// exporting auth service
const authService = {
    signUp,
    login,
    logout,
    getCurrentUser
};

export default authService;