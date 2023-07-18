import http from 'http';
import { app } from './app';
import { backendServerPort } from './env';

const backendServer = http.createServer(app);

export const backendServerStart = () => {
	backendServer.listen(backendServerPort, () => {
		if (!backendServerPort) {
			throw new Error('PORT INVALID');
		} else {
			console.log(
				`Ready to roll out!\nBackend server is ready on port ${backendServerPort}!`
			);
		}
	});
};
