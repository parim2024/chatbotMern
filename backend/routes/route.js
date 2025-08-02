import express from 'express';
//import passport from 'passport';
import '../config/passportConfig.js';
//import multer from 'multer';
import cors from 'cors';

// Controllers
import { 
  userSignup, 
  userLogin, 
  getUsers, 
  deleteUser, 
  updateUser, 
  getUserDetails 
} from '../controller/user-controller.js';

import { 
  create_journal, 
  getPostsByUsername, 
  update_journal, 
  delete_journal,
  getJournalById 
} from '../controller/journal-controller.js';

import { 
  getAnonymousPosts, 
  createAnonymousPost 
} from '../controller/anonymous-controller.js';

import { 
  createMood, 
  getMoods 
} from '../controller/mood-controller.js'; 



const router = express.Router();
router.use(cors());

// ---------- USER ROUTES ----------
router.post('/signup', upload.single('profilePicture'), userSignup);
router.post('/login', userLogin);
router.get('/users', getUsers);
router.get('/:username/getuserdetails', getUserDetails);
router.delete('/delete-user/:username', deleteUser);
router.patch('/:username/update-user', updateUser);

// ---------- ANONYMOUS POST ROUTES ----------
router.get('/anonymousPosts', getAnonymousPosts);
router.post('/createAnonymousPosts', createAnonymousPost);

// ---------- JOURNAL ROUTES ----------
router.post('/:username', upload1.single('coverPicture'), create_journal);
router.get('/:username/journals', getPostsByUsername);
router.get('/:username/:id', getJournalById);
router.put('/journals/:username/:id', update_journal);
router.delete('/journal-delete/:username/:id', delete_journal);

// ---------- MOOD ROUTES ----------
router.get('/api/moods/:username', getMoods);
router.post('/api/moods/:username', createMood);

export default router;
