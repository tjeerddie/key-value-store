import mongoose from 'mongoose';

const PairSchema = new mongoose.Schema({
	key: String,
	value: String,
});

const Pair = mongoose.model('Pair', PairSchema);

const createPair = (pair) => {
	const newPair = new Pair(pair);

	newPair.save((error) => {
		if (error) {
			console.log(error);
			return false;
		}
		return true;
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
