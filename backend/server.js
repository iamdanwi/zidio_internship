import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/admin.routes.js';
import userRoutes from './routes/user.routes.js';

import { errorHandler } from './middleware/errorHandler.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
