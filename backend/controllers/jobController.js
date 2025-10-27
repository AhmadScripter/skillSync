const Job = require('../models/Job');

// Create Job
const createJob = async (req, res) => {
  try {
    const { title, description, skills, experience, location, salaryRange } = req.body;

    const job = new Job({
      title,
      description,
      skills,
      experience,
      location,
      salaryRange,
      postedBy: req.user.id
    });

    await job.save();
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get All Jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', 'name company email');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {createJob, getAllJobs};