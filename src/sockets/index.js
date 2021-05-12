import socketio from 'socket.io';
import { setPair } from '@src/models/pairs';

export default (server) => {
	const io = socketio(server);
	console.log('Started listening!');

	io.on('connection', (socket) => {
		console.log('user connected');

		socket.on('setPair', (pair) => {
			if (!pair.key) {
				socket.emit('pairMsg', {
					msg: 'key is missing',
				});
				return;
			}
			if (!pair.value) {
				socket.emit('pairMsg', {
					msg: 'value is missing',
				});
				return;
			}

			const success = setPair(pair);
			if (!success) {
				socket.emit('pairMsg', {
					msg: 'something went wrong',
				});
			}
			console.log('pair created', pair);
			socket.emit('pairMsg', {
				msg: 'pair successfully created',
			});
		});

		socket.on('disconnect', () => {
			console.log('user disconnected');
		});
	});

	return io;
};
