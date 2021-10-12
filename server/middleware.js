import helmet from "helmet";
import path from "path";

export const configuredHelmet = () =>
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'", "guarded-dusk-77491.herokuapp.com", "ft.com"],
				objectSrc: ["'none'"],
				scriptSrc: ["'self'", "unpkg.com", "polyfill.io", "ft.com"],
				styleSrc: ["'self'", "https: 'unsafe-inline'", "ft.com"],
				imgSrc: [
					"'self'",
					"https: 'unsafe-inline'",
					"ft.com",
					"http://*",
					"https://*",
				],
				fontSrc: [
					"'self'",
					"https: 'unsafe-inline'",
					"ft.com",
					"http://*",
					"https://*",
				],
				upgradeInsecureRequests: [],
			},
		},
	});

export const httpsOnly = () => (req, res, next) => {
	if (!req.secure) {
		return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
	}
	next();
};

export const logErrors = () => (err, _, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	console.error(err);
	res.sendStatus(500);
};

export const pushStateRouting = (apiRoot, staticDir) => (req, res, next) => {
	if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
		return res.sendFile(path.join(staticDir, "index.html"));
	}
	next();
};
