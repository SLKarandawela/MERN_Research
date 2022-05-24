const express = require('express');
const router = express.Router();

const { getevaluation, addevaluation, updateevaluation, viewevaluations } = require('../controllers/evaluation');

router.route("/viewevaluations").get(viewevaluations);
router.route("/addevaluation").post(addevaluation);
router.route("/updateevaluation/:id").put(updateevaluation);
router.route("/viewevaluations/:id").get(getevaluation);

module.exports = router;
