const express = require('express');
const router = express.Router();
const getJobMatches  = require('../controllers/matchController');

router.get('/:jobId', getJobMatches);

module.exports = router;