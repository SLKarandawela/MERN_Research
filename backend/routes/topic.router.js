const express = require('express');

const {submitTopic} = require('../service/topic.service.js')

const router = express.Router();

router.post('/submit' , submitTopic )

module.exports = router;
