import { Router, Request, Response } from 'express';
import axios from 'axios';
import { KakaoUserInfo } from '../interfaces';

const router = Router();

router.post('/userinfo', (req: Request, res: Response) => {
	axios
		.get('https://kapi.kakao.com/v2/user/me', {
			headers: {
				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
				Authorization: `Bearer ${req.body.accessToken}`,
			},
		})
		.then(({ data }) => {
			const kakaoUserInfo: KakaoUserInfo = {
				nickname: data.kakao_account.profile.nickname,
				profile_image_url: data.kakao_account.profile?.profile_image_url,
				birthday: data.kakao_account?.birthday,
				email: data.kakao_account?.email,
			};
			res.status(200).json({ kakaoUserInfo });
		})
		.catch((error) => {
			console.error(error);
		});
});

router.post('/unlink', (req: Request, res: Response) => {
	axios
		.post('https://kapi.kakao.com/v1/user/unlink', null, {
			headers: {
				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
				Authorization: `Bearer ${req.body.accessToken}`,
			},
		})
		.then(({ data }) => {
			if (data.id) {
				res.status(200).json({ message: 'unlinked' });
			}
		})
		.catch((error) => {
			console.error(error);
		});
});

export default router;
