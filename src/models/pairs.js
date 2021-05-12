import mongoose from 'mongoose';

const PairSchema = new mongoose.Schema({
	key: String,
	value: String,
});

const Pair = mongoose.model('Pair', PairSchema);

const getPair = key => Pair.findOne({ key });

const createPair = async (pair) => {
	let dbPair = await getPair(pair.key);
	if (!dbPair) {
		dbPair = new Pair(pair);
	}

	dbPair.save((error) => {
		if (error) {
			console.log(error);
			return false;
		}
		return true;
	});
};

export {
	createPair,
	getPair,
};
