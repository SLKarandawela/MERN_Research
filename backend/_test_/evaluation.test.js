const {addevaluation} = require("../panel_member/controllers/evaluation");
const app = require("../index.js");
const request =  require("supertest");

describe("Evaluation Test", ()=>{
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


