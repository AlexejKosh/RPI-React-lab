import Router from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { addReview, getReviewsByOfferId } from '../controllers/reviewController.js';

const router = new Router();
router.get('/:offerId', getReviewsByOfferId);
router.post('/:offerId', authenticateToken, addReview);

export default router;