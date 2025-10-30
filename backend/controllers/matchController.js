const Job = require('../models/Job');
const Candidate = require('../models/Candidate');

// Simple keyword-based skill matching
const getJobMatches = async (req, res) => {
    try {
        const { jobId } = req.params;

        const job = await Job.findById(jobId);
        if (!job) return res.status(404).json({ message: 'Job not found' });

        const candidates = await Candidate.find();

        const matches = candidates.map(candidate => {
            const matchedSkills = candidate.skills.filter(skill =>
                job.skills.includes(skill)
            );

            const matchPercentage = Math.round(
                (matchedSkills.length / job.skills.length) * 100
            );

            return {
                candidateId: candidate._id,
                name: candidate.name,
                email: candidate.email,
                matchedSkills,
                matchPercentage,
            };
        });

        // sort by best match
        matches.sort((a, b) => b.matchPercentage - a.matchPercentage);

        res.json({
            jobTitle: job.title,
            totalCandidates: matches.length,
            bestMatches: matches.slice(0, 10), // top 10 results
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = getJobMatches;