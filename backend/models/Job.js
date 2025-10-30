const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  skills: [String],
  experience: String,
  location: String,
  salaryRange: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);