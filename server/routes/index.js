import {Router} from 'express';
import offerRoute from './offerRoutes.js';
import userRoute from './userRoutes.js';

const router = new Router();
router.use('/', offerRoute);
router.use('/', userRoute);

export default router;