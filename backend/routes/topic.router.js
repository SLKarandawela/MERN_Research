const express = require('express');

const {submitTopic} = require('../service/topic.service.js')
const {approveTopic} = require("../service/topic.service");

const router = express.Router();

router.post('/submit' , submitTopic )
router.post('/approveTopic' , approveTopic )

module.exports = router;
