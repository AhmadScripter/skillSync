const express = require('express');
const router = express.Router();
const verifyRecruiter = require('../middleware/authMiddleware');
const { createJob, getAllJobs } = require('../controllers/jobController');

router.post('/', verifyRecruiter, createJob);
router.get('/', getAllJobs);

module.exports = router;
