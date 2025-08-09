// 1️⃣ Imports at the top
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';
import conversationRoute from './routes/conversation.route.js';
import messageRoute from './routes/message.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

// 2️⃣ Create app and load .env
const app = express();
dotenv.config(); // load .env variables here

// 3️⃣ Connect to MongoDB — PLACE THE CONSOLE.LOG HERE
mongoose.set('strictQuery', true);
const connect = async () => {
  try {
    // ✅ Place this here to debug .env loading
    console.log("MONGO_URL:", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.log('❌ MongoDB connection error:', error);
  }
};

// 4️⃣ Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// 5️⃣ Routes
app.use('/api/auth/', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);

// 6️⃣ Error middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).send(errorMessage);
});

// 7️⃣ Start server
app.listen(8000, () => {
  connect(); // Call connect on startup
  console.log('localserver running');
});
