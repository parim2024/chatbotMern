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

const app = express();

// Middleware
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
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
