import express from 'express';
import { userSignup, userLogin, getUsers, deleteUser, updateUser, getUserDetails } from '../controller/user-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/', getUsers);
router.get('/:username', getUserDetails);
router.delete('/:username', deleteUser);
router.patch('/:username', updateUser);

export default router;
