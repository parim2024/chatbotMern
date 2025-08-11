import express from 'express';
import { createMood, getMoods } from '../controller/ moodController.js'; 

const moodRouter = express.Router();

// Get all moods of a user
moodRouter.get('/:username', getMoods);

// Create a new mood entry for a user
moodRouter.post('/:username', createMood);

export default moodRouter;
