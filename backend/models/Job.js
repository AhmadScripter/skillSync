const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  skills: [String], // e.g., ['Angular', 'Node.js', 'MongoDB']
  experience: String,
  location: String,
  salaryRange: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter' }, // link to recruiter
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);