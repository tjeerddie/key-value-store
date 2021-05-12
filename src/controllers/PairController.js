import { getPair } from '@src/models/pairs';

const PairController = {
	getByKey: async (req, res) => {
		const { key } = req.params;
		const pair = await getPair(key);

		if (!pair) {
			return res.json({ detail: `pair not found with key: ${key}` });
		}
		return res.json(pair);
	},
};

export default PairController;
