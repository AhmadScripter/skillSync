const jwt = require('jsonwebtoken');

const verifyRecruiter = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token', error: err.message });
  }
};


module.exports = verifyRecruiter;