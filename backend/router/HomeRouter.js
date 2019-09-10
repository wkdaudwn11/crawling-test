import express from 'express';
import { home, home2 } from '../controller/HomeController';

const router = express.Router();

router.get('/', home);
router.get('/home2', home2);

export default router;
