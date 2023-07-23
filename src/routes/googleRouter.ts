import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();

router.post('/userinfo', (req: Request, res: Response) => {
	axios
		.get('https://www.googleapis.com/oauth2/v3/userinfo', {
			headers: {
				Authorization: `Bearer ${req.body.googleAccessToken}`,
			},
		})
		.then((res) => {
			return {
				nickname: res.data.name,
				profile_image_url: res.data.picture,
			};
		})
		.then((data) => {
			res.status(200).json({ data: data });
		})
		.catch((error) => console.log(error));
});

router.delete('/token', (req: Request, res: Response) => {
	axios
		.post(req.body.accessTokkenRevokeURL)
		.then((response) => {
			if (response.status === 200) {
				res.status(200).json({ message: 'token_revoked' });
			}
		})
		.catch((error) => console.log(error));
});

export default router;
