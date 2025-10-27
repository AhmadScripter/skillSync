const Candidate = require('../models/Candidate');

const createCandidate = async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).json({ message: 'Candidate added', candidate });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {createCandidate, getCandidates};