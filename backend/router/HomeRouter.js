import express from 'express';
import { home } from '../controller/HomeController';

const router = express.Router();

router.get('/', home);

export default router;
