const express = require('express');
const {createGroup, loadGroupByStudentId} = require("../service/group.service");

const router = express.Router();

router.post('/' , createGroup)

router.get('/groupByStudent' , loadGroupByStudentId)

module.exports = router