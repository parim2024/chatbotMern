/*import dotenv from 'dotenv';
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

// Middleware
app.use(cors({
  origin: ["https://chatbot-mern-azure.vercel.app","http://localhost:3000", "http://localhost:5173"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false
}));

const PORT = process.env.PORT || 8080;

// Default route
app.get("/", (req, res) => {
    res.json({
        message: `Server is running on port ${PORT}`
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
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Database connection failed:", err);
    }
};

startServer();
*/
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import Connection from "./database/db.js";

// Import routes
import userRoutes from "./routes/user-routes.js";
import journalRoutes from "./routes/journal-routes.js";
import anonymousRoutes from "./routes/anonymous-routes.js";
import moodRoutes from "./routes/mood-routes.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Allowed origins
const allowedOrigins = [
  "https://chatbot-mern-rho.vercel.app",   // <-- final production frontend URL
  "http://localhost:3000",                 // CRA local dev
  "http://localhost:5173"                  // Vite local dev
];

// ✅ Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Allow preflight
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// ✅ Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Server is running on port ${PORT}`,
  });
});

// ✅ API routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/journal", journalRoutes);
app.use("/api/v1/anonymous", anonymousRoutes);
app.use("/api/v1/moods", moodRoutes);
app.use("/api/v1/chat", chatRoutes);

// ✅ Start server
const startServer = async () => {
  try {
    await Connection();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
};

startServer();
