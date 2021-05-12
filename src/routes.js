import { getPair } from '@src/models/pairs';

const routes = (route) => {
	route.get('/', (req, res) => {
		res.sendFile(`${__dirname}/client/index.html`);
	});
	route.get('/pairs/:key', (req, res) => {
		const { key } = req.params;
		const pair = getPair(key);
		console.log(pair);
		res.send(req.params);
	});
};

export default routes;
