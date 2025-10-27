const express = require('express');
const router = express.Router();
const { createCandidate, getCandidates } = require('../controllers/candidateController');

router.post('/', createCandidate);
router.get('/', getCandidates);

module.exports = router;