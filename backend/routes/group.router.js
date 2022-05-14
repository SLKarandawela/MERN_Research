const express = require('express');
const {createGroup} = require("../service/group.service");

const router = express.Router();

router.post('/' , createGroup)

module.exports = router