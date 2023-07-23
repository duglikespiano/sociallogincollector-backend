import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();

router.post('/tokenanduserinfo', (req: Request, res: Response) => {
	const { naverAccessTokenRequestURLWithCode, headers } = req.body;
	let naverAccessToken: string;
	axios
		.get(naverAccessTokenRequestURLWithCode, headers)
		.then((data) => data.data.access_token)
		.then((token) => {
			naverAccessToken = token;
			axios
				.get('https://openapi.naver.com/v1/nid/me', {
					headers: { Authorization: `Bearer ${naverAccessToken}` },
				})
				.then((data) => {
					res.status(200).json({ data: data.data, naverAccessToken });
				});
		})
		.catch((error) => {
			console.error(error);
		});
});

router.post('/userinfo', (req: Request, res: Response) => {
	const { naverAccessToken } = req.body;
	axios
		.get('https://openapi.naver.com/v1/nid/me', {
			headers: { Authorization: `Bearer ${naverAccessToken}` },
		})
		.then((data) => {
			res.status(200).json({ data: data.data, naverAccessToken });
		})
		.catch((error) => {
			console.error(error);
		});
});

router.delete('/token', (req: Request, res: Response) => {
	const { naverAccessTokenRemoveURL } = req.body;
	axios
		.get(naverAccessTokenRemoveURL)
		.then((data) => {
			console.log(data.data);
			if (data.data.result === 'success') {
				res.status(200).json({ message: 'done' });
			}
		})
		.catch((error) => {
			console.error(error);
		});
});

export default router;
