import { Router } from 'express';
import { getAllOffers } from '../controllers/offerController.js';

const router = new Router();

router.get('/offers', getAllOffers);

export default router;