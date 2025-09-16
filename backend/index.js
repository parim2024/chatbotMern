import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import Connection from './database/db.js';

// Import routes
import router from './routes/user-routes.js';
import journalRouter from './routes/journal-routes.js';
import anonymousRouter from './routes/anonymous-routes.js';
import moodRouter from './routes/mood-routes.js';
import chatRouter from "./routes/chatRoutes.js";

const app = express();

// ✅ Allowed origins list
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:8080",
  "http://localhost:5173"
];

// ✅ CORS config (single, clean version)
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("CORS blocked origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cookie",
      "X-Requested-With",
      "Accept",
      "Origin",
    ],
    exposedHeaders: ["Set-Cookie"],
    optionsSuccessStatus: 200,
  })
);

// Other middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// Port
const PORT = process.env.PORT || 8080;

// Default route
app.get("/", (req, res) => {
  res.json({
    message: `Server is running on port ${PORT}`,
  });
});

// Mount routes
app.use('/api/v1/user', router);
app.use('/api/v1/journal', journalRouter);
app.use('/api/v1/anonymous', anonymousRouter);
app.use('/api/v1/moods', moodRouter);
app.use("/api/v1/chat", chatRouter);

// Start server
const startServer = async () => {
  try {
    await Connection();
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
};

startServer();
