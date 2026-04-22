import express from 'express';
import { register,login } from '../controller/user.js';
import { isauthenticated } from '../middleware/isauthenticated.js';

const router=express.Router();

router.route("/register").post(isauthenticated,register);

router.route("/login").post(login);

export default router;