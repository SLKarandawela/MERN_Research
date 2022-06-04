const {createGroup, loadGroupByStudentId, enableSearchSupervisor, listPendingForSupervisor, allocateSupervisor,
    enableSearchCoSupervisor, listPendingForCoSupervisor, allocateCoSupervisor
} = require("../service/group.service.js");

const app = require("../index.js");
const request = require("supertest");
const mongoose = require("mongoose");

let createdGroupId = ""
let createdTopic = ""

describe("Group test" , ()=>{

    // create a group test happy path
    test("Create group success path" ,    async () => {

        req = {
            groupName : "TEST GROUP",
            groupMembers : ["IT19963952","IT19963953","IT19963954","IT1996395"]
        }

        const response = await request(app).post("/group").send(req)
        t = response.body._id;
        expect(response.statusCode).toBe(201);

    })

    // create a group test failed path
    test("Create group error path" ,    async () => {

        req = {
            groupName : "TEST GROUP",
            groupMembers : ["IT19963952","IT19963953","IT19963954","IT1996395"]
        }

        const response = await request(app).post("/group").send(req)

        expect(response.statusCode).toBe(400);
    })

    // check get group by student positive
    test("Check group by student id" , async () => {
        req = {
            studentId : "IT19963952"
        }

        const response = await request(app).get("/group/groupByStudent").send(req)

        expect(response.statusCode).toBe(200);
    })

    // get group by student error path
    test("Check group by student id error path" , async () =>{
        req = {
            studentId : "IT19067148"
        }

        const response = await request(app).get("/group/groupByStudent").send(req)

        expect(response.statusCode).toBe(400);
    })



    // topic specific test cases
    test("Test add new topic" ,async () => {

        req = {
            groupId : createdGroupId,
            topic : "TEST TOPIC"
        }

        const response =  await request(app).post("/topic/submit/").send(req)
        createdTopic = response.body._id
        expect(response.statusCode).toBe(201);

    })

    test("Approve topic" ,async () => {

        req = {
            topicId : createdTopic,
        }

        const response =  await request(app).post("/topic/approveTopic").send(req)
        expect(response.body.status).toBe("APPROVED")
        expect(response.statusCode).toBe(201);

    })


    // test topic by group id
    test("Test get topic by group id" ,async () => {

        req = {
            groupId : createdGroupId,
        }

        const response =  await request(app).get("/topic/getTopicByGroup").send(req)
        console.log(response)
        expect(response.statusCode).toBe(200);

    })


    // remove all datasets after test run
    afterAll(async () => {
        const collections = await mongoose.connection.db.collections();
        for (let connection of collections) {
            await connection.deleteMany({});
        }
    })

})
