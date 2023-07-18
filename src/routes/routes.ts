import { Router } from 'express';
import pingpongRouter from './pingpongRouter';
import kakaoRouter from './kakaoRouter';

const router = Router();

router.use('/ping', pingpongRouter);
router.use('/kakao', kakaoRouter);

export default router;
