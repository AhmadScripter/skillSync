const Recruiter = require('../models/Recruiter');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new recruiter
const registerRecruiter = async (req, res) => {
    try {
        const { name, company, email, password } = req.body;

        const existing = await Recruiter.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Recruiter already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const recruiter = new Recruiter({ name, company, email, password: hashedPassword });
        await recruiter.save();

        res.status(201).json({ message: 'Recruiter registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Login recruiter
const loginRecruiter = async (req, res) => {
    try {
        const { email, password } = req.body;

        const recruiter = await Recruiter.findOne({ email });
        if (!recruiter) return res.status(404).json({ message: 'Recruiter not found' });

        const isMatch = await bcrypt.compare(password, recruiter.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: recruiter._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(200).json({
            message: 'Login successful',
            token,
            recruiter: { id: recruiter._id, name: recruiter.name, company: recruiter.company }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = { registerRecruiter, loginRecruiter };