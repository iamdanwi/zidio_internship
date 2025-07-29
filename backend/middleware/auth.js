import jwt from 'jsonwebtoken';
import Admin from '../models/admin.models.js';
import User from '../models/user.models.js';

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let identity = await Admin.findById(decoded.id);

    if (!identity) {
      identity = await User.findById(decoded.id);
      if (!identity) throw new Error('Invalid token');
      req.user = identity;
    } else {
      req.admin = identity;
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
