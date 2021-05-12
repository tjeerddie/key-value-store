export const handleError = (err, res) => {
	const { statusCode, message } = err;
	res.status(statusCode).json({
		status: 'error',
		success: false,
		statusCode,
		message,
	});
};
