import socketio from 'socket.io';

export default (server) => {
	const io = socketio.listen(server);
	console.log('Started listening!');

	io.on('connection', (socket) => {
		console.log('a user connected');

		socket.on('newPair', (pair) => {
			console.log('create pair', pair);
			if (!pair.key || pair.value) {
				return;
			}

			console.log('do creation');
		});

		socket.on('disconnect', () => {
			console.log('user disconnected');
		});
	});

	return io;
};
