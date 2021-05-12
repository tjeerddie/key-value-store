import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

// import socket from '@src/sockets';
import routes from '@src/routes';
import { handleError } from '@src/middlewares';
import { PORT, DATABASE_URL } from '@src/env';

const app = express();
const server = new http.Server(app);
const port = PORT || 5000;
const databaseUrl = DATABASE_URL || 'localhost';

mongoose.connect(`mongodb://${databaseUrl}/pairs`, { useNewUrlParser: true });

// socket connections.
// socket(server);

// API endpoints.
routes(app);

app.use((err, _req, res) => {
	handleError(err, res);
});

const listener = server.listen(port, () => {
	console.log(`Your app is listening on port ${listener.address().port}`);
	console.log(`url: http://${listener.address().port}`);
});
