import { getPair } from '@src/models/pairs';

const routes = (route) => {
	route.get('/pairs/:key', (req, res) => {
		const { key } = req.params;
		const pair = getPair(key);
		console.log(pair);
		res.send(req.params);
	});
};

export default routes;
