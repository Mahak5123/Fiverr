import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';
import conversationRoute from './routes/conversation.route.js';
import messageRoute from './routes/message.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config(); // Load environment variables

const app = express();

// MongoDB connection
mongoose.set('strictQuery', true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
};

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({ success: false, status, message });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connect();
  console.log(`🚀 Server running on port ${PORT}`);
});
