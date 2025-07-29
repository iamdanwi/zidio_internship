import { createUser, userLogin } from '../controller/user.controller.js';
import e from 'express';
import { verifyToken } from '../middleware/auth.js';
import { loginLimiter } from '../middleware/rateLimiter.js';

const router = e.Router();

router.post('/register', verifyToken, createUser);
router.post('/login', loginLimiter, userLogin);

export default router;
