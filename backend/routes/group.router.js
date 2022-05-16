const express = require('express');
const {createGroup, loadGroupByStudentId, enableSearchSupervisor, listPendingForSupervisor, allocateSupervisor} = require("../service/group.service");

const router = express.Router();

router.post('/' , createGroup)

router.get('/groupByStudent' , loadGroupByStudentId)

router.post('/enableSearchSupervisor' , enableSearchSupervisor)

router.get('/listSearchSupervisor' , listPendingForSupervisor)

router.post('/allocateSupervisor' , allocateSupervisor)

module.exports = router