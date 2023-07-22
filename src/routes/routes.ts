import { Router } from 'express';
import pingpongRouter from './pingpongRouter';
import kakaoRouter from './kakaoRouter';
import naverRouter from './naverRouter';
import googleRouter from './googleRouter';

const router = Router();

router.use('/ping', pingpongRouter);
router.use('/kakao', kakaoRouter);
router.use('/naver', naverRouter);
router.use('/google', googleRouter);

export default router;
