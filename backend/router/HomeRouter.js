import express from 'express';
import { home, home2, home3 } from '../controller/HomeController';

const router = express.Router();

router.get('/', home);
router.get('/home2', home2);
router.get('/home3', home3);

export default router;
