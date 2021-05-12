import { getPair } from '@src/models/pairs';

const routes = (route) => {
	route.get('/', (req, res) => {
		res.sendFile(`${__dirname}/client/index.html`);
	});
	route.get('/pairs/:key', async (req, res) => {
		const { key } = req.params;
		const pairs = await getPair(key);

		if (pairs) {
			res.send({ detail: `pair not found with key: ${key}` });
		}
		res.send(pairs[0]);
	});
};

export default routes;
