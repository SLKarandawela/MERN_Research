const {createGroup, loadGroupByStudentId, enableSearchSupervisor, listPendingForSupervisor, allocateSupervisor,
    enableSearchCoSupervisor, listPendingForCoSupervisor, allocateCoSupervisor
} = require("../service/group.service.js");

const app = require("../index.js");
const request = require("supertest");

describe("Group test" , ()=>{

    // create a group test happy path
    test("Create group success path" ,    async () => {

        req = {
            groupName : "TEST GROUP",
            groupMembers : ["IT19963952","IT19963953","IT19963954","IT1996395"]
        }

        const response = await request(app).post("/group").send(req)

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
})