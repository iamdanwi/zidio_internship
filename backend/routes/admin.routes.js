import { adminRegister, adminLogin } from '../controller/admin.controller.js';
import e from 'express';
import { loginLimiter } from '../middleware/rateLimiter.js';

const router = e.Router();

router.post('/register', adminRegister);
router.post('/login', loginLimiter, adminLogin);

export default router;
