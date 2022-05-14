// TODO jest framework
const Groups = require('../models/group.model.js')

exports.createGroup = async (req, res) => {

    let body = req.body

    try {

        if (body.groupName == null) {
            throw new Error("group name is required")
        }

        if (body.groupMembers.length != 4) {
            throw new Error("you must give 4 group member ids to complete")
        }

        // let studentList = false

        //check group members in other groups
        let studentList = await Groups.findOne({groupMembers: {$in: body.groupMembers}})
            .then(doc => {
                if (doc != null) {
                    return doc;
                    // res.status(400).json({message: "student belongs to it number :  already allocate to the group"})
                }
            })
            .catch(err =>{
                res.status(400).json({message: err.message})
            })

        if(studentList != null){
            throw  new Error(`student belongs to it numbers ${studentList.groupMembers} :  already allocate to the group`)
        }

        //check whether students are exits or not
        // TODO check whether students are exits or not

        //create new group
        const group = new Groups(
            {
                groupName: body.groupName,
                groupMembers: body.groupMembers,
            }
        )

        group.save()

        res.status(201).json(group)

    } catch (err) {
        res.status(400).json({message: err.message})
    }
}


exports.loadGroupByStudentId = (req , res) =>{

    const body = req.body

    try {

    }catch (err){
        res.status(400).json({message: err.message})
    }


}