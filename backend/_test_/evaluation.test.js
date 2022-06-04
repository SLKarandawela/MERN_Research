const {studentregister, staffregister, studentlogin, stafflogin} = require("../auth/controllers/auth");
const {addevaluation} = require("../panel_member/controllers/evaluation");
const app = require("../index.js");
const request =  require("supertest");

describe("Auth and Evaluation Tests", ()=>{
    //student register test success path
    test("Student Register Success Path", async () =>{
        req = {

            studentid:'it11111111',
            studentfirstname:'Test FN',
            studentlastname:'Test LN',
            studentemail:'test@gmail.com',
            studentpersonalemail:'test.p@gmail.com',
            contactnumber:'011111111',
            degree:'IT',
            specialization:'SE',
            password:'#123456'
        }

        const response = await request(app).post("/api/auth/studentregister").send(req)

        expect(response.statusCode).toBe(201);
    })

    // //student register test failed path
    test("Student Register Error Path", async () =>{
        req = {
            studentid:'it11111111',
            studentfirstname:'Test FN',
            studentlastname:'Test LN',
            studentemail:'test@gmail.com',
            studentpersonalemail:'test.p@gmail.com',
            contactnumber:'011111111',
            degree:'IT',
            specialization:'SE',
            password:'#123456'
        }

        const response = await request(app).post("/api/auth/studentregister").send(req)

        expect(response.statusCode).toBe(400);
    })  
    
    // //staff register test success path
    test("Staff Register Success Path", async () =>{
        req = {

            stafftype:'supervisor',
            staffid:'st11111111',
            stafffirstname:'Test FN',
            stafflastname:'Test LN',
            staffemail:'test@gmail.com',
            contactnumber:'011111111',
            faculty:'IT',
            researcharea:'ML',
            password:'#123456'
        }

        const response = await request(app).post("/api/auth/staffregister").send(req)

        expect(response.statusCode).toBe(201);
    })

    // //staff register test failed path
    test("Staff Register Error Path", async () =>{
        req = {

            stafftype:'supervisor',
            staffid:'st11111111',
            stafffirstname:'Test FN',
            stafflastname:'Test LN',
            staffemail:'test@gmail.com',
            contactnumber:'011111111',
            faculty:'IT',
            researcharea:'ML',
            password:'#123456'
        }

        const response = await request(app).post("/api/auth/staffregister").send(req)

        expect(response.statusCode).toBe(400);
    })  
    
    //student login test success path
    test("Student Login Success Path", async () =>{
        req = {

            studentid:'it11111111',
            password:'#123456'
        }

        const response = await request(app).post("/api/auth/studentlogin").send(req)

        expect(response.statusCode).toBe(200);
    }) 
    
        //staff login test success path
    test("Staff Login Success Path", async () =>{
        req = {

            staffid:'st11111111',
            password:'#123456'
        }

        const response = await request(app).post("/api/auth/stafflogin").send(req)

        expect(response.statusCode).toBe(200);
    })
    
    //create evaluation test success path
    test("Create Evaluation Success Path", async () =>{
        req = {
            studentid:'it11111111',
            groupid:'1',
            researcharea:'ML',
            researchtopic:'Test Topic',
            result:'A',
            evaluatorid:'st001',
            evaluatorname:'Tester',
            evaluationdate:'2022-05-24T00:00:00.000Z',
            remark:'Good'
        }

        const response = await request(app).post("/api/panel/addevaluation").send(req)

        expect(response.statusCode).toBe(201);
    })

    //create evaluation test failed path
    test("Create Evaluation Error Path", async () =>{
        req = {
            studentid:'it11111111',
            groupid:'1',
            researcharea:'ML',
            researchtopic:'Test Topic',
            result:'A',
            evaluatorid:'st001',
            evaluatorname:'Tester',
            evaluationdate:'2022-05-24T00:00:00.000Z',
            remark:'Good'
        }

        const response = await request(app).post("/api/panel/addevaluation").send(req)

        expect(response.statusCode).toBe(500);
    })    
})


