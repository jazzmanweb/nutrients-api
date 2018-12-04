import {App} from './src/app';

const port = normalizePort(process.env.PORT || 3000);
const exp = new App().app;
exp.set('port', port);
exp.listen(port, () => console.log(`App is listening on ${port}`));

function normalizePort(val: number | string): number | string | boolean {
	const port: number = typeof val === 'string' ? parseInt(val, 10) : val;
	if (isNaN(port)) {
		return val;
	} else if (port >= 0) {
		return port;
	} else {
		return false;
	}
}
