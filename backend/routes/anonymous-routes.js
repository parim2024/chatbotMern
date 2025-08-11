import express from 'express';
import { 
  getAnonymousPosts, 
  createAnonymousPost 
} from '../controller/anonymous-controller.js';

const anonymousRouter = express.Router();

// Get all anonymous posts
anonymousRouter.get('/', getAnonymousPosts);

// Create a new anonymous post
anonymousRouter.post('/', createAnonymousPost);

export default anonymousRouter;
