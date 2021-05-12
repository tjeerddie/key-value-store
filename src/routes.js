import PairController from '@src/controllers/PairController';

const routes = (route) => {
	route.get('/', (req, res) => {
		res.sendFile(`${__dirname}/client/index.html`);
	});
	route.get('/pairs/:key', PairController.getByKey);
};

export default routes;
