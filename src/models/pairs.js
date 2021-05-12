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

const getPair = key => Pair.find({ key });

export {
	createPair,
	getPair,
};
