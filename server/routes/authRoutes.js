import express from 'express'
import {register,login,logout} from '../controllers/authController.js'
import userModel from '../models/userModel.js'

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;
