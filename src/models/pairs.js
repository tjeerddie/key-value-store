import mongoose from 'mongoose';

const PairSchema = new mongoose.Schema({
	key: String,
	value: String,
});

const Pair = mongoose.model('Pair', PairSchema);

const createPair = ({ key, value }) => {
	const newPair = new Pair({ key, value });

	return newPair.save((error) => {
		if (error) {
			console.log(error);
			return error;
		}
		return newPair;
	});
};

const getPair = async (key) => {
	const pair = await Pair.find({ key })
		.catch(err => console.log('Caught:', err.message));
	return pair[0];
};

export {
	createPair,
	getPair,
};
