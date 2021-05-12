import mongoose from 'mongoose';

const PairSchema = new mongoose.Schema({
	key: String,
	value: String,
});

const Pair = mongoose.model('Pair', PairSchema);

const getPair = key => Pair.findOne({ key });

const setPair = async (reqPair) => {
	let pair = await getPair(reqPair.key);
	if (pair) {
		pair.value = reqPair.value;
	} else {
		pair = new Pair(reqPair);
	}

	pair.save((error) => {
		if (error) {
			console.log(error);
			return false;
		}
		return true;
	});
};

export {
	setPair,
	getPair,
};
