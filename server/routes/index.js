import {Router} from 'express';
import offerRoute from './offerRoutes.js';

const router = new Router();
router.use('/', offerRoute);

export default router;