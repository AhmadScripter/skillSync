const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  skills: [String],
  experience: String,
  education: String,
  resumeUrl: String,
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Candidate', candidateSchema);